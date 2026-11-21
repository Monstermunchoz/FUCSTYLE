/* FUCSTYLE — couche de données partagée entre le site et le tableau de bord.
   Les données vivent dans le navigateur (localStorage). Pour la mise en ligne,
   ce fichier est le seul à brancher sur une vraie API (voir LISEZ-MOI.md). */
(function () {
  const KEY = 'fucstyle:data';
  const CART = 'fucstyle:cart';
  const clone = (o) => JSON.parse(JSON.stringify(o));

  function seedDemoOrders(products) {
    const names = [
      ['Inès', 'Benali', 'Villeurbanne'], ['Mathis', 'Rey', 'Lyon 7e'], ['Sofiane', 'Kaci', 'Vaulx-en-Velin'],
      ['Lucie', 'Morel', 'Grenoble'], ['Karim', 'Haddad', 'Lyon 3e'], ['Jade', 'Fontaine', 'Saint-Étienne'],
      ['Yanis', 'Mercier', 'Vénissieux'], ['Camille', 'Garnier', 'Paris 18e'], ['Nolan', 'Petit', 'Bron'],
      ['Sarah', 'Lopez', 'Marseille'], ['Bilal', 'Amrani', 'Lyon 8e'], ['Emma', 'Roux', 'Annecy'],
      ['Hugo', 'Blanc', 'Caluire'], ['Nadia', 'Cherif', 'Rillieux'], ['Tom', 'Durand', 'Lyon 1er']
    ];
    const statuses = ['livree', 'livree', 'expediee', 'expediee', 'preparation', 'payee', 'payee'];
    const orders = [];
    const now = Date.now();
    let n = 1042;
    for (let i = 0; i < 38; i++) {
      const who = names[i % names.length];
      const items = [];
      const count = 1 + (i % 3 === 0 ? 1 : 0) + (i % 7 === 0 ? 1 : 0);
      for (let k = 0; k < count; k++) {
        const p = products[(i * 3 + k * 2) % products.length];
        const v = p.variants.length ? p.variants[(i + k) % p.variants.length] : null;
        items.push({ productId: p.id, name: p.name, variant: v ? [v.size, v.color].filter(Boolean).join(' / ') : '', variantKey: v ? v.key : '', qty: 1 + (k === 0 && i % 5 === 0 ? 1 : 0), price: p.price, image: p.images[0] });
      }
      const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
      const shipping = subtotal >= 60 ? 0 : 5.9;
      const daysAgo = Math.floor((i * 37) % 60) + (i % 4);
      const status = i < 4 ? 'payee' : statuses[i % statuses.length];
      orders.push({
        id: 'FS-' + (n++), demo: true,
        date: new Date(now - daysAgo * 86400000 - (i * 3600000) % 86400000).toISOString(),
        customer: { first: who[0], last: who[1], email: (who[0] + '.' + who[1]).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') + '@exemple.fr', phone: '06 00 00 00 ' + String(10 + i).slice(-2), address: '12 rue de la République', zip: '69000', city: who[2], country: 'France' },
        items, subtotal, shipping, discount: 0, total: +(subtotal + shipping).toFixed(2),
        status, payment: i % 3 === 0 ? 'PayPal' : 'Carte bancaire', tracking: status === 'expediee' || status === 'livree' ? '6A' + (1000000000 + i * 7919) : '', note: ''
      });
    }
    return orders.sort((a, b) => b.date.localeCompare(a.date));
  }

  function fresh() {
    const d = clone(window.FUC_DEFAULTS);
    d.orders = seedDemoOrders(d.products);
    return d;
  }

  const Store = {
    load() {
      if (window.__FUC_PREVIEW) return window.__FUC_PREVIEW;
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) {
          const d = JSON.parse(raw);
          if (d && d.version === window.FUC_DEFAULTS.version) return d;
        }
      } catch (e) { /* stockage indisponible : on part des valeurs par défaut */ }
      const d = fresh();
      Store.save(d);
      return d;
    },
    save(d) {
      if (window.__FUC_PREVIEW) return true;
      try { localStorage.setItem(KEY, JSON.stringify(d)); return true; }
      catch (e) { console.warn('Sauvegarde impossible', e); return false; }
    },
    reset() { try { localStorage.removeItem(KEY); } catch (e) {} return Store.load(); },
    fresh,

    /* ---------- produits ---------- */
    stockOf(p, key) {
      if (p.variants && p.variants.length) {
        if (key) { const v = p.variants.find((x) => x.key === key); return v ? +v.stock : 0; }
        return p.variants.reduce((s, v) => s + (+v.stock || 0), 0);
      }
      return +p.stock || 0;
    },
    stockState(p) {
      const s = Store.stockOf(p);
      if (s <= 0) return 'out';
      if (s <= (p.lowStock || 0)) return 'low';
      return 'ok';
    },
    visibleProducts(d) { return d.products.filter((p) => p.status === 'publie'); },

    /* ---------- panier ---------- */
    cart() { try { return JSON.parse(localStorage.getItem(CART)) || []; } catch (e) { return []; } },
    setCart(c) { try { localStorage.setItem(CART, JSON.stringify(c)); } catch (e) {} document.dispatchEvent(new CustomEvent('cart:change')); },
    addToCart(productId, variantKey, qty) {
      const c = Store.cart();
      const line = c.find((l) => l.productId === productId && (l.variantKey || '') === (variantKey || ''));
      if (line) line.qty += qty; else c.push({ productId, variantKey: variantKey || '', qty });
      Store.setCart(c);
    },
    cartLines(d) {
      return Store.cart().map((l) => {
        const p = d.products.find((x) => x.id === l.productId);
        if (!p) return null;
        const v = p.variants.find((x) => x.key === l.variantKey);
        const pr = Store.priceOf(d, p);
        return { ...l, product: p, unit: pr.price, was: pr.was, variantLabel: v ? [v.size, v.color].filter(Boolean).join(' / ') : '', lineTotal: +(pr.price * l.qty).toFixed(2) };
      }).filter(Boolean);
    },

    /* ---------- commandes ---------- */
    placeOrder(d, customer, lines, promo) {
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      const discount = promo ? Store.codeDiscount(d, promo, lines) : 0;
      const shipping = Store.shippingFor(d, customer.country, subtotal - discount).price;
      const nums = d.orders.map((o) => +o.id.replace(/\D/g, '')).filter(Boolean);
      const id = 'FS-' + ((nums.length ? Math.max(...nums) : 1041) + 1);
      const order = {
        id, demo: false, date: new Date().toISOString(), customer,
        items: lines.map((l) => ({ productId: l.productId, name: l.product.name, variant: l.variantLabel, variantKey: l.variantKey, qty: l.qty, price: l.unit, image: l.product.images[0] })),
        subtotal, shipping, discount: +discount.toFixed(2), total: +(subtotal - discount + shipping).toFixed(2),
        status: 'payee', payment: 'Carte bancaire', tracking: '', note: promo ? 'Code ' + promo.code : ''
      };
      lines.forEach((l) => {
        const p = d.products.find((x) => x.id === l.productId);
        if (p.variants.length) { const v = p.variants.find((x) => x.key === l.variantKey); if (v) v.stock = Math.max(0, v.stock - l.qty); }
        else p.stock = Math.max(0, p.stock - l.qty);
      });
      if (promo) { const pr = d.promos.find((x) => x.code === promo.code); if (pr) pr.uses++; }
      d.orders.unshift(order);
      Store.save(d);
      Store.setCart([]);
      return order;
    },

    /* ---------- livraison par zone ---------- */
    zones(d) {
      const s = d.shipping || {};
      if (s.zones && s.zones.length) return s.zones;
      return [{ id: 'fr', name: 'France', countries: s.countries || ['France'], price: s.flat || 0, freeFrom: s.freeFrom || 0, delay: '' }];
    },
    countries(d) { return [...new Set(Store.zones(d).flatMap((z) => z.countries))]; },
    shippingFor(d, country, sub) {
      const zs = Store.zones(d);
      const z = zs.find((x) => x.countries.includes(country)) || zs[0];
      const free = z.freeFrom > 0 && sub >= z.freeFrom;
      return { zone: z, price: free ? 0 : +z.price || 0, free, left: z.freeFrom > 0 ? Math.max(0, z.freeFrom - sub) : null };
    },

    /* ---------- promotions ----------
       promotions : remises automatiques (tout le site, une catégorie, un type, un produit)
       promos     : codes promo saisis au paiement, avec la même portée */
    applies(rule, p) {
      if (!rule) return false;
      if (!rule.scope || rule.scope === 'all') return true;
      if (rule.scope === 'category') return p.category === rule.target;
      if (rule.scope === 'type') return (p.type || '').toLowerCase() === String(rule.target || '').toLowerCase();
      if (rule.scope === 'product' || rule.scope === 'products') return Array.isArray(rule.target) ? rule.target.includes(p.id) : p.id === rule.target;
      return false;
    },
    live(rule) {
      if (!rule || !rule.active) return false;
      const t = Date.now();
      if (rule.start && t < +new Date(rule.start)) return false;
      if (rule.end && t > +new Date(rule.end + 'T23:59:59')) return false;
      return true;
    },
    priceOf(d, p) {
      const base = +p.price || 0;
      let best = null, bestPrice = base;
      (d.promotions || []).filter(Store.live).forEach((r) => {
        if (!Store.applies(r, p)) return;
        const np = r.type === 'percent' ? base * (1 - r.value / 100) : Math.max(0, base - r.value);
        if (np < bestPrice) { bestPrice = np; best = r; }
      });
      const price = Math.round(bestPrice * 100) / 100;
      const was = best ? base : (p.compareAt && p.compareAt > base ? p.compareAt : null);
      return { price, was, rule: best, label: best ? (best.type === 'percent' ? '−' + best.value + ' %' : '−' + Store.money(best.value)) : (was ? 'Promo' : '') };
    },
    sitePromo(d) { return (d.promotions || []).filter(Store.live).find((r) => r.banner); },
    codeDiscount(d, code, lines) {
      const elig = lines.filter((l) => Store.applies(code, l.product));
      const base = elig.reduce((s, l) => s + l.lineTotal, 0);
      if (!base) return 0;
      const v = code.type === 'percent' ? base * code.value / 100 : Math.min(code.value, base);
      return Math.round(v * 100) / 100;
    },

    /* ---------- réglage des photos (cadrage, zoom) ---------- */
    imgMeta(d, url) { return (d.imgMeta || {})[url] || null; },
    imgStyle(d, url) {
      const m = Store.imgMeta(d, url);
      if (!m) return '';
      return ` style="object-position:${+m.x || 50}% ${+m.y || 50}%;${m.fit === 'contain' ? 'object-fit:contain;' : ''}${m.z > 1 ? `transform:scale(${m.z});transform-origin:${m.x}% ${m.y}%;` : ''}"${m.z > 1 ? ' data-zoom' : ''}${m.cut ? ' data-cut="1"' : ''}`;
    },

    /* ---------- outils ---------- */
    money(n) { return (+n || 0).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }); },
    date(iso, opts) { return new Date(iso).toLocaleDateString('fr-FR', opts || { day: 'numeric', month: 'long', year: 'numeric' }); },
    esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
    slugify(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item'; },
    uid(prefix) { return (prefix || 'id') + '-' + Math.random().toString(36).slice(2, 8); },
    paras(text) { return Store.esc(text).split(/\n{2,}/).map((p) => '<p>' + p.replace(/\n/g, '<br>') + '</p>').join(''); },

    /* Markdown léger : ## titres, listes, **gras**, *italique*, [liens](url) */
    md(src) {
      const inline = (t) => Store.esc(t)
        .replace(/!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|[a-z0-9\-.]+\.html[^)\s]*)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      const out = [];
      let list = null;
      String(src || '').split('\n').forEach((line) => {
        const l = line.trim();
        const ol = l.match(/^\d+\.\s+(.*)/);
        if (/^- /.test(l) || ol) { const tag = ol ? 'ol' : 'ul'; if (list && list.tag !== tag) { out.push('<' + list.tag + '>' + list.join('') + '</' + list.tag + '>'); list = null; } if (!list) { list = []; list.tag = tag; } list.push('<li>' + inline(ol ? ol[1] : l.slice(2)) + '</li>'); return; }
        if (list) { out.push('<' + list.tag + '>' + list.join('') + '</' + list.tag + '>'); list = null; }
        if (!l) return;
        const fig = l.match(/^!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^)\s]+)\)$/);
        if (fig) { out.push('<figure><img src="' + Store.esc(fig[2]) + '" alt="' + Store.esc(fig[1]) + '" loading="lazy">' + (fig[1] ? '<figcaption>' + Store.esc(fig[1]) + '</figcaption>' : '') + '</figure>'); return; }
        if (/^### /.test(l)) out.push('<h3>' + inline(l.slice(4)) + '</h3>');
        else if (/^## /.test(l)) out.push('<h2>' + inline(l.slice(3)) + '</h2>');
        else if (/^> /.test(l)) out.push('<blockquote>' + inline(l.slice(2)) + '</blockquote>');
        else out.push('<p>' + inline(l) + '</p>');
      });
      if (list) out.push('<' + list.tag + '>' + list.join('') + '</' + list.tag + '>');
      return out.join('\n');
    }
  };

  /* Typo française : la ponctuation reste collée au mot (espace insécable fine),
     elle ne part jamais seule à la ligne. */
  Store.typo = function (root) {
    if (!root || !document.createTreeWalker) return;
    const skip = 'textarea,script,style,input,option,title,code,pre';
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (/[  ]([?!:;»%€])|«[  ]|[  ](—|–)[  ]/.test(n.nodeValue) && !(n.parentNode && n.parentNode.closest && n.parentNode.closest(skip)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT)
    });
    const list = []; while (w.nextNode()) list.push(w.currentNode);
    list.forEach((n) => {
      n.nodeValue = n.nodeValue
        .replace(/[  ]+([?!;»%])/g, ' $1')
        .replace(/[  ]+(:)/g, ' $1')
        .replace(/[  ]+([0-9]*[,.]?[0-9]+)?[  ]*€/g, (m) => m.replace(/[  ]+€/, ' €'))
        .replace(/«[  ]+/g, '« ')
        .replace(/[  ](—|–)[  ]/g, ' $1 ');
    });
  };

  /* ---------- Base de données en ligne (Vercel : Upstash Redis + Blob) ----------
     Si l'API répond, le site lit et écrit dans la base. Sinon il reste en mode local. */
  Store.remote = false;
  Store.base = (document.currentScript && document.currentScript.src) ? new URL('../../', document.currentScript.src).href : '/';
  Store.api = async function (path, opts) {
    opts = opts || {};
    const headers = { 'Content-Type': 'application/json' };
    try { const t = sessionStorage.getItem('fucstyle:token'); if (t) headers['x-admin-token'] = t; } catch (e) {}
    const r = await fetch(Store.base + 'api/' + path, { method: opts.method || 'GET', headers, body: opts.body ? JSON.stringify(opts.body) : undefined, cache: 'no-store' });
    let data = null; try { data = await r.json(); } catch (e) {}
    return { ok: r.ok, status: r.status, data };
  };
  /* complète les promos déjà en base avec les nouveaux réglages par défaut (texte du bandeau…) */
  /* couleurs du bandeau (fond, texte, goutte) avec les anciennes promos */
  Store.bannerColors = function (p) {
    const base = p && p.bannerStyle === 'noir' ? ['#0a0a0a', '#ffffff', '#e0001f'] : ['#cdc8be', '#0a0a0a', '#c4001d'];
    return { bannerBg: (p && p.bannerBg) || base[0], bannerFg: (p && p.bannerFg) || base[1], bannerDrop: (p && p.bannerDrop) || base[2] };
  };
  Store.fill = function (d) {
    const ds = window.FUC_DEFAULTS.site || {}; d.site = d.site || {};
    if ((d.site.clipsV || 0) < 2) { const cl = d.site.clips = d.site.clips || []; if (!cl.some((x) => x.id === 'P4RaRQGWOdg')) cl.splice(Math.min(1, cl.length), 0, { id: 'P4RaRQGWOdg', title: '69💯 Le🩸' }); d.site.clipsV = 2; }
    Object.keys(ds).forEach((k) => { if (d.site[k] === undefined) d.site[k] = JSON.parse(JSON.stringify(ds[k])); });
    const def = (window.FUC_DEFAULTS.promotions || []);
    (d.promotions || []).forEach((p) => { const o = def.find((x) => x.id === p.id); if (!o) return; if (!p.bannerText && o.bannerText) { p.bannerText = o.bannerText; if (o.name) p.name = o.name; } if (p.id === 'pr-25' && (p.bannerV || 0) < 2) { delete p.bannerStyle; Object.assign(p, { bannerBg: o.bannerBg, bannerFg: o.bannerFg, bannerDrop: o.bannerDrop, bannerV: 2 }); } });
    (d.promotions || []).forEach((p) => { if (p.id === 'pr-25' && p.bannerText === '🥷 VENDREDI NOIR 🥷 Le projet 69💯 Le🩸 fête ses 1 an : −25% sur tout le site') p.bannerText = '🥷 VENDREDI NOIR 🥷 Le projet 69💯 Le🩸 // fête ses 1 an : −25% sur tout le site'; });
    if (d.design && d.design.wall === '#b9b4aa') d.design.wall = '#cdc8be';
    if (d.design && d.design.paper === '#ebe8e1') d.design.paper = '#f3f1ec';
    return d;
  };
  /* contenu public du site depuis la base */
  Store.pull = async function () {
    if (window.__FUC_PREVIEW || location.protocol === 'file:') return null;
    try {
      const r = await Store.api('site');
      if (r.status === 503 || r.status === 404 && !r.data) return null;
      Store.remote = r.status === 200 || r.status === 404;
      if (r.status !== 200) return null;
      const d = Object.assign(JSON.parse(JSON.stringify(window.FUC_DEFAULTS)), r.data, { orders: [], messages: [], subscribers: [] });
      d.version = window.FUC_DEFAULTS.version; Store.fill(d);
      try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
      return d;
    } catch (e) { return null; }
  };
  Store.remoteOrder = async function (payload) {
    const r = await Store.api('order', { method: 'POST', body: payload });
    if (!r.ok) throw Object.assign(new Error((r.data && r.data.error) || 'order'), { info: r.data });
    return r.data.order;
  };
  Store.remoteContact = async function (payload) {
    if (!Store.remote) return false;
    const r = await Store.api('contact', { method: 'POST', body: payload });
    return r.ok;
  };

  window.Store = Store;
})();
