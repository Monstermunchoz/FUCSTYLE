/* POST /api/order : enregistre une commande payée.
   Les prix sont recalculés ici à partir du catalogue, jamais repris du navigateur. */
import { redis, send, readBody, noDb, getSite, getList, setList, pushToAdmin } from './_lib.js';

const r2 = (n) => Math.round(n * 100) / 100;
function live(r) { if (!r || !r.active) return false; const t = Date.now(); if (r.start && t < +new Date(r.start)) return false; if (r.end && t > +new Date(r.end + 'T23:59:59')) return false; return true; }
function applies(r, p) { if (!r.scope || r.scope === 'all') return true; if (r.scope === 'category') return p.category === r.target; if (r.scope === 'type') return (p.type || '').toLowerCase() === String(r.target || '').toLowerCase(); if (r.scope === 'product') return p.id === r.target; return false; }
function priceOf(d, p) { let best = +p.price; (d.promotions || []).filter(live).forEach((r) => { if (!applies(r, p)) return; const np = r.type === 'percent' ? p.price * (1 - r.value / 100) : Math.max(0, p.price - r.value); if (np < best) best = np; }); return r2(best); }
function zoneFor(d, country) { const zs = (d.shipping && d.shipping.zones) || []; return zs.find((z) => z.countries.includes(country)) || zs[0] || { price: 0, freeFrom: 0, name: '' }; }

export default async function handler(req, res) {
  if (!redis) return noDb(res);
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  const b = await readBody(req);
  const d = await getSite();
  if (!d) return send(res, 503, { error: 'empty' });
  const c = b.customer || {};
  if (!c.email || !c.first || !c.last || !c.address || !c.zip || !c.city) return send(res, 400, { error: 'customer' });
  const items = [];
  for (const l of b.lines || []) {
    const p = d.products.find((x) => x.id === l.productId && x.status === 'publie');
    const qty = Math.max(1, Math.min(20, l.qty | 0));
    if (!p) return send(res, 400, { error: 'product' });
    const v = p.variants && p.variants.length ? p.variants.find((x) => x.key === l.variantKey) : null;
    const stock = v ? +v.stock : +p.stock;
    if (!p.preorder && stock < qty) return send(res, 409, { error: 'stock', product: p.name });
    items.push({ p, v, qty, unit: priceOf(d, p) });
  }
  if (!items.length) return send(res, 400, { error: 'empty-cart' });
  const subtotal = r2(items.reduce((s, i) => s + i.unit * i.qty, 0));
  let discount = 0, codeNote = '';
  if (b.code) {
    const code = (d.promos || []).find((x) => x.code === String(b.code).toUpperCase() && live(Object.assign({}, x, { active: x.active })));
    if (code) { const base = items.filter((i) => applies(code, i.p)).reduce((s, i) => s + i.unit * i.qty, 0); discount = r2(code.type === 'percent' ? base * code.value / 100 : Math.min(code.value, base)); code.uses = (code.uses || 0) + 1; codeNote = 'Code ' + code.code; }
  }
  const z = zoneFor(d, c.country);
  const shipping = z.freeFrom > 0 && subtotal - discount >= z.freeFrom ? 0 : +z.price || 0;
  const total = r2(subtotal - discount + shipping);
  if (b.paidTotal != null && Math.abs(+b.paidTotal - total) > 0.05) return send(res, 409, { error: 'total', expected: total });

  const orders = await getList('orders');
  const nums = orders.map((o) => +String(o.id).replace(/\D/g, '')).filter(Boolean);
  const order = {
    id: 'FS-' + ((nums.length ? Math.max(...nums) : 1041) + 1), demo: false, date: new Date().toISOString(),
    customer: { first: c.first, last: c.last, email: c.email, phone: c.phone || '', address: c.address, zip: c.zip, city: c.city, country: c.country || '' },
    items: items.map((i) => ({ productId: i.p.id, name: i.p.name, variant: i.v ? [i.v.size, i.v.color].filter(Boolean).join(' / ') : '', variantKey: i.v ? i.v.key : '', qty: i.qty, price: i.unit, image: (i.p.images || [])[0] || '' })),
    subtotal, shipping, discount, total, status: 'payee', payment: b.payment || 'PayPal', paypalId: b.paypalId || '', tracking: '', note: codeNote, shipZone: z.name
  };
  items.forEach((i) => { if (i.v) i.v.stock = Math.max(0, i.v.stock - i.qty); else i.p.stock = Math.max(0, i.p.stock - i.qty); });
  orders.unshift(order);
  await Promise.all([setList('orders', orders), redis.set('fuc:site', d)]);
  await pushToAdmin({ title: 'Nouvelle commande ' + order.id, body: order.customer.first + ' — ' + total.toFixed(2).replace('.', ',') + ' €', url: './#/commandes/' + order.id });
  return send(res, 200, { order });
}
