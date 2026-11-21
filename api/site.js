/* GET  /api/site  : contenu public du site
   PUT  /api/site  : (admin) enregistre tout le contenu */
import { redis, send, readBody, noDb, isAdmin, getSite, publicView, PRIVATE } from './_lib.js';

export default async function handler(req, res) {
  if (!redis) return noDb(res);
  if (req.method === 'GET') {
    const site = await getSite();
    if (!site) return send(res, 404, { error: 'empty' });
    res.setHeader('Cache-Control', 'no-store');
    return send(res, 200, publicView(site));
  }
  if (req.method === 'PUT') {
    if (!(await isAdmin(req))) return send(res, 401, { error: 'auth' });
    const body = await readBody(req);
    if (!body || !body.products || !body.site) return send(res, 400, { error: 'invalid' });
    const clean = Object.assign({}, body);
    PRIVATE.filter((k) => k !== 'settings').forEach((k) => delete clean[k]);
    if (clean.settings) clean.settings = { owner: clean.settings.owner, theme: clean.settings.theme, alertEmail: clean.settings.alertEmail };
    /* Stock : on applique seulement ce que Jeff a changé, par-dessus les ventes faites entre-temps */
    const cur = await getSite();
    const base = body.stockBase || null; delete clean.stockBase;
    const stockMap = {};
    if (cur && base) {
      const curMap = {};
      (cur.products || []).forEach((p) => { if (p.variants && p.variants.length) p.variants.forEach((v) => (curMap[p.id + '|' + v.key] = +v.stock)); else curMap[p.id] = +p.stock; });
      const merge = (k, incoming) => (k in base && k in curMap ? Math.max(0, curMap[k] + (+incoming - +base[k])) : +incoming);
      clean.products.forEach((p) => { if (p.variants && p.variants.length) p.variants.forEach((v) => (v.stock = stockMap[p.id + '|' + v.key] = merge(p.id + '|' + v.key, v.stock))); else p.stock = stockMap[p.id] = merge(p.id, p.stock); });
      /* les codes promo : on garde le compteur d'utilisations du serveur */
      (clean.promos || []).forEach((c) => { const sc = (cur.promos || []).find((x) => x.code === c.code); if (sc) c.uses = Math.max(sc.uses || 0, c.uses || 0); });
    } else clean.products.forEach((p) => { if (p.variants && p.variants.length) p.variants.forEach((v) => (stockMap[p.id + '|' + v.key] = +v.stock)); else stockMap[p.id] = +p.stock; });
    clean.savedAt = new Date().toISOString();
    await redis.set('fuc:site', clean);
    return send(res, 200, { ok: true, savedAt: clean.savedAt, stock: stockMap });
  }
  return send(res, 405, { error: 'method' });
}
