/* FUCSTYLE — tableau de bord (boutique, magazine, contenu du site) */
(function () {
  const S = window.Store;
  let D = S.load();
  D.settings = D.settings || { pin: '6969', owner: 'Jeff' };
  D.messages = D.messages || [];
  const esc = S.esc, money = S.money;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const root = $('#root');

  /* ---------- icônes ---------- */
  const P = {
    home: 'M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z',
    box: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
    layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
    cart: 'M5 7h14l-1.5 13h-11zM9 7a3 3 0 016 0',
    users: 'M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 19v-1a4 4 0 00-3-3.8M15 3.2a3.5 3.5 0 010 6.6',
    pen: 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4',
    layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
    disc: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 14a2 2 0 100-4 2 2 0 000 4z',
    tag: 'M3 12V3h9l9 9-9 9zM7.5 7.5h.01',
    mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
    gear: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z',
    ext: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5',
    out: 'M15 4h4a1 1 0 011 1v14a1 1 0 01-1 1h-4M10 17l5-5-5-5M15 12H4',
    plus: 'M12 5v14M5 12h14',
    search: 'M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4',
    trash: 'M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    left: 'M15 18l-6-6 6-6', right: 'M9 18l6-6-6-6',
    star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
    upload: 'M12 16V4M7 9l5-5 5 5M4 16v4h16v-4',
    menu: 'M3 7h18M3 12h18M3 17h18',
    alert: 'M12 9v4M12 17h.01M10.3 3.9L2 18a2 2 0 001.7 3h16.6a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z',
    print: 'M6 9V3h12v6M6 18H4v-7h16v7h-2M7 14h10v7H7z',
    download: 'M12 4v12M7 11l5 5 5-5M4 20h16',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
    bell: 'M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0',
    music: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z'
  };
  const I = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;

  /* ---------- outils ---------- */
  const STATUS = { payee: 'Payée', preparation: 'En préparation', expediee: 'Expédiée', livree: 'Livrée', annulee: 'Annulée', remboursee: 'Remboursée' };
  const PSTATUS = { publie: 'En ligne', brouillon: 'Brouillon', cache: 'Masqué' };
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  const pill = (cls, label) => `<span class="status s-${cls}">${esc(label)}</span>`;
  const stockPill = (p) => { const st = S.stockState(p), n = S.stockOf(p); return pill(st, st === 'out' ? (p.preorder ? 'Rupture — précommande' : 'Rupture') : st === 'low' ? n + ' — stock bas' : n + ' en stock'); };
  const fmtDate = (iso) => new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  const fmtDT = (iso) => new Date(iso).toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const countable = (o) => o.status !== 'annulee' && o.status !== 'remboursee';

  function save(msg) {
    const ok = S.save(D);
    if (!ok) toast('Sauvegarde impossible : la mémoire du navigateur est pleine. Utilise des liens d’images plutôt que des fichiers, ou supprime des photos.', true);
    else if (msg) toast(msg);
    return ok;
  }
  function toast(msg, err) {
    let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
    t.textContent = msg; t.classList.toggle('err', !!err); t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), err ? 5000 : 2400);
  }
  function confirmBox(title, text, okLabel) {
    return new Promise((res) => {
      const d = document.createElement('dialog'); d.className = 'confirm';
      d.innerHTML = `<h3>${esc(title)}</h3><p>${esc(text)}</p><div class="actions"><button class="btn" value="no">Annuler</button><button class="btn btn--blood" value="yes">${esc(okLabel || 'Confirmer')}</button></div>`;
      document.body.append(d); d.showModal();
      d.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { d.close(); d.remove(); res(b.value === 'yes'); } });
      d.addEventListener('cancel', () => { d.remove(); res(false); });
    });
  }
  function getPath(o, p) { return p.split('.').reduce((a, k) => (a == null ? a : a[k]), o); }
  function setPath(o, p, v) { const ks = p.split('.'); const last = ks.pop(); const t = ks.reduce((a, k) => (a[k] = a[k] || {}), o); t[last] = v; }
  /* lie les champs [data-k] d'un conteneur à un objet */
  function bindFields(el, obj, onChange) {
    $$('[data-k]', el).forEach((inp) => {
      const k = inp.dataset.k, v = getPath(obj, k);
      if (inp.type === 'checkbox') inp.checked = !!v;
      else inp.value = v == null ? '' : v;
      inp.addEventListener(inp.type === 'checkbox' || inp.tagName === 'SELECT' ? 'change' : 'input', () => {
        let val = inp.type === 'checkbox' ? inp.checked : inp.value;
        if (inp.dataset.num !== undefined) val = inp.value === '' ? null : +String(inp.value).replace(',', '.');
        setPath(obj, k, val); onChange && onChange(k, val);
      });
    });
  }
  /* compresse une image choisie en JPEG/PNG léger (data URL) */
  function readImage(file, max) {
    max = max || 1400;
    return new Promise((res, rej) => {
      if (!/^image\//.test(file.type)) return rej(new Error('Ce fichier n’est pas une image.'));
      const fr = new FileReader();
      fr.onload = () => {
        const img = new Image();
        img.onload = () => {
          const k = Math.min(1, max / Math.max(img.width, img.height));
          const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
          const ctx = c.getContext('2d');
          const png = file.type === 'image/png';
          if (!png) { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); }
          ctx.drawImage(img, 0, 0, c.width, c.height);
          res(c.toDataURL(png ? 'image/png' : 'image/jpeg', 0.82));
        };
        img.onerror = () => rej(new Error('Image illisible.'));
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  function download(name, text, type) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: type || 'text/plain' })); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  const csv = (rows) => '﻿' + rows.map((r) => r.map((c) => '"' + String(c == null ? '' : c).replace(/"/g, '""') + '"').join(';')).join('\n');
  function imgPicker(container, current, onPick, opts) {
    opts = opts || {};
    const shown = current && !/^(https?:|data:|\.\.\/)/.test(current) ? '../' + current : (current || '');
    container.innerHTML = `<div class="cover-pick"><img src="${esc(shown)}" alt="" data-prev>
      <div class="stack" style="gap:8px"><label class="btn btn--sm" style="width:max-content">${I('upload')} Choisir une image<input type="file" accept="image/*" hidden></label>
      <input class="input" placeholder="…ou colle un lien d’image (https://…)" value="${/^data:/.test(current || '') ? '' : esc(current || '')}" data-url></div></div>`;
    const prev = $('[data-prev]', container);
    $('input[type=file]', container).addEventListener('change', async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try { const u = await readImage(f, opts.max); prev.src = u; onPick(u); } catch (err) { toast(err.message, true); }
    });
    $('[data-url]', container).addEventListener('change', (e) => { const u = e.target.value.trim(); if (u) { prev.src = u; onPick(u); } });
  }

  /* ---------- connexion ---------- */
  function authed() { try { return sessionStorage.getItem('fucstyle:admin') === '1'; } catch (e) { return false; } }
  function loginView() {
    root.innerHTML = `<div class="login"><form class="login-box" autocomplete="off">
      <img src="${esc(D.site.logo)}" alt="Fucstyle">
      <h1 class="display">Tableau de bord</h1><p>Entre ton code pour gérer la boutique, le magazine et le site.</p>
      <label class="sr-only" for="pin">Code</label><input id="pin" type="password" inputmode="numeric" maxlength="12" placeholder="••••" autofocus>
      <button class="btn btn--blood" type="submit">Entrer</button><div class="login-err" role="alert"></div>
      <p style="margin-top:18px;font-size:13px">Code par défaut : 6969 — à changer dans Réglages.</p></form></div>`;
    $('form', root).addEventListener('submit', (e) => {
      e.preventDefault();
      if ($('#pin').value === String(D.settings.pin)) { try { sessionStorage.setItem('fucstyle:admin', '1'); } catch (er) {} shell(); route(); }
      else { $('.login-err').textContent = 'Code incorrect. Réessaie.'; $('#pin').select(); }
    });
  }

  /* ---------- squelette ---------- */
  const NAV = [
    ['Pilotage', [['#/', 'Vue d’ensemble', 'home']]],
    ['Boutique', [['#/produits', 'Produits', 'box'], ['#/stock', 'Stock', 'layers'], ['#/commandes', 'Commandes', 'cart', () => D.orders.filter((o) => o.status === 'payee').length], ['#/clients', 'Clients', 'users'], ['#/notifications', 'Notifications', 'bell'], ['#/promos', 'Codes promo', 'tag']]],
    ['Contenu', [['#/magazine', 'L’actu', 'pen'], ['#/site', 'Pages du site', 'layout'], ['#/musique', 'Musique & scène', 'music'], ['#/messages', 'Messages', 'mail', () => D.messages.filter((m) => !m.read).length]]],
    ['Compte', [['#/reglages', 'Réglages', 'gear']]]
  ];
  let dirty = false;
  function shell() {
    root.innerHTML = `<div class="app">
      <aside class="side" id="side">
        <a class="logo" href="#/"><img src="${esc(D.site.logo)}" alt="Fucstyle"><span>Tableau<br>de bord</span></a>
        <nav data-nav></nav>
        <div class="foot"><a href="../index.html" target="_blank" rel="noopener">${I('ext')} Voir le site</a><button type="button" data-logout>${I('out')} Se déconnecter</button></div>
      </aside><div class="scrim" data-scrim></div>
      <div class="main">
        <div class="topbar"><button class="btn btn--icon btn--ghost burger" type="button" data-burger aria-label="Menu">${I('menu')}</button>
          <form class="search" data-search role="search">${I('search')}<label class="sr-only" for="q">Rechercher</label><input id="q" placeholder="Rechercher un produit, une commande, un article…"></form>
          <div class="who"><span>${esc(D.settings.owner || 'Jeff')}</span><div class="avatar">${esc((D.settings.owner || 'J')[0])}</div></div></div>
        <div class="content" id="content"></div>
      </div></div>`;
    $('[data-logout]').addEventListener('click', () => { try { sessionStorage.removeItem('fucstyle:admin'); } catch (e) {} loginView(); });
    const side = $('#side'), scrim = $('[data-scrim]');
    $('[data-burger]').addEventListener('click', () => { side.classList.add('open'); scrim.classList.add('open'); });
    scrim.addEventListener('click', () => { side.classList.remove('open'); scrim.classList.remove('open'); });
    $('[data-search]').addEventListener('submit', (e) => { e.preventDefault(); location.hash = '#/recherche/' + encodeURIComponent($('#q').value.trim()); });
  }
  function drawNav() {
    const h = location.hash || '#/';
    $('[data-nav]').innerHTML = NAV.map(([g, items]) => `<div class="group">${g}</div>` + items.map(([href, label, ic, badge]) => {
      const active = href === '#/' ? (h === '#/' || h === '') : h.startsWith(href);
      const n = badge ? badge() : 0;
      return `<a class="nav-link" href="${href}"${active ? ' aria-current="page"' : ''}>${I(ic)}<span>${label}</span>${n ? `<span class="pill">${n}</span>` : ''}</a>`;
    }).join('')).join('');
    $('#side').classList.remove('open'); $('[data-scrim]').classList.remove('open');
  }

  /* ---------- routeur ---------- */
  const views = {};
  let current = null;
  function route() {
    if (!authed()) return loginView();
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/');
    const name = parts[0] || 'apercu';
    const v = views[name] || views.apercu;
    drawNav();
    const old = $('#content'); const c = old.cloneNode(false); old.replaceWith(c); window.scrollTo(0, 0);
    current = name; dirty = false;
    v(c, parts.slice(1).map(decodeURIComponent));
  }
  window.addEventListener('hashchange', (e) => {
    if (dirty && !confirm('Des modifications ne sont pas enregistrées. Quitter quand même ?')) { history.replaceState(null, '', e.oldURL.slice(e.oldURL.indexOf('#'))); return; }
    route();
  });
  window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });
  const head = (title, sub, actions) => `<div class="page-title"><div><h1 class="display">${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div>${actions ? `<div class="actions">${actions}</div>` : ''}</div>`;

  /* ================= VUE D'ENSEMBLE ================= */
  views.apercu = (c) => {
    const now = Date.now(), DAY = 86400000;
    const inRange = (o, a, b) => { const t = +new Date(o.date); return t > now - a * DAY && t <= now - b * DAY; };
    const cur = D.orders.filter((o) => countable(o) && inRange(o, 30, 0));
    const prev = D.orders.filter((o) => countable(o) && inRange(o, 60, 30));
    const sum = (l) => l.reduce((s, o) => s + o.total, 0);
    const items = (l) => l.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);
    const delta = (a, b) => { if (!b) return a ? '<b class="up">nouveau</b>' : '—'; const p = Math.round((a - b) / b * 100); return `<b class="${p >= 0 ? 'up' : 'down'}">${p >= 0 ? '+' : ''}${p} %</b> vs 30 j précédents`; };
    const toPrep = D.orders.filter((o) => o.status === 'payee' || o.status === 'preparation');
    const out = D.products.filter((p) => p.status === 'publie' && S.stockState(p) === 'out');
    const low = D.products.filter((p) => p.status === 'publie' && S.stockState(p) === 'low');
    const unread = D.messages.filter((m) => !m.read);
    const hasDemo = D.orders.some((o) => o.demo);

    c.innerHTML = head(`Salut ${esc(D.settings.owner || 'Jeff')}`, 'Ce qui se passe sur la boutique et le site.', `<a class="btn" href="../index.html" target="_blank" rel="noopener">${I('ext')} Voir le site</a><a class="btn btn--primary" href="#/produits/nouveau">${I('plus')} Ajouter un produit</a>`)
      + (hasDemo ? `<div class="alert alert--info" style="margin-bottom:20px">${I('alert')}<div>Les commandes affichées sont des <b>exemples</b> pour tester le tableau de bord. Supprime-les dans <a href="#/reglages">Réglages</a> avant la mise en ligne.</div></div>` : '')
      + `<div class="kpis">
        <div class="kpi"><div class="l">Chiffre d’affaires (30 j)</div><div class="v">${money(sum(cur))}</div><div class="d">${delta(sum(cur), sum(prev))}</div></div>
        <div class="kpi"><div class="l">Commandes (30 j)</div><div class="v">${cur.length}</div><div class="d">${delta(cur.length, prev.length)}</div></div>
        <div class="kpi"><div class="l">Panier moyen</div><div class="v">${money(cur.length ? sum(cur) / cur.length : 0)}</div><div class="d">sur 30 jours</div></div>
        <div class="kpi"><div class="l">Articles vendus (30 j)</div><div class="v">${items(cur)}</div><div class="d">${delta(items(cur), items(prev))}</div></div></div>
      <div class="cols">
        <div class="stack">
          <section class="panel"><div class="panel-head"><div><h2>Ventes</h2><p data-chart-sub></p></div>
            <div class="seg" role="group" aria-label="Période"><button type="button" data-range="7">7 j</button><button type="button" data-range="30" aria-pressed="true">30 j</button><button type="button" data-range="90">90 j</button></div></div>
            <div class="panel-body"><div class="chart" data-chart></div></div></section>
          <section class="panel"><div class="panel-head"><h2>Dernières commandes</h2><a class="btn btn--sm" href="#/commandes">Tout voir</a></div>
            <div class="table-wrap">${ordersTable(D.orders.slice(0, 6))}</div></section>
        </div>
        <div class="stack">
          <section class="panel"><div class="panel-head"><h2>À faire</h2></div><div class="panel-body alert-list">
            ${toPrep.length ? `<a class="alert alert--warn" href="#/commandes/f/payee" style="text-decoration:none">${I('cart')}<div><b>${toPrep.length} commande${toPrep.length > 1 ? 's' : ''} à préparer</b><br>Payées, pas encore expédiées.</div></a>` : ''}
            ${out.map((p) => `<a class="alert alert--blood" href="#/produits/${p.id}" style="text-decoration:none">${I('alert')}<div><b>${esc(p.name)}</b><br>Rupture de stock${p.preorder ? ' (précommande ouverte)' : ''}.</div></a>`).join('')}
            ${low.map((p) => `<a class="alert alert--warn" href="#/stock" style="text-decoration:none">${I('layers')}<div><b>${esc(p.name)}</b><br>Plus que ${S.stockOf(p)} en stock.</div></a>`).join('')}
            ${unread.length ? `<a class="alert alert--info" href="#/messages" style="text-decoration:none">${I('mail')}<div><b>${unread.length} message${unread.length > 1 ? 's' : ''} non lu${unread.length > 1 ? 's' : ''}</b><br>Formulaire de contact.</div></a>` : ''}
            ${!toPrep.length && !out.length && !low.length && !unread.length ? '<p class="empty-state" style="padding:12px"><b>Rien en attente</b>Tout est à jour.</p>' : ''}
          </div></section>
          <section class="panel"><div class="panel-head"><div><h2>Meilleures ventes</h2><p>Chiffre d’affaires sur 90 jours</p></div></div><div class="panel-body bars" data-top></div></section>
        </div></div>`;

    // meilleures ventes
    const by = {};
    D.orders.filter((o) => countable(o) && +new Date(o.date) > now - 90 * DAY).forEach((o) => o.items.forEach((i) => { by[i.productId] = (by[i.productId] || 0) + i.price * i.qty; }));
    const top = Object.entries(by).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const max = top.length ? top[0][1] : 1;
    $('[data-top]', c).innerHTML = top.length ? top.map(([id, v]) => { const p = D.products.find((x) => x.id === id) || { name: 'Produit supprimé', images: [''] }; return `<div class="bar-row"><img src="${esc(p.images[0] || '')}" alt=""><div><div class="top"><span>${esc(p.name)}</span><span>${money(v)}</span></div><div class="bar-track"><i style="width:${Math.max(3, v / max * 100)}%"></i></div></div></div>`; }).join('') : '<p class="empty-state"><b>Pas encore de ventes</b>Elles apparaîtront ici.</p>';

    const drawChart = (days) => {
      const pts = [];
      for (let i = days - 1; i >= 0; i--) {
        const d0 = new Date(now - i * DAY); d0.setHours(0, 0, 0, 0); const d1 = +d0 + DAY;
        const v = D.orders.filter((o) => countable(o) && +new Date(o.date) >= +d0 && +new Date(o.date) < d1).reduce((s, o) => s + o.total, 0);
        pts.push({ d: d0, v });
      }
      const total = pts.reduce((s, p) => s + p.v, 0);
      $('[data-chart-sub]', c).textContent = money(total) + ' sur ' + days + ' jours';
      areaChart($('[data-chart]', c), pts);
    };
    $$('[data-range]', c).forEach((b) => b.addEventListener('click', () => { $$('[data-range]', c).forEach((x) => x.setAttribute('aria-pressed', x === b)); drawChart(+b.dataset.range); }));
    drawChart(30);
    bindOrderRows(c);
  };

  function areaChart(el, pts) {
    const W = 760, H = 240, L = 48, R = 12, T = 12, B = 28;
    const maxV = Math.max(50, ...pts.map((p) => p.v));
    const nice = Math.ceil(maxV / 50) * 50;
    const x = (i) => L + (pts.length === 1 ? 0 : i * (W - L - R) / (pts.length - 1));
    const y = (v) => T + (H - T - B) * (1 - v / nice);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.v).toFixed(1)}`).join('');
    const area = line + `L${x(pts.length - 1)},${y(0)}L${x(0)},${y(0)}Z`;
    const ticks = [0, .25, .5, .75, 1].map((k) => nice * k);
    const step = Math.ceil(pts.length / 6);
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Chiffre d’affaires par jour">
      <g class="grid">${ticks.map((t) => `<line x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}"/>`).join('')}</g>
      <g class="axis">${ticks.map((t) => `<text x="${L - 8}" y="${y(t) + 4}" text-anchor="end">${t} €</text>`).join('')}
      ${pts.map((p, i) => i % step === 0 || i === pts.length - 1 ? `<text x="${x(i)}" y="${H - 6}" text-anchor="middle">${p.d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</text>` : '').join('')}</g>
      <path d="${area}" fill="#b0001a" opacity=".12"/><path d="${line}" fill="none" stroke="#b0001a" stroke-width="2" stroke-linejoin="round"/>
      <line data-cross x1="0" x2="0" y1="${T}" y2="${H - B}" stroke="#000" stroke-width="1" opacity="0"/>
      <circle data-dot r="5" fill="#b0001a" stroke="#fff" stroke-width="2" opacity="0"/>
      <rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="transparent" data-hit/></svg><div class="tip"></div>`;
    const svg = $('svg', el), tip = $('.tip', el), cross = $('[data-cross]', el), dot = $('[data-dot]', el);
    const show = (evX) => {
      const r = svg.getBoundingClientRect(); const sx = (evX - r.left) * W / r.width;
      const i = Math.max(0, Math.min(pts.length - 1, Math.round((sx - L) / ((W - L - R) / Math.max(1, pts.length - 1)))));
      const p = pts[i];
      cross.setAttribute('x1', x(i)); cross.setAttribute('x2', x(i)); cross.setAttribute('opacity', .25);
      dot.setAttribute('cx', x(i)); dot.setAttribute('cy', y(p.v)); dot.setAttribute('opacity', 1);
      tip.innerHTML = `<b>${money(p.v)}</b>${p.d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' })}`;
      tip.style.left = (x(i) * r.width / W) + 'px'; tip.style.top = (y(p.v) * r.height / H) + 'px'; tip.classList.add('on');
    };
    const hide = () => { tip.classList.remove('on'); cross.setAttribute('opacity', 0); dot.setAttribute('opacity', 0); };
    svg.addEventListener('pointermove', (e) => show(e.clientX));
    svg.addEventListener('pointerleave', hide);
  }

  /* ================= PRODUITS ================= */
  views.produits = (c, args) => {
    const cats = [...new Set(D.products.map((p) => p.category))];
    c.innerHTML = head('Produits', D.products.length + ' produits dans la boutique', `<a class="btn btn--primary" href="#/produits/nouveau">${I('plus')} Ajouter un produit</a>`)
      + `<section class="panel"><div class="toolbar">
        <input class="input" type="search" placeholder="Rechercher par nom ou référence" data-f="q" aria-label="Rechercher">
        <select class="input" data-f="cat" aria-label="Catégorie"><option value="">Toutes les catégories</option>${cats.map((x) => `<option>${esc(x)}</option>`).join('')}</select>
        <select class="input" data-f="st" aria-label="Statut"><option value="">Tous les statuts</option><option value="publie">En ligne</option><option value="brouillon">Brouillon</option><option value="cache">Masqué</option><option value="stock">Stock bas ou rupture</option></select>
      </div><div class="table-wrap" data-list></div></section>`;
    const f = { q: '', cat: '', st: '' };
    const draw = () => {
      const list = D.products.filter((p) => (!f.q || (p.name + ' ' + p.sku).toLowerCase().includes(f.q.toLowerCase())) && (!f.cat || p.category === f.cat)
        && (!f.st || (f.st === 'stock' ? S.stockState(p) !== 'ok' : p.status === f.st)));
      $('[data-list]', c).innerHTML = list.length ? `<table class="t"><thead><tr><th>Produit</th><th>Catégorie</th><th class="num">Prix</th><th>Stock</th><th>Statut</th><th></th></tr></thead><tbody>
        ${list.map((p) => `<tr data-id="${p.id}"><td><div class="prod"><img src="${esc(p.images[0] || '')}" alt=""><div><b>${esc(p.name)}</b><small>${esc(p.sku || '')}${p.variants.length ? ' — ' + p.variants.length + ' variantes' : ''}</small></div></div></td>
          <td>${esc(p.category)}</td><td class="num">${money(p.price)}</td><td>${stockPill(p)}</td><td>${pill(p.status, PSTATUS[p.status])}${p.preorder ? ' <span class="tag">Précommande</span>' : ''}</td>
          <td class="num"><button class="btn btn--sm btn--ghost" data-dup="${p.id}" title="Dupliquer">${I('copy')}</button><button class="btn btn--sm btn--ghost btn--danger" data-del="${p.id}" title="Supprimer">${I('trash')}</button></td></tr>`).join('')}</tbody></table>`
        : `<div class="empty-state"><b>Aucun produit trouvé</b>Change les filtres ou ajoute un produit.</div>`;
    };
    $$('[data-f]', c).forEach((i) => i.addEventListener('input', () => { f[i.dataset.f] = i.value; draw(); }));
    c.addEventListener('click', async (e) => {
      const dup = e.target.closest('[data-dup]'), del = e.target.closest('[data-del]'), row = e.target.closest('tr[data-id]');
      if (dup) { e.stopPropagation(); const p = clone(D.products.find((x) => x.id === dup.dataset.dup)); p.id = S.uid('p'); p.name += ' (copie)'; p.slug = S.slugify(p.name); p.status = 'brouillon'; D.products.push(p); save('Produit dupliqué en brouillon'); draw(); return; }
      if (del) { e.stopPropagation(); const p = D.products.find((x) => x.id === del.dataset.del); if (await confirmBox('Supprimer ce produit ?', `« ${p.name} » sera retiré de la boutique. Les anciennes commandes restent visibles.`, 'Supprimer')) { D.products = D.products.filter((x) => x !== p); save('Produit supprimé'); draw(); } return; }
      if (row) location.hash = '#/produits/' + row.dataset.id;
    });
    draw();
    if (args[0]) productEditor(c, args[0]);
  };

  /* ---------- Générateur de fiche produit (modèles rédigés dans le ton Fucstyle) ---------- */
  const GEN = {
    pick: (a) => a[Math.floor(Math.random() * a.length)],
    kind(p) {
      const t = (p.type + ' ' + p.name + ' ' + p.category).toLowerCase();
      if (/vinyl|vinyle|lp\b/.test(t)) return 'vinyle';
      if (/\bcd\b|digipack|album/.test(t)) return 'cd';
      if (/hoodie|sweat|crewneck/.test(t)) return 'hoodie';
      if (/t-?shirt|tee/.test(t)) return 'tshirt';
      if (/casquette|cap|bonnet|bob/.test(t)) return 'casquette';
      if (/pack|collector|box/.test(t)) return 'pack';
      if (/sticker|affiche|poster|briquet|tote|sac/.test(t)) return 'goodies';
      return 'autre';
    },
    run(p, opts) {
      const k = GEN.kind(p), name = p.name || 'cette pièce', info = (opts.info || '').trim();
      const tone = opts.tone || 'brut';
      const hooks = {
        brut: ['Brut, sans filtre, comme les freestyles du dimanche.', 'Pas de chichi : du lourd, made in 69100.', 'Fait à Villeurbanne, pensé pour la rue.'],
        collector: ['Tirage limité : quand c’est parti, c’est parti.', 'Une pièce pour les vrais, numérotée par l’histoire.', 'Pour ceux qui suivent depuis le premier freestyle.'],
        hype: ['Le drop que la team attendait 🩸', 'Ça part vite, sois là avant dimanche.', 'Le 69100 sur toi, direct.']
      }[tone];
      const base = {
        cd: { s: `L’album 69💯 Le🩸 en ${name.toLowerCase().includes('digipack') ? 'digipack' : 'CD'}, à poser à côté de la platine ou dans la caisse.`, d: `Le premier album solo de Fucstyle en version physique. L’aboutissement de plus de 120 freestyles du dimanche, gravé pour de vrai.` },
        vinyle: { s: `${name} : le son de 69💯 Le🩸 en grand format, pour les puristes.`, d: `Pressage officiel, pochette signée Soulgraff. Le vinyle, c’est le son comme il doit sonner : chaud, brut, sans compression.` },
        tshirt: { s: `${name} aux couleurs de 69💯 Le🩸. Porte le 69100 sur le torse.`, d: `Coupe streetwear, impression qui tient au lavage. Le visuel de l’album, réalisé par Soulgraff, sur un t-shirt pensé pour être porté tous les jours.` },
        hoodie: { s: `${name} : le hoodie officiel pour les sessions studio et les soirs de concert.`, d: `Molleton épais, capuche doublée, coupe ample. Le logo Fucstyle là où il faut. Chaud l’hiver, propre toute l’année.` },
        casquette: { s: `${name}. Tu l’as vu sur ma tête, bientôt sur la tienne 🩸`, d: `Broderie soignée, réglable à l’arrière, taille unique. La casquette officielle du crew.` },
        pack: { s: `${name} : toute la panoplie 🩸 réunie dans un seul colis.`, d: `Le pack pour les vrais supporters : le meilleur du merch et de l’album, avec des surprises glissées dans le carton.` },
        goodies: { s: `${name}, à coller, à porter ou à offrir.`, d: `Le petit objet qui fait plaisir, aux couleurs du 69100.` },
        autre: { s: `${name}, officiel Fucstyle.`, d: `Une pièce officielle de la boutique Fucstyle, pensée à Villeurbanne.` }
      }[k];
      const variants = [];
      if (p.sizes.length) variants.push(`Tailles dispo : ${p.sizes.join(', ')}.`);
      if (p.colors.length) variants.push(`Couleurs / versions : ${p.colors.join(', ')}.`);
      const pre = p.preorder ? ' Tout est en précommande, envoi dès réception du stock. Merci pour la force !' : ' Envoi rapide depuis Lyon.';
      const short = base.s;
      const description = [GEN.pick(hooks), base.d, info, variants.join(' '), pre.trim()].filter(Boolean).join('\n\n');
      const seoTitle = `${name.replace(/\s*[💿🩸💯]\s*/gu, ' ').trim()} – Fucstyle | Boutique officielle`.slice(0, 65);
      const seoDesc = `${short.replace(/[💿🩸💯🍀]/gu, '').replace(/\s+/g, ' ').trim()} Boutique officielle du rappeur lyonnais Fucstyle.`.slice(0, 158);
      return { short, description, seoTitle, seoDesc };
    }
  };

  /* ---------- Fiche produit : pop-up + aperçu en direct ---------- */
  function productEditor(c, id) {
    const isNew = id === 'nouveau';
    const orig = isNew ? null : D.products.find((p) => p.id === id);
    if (!isNew && !orig) { toast('Produit introuvable.', true); location.hash = '#/produits'; return; }
    const p = isNew ? { id: S.uid('p'), slug: '', name: '', category: 'Merch', type: '', price: 0, compareAt: null, status: 'brouillon', preorder: false, featured: true, badge: '', short: '', description: '', images: [], sizes: [], colors: [], variants: [], stock: 0, lowStock: 5, sku: '', weight: 0.2, seoTitle: '', seoDesc: '' } : clone(orig);
    const cats = [...new Set(D.products.map((x) => x.category).concat(['Musique', 'Merch', 'Collector']))];
    const types = ['T-shirt', 'Hoodie', 'Casquette', 'CD', 'Vinyle', 'Pack', 'Goodies'];
    let changed = false;

    const dlg = document.createElement('dialog');
    dlg.className = 'pmodal';
    dlg.innerHTML = `<div class="pm-head"><div><h2 class="display">${isNew ? 'Nouveau produit' : 'Fiche produit'}</h2><p data-dirty>${isNew ? 'Remplis la fiche, l’aperçu se met à jour à droite.' : 'À jour'}</p></div>
        <div class="actions">${isNew ? '' : `<a class="btn btn--sm" href="../produit.html?p=${encodeURIComponent(p.slug)}" target="_blank" rel="noopener">${I('ext')} Voir en ligne</a>`}<button class="btn btn--icon btn--ghost" type="button" data-close aria-label="Fermer">✕</button></div></div>
      <div class="pm-body">
        <div class="pm-form">
          <div class="pm-steps" role="tablist">${['Infos', 'Photos', 'Tailles & stock', 'Prix & publication', 'SEO'].map((t, i) => `<button type="button" role="tab" data-step="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>

          <section class="pm-pane" data-pane="0">
            <div class="field"><label for="pn">Nom du produit</label><input id="pn" data-k="name" placeholder="Ex. Hoodie 69💯 Le🩸"></div>
            <div class="grid-2"><div class="field"><label for="pty">Type</label><input id="pty" data-k="type" list="ptypes" placeholder="T-shirt, CD…"><datalist id="ptypes">${types.map((x) => `<option value="${x}">`).join('')}</datalist></div>
              <div class="field"><label for="pcat">Catégorie</label><input id="pcat" data-k="category" list="cats"><datalist id="cats">${cats.map((x) => `<option value="${esc(x)}">`).join('')}</datalist></div></div>
            <div class="gen">
              <div class="gen-head"><b>Générer la fiche</b><span>Rédige la description et le SEO dans le ton Fucstyle à partir du nom, du type et des tailles.</span></div>
              <div class="field"><label for="ginfo">Infos à glisser (matière, contenu, détail)</label><input id="ginfo" data-gen-info placeholder="Ex. 100 % coton bio, impression dos, 350 g"></div>
              <div class="actions"><div class="seg" role="group" aria-label="Ton"><button type="button" data-tone="brut" aria-pressed="true">Brut</button><button type="button" data-tone="collector">Collector</button><button type="button" data-tone="hype">Hype</button></div>
                <button class="btn btn--blood btn--sm" type="button" data-generate>Générer la fiche</button></div>
            </div>
            <div class="field"><label for="ps">Phrase d’accroche</label><textarea id="ps" data-k="short" style="min-height:70px" placeholder="Affichée sous le prix"></textarea></div>
            <div class="field"><label for="pd">Description complète</label><textarea id="pd" data-k="description" style="min-height:170px"></textarea></div>
          </section>

          <section class="pm-pane" data-pane="1" hidden>
            <div class="gallery" data-gallery></div>
            <label class="dropzone" data-drop><input type="file" accept="image/*" multiple hidden><b>Ajouter des photos</b><br>Clique ou dépose tes images (la première est la photo principale)</label>
            <div class="url-row"><input class="input" data-imgurl placeholder="https://… lien d’une image"><button class="btn" type="button" data-addurl>Ajouter le lien</button></div>
          </section>

          <section class="pm-pane" data-pane="2" hidden>
            <div class="field"><span class="label">Tailles</span><div class="chipset" data-sizes></div>
              <div class="url-row"><input class="input" data-customsize placeholder="Autre taille (Unique, 10 ans…)"><button class="btn" type="button" data-addsize>Ajouter</button></div></div>
            <div class="field"><span class="label">Couleurs ou versions</span><div class="colorlist" data-colors></div>
              <div class="url-row"><input class="input" data-color placeholder="Noir, Rouge, Blanc…"><button class="btn" type="button" data-addcolor>Ajouter</button></div></div>
            <div data-stockzone></div>
            <div class="grid-2"><div class="field"><label for="psku">Référence</label><input id="psku" data-k="sku"></div><div class="field"><label for="pl">Alerte stock bas à</label><input id="pl" data-k="lowStock" data-num inputmode="numeric"></div></div>
          </section>

          <section class="pm-pane" data-pane="3" hidden>
            <div class="grid-2"><div class="field"><label for="pp">Prix</label><div class="prefix"><input id="pp" data-k="price" data-num inputmode="decimal"><span>€</span></div></div>
              <div class="field"><label for="pc">Prix barré (promo)</label><div class="prefix"><input id="pc" data-k="compareAt" data-num inputmode="decimal" placeholder="—"><span>€</span></div></div></div>
            <div class="field"><label for="pst">Statut</label><select id="pst" data-k="status"><option value="publie">En ligne</option><option value="brouillon">Brouillon</option><option value="cache">Masqué</option></select></div>
            <label class="switch"><input type="checkbox" data-k="preorder"> Précommande (vendable même sans stock)</label>
            <label class="switch"><input type="checkbox" data-k="featured"> Afficher sur l’accueil</label>
            <div class="grid-2"><div class="field"><label for="pb">Étiquette</label><input id="pb" data-k="badge" placeholder="Nouveau, 50 ex.…"></div><div class="field"><label for="pw">Poids (kg)</label><input id="pw" data-k="weight" data-num inputmode="decimal"></div></div>
          </section>

          <section class="pm-pane" data-pane="4" hidden>
            <div class="field"><label for="pslug">Adresse de la page</label><input id="pslug" data-k="slug"><span class="hint">fucstyle.fr/produit.html?p=<b data-slugprev></b></span></div>
            <div class="field"><label for="pseot">Titre Google</label><input id="pseot" data-k="seoTitle" maxlength="70"><span class="hint" data-cnt="seoTitle"></span></div>
            <div class="field"><label for="pseod">Description Google</label><textarea id="pseod" data-k="seoDesc" style="min-height:80px" maxlength="170"></textarea><span class="hint" data-cnt="seoDesc"></span></div>
            <div class="serp" data-serp></div>
          </section>
        </div>

        <aside class="pm-preview"><div class="pm-pv-bar"><span>Aperçu</span><div class="seg" role="group" aria-label="Aperçu"><button type="button" data-pv="page" aria-pressed="true">Fiche</button><button type="button" data-pv="card">Carte boutique</button></div>
          <div class="seg" role="group" aria-label="Écran"><button type="button" data-w="d" aria-pressed="true">Ordi</button><button type="button" data-w="m">Mobile</button></div></div>
          <div class="pm-frame"><iframe title="Aperçu du produit" data-frame></iframe></div></aside>
      </div>
      <div class="pm-foot"><span class="note" data-dirty2></span>${isNew ? '' : `<button class="btn btn--danger" type="button" data-delete>${I('trash')} Supprimer</button>`}<button class="btn" type="button" data-close>Fermer</button><button class="btn btn--primary" type="button" data-save>Enregistrer le produit</button></div>`;
    document.body.append(dlg);
    dlg.showModal();

    const mark = () => { changed = true; dirty = true; $('[data-dirty]', dlg).textContent = 'Modifications non enregistrées'; preview(); };
    const close = async () => {
      if (changed && !(await confirmBox('Fermer sans enregistrer ?', 'Les modifications de cette fiche seront perdues.', 'Fermer'))) return;
      dirty = false; dlg.close(); dlg.remove(); if (location.hash !== '#/produits') location.hash = '#/produits';
    };
    $$('[data-close]', dlg).forEach((b) => b.addEventListener('click', close));
    dlg.addEventListener('cancel', (e) => { e.preventDefault(); close(); });

    // onglets
    $$('[data-step]', dlg).forEach((b) => b.addEventListener('click', () => {
      $$('[data-step]', dlg).forEach((x) => x.setAttribute('aria-selected', x === b));
      $$('[data-pane]', dlg).forEach((pn) => (pn.hidden = pn.dataset.pane !== b.dataset.step));
    }));

    const counters = () => {
      $$('[data-cnt]', dlg).forEach((el) => { const v = p[el.dataset.cnt] || ''; const max = el.dataset.cnt === 'seoTitle' ? 60 : 155; el.textContent = `${v.length} caractères — idéal : moins de ${max}`; el.style.color = v.length > max ? 'var(--blood)' : ''; });
      const t = p.seoTitle || (p.name ? p.name + ' – Fucstyle' : 'Titre du produit');
      const d = p.seoDesc || p.short || 'Description affichée dans Google.';
      $('[data-serp]', dlg).innerHTML = `<small>fucstyle.fr › produit › ${esc(p.slug || 'mon-produit')}</small><b>${esc(t)}</b><p>${esc(d)}</p>`;
    };
    bindFields(dlg, p, (k, v) => {
      if (k === 'name' && (isNew || !p.slug)) { p.slug = S.slugify(v); $('#pslug', dlg).value = p.slug; }
      $('[data-slugprev]', dlg).textContent = p.slug; counters(); mark();
    });
    $('[data-slugprev]', dlg).textContent = p.slug; counters();

    // générateur
    let tone = 'brut';
    $$('[data-tone]', dlg).forEach((b) => b.addEventListener('click', () => { tone = b.dataset.tone; $$('[data-tone]', dlg).forEach((x) => x.setAttribute('aria-pressed', x === b)); }));
    $('[data-generate]', dlg).addEventListener('click', async () => {
      if (!p.name.trim()) return toast('Donne d’abord un nom au produit.', true);
      if ((p.short || p.description) && !(await confirmBox('Remplacer les textes ?', 'L’accroche, la description et le SEO actuels seront remplacés par une nouvelle proposition.', 'Générer'))) return;
      const g = GEN.run(p, { tone, info: $('[data-gen-info]', dlg).value });
      Object.assign(p, g);
      ['short', 'description', 'seoTitle', 'seoDesc'].forEach((k) => { const el = $(`[data-k="${k}"]`, dlg); if (el) el.value = p[k]; });
      counters(); mark(); toast('Fiche générée — relis et ajuste à ta sauce');
    });

    // photos
    const drawGallery = () => {
      $('[data-gallery]', dlg).innerHTML = p.images.map((u, i) => `<div class="gimg"><img src="${esc(u)}" alt="">${i === 0 ? '<span class="main-badge">Principale</span>' : ''}
        <div class="tools">${i ? `<button type="button" data-mv="${i}" data-d="-1" title="Avancer">${I('left')}</button><button type="button" data-main="${i}" title="Mettre en principale">${I('star')}</button>` : ''}
        ${i < p.images.length - 1 ? `<button type="button" data-mv="${i}" data-d="1" title="Reculer">${I('right')}</button>` : ''}
        <button type="button" class="del" data-rmimg="${i}" title="Supprimer la photo">${I('trash')}</button></div></div>`).join('') || '<p class="hint" style="grid-column:1/-1;margin:0">Aucune photo pour l’instant.</p>';
    };
    drawGallery();
    $('[data-gallery]', dlg).addEventListener('click', (e) => {
      const mv = e.target.closest('[data-mv]'), mn = e.target.closest('[data-main]'), rm = e.target.closest('[data-rmimg]');
      if (mv) { const i = +mv.dataset.mv, j = i + +mv.dataset.d; [p.images[i], p.images[j]] = [p.images[j], p.images[i]]; }
      else if (mn) { const i = +mn.dataset.main; p.images.unshift(p.images.splice(i, 1)[0]); }
      else if (rm) p.images.splice(+rm.dataset.rmimg, 1);
      else return;
      mark(); drawGallery();
    });
    const addFiles = async (files) => { for (const f of files) { try { p.images.push(await readImage(f)); } catch (err) { toast(err.message, true); } } mark(); drawGallery(); };
    const drop = $('[data-drop]', dlg);
    $('input[type=file]', drop).addEventListener('change', (e) => addFiles(e.target.files));
    ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('drag'); }));
    ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('drag'); }));
    drop.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));
    $('[data-addurl]', dlg).addEventListener('click', () => { const u = $('[data-imgurl]', dlg).value.trim(); if (!/^https?:\/\//.test(u)) return toast('Colle un lien qui commence par https://', true); p.images.push(u); $('[data-imgurl]', dlg).value = ''; mark(); drawGallery(); });

    // tailles, couleurs, stock
    const rebuild = () => {
      const old = {}; p.variants.forEach((v) => (old[v.key] = v.stock));
      const sz = p.sizes.length ? p.sizes : [''], co = p.colors.length ? p.colors : [''];
      p.variants = (p.sizes.length || p.colors.length) ? co.flatMap((col) => sz.map((s) => { const key = [s, col].filter(Boolean).join('|'); return { key, size: s, color: col, stock: old[key] != null ? old[key] : 0 }; })) : [];
    };
    const allSizes = () => [...new Set(SIZES.concat(p.sizes))];
    const drawVariants = () => {
      $('[data-sizes]', dlg).innerHTML = allSizes().map((s) => `<button type="button" data-size="${esc(s)}" aria-pressed="${p.sizes.includes(s)}">${esc(s)}</button>`).join('');
      $('[data-colors]', dlg).innerHTML = p.colors.map((col, i) => `<span>${esc(col)}<button type="button" data-rmcolor="${i}" aria-label="Retirer ${esc(col)}">×</button></span>`).join('') || '<span style="background:none;padding:0;color:var(--muted);font-weight:400">Aucune</span>';
      const z = $('[data-stockzone]', dlg);
      if (!p.variants.length) {
        z.innerHTML = `<div class="field" style="max-width:220px"><label for="pstock">Stock disponible</label><input id="pstock" type="number" min="0" value="${+p.stock || 0}" data-simplestock></div>`;
        $('[data-simplestock]', z).addEventListener('input', (e) => { p.stock = Math.max(0, +e.target.value || 0); mark(); });
      } else {
        const total = p.variants.reduce((s, v) => s + (+v.stock || 0), 0);
        z.innerHTML = `<div class="field"><span class="label">Stock par variante — total ${total}</span><div class="table-wrap" style="border:1px solid var(--line);border-radius:6px"><table class="t matrix"><thead><tr>${p.colors.length ? '<th>Couleur</th>' : ''}${p.sizes.length ? '<th>Taille</th>' : ''}<th class="num">Stock</th></tr></thead><tbody>
          ${p.variants.map((v, i) => `<tr>${p.colors.length ? `<td>${esc(v.color)}</td>` : ''}${p.sizes.length ? `<td><b>${esc(v.size)}</b></td>` : ''}<td class="num"><input class="input" type="number" min="0" value="${+v.stock || 0}" data-vs="${i}" aria-label="Stock ${esc(v.key)}"></td></tr>`).join('')}</tbody></table></div>
          <div class="url-row"><input class="input" type="number" min="0" placeholder="Quantité" data-allq><button class="btn" type="button" data-all>Appliquer à toutes</button></div></div>`;
        $$('[data-vs]', z).forEach((inp) => inp.addEventListener('input', () => { p.variants[+inp.dataset.vs].stock = Math.max(0, +inp.value || 0); mark(); }));
        $('[data-all]', z).addEventListener('click', () => { const q = Math.max(0, +$('[data-allq]', z).value || 0); p.variants.forEach((v) => (v.stock = q)); mark(); drawVariants(); });
      }
    };
    drawVariants();
    $('[data-sizes]', dlg).addEventListener('click', (e) => { const b = e.target.closest('[data-size]'); if (!b) return; const s = b.dataset.size; p.sizes = p.sizes.includes(s) ? p.sizes.filter((x) => x !== s) : allSizes().filter((x) => x === s || p.sizes.includes(x)); rebuild(); mark(); drawVariants(); });
    $('[data-addsize]', dlg).addEventListener('click', () => { const s = $('[data-customsize]', dlg).value.trim(); if (!s || p.sizes.includes(s)) return; p.sizes.push(s); $('[data-customsize]', dlg).value = ''; rebuild(); mark(); drawVariants(); });
    $('[data-addcolor]', dlg).addEventListener('click', () => { const s = $('[data-color]', dlg).value.trim(); if (!s || p.colors.includes(s)) return; p.colors.push(s); $('[data-color]', dlg).value = ''; rebuild(); mark(); drawVariants(); });
    $('[data-colors]', dlg).addEventListener('click', (e) => { const b = e.target.closest('[data-rmcolor]'); if (!b) return; p.colors.splice(+b.dataset.rmcolor, 1); rebuild(); mark(); drawVariants(); });

    // aperçu en direct (vraie feuille de style du site)
    let pv = 'page', t = null;
    const frame = $('[data-frame]', dlg);
    const base = new URL('../', location.href).href;
    const preview = () => { clearTimeout(t); t = setTimeout(renderPreview, 120); };
    const renderPreview = () => {
      const img = p.images[0] || '';
      const stock = S.stockOf(p), out = stock <= 0 && !p.preorder;
      const card = `<div class="products" style="grid-template-columns:minmax(0,320px);justify-content:center;padding:40px 20px"><a class="poster product-card${stock <= 0 ? ' is-out' : ''}" href="#" style="--r:-1deg">
          <span class="price-tag">${money(p.price).replace(/\s?€/, '€')}</span>${stock <= 0 ? '<span class="stamp">Rupture</span>' : ''}
          ${img ? `<img src="${esc(img)}" alt="">` : '<div style="aspect-ratio:1;background:#ebe8e1"></div>'}<div class="meta">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}<h3>${esc(p.name || 'Nom du produit')}</h3><div class="cat">${esc(p.type || p.category)}${p.preorder ? ' — précommande' : ''}</div></div></a></div>`;
      const page = `<section class="section" style="padding:40px 0"><div class="wrap"><div class="pdp">
          <div class="pdp-gallery"><div class="poster" style="--r:-.8deg">${img ? `<img src="${esc(img)}" alt="">` : '<div style="aspect-ratio:1;background:#ebe8e1"></div>'}</div>
            ${p.images.length > 1 ? `<div class="thumbs">${p.images.map((u, i) => `<button aria-current="${i === 0}"><img src="${esc(u)}" alt=""></button>`).join('')}</div>` : ''}</div>
          <div class="pdp-info"><p class="muted" style="margin:0 0 10px">Shop / ${esc(p.category)}</p><h1 class="display">${esc(p.name || 'Nom du produit')}</h1>
            <div class="pdp-price">${money(p.price)}${p.compareAt ? `<s>${money(p.compareAt)}</s>` : ''}</div><p class="pdp-short">${esc(p.short || 'Ta phrase d’accroche apparaîtra ici.')}</p>
            ${p.sizes.length ? `<fieldset class="opt"><legend>Taille</legend><div class="opt-row">${p.sizes.map((s) => `<label><input type="radio" name="s"><span>${esc(s)}</span></label>`).join('')}</div></fieldset>` : ''}
            ${p.colors.length ? `<fieldset class="opt"><legend>Version</legend><div class="opt-row">${p.colors.map((s) => `<label><input type="radio" name="c"><span>${esc(s)}</span></label>`).join('')}</div></fieldset>` : ''}
            <div class="buy-row"><button class="btn btn--blood" ${out ? 'disabled' : ''}>${out ? 'Rupture de stock' : 'Ajouter au panier'}</button></div>
            <div class="ship-note">${esc(D.site.shippingNote)}</div><div class="pdp-desc prose">${S.paras(p.description || 'La description complète apparaîtra ici.')}</div></div></div></div></section>`;
      frame.srcdoc = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="${esc(base)}">
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=Big+Shoulders+Stencil+Display:wght@800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/site.css"><style>a{pointer-events:none}</style></head><body>${pv === 'page' ? page : card}</body></html>`;
    };
    $$('[data-pv]', dlg).forEach((b) => b.addEventListener('click', () => { pv = b.dataset.pv; $$('[data-pv]', dlg).forEach((x) => x.setAttribute('aria-pressed', x === b)); renderPreview(); }));
    $$('[data-w]', dlg).forEach((b) => b.addEventListener('click', () => { $$('[data-w]', dlg).forEach((x) => x.setAttribute('aria-pressed', x === b)); $('.pm-frame', dlg).classList.toggle('mobile', b.dataset.w === 'm'); }));
    renderPreview();

    // enregistrer / supprimer
    $('[data-save]', dlg).addEventListener('click', () => {
      if (!p.name.trim()) return toast('Donne un nom au produit avant d’enregistrer.', true);
      if (!(p.price > 0)) return toast('Indique un prix supérieur à 0 € (onglet Prix & publication).', true);
      p.slug = S.slugify(p.slug || p.name);
      if (D.products.some((x) => x.slug === p.slug && x.id !== p.id)) p.slug += '-' + Math.random().toString(36).slice(2, 5);
      const i = D.products.findIndex((x) => x.id === p.id);
      if (i >= 0) D.products[i] = p; else D.products.push(p);
      if (save(isNew ? 'Produit créé' : 'Produit enregistré')) { changed = false; dirty = false; dlg.close(); dlg.remove(); location.hash = "#/produits"; }
    });
    const del = $('[data-delete]', dlg);
    if (del) del.addEventListener('click', async () => { if (await confirmBox('Supprimer ce produit ?', `« ${p.name} » sera retiré de la boutique.`, 'Supprimer')) { D.products = D.products.filter((x) => x.id !== p.id); changed = false; dirty = false; save('Produit supprimé'); dlg.close(); dlg.remove(); location.hash = "#/produits"; } });
  }

  /* ================= STOCK ================= */
  views.stock = (c) => {
    c.innerHTML = head('Stock', 'Ajuste les quantités en direct. Chaque changement est enregistré tout de suite.', `<button class="btn" type="button" data-exp>${I('download')} Exporter l’inventaire</button>`)
      + `<section class="panel"><div class="toolbar"><input class="input" type="search" placeholder="Rechercher" data-q aria-label="Rechercher"><div class="seg" role="group" aria-label="Filtre"><button type="button" data-fl="" aria-pressed="true">Tout</button><button type="button" data-fl="low">Stock bas</button><button type="button" data-fl="out">Rupture</button></div></div><div class="table-wrap" data-list></div></section>`;
    let q = '', fl = '';
    const rows = () => D.products.flatMap((p) => (p.variants.length ? p.variants.map((v, vi) => ({ p, v, vi, label: [v.size, v.color].filter(Boolean).join(' / '), stock: +v.stock })) : [{ p, v: null, label: '—', stock: +p.stock }]));
    const state = (r) => (r.stock <= 0 ? 'out' : r.stock <= r.p.lowStock ? 'low' : 'ok');
    const draw = () => {
      const list = rows().filter((r) => (!q || r.p.name.toLowerCase().includes(q)) && (!fl || state(r) === fl));
      $('[data-list]', c).innerHTML = list.length ? `<table class="t matrix"><thead><tr><th>Produit</th><th>Variante</th><th>État</th><th class="num">Quantité</th></tr></thead><tbody>
        ${list.map((r, i) => `<tr><td><div class="prod"><img src="${esc(r.p.images[0] || '')}" alt=""><div><b>${esc(r.p.name)}</b><small>${esc(r.p.sku || '')}</small></div></div></td><td>${esc(r.label)}</td>
          <td>${pill(state(r), state(r) === 'out' ? 'Rupture' : state(r) === 'low' ? 'Stock bas' : 'OK')}</td>
          <td class="num"><div class="stepper"><button type="button" data-step="${i}" data-d="-1" aria-label="Retirer 1">−</button><input type="number" min="0" value="${r.stock}" data-set="${i}" aria-label="Quantité"><button type="button" data-step="${i}" data-d="1" aria-label="Ajouter 1">+</button></div></td></tr>`).join('')}</tbody></table>`
        : '<div class="empty-state"><b>Rien à afficher</b>Aucune ligne ne correspond à ce filtre.</div>';
      const apply = (r, n) => { n = Math.max(0, n | 0); if (r.v) r.v.stock = n; else r.p.stock = n; save(); };
      $$('[data-step]', c).forEach((b) => b.addEventListener('click', () => { const r = list[+b.dataset.step]; apply(r, r.stock + +b.dataset.d); draw(); }));
      $$('[data-set]', c).forEach((inp) => inp.addEventListener('change', () => { apply(list[+inp.dataset.set], +inp.value); toast('Stock mis à jour'); draw(); }));
    };
    $('[data-q]', c).addEventListener('input', (e) => { q = e.target.value.toLowerCase(); draw(); });
    $$('[data-fl]', c).forEach((b) => b.addEventListener('click', () => { fl = b.dataset.fl; $$('[data-fl]', c).forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(); }));
    $('[data-exp]', c).addEventListener('click', () => download('inventaire-fucstyle.csv', csv([['Produit', 'Référence', 'Variante', 'Stock', 'Prix']].concat(rows().map((r) => [r.p.name, r.p.sku, r.label, r.stock, r.p.price]))), 'text/csv'));
    draw();
  };

  /* ================= COMMANDES ================= */
  function ordersTable(list) {
    if (!list.length) return '<div class="empty-state"><b>Aucune commande</b>Les commandes passées sur le site arrivent ici.</div>';
    return `<table class="t"><thead><tr><th>Commande</th><th>Date</th><th>Client</th><th>Articles</th><th class="num">Total</th><th>Statut</th></tr></thead><tbody>
      ${list.map((o) => `<tr data-order="${o.id}"><td><b>${esc(o.id)}</b>${o.demo ? ' <span class="tag">exemple</span>' : ''}</td><td>${fmtDT(o.date)}</td><td>${esc(o.customer.first + ' ' + o.customer.last)}<br><small style="color:var(--muted)">${esc(o.customer.city)}</small></td>
        <td>${o.items.reduce((s, i) => s + i.qty, 0)}</td><td class="num"><b>${money(o.total)}</b></td><td>${pill(o.status, STATUS[o.status])}</td></tr>`).join('')}</tbody></table>`;
  }
  function bindOrderRows(c) { c.addEventListener('click', (e) => { const r = e.target.closest('tr[data-order]'); if (r) location.hash = '#/commandes/' + r.dataset.order; }); }

  views.commandes = (c, args) => {
    if (args[0] && args[0] !== 'f') return orderDetail(c, args[0]);
    let st = args[0] === 'f' ? args[1] : '', q = '';
    const counts = Object.keys(STATUS).map((k) => [k, D.orders.filter((o) => o.status === k).length]);
    c.innerHTML = head('Commandes', D.orders.length + ' commandes au total', `<button class="btn" type="button" data-exp>${I('download')} Exporter (CSV)</button>`)
      + `<section class="panel"><div class="toolbar"><input class="input" type="search" placeholder="N°, nom ou email" data-q aria-label="Rechercher">
        <div class="seg" role="group" aria-label="Statut" style="flex-wrap:wrap"><button type="button" data-st="" aria-pressed="${!st}">Toutes</button>${counts.filter(([, n]) => n).map(([k, n]) => `<button type="button" data-st="${k}" aria-pressed="${st === k}">${STATUS[k]} (${n})</button>`).join('')}</div></div><div class="table-wrap" data-list></div></section>`;
    const list = () => D.orders.filter((o) => (!st || o.status === st) && (!q || (o.id + ' ' + o.customer.first + ' ' + o.customer.last + ' ' + o.customer.email).toLowerCase().includes(q)));
    const draw = () => { $('[data-list]', c).innerHTML = ordersTable(list()); };
    $('[data-q]', c).addEventListener('input', (e) => { q = e.target.value.toLowerCase(); draw(); });
    $$('[data-st]', c).forEach((b) => b.addEventListener('click', () => { st = b.dataset.st; $$('[data-st]', c).forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(); }));
    $('[data-exp]', c).addEventListener('click', () => download('commandes-fucstyle.csv', csv([['N°', 'Date', 'Prénom', 'Nom', 'Email', 'Téléphone', 'Adresse', 'CP', 'Ville', 'Pays', 'Articles', 'Sous-total', 'Livraison', 'Remise', 'Total', 'Statut', 'Suivi']]
      .concat(list().map((o) => [o.id, fmtDT(o.date), o.customer.first, o.customer.last, o.customer.email, o.customer.phone, o.customer.address, o.customer.zip, o.customer.city, o.customer.country, o.items.map((i) => i.qty + 'x ' + i.name + (i.variant ? ' (' + i.variant + ')' : '')).join(' + '), o.subtotal, o.shipping, o.discount, o.total, STATUS[o.status], o.tracking]))), 'text/csv'));
    bindOrderRows(c); draw();
  };

  function orderDetail(c, id) {
    const o = D.orders.find((x) => x.id === id);
    if (!o) { c.innerHTML = '<div class="empty-state"><b>Commande introuvable</b><a href="#/commandes">Retour aux commandes</a></div>'; return; }
    const steps = ['payee', 'preparation', 'expediee', 'livree'];
    const idx = steps.indexOf(o.status);
    const restock = () => o.items.forEach((i) => { const p = D.products.find((x) => x.id === i.productId); if (!p) return; if (p.variants.length) { const v = p.variants.find((x) => x.key === i.variantKey); if (v) v.stock += i.qty; } else p.stock += i.qty; });
    c.innerHTML = `<p style="margin:0 0 6px"><a href="#/commandes">← Commandes</a></p>` + head('Commande ' + esc(o.id), fmtDT(o.date) + ' — ' + esc(o.payment) + (o.demo ? ' — exemple' : ''), `<button class="btn" type="button" onclick="window.print()">${I('print')} Imprimer</button>`)
      + `<div class="cols"><div class="stack">
        <section class="panel"><div class="panel-head"><h2>Articles</h2>${pill(o.status, STATUS[o.status])}</div><div class="table-wrap"><table class="t"><tbody>
          ${o.items.map((i) => `<tr style="cursor:default"><td><div class="prod"><img src="${esc(i.image || '')}" alt=""><div><b>${esc(i.name)}</b><small>${esc(i.variant || '')}</small></div></div></td><td class="num">${i.qty} × ${money(i.price)}</td><td class="num"><b>${money(i.qty * i.price)}</b></td></tr>`).join('')}</tbody></table></div>
          <div class="panel-body"><dl class="kv"><dt>Sous-total</dt><dd>${money(o.subtotal)}</dd>${o.discount ? `<dt>Remise</dt><dd>−${money(o.discount)}</dd>` : ''}<dt>Livraison</dt><dd>${o.shipping ? money(o.shipping) : 'Offerte'}</dd><dt class="total">Total</dt><dd class="total">${money(o.total)}</dd></dl></div></section>
        <section class="panel"><div class="panel-head"><h2>Expédition</h2></div><div class="panel-body stack">
          <div class="grid-2"><div class="field"><label for="ost">Statut</label><select id="ost" data-st>${Object.entries(STATUS).map(([k, l]) => `<option value="${k}"${k === o.status ? ' selected' : ''}>${l}</option>`).join('')}</select></div>
          <div class="field"><label for="otr">N° de suivi</label><input id="otr" data-tr value="${esc(o.tracking || '')}" placeholder="Ex. 6A12345678901"></div></div>
          <div class="field"><label for="ono">Note interne</label><textarea id="ono" data-no style="min-height:70px">${esc(o.note || '')}</textarea></div>
          <div class="actions">${o.status === 'payee' ? `<button class="btn" type="button" data-go="preparation">Passer en préparation</button>` : ''}${o.status === 'payee' || o.status === 'preparation' ? `<button class="btn btn--primary" type="button" data-go="expediee">Marquer comme expédiée</button>` : ''}${o.status === 'expediee' ? `<button class="btn btn--primary" type="button" data-go="livree">Marquer comme livrée</button>` : ''}
            <button class="btn" type="button" data-savemeta>Enregistrer</button>${countable(o) ? `<button class="btn btn--danger" type="button" data-cancel>Annuler la commande</button>` : ''}</div>
        </div></section></div>
      <div class="stack">
        <section class="panel"><div class="panel-head"><h2>Suivi</h2></div><div class="panel-body"><ol class="timeline">${steps.map((s, i) => `<li class="${idx >= i ? 'done' : ''}"><span>${STATUS[s]}</span></li>`).join('')}</ol>${!countable(o) ? pill(o.status, STATUS[o.status]) : ''}</div></section>
        <section class="panel"><div class="panel-head"><h2>Client</h2></div><div class="panel-body">
          <p style="margin:0 0 8px"><b>${esc(o.customer.first + ' ' + o.customer.last)}</b><br><a href="mailto:${esc(o.customer.email)}">${esc(o.customer.email)}</a><br>${esc(o.customer.phone || '')}</p>
          <p style="margin:0;color:var(--muted)">${esc(o.customer.address)}<br>${esc(o.customer.zip)} ${esc(o.customer.city)}<br>${esc(o.customer.country)}</p>
          <p style="margin:14px 0 0"><a class="btn btn--sm" href="mailto:${esc(o.customer.email)}?subject=${encodeURIComponent('Ta commande ' + o.id + ' — Fucstyle')}">${I('mail')} Écrire au client</a></p></div></section>
      </div></div>`;
    const saveMeta = (st, msg) => {
      if (st) o.status = st;
      o.tracking = $('[data-tr]', c).value.trim(); o.note = $('[data-no]', c).value;
      save(msg || 'Commande enregistrée'); orderDetail(c, id); drawNav();
    };
    $$('[data-go]', c).forEach((b) => b.addEventListener('click', () => saveMeta(b.dataset.go, 'Commande : ' + STATUS[b.dataset.go])));
    $('[data-savemeta]', c).addEventListener('click', () => saveMeta($('[data-st]', c).value));
    const cn = $('[data-cancel]', c);
    if (cn) cn.addEventListener('click', async () => { if (await confirmBox('Annuler cette commande ?', 'Les articles seront remis en stock. Pense à rembourser le client depuis ton outil de paiement.', 'Annuler la commande')) { restock(); saveMeta('annulee', 'Commande annulée, stock remis'); } });
  }

  /* ================= CLIENTS ================= */
  views.clients = (c) => {
    const map = {};
    D.orders.forEach((o) => {
      const k = o.customer.email.toLowerCase();
      const m = map[k] = map[k] || { name: o.customer.first + ' ' + o.customer.last, email: o.customer.email, city: o.customer.city, phone: o.customer.phone, orders: 0, spent: 0, last: o.date };
      m.orders++; if (countable(o)) m.spent += o.total; if (o.date > m.last) m.last = o.date;
    });
    const list = Object.values(map).sort((a, b) => b.spent - a.spent);
    c.innerHTML = head('Clients', list.length + ' clients ont commandé', `<button class="btn" type="button" data-exp>${I('download')} Exporter (CSV)</button><button class="btn btn--primary" type="button" data-notifall>${I('bell')} Notifier tous les membres</button>`)
      + `<section class="panel"><div class="toolbar"><input class="input" type="search" placeholder="Nom, email ou ville" data-q aria-label="Rechercher"></div><div class="table-wrap" data-list></div></section>`;
    const draw = (q) => {
      const l = list.filter((x) => !q || (x.name + ' ' + x.email + ' ' + x.city).toLowerCase().includes(q));
      $('[data-list]', c).innerHTML = l.length ? `<table class="t"><thead><tr><th>Client</th><th>Ville</th><th class="num">Commandes</th><th class="num">Total dépensé</th><th>Dernière commande</th><th></th></tr></thead><tbody>
        ${l.map((x) => `<tr data-mail="${esc(x.email)}"><td><b>${esc(x.name)}</b><br><small style="color:var(--muted)">${esc(x.email)}</small></td><td>${esc(x.city)}</td><td class="num">${x.orders}</td><td class="num"><b>${money(x.spent)}</b></td><td>${fmtDate(x.last)}</td><td class="num"><button class="btn btn--sm" type="button" data-notif="${esc(x.email)}">${I('bell')} Notifier</button></td></tr>`).join('')}</tbody></table>`
        : '<div class="empty-state"><b>Aucun client</b>Les clients apparaissent dès leur première commande.</div>';
    };
    $('[data-q]', c).addEventListener('input', (e) => draw(e.target.value.toLowerCase()));
    c.addEventListener('click', (e) => { const n = e.target.closest('[data-notif]'); if (n) { e.stopPropagation(); return composer({ email: n.dataset.notif }); } const r = e.target.closest('tr[data-mail]'); if (r) location.hash = '#/recherche/' + encodeURIComponent(r.dataset.mail); });
    $('[data-notifall]', c).addEventListener('click', () => composer());
    $('[data-exp]', c).addEventListener('click', () => download('clients-fucstyle.csv', csv([['Nom', 'Email', 'Téléphone', 'Ville', 'Commandes', 'Total']].concat(list.map((x) => [x.name, x.email, x.phone, x.city, x.orders, x.spent.toFixed(2)]))), 'text/csv'));
    draw('');
  };

  /* ================= PROMOS ================= */
  views.promos = (c) => {
    const draw = () => {
      c.innerHTML = head('Codes promo', 'Les clients les saisissent au moment de payer.')
        + `<div class="cols"><section class="panel"><div class="table-wrap">${D.promos.length ? `<table class="t matrix"><thead><tr><th>Code</th><th>Remise</th><th>Note</th><th class="num">Utilisations</th><th>Actif</th><th></th></tr></thead><tbody>
          ${D.promos.map((p, i) => `<tr><td><b>${esc(p.code)}</b></td><td>${p.type === 'percent' ? p.value + ' %' : money(p.value)}</td><td>${esc(p.note || '')}</td><td class="num">${p.uses || 0}</td>
            <td><label class="switch"><input type="checkbox" data-act="${i}"${p.active ? ' checked' : ''}><span class="sr-only">Actif</span></label></td><td class="num"><button class="btn btn--sm btn--ghost btn--danger" data-rm="${i}" aria-label="Supprimer">${I('trash')}</button></td></tr>`).join('')}</tbody></table>`
          : '<div class="empty-state"><b>Aucun code</b>Crée ton premier code à droite.</div>'}</div></section>
        <section class="panel"><div class="panel-head"><h2>Nouveau code</h2></div><form class="panel-body stack" data-new>
          <div class="field"><label for="pcode">Code</label><input id="pcode" name="code" placeholder="Ex. DIMANCHE15" required style="text-transform:uppercase"></div>
          <div class="grid-2"><div class="field"><label for="ptype">Type</label><select id="ptype" name="type"><option value="percent">Pourcentage</option><option value="fixed">Montant fixe</option></select></div>
          <div class="field"><label for="pval">Valeur</label><input id="pval" name="value" inputmode="decimal" required></div></div>
          <div class="field"><label for="pnote">Note</label><input id="pnote" name="note" placeholder="Pour qui, pour quoi"></div>
          <button class="btn btn--primary" type="submit">Créer le code</button></form></section></div>`;
      $$('[data-act]', c).forEach((i) => i.addEventListener('change', () => { D.promos[+i.dataset.act].active = i.checked; save(i.checked ? 'Code activé' : 'Code désactivé'); }));
      $$('[data-rm]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Supprimer ce code ?', 'Il ne pourra plus être utilisé.', 'Supprimer')) { D.promos.splice(+b.dataset.rm, 1); save('Code supprimé'); draw(); } }));
      $('[data-new]', c).addEventListener('submit', (e) => {
        e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
        const code = f.code.trim().toUpperCase().replace(/\s+/g, ''), value = +String(f.value).replace(',', '.');
        if (!code || !(value > 0)) return toast('Indique un code et une valeur supérieure à 0.', true);
        if (D.promos.some((p) => p.code === code)) return toast('Ce code existe déjà.', true);
        D.promos.push({ code, type: f.type, value, active: true, uses: 0, note: f.note }); save('Code ' + code + ' créé'); draw();
      });
    };
    draw();
  };

  /* ================= MAGAZINE ================= */
  views.magazine = (c, args) => {
    if (args[0]) return postEditor(c, args[0]);
    const list = [...D.posts].sort((a, b) => b.date.localeCompare(a.date));
    c.innerHTML = head('L’actu', list.length + ' articles — presse, clips, scène', `<a class="btn btn--primary" href="#/magazine/nouveau">${I('plus')} Écrire un article</a>`)
      + `<section class="panel post-list"><div class="table-wrap">${list.length ? `<table class="t"><thead><tr><th>Article</th><th>Rubrique</th><th>Date</th><th>Statut</th><th></th></tr></thead><tbody>
        ${list.map((a) => `<tr data-id="${a.id}"><td><div class="prod"><img src="${esc(a.cover)}" alt=""><div><b>${esc(a.title)}</b><small>${a.source && a.source.name ? 'Source : ' + esc(a.source.name) : esc(a.author || '')}</small></div></div></td><td>${esc(a.category)}</td><td>${fmtDate(a.date)}</td><td>${pill(a.status, PSTATUS[a.status])}</td>
          <td class="num"><button class="btn btn--sm btn--ghost btn--danger" data-del="${a.id}" aria-label="Supprimer">${I('trash')}</button></td></tr>`).join('')}</tbody></table>` : '<div class="empty-state"><b>Aucun article</b>Écris le premier.</div>'}</div></section>`;
    c.addEventListener('click', async (e) => {
      const del = e.target.closest('[data-del]'), row = e.target.closest('tr[data-id]');
      if (del) { e.stopPropagation(); const a = D.posts.find((x) => x.id === del.dataset.del); if (await confirmBox('Supprimer cet article ?', `« ${a.title} » sera retiré de l’actu.`, 'Supprimer')) { D.posts = D.posts.filter((x) => x !== a); save('Article supprimé'); route(); } return; }
      if (row) location.hash = '#/magazine/' + row.dataset.id;
    });
  };

  function postEditor(c, id) {
    const isNew = id === 'nouveau';
    const orig = D.posts.find((x) => x.id === id);
    if (!isNew && !orig) { c.innerHTML = '<div class="empty-state"><b>Article introuvable</b><a href="#/magazine">Retour au magazine</a></div>'; return; }
    const a = isNew ? { id: S.uid('m'), slug: '', title: '', excerpt: '', category: 'Actu', tags: [], cover: '', date: new Date().toISOString().slice(0, 10), status: 'brouillon', author: D.settings.owner || 'Jeff', source: { name: '', url: '' }, body: '' } : clone(orig);
    a.source = a.source || { name: '', url: '' };
    const cats = [...new Set(D.posts.map((x) => x.category).concat(['Actu', 'Clips', 'Scène', 'Presse', 'Freestyle', 'Musique']))];
    const mark = () => { dirty = true; $('[data-dirty]', c).textContent = 'Modifications non enregistrées'; };
    c.innerHTML = `<p style="margin:0 0 6px"><a href="#/magazine">← L’actu</a></p>` + head(isNew ? 'Nouvel article' : 'Modifier l’article', 'Titre, photos, texte et SEO : tout pour l’actu.', !isNew ? `<a class="btn" href="../article.html?a=${encodeURIComponent(a.slug)}" target="_blank" rel="noopener">${I('eye')} Voir sur le site</a>` : '')
      + `<div class="cols"><div class="stack">
        <section class="panel"><div class="panel-body stack">
          <div class="field"><label for="at">Titre</label><input id="at" data-k="title" style="font-size:20px;font-weight:700"></div>
          <div class="field"><label for="ae">Chapô</label><textarea id="ae" data-k="excerpt" style="min-height:70px" placeholder="Le résumé affiché dans la liste et en haut de l’article"></textarea></div>
          <div class="field"><span class="label">Texte</span>
            <div class="seg" role="tablist" style="margin-bottom:8px;width:max-content"><button type="button" data-tab="w" aria-pressed="true">Écrire</button><button type="button" data-tab="p">Aperçu</button></div>
            <div data-w><div class="md-tools"><button type="button" data-md="## " title="Intertitre">Titre</button><button type="button" data-md="**" title="Gras">G</button><button type="button" data-md="*" title="Italique"><em>I</em></button><button type="button" data-md="- " title="Liste">• Liste</button><button type="button" data-md="> " title="Citation">“ Citation</button><button type="button" data-md="link" title="Lien">Lien</button><label class="btn btn--sm btn--ghost" style="height:32px;font-weight:700" title="Insérer une photo">Photo<input type="file" accept="image/*" hidden data-mdimg></label><button type="button" data-plan title="Insérer un plan d’article optimisé">Plan SEO</button></div>
            <textarea class="md-area" data-k="body" aria-label="Texte de l’article"></textarea>
            <span class="hint">## pour un intertitre, **gras**, *italique*, - pour une liste, [texte](https://lien) pour un lien.</span></div>
            <div data-p hidden class="preview panel" style="padding:24px"></div></div>
        </div></section></div>
      <div class="stack">
        <section class="panel"><div class="panel-head"><h2>Publication</h2></div><div class="panel-body stack">
          <div class="field"><label for="ast">Statut</label><select id="ast" data-k="status"><option value="publie">Publié</option><option value="brouillon">Brouillon</option></select></div>
          <div class="field"><label for="ad">Date</label><input id="ad" type="date" data-k="date"></div>
          <div class="field"><label for="ac">Rubrique</label><input id="ac" data-k="category" list="pcats"><datalist id="pcats">${cats.map((x) => `<option value="${esc(x)}">`).join('')}</datalist></div>
          <div class="field"><label for="aslug">Adresse de la page</label><input id="aslug" data-k="slug"></div>
        </div></section>
        <section class="panel"><div class="panel-head"><div><h2>Référencement Google</h2><p data-seoscore></p></div></div><div class="panel-body stack">
          <div class="field"><label for="akw">Mot-clé principal</label><input id="akw" data-k="keyword" placeholder="Ex. rappeur lyonnais, album 69100"></div>
          <div class="field"><label for="aseot">Titre Google</label><input id="aseot" data-k="seoTitle" placeholder="Laisse vide pour reprendre le titre"></div>
          <div class="field"><label for="aseod">Description Google</label><textarea id="aseod" data-k="seoDesc" style="min-height:80px" placeholder="Laisse vide pour reprendre le chapô"></textarea></div>
          <div class="serp" data-serp></div>
          <ul class="seo-checks" data-checks></ul>
        </div></section>
        <section class="panel"><div class="panel-head"><h2>Image de couverture</h2></div><div class="panel-body" data-cover></div></section>
        <section class="panel"><div class="panel-head"><div><h2>Source presse</h2><p>Facultatif : le média d’origine</p></div></div><div class="panel-body stack">
          <div class="field"><label for="asn">Média</label><input id="asn" data-k="source.name" placeholder="Le Progrès, Paperboys…"></div>
          <div class="field"><label for="asu">Lien de l’article</label><input id="asu" data-k="source.url" placeholder="https://…"></div>
        </div></section>
      </div></div>
      <div class="savebar"><span class="note" data-dirty>${isNew ? 'Nouvel article' : 'À jour'}</span>${isNew ? '' : `<button class="btn btn--danger" type="button" data-delete>${I('trash')} Supprimer</button>`}
        <button class="btn" type="button" data-draft>Enregistrer en brouillon</button><button class="btn btn--primary" type="button" data-pub>Publier</button></div>`;
    bindFields(c, a, (k, v) => { mark(); if (k === 'title' && (isNew || !a.slug)) { a.slug = S.slugify(v); $('#aslug').value = a.slug; } });
    imgPicker($('[data-cover]', c), a.cover, (u) => { a.cover = u; mark(); seo(); });
    const ta = $('.md-area', c);

    /* score SEO en direct */
    const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const seo = () => {
      const kw = norm(a.keyword).trim();
      const title = a.seoTitle || a.title || '', desc = a.seoDesc || a.excerpt || '';
      const words = (a.body || '').replace(/[#*>\-\[\]()!]/g, ' ').split(/\s+/).filter(Boolean).length;
      const checks = [
        [!!kw, 'Un mot-clé principal est choisi'],
        [kw && norm(title).includes(kw), 'Le mot-clé est dans le titre'],
        [kw && norm(desc).includes(kw), 'Le mot-clé est dans la description'],
        [kw && norm((a.body || '').split('\n').slice(0, 4).join(' ')).includes(kw), 'Le mot-clé apparaît dès le début du texte'],
        [title.length >= 30 && title.length <= 62, `Titre entre 30 et 62 caractères (${title.length})`],
        [desc.length >= 110 && desc.length <= 160, `Description entre 110 et 160 caractères (${desc.length})`],
        [words >= 300, `Au moins 300 mots (${words})`],
        [/^## /m.test(a.body || ''), 'Au moins un intertitre (##)'],
        [/!\[/.test(a.body || '') || !!a.cover, 'Une image illustre l’article'],
        [/\]\((?!https?:\/\/(?!fucstyle))/.test(a.body || '') || /\.html/.test(a.body || ''), 'Un lien vers une autre page du site (boutique, clips…)'],
        [!!(a.source && a.source.url) || /\]\(https?:\/\//.test(a.body || ''), 'Un lien vers une source ou un réseau']
      ];
      const ok = checks.filter((x) => x[0]).length, score = Math.round(ok / checks.length * 100);
      $('[data-seoscore]', c).innerHTML = `Score SEO : <b style="color:${score >= 80 ? 'var(--good)' : score >= 50 ? 'var(--warn)' : 'var(--blood)'}">${score} / 100</b>`;
      $('[data-checks]', c).innerHTML = checks.map(([v, l]) => `<li class="${v ? 'ok' : ''}">${esc(l)}</li>`).join('');
      $('[data-serp]', c).innerHTML = `<small>fucstyle.fr › magazine › ${esc(a.slug || 'mon-article')}</small><b>${esc(title || 'Titre de l’article')}</b><p>${esc(desc || 'Description affichée dans Google.')}</p>`;
    };
    c.addEventListener('input', seo); seo();

    $('[data-mdimg]', c).addEventListener('change', async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const u = await readImage(f, 1400); const cap = prompt('Légende de la photo (utile pour Google)', '') || '';
        const s0 = ta.selectionStart; ta.setRangeText(`\n\n![${cap}](${u})\n\n`, s0, s0, 'end'); a.body = ta.value; mark(); seo();
      } catch (err) { toast(err.message, true); }
      e.target.value = '';
    });
    $('[data-plan]', c).addEventListener('click', () => {
      const kw = a.keyword || 'Fucstyle';
      const plan = `Accroche en deux phrases : ce qui se passe, pourquoi ça compte pour le 69100. Place « ${kw} » dès ici.\n\n## Le contexte\n\nOù, quand, avec qui. Les faits, simplement.\n\n## Ce qu’il faut retenir\n\n- Point fort numéro un\n- Point fort numéro deux\n- Point fort numéro trois\n\n## Le mot de Jeff\n\n> Une phrase forte, une punchline.\n\n## Et maintenant ?\n\nLa suite : prochaine date, prochain clip, prochain drop. Renvoie vers la [boutique](boutique.html) ou les [clips](clips.html).`;
      if (a.body && !confirm('Ajouter le plan à la fin du texte actuel ?')) return;
      ta.value = (a.body ? a.body + '\n\n' : '') + plan; a.body = ta.value; mark(); seo();
    });
    $$('[data-md]', c).forEach((b) => b.addEventListener('click', () => {
      const m = b.dataset.md, s = ta.selectionStart, e = ta.selectionEnd, sel = ta.value.slice(s, e);
      let ins;
      if (m === 'link') { const u = prompt('Adresse du lien (https://…)'); if (!u) return; ins = `[${sel || 'texte du lien'}](${u})`; }
      else if (m === '**' || m === '*') ins = m + (sel || 'texte') + m;
      else { const ls = ta.value.lastIndexOf('\n', s - 1) + 1; ta.setRangeText(m, ls, ls, 'end'); a.body = ta.value; mark(); ta.focus(); return; }
      ta.setRangeText(ins, s, e, 'end'); a.body = ta.value; mark(); ta.focus();
    }));
    $$('[data-tab]', c).forEach((b) => b.addEventListener('click', () => {
      const pv = b.dataset.tab === 'p'; $$('[data-tab]', c).forEach((x) => x.setAttribute('aria-pressed', x === b));
      $('[data-w]', c).hidden = pv; $('[data-p]', c).hidden = !pv;
      if (pv) $('[data-p]', c).innerHTML = `<h2 style="margin-top:0">${esc(a.title)}</h2><p><b>${esc(a.excerpt)}</b></p>` + S.md(a.body);
    }));
    const doSave = (status) => {
      if (!a.title.trim()) return toast('Donne un titre à l’article.', true);
      if (!a.cover) return toast('Ajoute une image de couverture.', true);
      a.status = status; $('#ast').value = status;
      a.slug = S.slugify(a.slug || a.title);
      if (D.posts.some((x) => x.slug === a.slug && x.id !== a.id)) a.slug += '-' + Math.random().toString(36).slice(2, 5);
      const i = D.posts.findIndex((x) => x.id === a.id); if (i >= 0) D.posts[i] = a; else D.posts.push(a);
      if (save(status === 'publie' ? 'Article publié' : 'Brouillon enregistré')) { dirty = false; if (isNew) location.hash = '#/magazine/' + a.id; else $('[data-dirty]', c).textContent = 'À jour'; }
    };
    $('[data-draft]', c).addEventListener('click', () => doSave('brouillon'));
    $('[data-pub]', c).addEventListener('click', () => doSave('publie'));
    const del = $('[data-delete]', c);
    if (del) del.addEventListener('click', async () => { if (await confirmBox('Supprimer cet article ?', 'Il sera retiré de l’actu.', 'Supprimer')) { D.posts = D.posts.filter((x) => x.id !== a.id); dirty = false; save('Article supprimé'); location.hash = '#/magazine'; } });
  }

  /* ================= PAGES DU SITE ================= */
  views.site = (c) => {
    const s = clone(D.site);
    const mark = () => { dirty = true; $('[data-dirty]', c).textContent = 'Modifications non enregistrées'; };
    const F = (k, label, opts) => { opts = opts || {}; const id = 'f-' + k.replace(/\W/g, ''); return `<div class="field"><label for="${id}">${label}</label>${opts.area ? `<textarea id="${id}" data-k="${k}"${opts.tall ? ' style="min-height:200px"' : ''}></textarea>` : `<input id="${id}" data-k="${k}"${opts.ph ? ` placeholder="${esc(opts.ph)}"` : ''}>`}${opts.hint ? `<span class="hint">${opts.hint}</span>` : ''}</div>`; };
    const sec = (title, sub, body) => `<section class="panel"><div class="panel-head"><div><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div></div><div class="panel-body stack">${body}</div></section>`;
    c.innerHTML = head('Pages du site', 'Les textes, images et liens affichés sur le site.', `<a class="btn" href="../index.html" target="_blank" rel="noopener">${I('eye')} Voir le site</a>`)
      + `<div class="stack">
      ${sec('Vidéo d’entrée', 'Le grand bandeau en haut de l’accueil', `${F('heroVideo', 'Lien de la vidéo (MP4)', { hint: 'Une vidéo est trop lourde pour être stockée ici : dépose-la sur ton hébergement et colle son lien.' })}<div class="field" style="max-width:220px"><label for="hvs">Démarrer à (secondes)</label><input id="hvs" data-k="heroVideoStart" data-num></div>${F('ticker', 'Bande défilante rouge')}`)}
      ${sec('Logo', 'Le logo du menu (goutte rouge + Fucstyle jaune) et le visuel « 69💯 le🩸 »', `<div class="grid-2"><div class="field"><span class="label">Logo du menu</span><div data-img="logo"></div></div><div class="field"><span class="label">Visuel 69💯 le🩸</span><div data-img="mark"></div></div></div>`)}
      ${sec('Boutique', '', `<div class="grid-2">${F('shopTitle', 'Titre sur l’accueil')}${F('shopBanner', 'Phrase en haut de la boutique')}</div>${F('shippingNote', 'Message livraison sur les fiches produit', { area: true })}`)}
      ${sec('Musique & clip', 'Les clips se gèrent dans Musique & scène', F('clipTitle', 'Titre de la section') + '<label class="switch"><input type="checkbox" data-k="autoplayClip"> Musique au démarrage sur l’accueil</label>' + F('introTrack', 'Morceau (lien ou ID YouTube)', { hint: 'Vide = le premier clip de la liste (Vanille Pistache). Si le navigateur bloque le son, la musique part au premier clic du visiteur.' }) + F('introTitle', 'Nom affiché sur le bouton vinyle'))}
      ${sec('Bio', 'Section « FUCSTYLE — L’Essence du Flow Brut »', `<div class="field"><span class="label">Photo</span><div data-img="bioPhoto"></div></div><div class="grid-2">${F('bioTitle', 'Titre')}${F('bioSubtitle', 'Sous-titre')}</div>${F('bioText', 'Texte', { area: true, tall: true })}${F('bioCta', 'Phrase réseaux')}${F('spotifyArtist', 'ID artiste Spotify', { hint: 'La fin du lien open.spotify.com/artist/…' })}`)}
      ${sec('Chiffres', '', `<div class="grid-2">${s.stats.map((st, i) => `<div class="grid-3" style="grid-template-columns:80px 70px 1fr;gap:8px"><div class="field"><label for="sv${i}">Nombre</label><input id="sv${i}" data-k="stats.${i}.value"></div><div class="field"><label for="ss${i}">Suffixe</label><input id="ss${i}" data-k="stats.${i}.suffix"></div><div class="field"><label for="sl${i}">Libellé</label><input id="sl${i}" data-k="stats.${i}.label"></div></div>`).join('')}</div>`)}
      ${sec('Rap indé', '', `${F('indeTitle', 'Titre')}${F('indeText', 'Texte', { area: true, tall: true })}${F('bercailUrl', 'Lien Bercail Records')}`)}
      ${sec('Page À propos', '', `<div class="field"><span class="label">Photo</span><div data-img="aboutPhoto"></div></div>${F('aboutIntro', 'Introduction', { area: true })}${F('aboutText', 'Texte', { area: true, tall: true })}`)}
      ${sec('Contact', '', `${F('contactTitle', 'Titre')}${F('contactText', 'Texte', { area: true })}${F('email', 'Email de contact')}<div class="field"><span class="label">Image</span><div data-img="contactImage"></div></div>`)}
      ${sec('Réseaux sociaux', '', `<div class="grid-2">${F('socials.instagram', 'Instagram')}${F('socials.youtube', 'YouTube')}${F('socials.spotify', 'Spotify')}${F('socials.facebook', 'Facebook')}${F('socials.tiktok', 'TikTok')}</div>`)}
      ${sec('Référencement Google', 'Titre et description affichés dans les résultats de recherche', `${F('seoTitle', 'Titre')}${F('seoDescription', 'Description', { area: true })}`)}
      </div><div class="savebar"><span class="note" data-dirty>À jour</span><button class="btn btn--primary" type="button" data-save>Enregistrer les pages</button></div>`;
    bindFields(c, s, mark);
    $$('[data-img]', c).forEach((el) => imgPicker(el, s[el.dataset.img], (u) => { s[el.dataset.img] = u; mark(); }));
    $('[data-save]', c).addEventListener('click', () => { if (s.introTrack) { const m = String(s.introTrack).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); if (m) s.introTrack = m[1]; } D.site = s; if (save('Pages du site enregistrées')) { dirty = false; $('[data-dirty]', c).textContent = 'À jour'; } });
  };

  /* ================= MUSIQUE & SCÈNE ================= */
  views.musique = (c) => {
    const ytId = (u) => { const m = String(u).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : (/^[\w-]{11}$/.test(u) ? u : ''); };
    const draw = () => {
      c.innerHTML = head('Musique & scène', 'Clips, freestyles, discographie et dates de concert.')
        + `<div class="stack">
        <section class="panel"><div class="panel-head"><div><h2>Clips YouTube</h2><p>Le premier est mis en avant sur l’accueil.</p></div></div><div class="panel-body">
          <div class="list-edit">${D.site.clips.map((cl, i) => `<div class="list-item"><img src="https://i.ytimg.com/vi/${esc(cl.id)}/mqdefault.jpg" alt=""><div class="f"><input class="input" value="${esc(cl.title)}" data-cltitle="${i}" aria-label="Titre du clip"><small style="color:var(--muted)">youtube.com/watch?v=${esc(cl.id)}</small></div>
            <div class="row-actions">${i ? `<button class="btn btn--icon btn--sm" type="button" data-clup="${i}" aria-label="Monter">${I('left')}</button>` : ''}<button class="btn btn--icon btn--sm btn--danger" type="button" data-clrm="${i}" aria-label="Supprimer">${I('trash')}</button></div></div>`).join('')}</div>
          <div class="url-row"><input class="input" placeholder="Lien YouTube du clip" data-clurl><input class="input" placeholder="Titre" data-clname><button class="btn btn--primary" type="button" data-cladd>Ajouter</button></div></div></section>

        <section class="panel"><div class="panel-head"><div><h2>Freestyle sunday</h2><p>Les visuels qui renvoient vers Instagram</p></div></div><div class="panel-body">
          <div class="gallery" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">${D.freestyles.map((f, i) => `<div><div class="gimg"><img src="${esc(f.image)}" alt=""><div class="tools">${i ? `<button type="button" data-fsmv="${i}" data-d="-1" title="Avancer">${I('left')}</button>` : ''}${i < D.freestyles.length - 1 ? `<button type="button" data-fsmv="${i}" data-d="1" title="Reculer">${I('right')}</button>` : ''}<button class="del" type="button" data-fsrm="${i}" title="Supprimer">${I('trash')}</button></div></div>
            <input class="input" style="margin-top:6px;font-size:12px;min-height:32px" value="${esc(f.url)}" data-fsurl="${i}" aria-label="Lien Instagram"></div>`).join('')}</div>
          <div class="panel" style="padding:14px"><b>Ajouter un freestyle</b><div data-fsnew style="margin-top:10px"></div><div class="url-row"><input class="input" placeholder="Lien du reel Instagram" data-fslink><button class="btn btn--primary" type="button" data-fsadd>Ajouter</button></div></div></div></section>

        <section class="panel"><div class="panel-head"><h2>Discographie</h2><button class="btn btn--sm" type="button" data-alnew>${I('plus')} Ajouter un projet</button></div><div class="panel-body list-edit">
          ${D.albums.map((a, i) => `<div class="list-item"><img src="${esc(a.cover)}" alt=""><div><b>${esc(a.title)}</b><br><small style="color:var(--muted)">${esc(a.artist)}${a.year ? ' — ' + esc(a.year) : ''}</small></div><div class="row-actions"><button class="btn btn--sm" type="button" data-aledit="${i}">Modifier</button><button class="btn btn--icon btn--sm btn--danger" type="button" data-alrm="${i}" aria-label="Supprimer">${I('trash')}</button></div></div>`).join('')}
          <div data-aleditor></div></div></section>

        <section class="panel"><div class="panel-head"><h2>Dates de concert</h2></div><div class="panel-body">
          <div class="table-wrap"><table class="t matrix"><thead><tr><th>Date</th><th>Événement</th><th>Lieu</th><th>Ville</th><th>Lien billets</th><th></th></tr></thead><tbody>
          ${[...D.events].sort((a, b) => b.date.localeCompare(a.date)).map((e) => `<tr><td><input class="input" type="date" value="${esc(e.date)}" data-ev="${e.id}" data-f="date" style="width:150px"></td><td><input class="input" value="${esc(e.title)}" data-ev="${e.id}" data-f="title" style="min-width:220px"></td><td><input class="input" value="${esc(e.venue)}" data-ev="${e.id}" data-f="venue"></td><td><input class="input" value="${esc(e.city)}" data-ev="${e.id}" data-f="city" style="width:130px"></td><td><input class="input" value="${esc(e.url)}" data-ev="${e.id}" data-f="url"></td><td><button class="btn btn--icon btn--sm btn--danger" type="button" data-evrm="${e.id}" aria-label="Supprimer">${I('trash')}</button></td></tr>`).join('')}</tbody></table></div>
          <button class="btn" type="button" data-evadd style="margin-top:12px">${I('plus')} Ajouter une date</button></div></section></div>`;

      let fsImg = '';
      imgPicker($('[data-fsnew]', c), '', (u) => (fsImg = u), { max: 900 });
      $$('[data-cltitle]', c).forEach((i) => i.addEventListener('change', () => { D.site.clips[+i.dataset.cltitle].title = i.value; save('Clip renommé'); }));
      $$('[data-clup]', c).forEach((b) => b.addEventListener('click', () => { const i = +b.dataset.clup; const a = D.site.clips; [a[i - 1], a[i]] = [a[i], a[i - 1]]; save('Ordre des clips enregistré'); draw(); }));
      $$('[data-clrm]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Retirer ce clip ?', 'Il ne sera plus affiché sur le site.', 'Retirer')) { D.site.clips.splice(+b.dataset.clrm, 1); save('Clip retiré'); draw(); } }));
      $('[data-cladd]', c).addEventListener('click', () => { const id = ytId($('[data-clurl]', c).value.trim()); if (!id) return toast('Colle un lien YouTube valide.', true); D.site.clips.unshift({ id, title: $('[data-clname]', c).value.trim() || 'Nouveau clip' }); save('Clip ajouté en tête'); draw(); });
      $$('[data-fsurl]', c).forEach((i) => i.addEventListener('change', () => { D.freestyles[+i.dataset.fsurl].url = i.value.trim(); save('Lien enregistré'); }));
      $$('[data-fsmv]', c).forEach((b) => b.addEventListener('click', () => { const i = +b.dataset.fsmv, j = i + +b.dataset.d; [D.freestyles[i], D.freestyles[j]] = [D.freestyles[j], D.freestyles[i]]; save(); draw(); }));
      $$('[data-fsrm]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Retirer ce freestyle ?', 'Le visuel sera retiré du site.', 'Retirer')) { D.freestyles.splice(+b.dataset.fsrm, 1); save('Freestyle retiré'); draw(); } }));
      $('[data-fsadd]', c).addEventListener('click', () => { const url = $('[data-fslink]', c).value.trim(); if (!fsImg) return toast('Ajoute le visuel du freestyle.', true); if (!/instagram\.com/.test(url)) return toast('Colle le lien Instagram du freestyle.', true); D.freestyles.unshift({ image: fsImg, url }); save('Freestyle ajouté'); draw(); });

      const alEditor = (i) => {
        const isNew = i == null; const a = isNew ? { id: S.uid('a'), slug: '', title: '', year: '', artist: 'Fucstyle', cover: '', text: '', links: [] } : clone(D.albums[i]);
        const z = $('[data-aleditor]', c);
        z.innerHTML = `<div class="panel" style="padding:18px;margin-top:6px"><div class="stack"><b>${isNew ? 'Nouveau projet' : 'Modifier ' + esc(a.title)}</b>
          <div class="grid-3"><div class="field"><label for="alt">Titre</label><input id="alt" data-k="title"></div><div class="field"><label for="ala">Artiste</label><input id="ala" data-k="artist"></div><div class="field"><label for="aly">Année</label><input id="aly" data-k="year"></div></div>
          <div class="field"><span class="label">Pochette</span><div data-alcover></div></div>
          <div class="field"><label for="altx">Présentation</label><textarea id="altx" data-k="text" style="min-height:160px"></textarea></div>
          <div class="field"><label for="all">Liens (un par ligne : Nom | https://…)</label><textarea id="all" data-links style="min-height:80px">${esc((a.links || []).map((l) => l.label + ' | ' + l.url).join('\n'))}</textarea></div>
          <div class="actions"><button class="btn" type="button" data-alcancel>Annuler</button><button class="btn btn--primary" type="button" data-alsave>Enregistrer le projet</button></div></div></div>`;
        bindFields(z, a);
        imgPicker($('[data-alcover]', z), a.cover, (u) => (a.cover = u), { max: 1000 });
        $('[data-alcancel]', z).addEventListener('click', () => (z.innerHTML = ''));
        $('[data-alsave]', z).addEventListener('click', () => {
          if (!a.title.trim() || !a.cover) return toast('Ajoute au moins un titre et une pochette.', true);
          a.links = $('[data-links]', z).value.split('\n').map((l) => l.split('|').map((x) => x.trim())).filter((x) => x[0] && x[1]).map(([label, url]) => ({ label, url }));
          a.slug = S.slugify(a.title);
          if (isNew) D.albums.unshift(a); else D.albums[i] = a;
          save('Projet enregistré'); draw();
        });
        z.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      $('[data-alnew]', c).addEventListener('click', () => alEditor(null));
      $$('[data-aledit]', c).forEach((b) => b.addEventListener('click', () => alEditor(+b.dataset.aledit)));
      $$('[data-alrm]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Supprimer ce projet ?', 'Il sera retiré de la discographie.', 'Supprimer')) { D.albums.splice(+b.dataset.alrm, 1); save('Projet supprimé'); draw(); } }));

      $$('[data-ev]', c).forEach((i) => i.addEventListener('change', () => { const e = D.events.find((x) => x.id === i.dataset.ev); e[i.dataset.f] = i.value; save('Date enregistrée'); }));
      $$('[data-evrm]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Supprimer cette date ?', 'Elle sera retirée de la page À propos.', 'Supprimer')) { D.events = D.events.filter((x) => x.id !== b.dataset.evrm); save('Date supprimée'); draw(); } }));
      $('[data-evadd]', c).addEventListener('click', () => { D.events.push({ id: S.uid('e'), date: new Date().toISOString().slice(0, 10), title: 'Nouvelle date', venue: '', city: '', url: '' }); save('Date ajoutée'); draw(); });
    };
    draw();
  };

  /* ================= MESSAGES ================= */
  views.messages = (c, args) => {
    const m = args[0] && D.messages.find((x) => x.id === args[0]);
    if (m) {
      m.read = true; save(); drawNav();
      c.innerHTML = `<p style="margin:0 0 6px"><a href="#/messages">← Messages</a></p>` + head(esc(m.subject || 'Message'), fmtDT(m.date))
        + `<section class="panel"><div class="panel-body stack"><p style="margin:0"><b>${esc(m.name || 'Sans nom')}</b> — <a href="mailto:${esc(m.email)}">${esc(m.email)}</a>${m.phone ? ' — ' + esc(m.phone) : ''}</p>
          <div style="white-space:pre-wrap;font-size:16px">${esc(m.message)}</div>
          <div class="actions"><a class="btn btn--primary" href="mailto:${esc(m.email)}?subject=${encodeURIComponent('Re: ' + (m.subject || 'ton message'))}">${I('mail')} Répondre</a><button class="btn btn--danger" type="button" data-del>${I('trash')} Supprimer</button></div></div></section>`;
      $('[data-del]', c).addEventListener('click', async () => { if (await confirmBox('Supprimer ce message ?', 'Il sera effacé du tableau de bord.', 'Supprimer')) { D.messages = D.messages.filter((x) => x !== m); save('Message supprimé'); location.hash = '#/messages'; } });
      return;
    }
    c.innerHTML = head('Messages', 'Reçus par le formulaire de contact du site (booking, collabs, commandes).')
      + `<section class="panel">${D.messages.length ? D.messages.map((x) => `<a class="msg-item${x.read ? '' : ' unread'}" href="#/messages/${x.id}" style="display:block;text-decoration:none"><div style="display:flex;justify-content:space-between;gap:12px"><b>${esc(x.name || x.email)} — ${esc(x.subject || '')}</b><small style="color:var(--muted);white-space:nowrap">${fmtDT(x.date)}</small></div><p>${esc(x.message)}</p></a>`).join('')
        : '<div class="empty-state"><b>Aucun message pour l’instant</b>Les messages envoyés depuis la page Contact arrivent ici.</div>'}</section>`;
  };

  /* ================= RECHERCHE ================= */
  views.recherche = (c, args) => {
    const q = (args[0] || '').toLowerCase();
    $('#q').value = args[0] || '';
    const pr = D.products.filter((p) => (p.name + ' ' + p.sku).toLowerCase().includes(q));
    const or = D.orders.filter((o) => (o.id + ' ' + o.customer.first + ' ' + o.customer.last + ' ' + o.customer.email + ' ' + o.customer.city).toLowerCase().includes(q));
    const po = D.posts.filter((a) => (a.title + ' ' + a.excerpt).toLowerCase().includes(q));
    c.innerHTML = head('Recherche', q ? `Résultats pour « ${esc(args[0])} »` : 'Tape un mot dans la barre de recherche.')
      + `<div class="stack">
        <section class="panel"><div class="panel-head"><h2>Produits (${pr.length})</h2></div>${pr.length ? `<div class="table-wrap"><table class="t"><tbody>${pr.map((p) => `<tr onclick="location.hash='#/produits/${p.id}'"><td><div class="prod"><img src="${esc(p.images[0] || '')}" alt=""><b>${esc(p.name)}</b></div></td><td class="num">${money(p.price)}</td><td>${stockPill(p)}</td></tr>`).join('')}</tbody></table></div>` : ''}</section>
        <section class="panel"><div class="panel-head"><h2>Commandes (${or.length})</h2></div><div class="table-wrap">${or.length ? ordersTable(or) : ''}</div></section>
        <section class="panel"><div class="panel-head"><h2>Articles (${po.length})</h2></div>${po.length ? `<div class="table-wrap"><table class="t"><tbody>${po.map((a) => `<tr onclick="location.hash='#/magazine/${a.id}'"><td><b>${esc(a.title)}</b></td><td>${fmtDate(a.date)}</td></tr>`).join('')}</tbody></table></div>` : ''}</section></div>`;
    bindOrderRows(c);
  };

  /* ================= NOTIFICATIONS & MEMBRES ================= */
  function members() {
    const map = {};
    D.orders.forEach((o) => {
      const k = o.customer.email.toLowerCase();
      const m = map[k] = map[k] || { email: k, first: o.customer.first, name: o.customer.first + ' ' + o.customer.last, client: true, sub: false, last: o.date, products: new Set() };
      if (o.date > m.last) m.last = o.date; o.items.forEach((i) => m.products.add(i.productId));
    });
    (D.subscribers || []).forEach((s) => { const k = s.email.toLowerCase(); map[k] = map[k] || { email: k, first: '', name: k, client: false, sub: false, last: null, products: new Set() }; map[k].sub = true; });
    return Object.values(map);
  }
  function composer(preset) {
    preset = preset || {};
    const all = members();
    const dlg = document.createElement('dialog'); dlg.className = 'confirm'; dlg.style.width = 'min(640px, calc(100vw - 32px))';
    dlg.innerHTML = `<h3 style="font-family:var(--f-display);font-weight:900;text-transform:uppercase;font-size:2rem">Envoyer une notification</h3>
      <form class="stack" data-f style="gap:14px">
        <div class="field"><label for="na">Destinataires</label><select id="na" name="aud">
          <option value="all">Tous les membres (clients + inscrits)</option><option value="clients">Clients ayant commandé</option><option value="subs">Inscrits à la newsletter</option>
          <option value="inactive">Clients sans commande depuis 60 jours</option><option value="product">Acheteurs d’un produit…</option><option value="one">Un membre…</option></select></div>
        <div class="field" data-prodwrap hidden><label for="np">Produit</label><select id="np" name="product">${D.products.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></div>
        <div class="field" data-onewrap hidden><label for="no">Membre</label><select id="no" name="one">${all.map((m) => `<option value="${esc(m.email)}">${esc(m.name)}${m.name !== m.email ? ' — ' + esc(m.email) : ''}</option>`).join('')}</select></div>
        <p class="hint" data-count style="margin:0"></p>
        <div class="field"><label for="ns">Objet</label><input id="ns" name="subject" placeholder="Ex. Nouveau drop : le hoodie 69💯 Le🩸 est dispo" required></div>
        <div class="field"><label for="nb">Message</label><textarea id="nb" name="body" style="min-height:150px" placeholder="Salut {prenom}, …"></textarea><span class="hint">{prenom} est remplacé par le prénom du membre quand il est connu.</span></div>
        <div class="field"><span class="label">Modèles</span><div class="chipset">
          <button type="button" data-tpl="drop">Nouveau drop</button><button type="button" data-tpl="date">Nouvelle date</button><button type="button" data-tpl="clip">Nouveau clip</button><button type="button" data-tpl="relance">Relance panier</button></div></div>
        <label class="switch"><input type="checkbox" name="banner"> Afficher aussi en bandeau rouge sur le site</label>
        <div class="field" data-urlwrap hidden><label for="nu">Lien du bandeau</label><input id="nu" name="url" placeholder="boutique.html ou https://…"></div>
        <div class="actions"><button class="btn" type="button" data-cancel>Annuler</button><button class="btn" type="button" data-copy>Copier les adresses</button><button class="btn btn--blood" type="submit">Envoyer par email</button></div>
      </form>`;
    document.body.append(dlg); dlg.showModal();
    const f = $('[data-f]', dlg);
    const TPL = {
      drop: ['Nouveau drop dispo sur la boutique 🩸', 'Salut {prenom},\n\nLe nouveau merch vient de tomber sur fucstyle.fr. Les quantités sont limitées, sois là avant que ça parte.\n\nMerci pour la force,\nJeff'],
      date: ['On se voit sur scène ?', 'Salut {prenom},\n\nNouvelle date annoncée. Toutes les infos et les billets sont sur fucstyle.fr, rubrique À propos.\n\nJeff'],
      clip: ['Nouveau clip en ligne', 'Salut {prenom},\n\nLe nouveau clip est sorti. Va le voir, like et partage, c’est ce qui fait avancer l’indé.\n\nJeff'],
      relance: ['Ton panier t’attend', 'Salut {prenom},\n\nTu as laissé des articles sur la boutique. Ils sont encore dispo pour l’instant, mais pas pour longtemps.\n\nJeff']
    };
    const target = () => {
      const fd = Object.fromEntries(new FormData(f)); const now = Date.now();
      let l = all;
      if (fd.aud === 'clients') l = all.filter((m) => m.client);
      if (fd.aud === 'subs') l = all.filter((m) => m.sub);
      if (fd.aud === 'inactive') l = all.filter((m) => m.client && now - +new Date(m.last) > 60 * 86400000);
      if (fd.aud === 'product') l = all.filter((m) => m.products.has(fd.product));
      if (fd.aud === 'one') l = all.filter((m) => m.email === fd.one);
      return { l, fd, label: $('#na', dlg).selectedOptions[0].textContent + (fd.aud === 'product' ? ' : ' + $('#np', dlg).selectedOptions[0].textContent : fd.aud === 'one' ? ' : ' + fd.one : '') };
    };
    const refresh = () => {
      const aud = $('#na', dlg).value;
      $('[data-prodwrap]', dlg).hidden = aud !== 'product'; $('[data-onewrap]', dlg).hidden = aud !== 'one';
      $('[data-urlwrap]', dlg).hidden = !f.banner.checked;
      const n = target().l.length; $('[data-count]', dlg).textContent = n + ' destinataire' + (n > 1 ? 's' : '') + (D.orders.some((o) => o.demo) ? ' (dont des clients d’exemple)' : '');
    };
    f.addEventListener('change', refresh);
    if (preset.email) { $('#na', dlg).value = 'one'; $('#no', dlg).value = preset.email; }
    refresh();
    $$('[data-tpl]', dlg).forEach((b) => b.addEventListener('click', () => { const t = TPL[b.dataset.tpl]; f.subject.value = t[0]; f.body.value = t[1]; }));
    $('[data-cancel]', dlg).addEventListener('click', () => { dlg.close(); dlg.remove(); });
    $('[data-copy]', dlg).addEventListener('click', async () => { const mails = target().l.map((m) => m.email).join(', '); try { await navigator.clipboard.writeText(mails); toast('Adresses copiées'); } catch (e) { prompt('Copie les adresses :', mails); } });
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const { l, fd, label } = target();
      if (!fd.subject.trim()) return toast('Ajoute un objet.', true);
      if (!l.length && !fd.banner) return toast('Aucun destinataire pour cette sélection.', true);
      if (fd.banner) { D.site.announcement = { text: fd.subject.trim(), url: (fd.url || '').trim(), active: true, date: new Date().toISOString() }; }
      D.notifications = D.notifications || [];
      D.notifications.unshift({ id: S.uid('n'), date: new Date().toISOString(), audience: label, count: l.length, subject: fd.subject.trim(), body: fd.body, banner: !!fd.banner });
      save(fd.banner ? 'Bandeau publié sur le site' : 'Notification enregistrée');
      if (l.length) {
        const body = l.length === 1 ? fd.body.replace(/\{prenom\}/g, l[0].first || '') : fd.body.replace(/\{prenom\}\s*,?/g, '');
        const to = l.length === 1 ? l[0].email : D.site.email;
        const bcc = l.length > 1 ? '&bcc=' + encodeURIComponent(l.map((m) => m.email).join(',')) : '';
        const url = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(fd.subject)}&body=${encodeURIComponent(body)}${bcc}`;
        if (url.length > 1900) toast('Trop d’adresses pour un seul email : les adresses sont copiées, colle-les en copie cachée (Cci).');
        if (url.length > 1900) { navigator.clipboard && navigator.clipboard.writeText(l.map((m) => m.email).join(', ')); location.href = `mailto:?bcc=&subject=${encodeURIComponent(fd.subject)}&body=${encodeURIComponent(body)}`; }
        else location.href = url;
      }
      dlg.close(); dlg.remove(); if (current === 'notifications') route();
    });
  }

  views.notifications = (c) => {
    const all = members(); const an = D.site.announcement;
    const subs = D.subscribers || [];
    c.innerHTML = head('Notifications', 'Préviens ta communauté : nouveau drop, nouvelle date, nouveau clip.', `<button class="btn btn--primary" type="button" data-new>${I('mail')} Nouvelle notification</button>`)
      + `<div class="kpis" style="grid-template-columns:repeat(3,1fr)"><div class="kpi"><div class="l">Membres</div><div class="v">${all.length}</div><div class="d">clients et inscrits</div></div>
        <div class="kpi"><div class="l">Inscrits newsletter</div><div class="v">${subs.length}</div><div class="d">via le pied de page du site</div></div>
        <div class="kpi"><div class="l">Notifications envoyées</div><div class="v">${(D.notifications || []).length}</div><div class="d">depuis le début</div></div></div>
      <div class="cols"><div class="stack">
        <section class="panel"><div class="panel-head"><h2>Historique</h2></div>${(D.notifications || []).length ? `<div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Objet</th><th>Destinataires</th><th class="num">Nb</th></tr></thead><tbody>
          ${D.notifications.map((n) => `<tr style="cursor:default"><td>${fmtDT(n.date)}</td><td><b>${esc(n.subject)}</b>${n.banner ? ' <span class="tag">bandeau</span>' : ''}</td><td>${esc(n.audience)}</td><td class="num">${n.count}</td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-state"><b>Aucune notification</b>Envoie la première pour annoncer un drop ou une date.</div>'}</section>
        <section class="panel"><div class="panel-head"><h2>Inscrits newsletter</h2>${subs.length ? `<button class="btn btn--sm" type="button" data-expsubs>${I('download')} Exporter</button>` : ''}</div>${subs.length ? `<div class="table-wrap"><table class="t"><tbody>${subs.map((s, i) => `<tr style="cursor:default"><td>${esc(s.email)}</td><td>${fmtDate(s.date)}</td><td class="num"><button class="btn btn--sm btn--ghost" data-notify="${esc(s.email)}">${I('mail')}</button><button class="btn btn--sm btn--ghost btn--danger" data-unsub="${i}" aria-label="Retirer">${I('trash')}</button></td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-state"><b>Pas encore d’inscrits</b>Le formulaire est dans le pied de page de chaque page du site.</div>'}</section>
      </div><div class="stack">
        <section class="panel"><div class="panel-head"><div><h2>Bandeau sur le site</h2><p>Message rouge tout en haut du site</p></div></div><div class="panel-body stack">
          ${an && an.text ? `<div class="announce-prev">${esc(an.text)}</div><label class="switch"><input type="checkbox" data-anon${an.active ? ' checked' : ''}> Bandeau affiché</label>` : '<p class="hint" style="margin:0">Aucun bandeau. Coche « Afficher aussi en bandeau » en envoyant une notification.</p>'}
        </div></section>
        <div class="alert alert--info">${I('alert')}<div>L’envoi passe par ta messagerie (Gmail, Outlook…), en copie cachée. Pour des envois automatiques en masse, on branchera un service d’emailing (Brevo, Mailchimp) à la mise en ligne.</div></div>
      </div></div>`;
    $('[data-new]', c).addEventListener('click', () => composer());
    const anon = $('[data-anon]', c); if (anon) anon.addEventListener('change', () => { D.site.announcement.active = anon.checked; save(anon.checked ? 'Bandeau affiché' : 'Bandeau masqué'); });
    $$('[data-notify]', c).forEach((b) => b.addEventListener('click', () => composer({ email: b.dataset.notify })));
    $$('[data-unsub]', c).forEach((b) => b.addEventListener('click', async () => { if (await confirmBox('Retirer cet inscrit ?', 'Il ne recevra plus les notifications.', 'Retirer')) { D.subscribers.splice(+b.dataset.unsub, 1); save('Inscrit retiré'); route(); } }));
    const ex = $('[data-expsubs]', c); if (ex) ex.addEventListener('click', () => download('inscrits-fucstyle.csv', csv([['Email', 'Date']].concat(subs.map((s) => [s.email, fmtDate(s.date)]))), 'text/csv'));
  };

  /* ================= RÉGLAGES ================= */
  views.reglages = (c) => {
    const used = (() => { try { return (localStorage.getItem('fucstyle:data') || '').length; } catch (e) { return 0; } })();
    const pct = Math.min(100, used / (5 * 1024 * 1024) * 100);
    c.innerHTML = head('Réglages', 'Livraison, accès, sauvegardes.')
      + `<div class="cols"><div class="stack">
        <section class="panel"><div class="panel-head"><h2>Livraison</h2></div><div class="panel-body stack">
          <div class="grid-2"><div class="field"><label for="sf">Forfait livraison</label><div class="prefix"><input id="sf" data-k="flat" data-num inputmode="decimal"><span>€</span></div></div>
          <div class="field"><label for="sfree">Livraison offerte dès</label><div class="prefix"><input id="sfree" data-k="freeFrom" data-num inputmode="decimal"><span>€</span></div></div></div>
          <div class="field"><label for="sco">Pays livrés (séparés par des virgules)</label><input id="sco" data-countries value="${esc(D.shipping.countries.join(', '))}"></div>
          <button class="btn btn--primary" type="button" data-saveship style="width:max-content">Enregistrer la livraison</button></div></section>
        <section class="panel"><div class="panel-head"><h2>Accès au tableau de bord</h2></div><div class="panel-body stack">
          <div class="grid-2"><div class="field"><label for="own">Prénom affiché</label><input id="own" data-own value="${esc(D.settings.owner || '')}"></div>
          <div class="field"><label for="npin">Nouveau code d’accès</label><input id="npin" data-pin type="password" inputmode="numeric" placeholder="4 chiffres minimum"></div></div>
          <button class="btn btn--primary" type="button" data-saveacc style="width:max-content">Enregistrer l’accès</button></div></section>
      </div>
      <div class="stack">
        <section class="panel"><div class="panel-head"><h2>Sauvegarde</h2></div><div class="panel-body stack">
          <p style="margin:0;color:var(--muted)">Télécharge une copie de tout le site (produits, commandes, articles, textes) ou restaure une copie.</p>
          <button class="btn" type="button" data-export>${I('download')} Télécharger la sauvegarde</button>
          <label class="btn">${I('upload')} Restaurer une sauvegarde<input type="file" accept="application/json" hidden data-import></label>
          <div><div class="bar-track" style="height:8px"><i style="width:${pct.toFixed(1)}%;background:${pct > 80 ? 'var(--blood)' : '#000'}"></i></div><span class="hint">Mémoire utilisée : ${(used / 1024).toFixed(0)} Ko sur environ 5 000 Ko</span></div></div></section>
        <section class="panel"><div class="panel-head"><h2>Zone sensible</h2></div><div class="panel-body stack">
          <button class="btn" type="button" data-demo${D.orders.some((o) => o.demo) ? '' : ' disabled'}>Supprimer les commandes d’exemple</button>
          <button class="btn btn--danger" type="button" data-reset>Tout remettre à zéro</button>
          <span class="hint">Remet le contenu d’origine du site. Les changements faits ici sont perdus.</span></div></section>
      </div></div>`;
    const ship = clone(D.shipping);
    bindFields($('.cols', c), ship);
    $('[data-saveship]', c).addEventListener('click', () => { ship.countries = $('[data-countries]', c).value.split(',').map((x) => x.trim()).filter(Boolean); D.shipping = ship; save('Livraison enregistrée'); });
    $('[data-saveacc]', c).addEventListener('click', () => {
      const pin = $('[data-pin]', c).value.trim();
      if (pin && !/^\d{4,12}$/.test(pin)) return toast('Le code doit contenir de 4 à 12 chiffres.', true);
      D.settings.owner = $('[data-own]', c).value.trim() || 'Jeff'; if (pin) D.settings.pin = pin;
      save(pin ? 'Nouveau code enregistré' : 'Accès enregistré'); shell(); route();
    });
    $('[data-export]', c).addEventListener('click', () => download('fucstyle-sauvegarde-' + new Date().toISOString().slice(0, 10) + '.json', JSON.stringify(D, null, 2), 'application/json'));
    $('[data-import]', c).addEventListener('change', (e) => {
      const f = e.target.files[0]; if (!f) return; const r = new FileReader();
      r.onload = async () => { try { const d = JSON.parse(r.result); if (!d.products || !d.site) throw new Error(); if (await confirmBox('Restaurer cette sauvegarde ?', 'Le contenu actuel sera remplacé.', 'Restaurer')) { D = d; D.version = window.FUC_DEFAULTS.version; save('Sauvegarde restaurée'); shell(); route(); } } catch (err) { toast('Ce fichier n’est pas une sauvegarde Fucstyle.', true); } };
      r.readAsText(f);
    });
    $('[data-demo]', c).addEventListener('click', async () => { if (await confirmBox('Supprimer les commandes d’exemple ?', 'Seules les vraies commandes seront conservées.', 'Supprimer')) { D.orders = D.orders.filter((o) => !o.demo); save('Commandes d’exemple supprimées'); views.reglages(c); drawNav(); } });
    $('[data-reset]', c).addEventListener('click', async () => { if (await confirmBox('Tout remettre à zéro ?', 'Produits, articles, textes et commandes reviennent à l’état d’origine.', 'Remettre à zéro')) { const pin = D.settings.pin; D = S.reset(); D.settings = { pin, owner: 'Jeff' }; D.messages = []; save('Site remis à zéro'); shell(); route(); } });
  };

  /* ---------- démarrage ---------- */
  if (authed()) { shell(); route(); } else loginView();
})();
