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
        return { ...l, product: p, variantLabel: v ? [v.size, v.color].filter(Boolean).join(' / ') : '', lineTotal: p.price * l.qty };
      }).filter(Boolean);
    },

    /* ---------- commandes ---------- */
    placeOrder(d, customer, lines, promo) {
      const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
      let discount = 0;
      if (promo) discount = promo.type === 'percent' ? subtotal * promo.value / 100 : Math.min(promo.value, subtotal);
      const shipping = subtotal - discount >= d.shipping.freeFrom ? 0 : d.shipping.flat;
      const nums = d.orders.map((o) => +o.id.replace(/\D/g, '')).filter(Boolean);
      const id = 'FS-' + ((nums.length ? Math.max(...nums) : 1041) + 1);
      const order = {
        id, demo: false, date: new Date().toISOString(), customer,
        items: lines.map((l) => ({ productId: l.productId, name: l.product.name, variant: l.variantLabel, variantKey: l.variantKey, qty: l.qty, price: l.product.price, image: l.product.images[0] })),
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
        if (/^- /.test(l)) { if (!list) { list = []; } list.push('<li>' + inline(l.slice(2)) + '</li>'); return; }
        if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; }
        if (!l) return;
        const fig = l.match(/^!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^)\s]+)\)$/);
        if (fig) { out.push('<figure><img src="' + Store.esc(fig[2]) + '" alt="' + Store.esc(fig[1]) + '" loading="lazy">' + (fig[1] ? '<figcaption>' + Store.esc(fig[1]) + '</figcaption>' : '') + '</figure>'); return; }
        if (/^### /.test(l)) out.push('<h3>' + inline(l.slice(4)) + '</h3>');
        else if (/^## /.test(l)) out.push('<h2>' + inline(l.slice(3)) + '</h2>');
        else if (/^> /.test(l)) out.push('<blockquote>' + inline(l.slice(2)) + '</blockquote>');
        else out.push('<p>' + inline(l) + '</p>');
      });
      if (list) out.push('<ul>' + list.join('') + '</ul>');
      return out.join('\n');
    }
  };

  window.Store = Store;
})();
