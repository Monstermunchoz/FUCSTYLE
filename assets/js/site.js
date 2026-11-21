/* FUCSTYLE — rendu du site public */
(function () {
  const S = window.Store;
  let D = S.load();
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = S.esc;
  let site = D.site;

  const ICON = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.7.7 0 01-1 .3c-2.8-1.7-6.4-2.1-10.6-1.2a.7.7 0 11-.3-1.5c4.6-1 8.5-.6 11.6 1.4.4.2.5.7.3 1zm1.5-3.3a.9.9 0 01-1.3.3c-3.2-2-8.1-2.6-11.9-1.4a.9.9 0 01-.6-1.8c4.3-1.3 9.7-.7 13.4 1.6.5.3.6.9.4 1.3zm.1-3.4C15.3 8.3 8.9 8.1 5.2 9.2a1.1 1.1 0 11-.6-2.1c4.3-1.3 11.3-1 15.7 1.6a1.1 1.1 0 01-1.2 1.9z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.6 5.3A4.8 4.8 0 0116.4 2h-3.6v13.7a2.9 2.9 0 11-2-2.8V9.3a6.5 6.5 0 105.6 6.4V8.8a8.4 8.4 0 004.9 1.6V6.8a4.9 4.9 0 01-3.7-1.5z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 7h14l-1.5 13h-11z"/><path d="M9 7a3 3 0 016 0"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>',
    soundOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l4 6M21 9l-4 6"/></svg>',
    soundOn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg>'
  };
  const NAMES = { instagram: 'Instagram', youtube: 'YouTube', spotify: 'Spotify', facebook: 'Facebook', tiktok: 'TikTok' };
  const socialsHTML = () => '<div class="socials">' + Object.entries(site.socials).filter(([, u]) => u)
    .map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${NAMES[k] || k}">${ICON[k] || ''}</a>`).join('') + '</div>';

  /* ---------- Chrome ---------- */
  const page = document.body.dataset.page;
  const NAV = [
    ['index.html', 'Home', 'home'], ['boutique.html', 'Shop', 'shop'], ['clips.html', 'Les derniers clips', 'clips'],
    ['magazine.html', 'L’actu', 'magazine'], ['a-propos.html', 'À propos', 'about'], ['contact.html', 'Contact', 'contact']
  ];

  function renderChrome() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `<div class="wrap">
      <a class="brand" href="index.html"><img src="${esc(site.logo)}" alt="Fucstyle — accueil"></a>
      <nav class="nav" id="nav" aria-label="Navigation principale">
        ${NAV.map(([h, l, k]) => `<a href="${h}"${(page === k || (page === 'product' && k === 'shop') || (page === 'article' && k === 'magazine')) ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
      </nav>
      <button class="cart-btn" type="button" data-open-cart aria-label="Ouvrir le panier"><span class="cart-word">Panier</span><span class="cart-count" data-cart-count>0</span></button>
      <button class="menu-btn" type="button" aria-controls="nav" aria-expanded="false" aria-label="Menu">${ICON.menu}</button>
    </div>`;
    document.body.prepend(header);

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="footer-tear" aria-hidden="true"></div><div class="wrap">
      <div class="footer-grid">
        <div class="footer-join">
          <p class="footer-kicker">Rejoins la team</p>
          <p class="footer-title display">Drops, dates et freestyles en avant-première</p>
          <form class="news-form" data-news novalidate><label class="sr-only" for="news-mail">Ton email</label><input id="news-mail" type="email" placeholder="ton@email.fr" autocomplete="email"><button type="submit">Je rejoins</button></form><div data-news-msg></div>
        </div>
        <nav class="footer-nav" aria-label="Pied de page">
          <a href="boutique.html">Shop</a><a href="clips.html">Clips</a><a href="magazine.html">L’actu</a><a href="a-propos.html">À propos</a><a href="contact.html">Booking</a>
        </nav>
        <div class="footer-side">
          <img class="sticker sticker--foot" data-mark alt="69💯 le🩸">
          ${socialsHTML()}
        </div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Fucstyle — <a href="${esc(site.bercailUrl)}" target="_blank" rel="noopener">Bercail Records</a></span>
        <span><a href="cgv.html">CGV</a> · <a href="retours.html">Retours</a> · <a href="mentions-legales.html">Mentions légales</a> · <a href="confidentialite.html">Confidentialité</a></span></div>
      <p class="footer-credit"><a href="${esc(window.FUC_DEFAULTS.site.creditUrl)}" target="_blank" rel="noopener">${esc(window.FUC_DEFAULTS.site.credit)}</a></p>
    </div>`;
    document.body.append(footer);
    $('[data-news]', footer).addEventListener('submit', (e) => {
      e.preventDefault();
      const mail = $('#news-mail', footer).value.trim().toLowerCase(), out = $('[data-news-msg]', footer);
      if (!/^\S+@\S+\.\S+$/.test(mail)) { out.innerHTML = '<p class="news-ok">Entre un email valide.</p>'; return; }
      if (S.remote) S.remoteContact({ type: 'subscribe', email: mail });
      else { D.subscribers = D.subscribers || []; if (!D.subscribers.some((s) => s.email === mail)) { D.subscribers.unshift({ email: mail, date: new Date().toISOString() }); S.save(D); } }
      out.innerHTML = '<p class="news-ok">Bienvenue dans la team 🩸 Tu seras prévenu en premier.</p>'; e.target.reset();
    });

    const sp = S.sitePromo(D);
    const an = sp ? { active: true, text: sp.bannerText || sp.name, url: 'boutique.html', colors: S.bannerColors(sp) } : site.announcement;
    if (an && an.active && an.text) {
      let seen = ''; try { seen = sessionStorage.getItem('fucstyle:announce'); } catch (e) {}
      if (seen !== an.text) {
        const bar = document.createElement('div'); bar.className = 'announce';
        if (an.colors) { bar.style.background = an.colors.bannerBg; bar.style.color = an.colors.bannerFg; bar.style.setProperty('--drop', an.colors.bannerDrop); } bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Annonce');
        bar.innerHTML = (an.url ? `<a href="${esc(an.url)}">${esc(an.text)}</a>` : esc(an.text)) + '<button type="button" aria-label="Fermer l’annonce">×</button>';
        $('button', bar).addEventListener('click', () => { bar.remove(); try { sessionStorage.setItem('fucstyle:announce', an.text); } catch (e) {} });
        document.body.prepend(bar);
      }
    }

    // panier
    const bd = document.createElement('div'); bd.className = 'drawer-backdrop';
    const dr = document.createElement('aside'); dr.className = 'drawer'; dr.setAttribute('aria-label', 'Panier'); dr.setAttribute('aria-hidden', 'true');
    dr.innerHTML = `<div class="drawer-head"><h2 class="display">Panier</h2><button class="icon-btn" type="button" data-close-cart aria-label="Fermer le panier">${ICON.close}</button></div>
      <div class="drawer-body" data-cart-body></div><div class="drawer-foot" data-cart-foot></div>`;
    document.body.append(bd, dr);
    const toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); document.body.append(toast);

    const menuBtn = $('.menu-btn'); const nav = $('#nav');
    menuBtn.addEventListener('click', () => { const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });

    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-cart]')) openCart();
      if (e.target.closest('[data-close-cart]') || e.target === bd) closeCart();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });
    document.addEventListener('cart:change', renderCart);
    renderCart();
  }

  function openCart() { renderCart(); $('.drawer').classList.add('open'); $('.drawer').setAttribute('aria-hidden', 'false'); $('.drawer-backdrop').classList.add('open'); $('[data-close-cart]').focus(); }
  function closeCart() { const d = $('.drawer'); if (!d) return; d.classList.remove('open'); d.setAttribute('aria-hidden', 'true'); $('.drawer-backdrop').classList.remove('open'); }
  function toast(msg) { const t = $('.toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600); }

  function renderCart() {
    const lines = S.cartLines(D);
    const count = lines.reduce((s, l) => s + l.qty, 0);
    $$('[data-cart-count]').forEach((el) => { el.textContent = count; el.toggleAttribute('data-zero', !count); });
    const body = $('[data-cart-body]'), foot = $('[data-cart-foot]');
    if (!body) return;
    if (!lines.length) {
      body.innerHTML = `<div class="empty"><p class="display">Panier vide</p><p class="muted">Le merch et l’album t’attendent.</p><a class="btn btn--ink" href="boutique.html">Voir la boutique</a></div>`;
      foot.innerHTML = ''; return;
    }
    body.innerHTML = lines.map((l, i) => `<div class="line">
      <img src="${esc(l.product.images[0])}" alt="">
      <div><strong>${esc(l.product.name)}</strong>${l.variantLabel ? `<small>${esc(l.variantLabel)}</small>` : ''}
        <div class="mini-qty"><button type="button" data-q="${i}" data-d="-1" aria-label="Retirer un">−</button><span>${l.qty}</span><button type="button" data-q="${i}" data-d="1" aria-label="Ajouter un">+</button></div>
        <button class="rm" type="button" data-rm="${i}">Retirer</button></div>
      <div class="lt">${l.was ? `<s class="was">${S.money(l.was * l.qty)}</s>` : ''}${S.money(l.lineTotal)}</div></div>`).join('');
    const sub = lines.reduce((s, l) => s + l.lineTotal, 0);
    const sh = S.shippingFor(D, 'France', sub), left = sh.left || 0;
    foot.innerHTML = `<div class="row"><span>Sous-total</span><strong>${S.money(sub)}</strong></div>
      <div class="row muted"><span>${sh.free ? 'Livraison offerte en France' : left > 0 ? 'Livraison offerte dès ' + S.money(sh.zone.freeFrom) : 'Livraison ' + S.money(sh.price)}</span><span>${left > 0 ? 'encore ' + S.money(left) : ''}</span></div>
      <div class="row total"><span>Total</span><span>${S.money(sub + sh.price)}</span></div>
      <a class="btn btn--blood" href="commande.html">Passer commande</a>`;
    $$('[data-q]', body).forEach((b) => b.addEventListener('click', () => {
      const c = S.cart(); const i = +b.dataset.q; c[i].qty = Math.max(1, c[i].qty + +b.dataset.d);
      const p = D.products.find((x) => x.id === c[i].productId); const max = S.stockOf(p, c[i].variantKey || undefined);
      if (!p.preorder && max && c[i].qty > max) c[i].qty = max;
      S.setCart(c);
    }));
    $$('[data-rm]', body).forEach((b) => b.addEventListener('click', () => { const c = S.cart(); c.splice(+b.dataset.rm, 1); S.setCart(c); }));
  }

  /* ---------- Briques ---------- */
  /* ligne sous le nom : celle choisie par Jeff, sinon le type s’il apporte quelque chose */
  function cardSub(p, out) {
    const norm = (x) => String(x || '').toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');
    let t = p.cardLine != null && String(p.cardLine).trim() ? String(p.cardLine).trim() : (p.type || p.category || '');
    if (!p.cardLine && (!t || norm(p.name).includes(norm(t)) || norm(t).includes(norm(p.name)))) t = '';
    const pre = p.preorder && !out ? 'Précommande' : '';
    const line = [t, pre].filter(Boolean).join(' — ');
    return line ? `<div class="cat">${esc(line)}</div>` : '';
  }
  function productCard(p) {
    const out = S.stockState(p) === 'out';
    const pr = S.priceOf(D, p), short = (n) => S.money(n).replace(/\s?€/, '€');
    return `<a class="poster product-card${out ? ' is-out' : ''}" href="produit.html?p=${encodeURIComponent(p.slug)}">
      <span class="price-tag${pr.was ? ' is-sale' : ''}">${pr.was ? `<s>${short(pr.was)}</s>` : ''}${short(pr.price)}</span>
      ${pr.label ? `<span class="sale-burst">${esc(pr.label)}</span>` : ''}
      ${out ? '<span class="stamp">Rupture</span>' : ''}
      <span class="ph"><img src="${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy"${S.imgStyle(D, p.images[0])}></span>
      <div class="meta">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}<h3>${esc(p.name)}</h3>${cardSub(p, out)}</div>
    </a>`;
  }
  function storyCard(a, cls) {
    return `<a class="story ${cls || ''}" href="article.html?a=${encodeURIComponent(a.slug)}">
      <div class="img"><img src="${esc(a.cover)}" alt="" loading="lazy"></div>
      <div><span class="kicker">${esc(a.category)}</span><h3>${esc(a.title)}</h3>${cls === 'story--big' || cls === 'story--list' ? `<p>${esc(a.excerpt)}</p>` : ''}<span class="date">${S.date(a.date)}</span></div>
    </a>`;
  }
  /* SEO : balises meta + données structurées */
  function setMeta(title, desc, image, ld) {
    if (title) document.title = title;
    const put = (attr, key, val) => { if (!val) return; let m = document.head.querySelector(`meta[${attr}="${key}"]`); if (!m) { m = document.createElement('meta'); m.setAttribute(attr, key); document.head.append(m); } m.setAttribute('content', val); };
    put('name', 'description', desc); put('property', 'og:title', title); put('property', 'og:description', desc);
    if (image && !/^data:/.test(image)) put('property', 'og:image', image);
    put('name', 'twitter:card', 'summary_large_image');
    if (ld) { const s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(ld); document.head.append(s); }
  }
  const posts = () => D.posts.filter((p) => p.status === 'publie').sort((a, b) => b.date.localeCompare(a.date));

  function ytCover(id, title) {
    return `<button class="yt-cover" type="button" data-yt="${esc(id)}" style="background-image:url('https://i.ytimg.com/vi/${esc(id)}/maxresdefault.jpg')" aria-label="Lire le clip ${esc(title)}"><span class="play">${ICON.play}</span></button>`;
  }
  function bindYT(root) {
    $$('[data-yt]', root).forEach((b) => b.addEventListener('click', () => {
      if (music) music.stop();
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true; f.title = b.getAttribute('aria-label');
      b.replaceWith(f);
    }));
  }
  /* ---------- Musique au démarrage (piste YouTube jouée en fond) ----------
     Les navigateurs bloquent parfois le son automatique : dans ce cas la musique
     démarre au premier clic / toucher du visiteur. Bouton vinyle pour couper. */
  let music = null;
  function introMusic(id, title, start) {
    const box = document.createElement('div');
    box.className = 'music-btn';
    box.innerHTML = `<button type="button" aria-pressed="false" aria-label="Lancer la musique"><span class="vinyl" aria-hidden="true"></span><span class="mlabel"><b>${esc(title)}</b><small>Appuie pour le son</small></span></button><div id="yt-intro" aria-hidden="true"></div>`;
    document.body.append(box);
    const btn = $('button', box), small = $('small', box);
    let player = null, wanted = true;
    const paint = (on) => { box.classList.toggle('on', on); btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? 'Couper la musique' : 'Lancer la musique'); small.textContent = on ? 'En lecture' : 'Appuie pour le son'; };
    const playSound = () => { if (!player || !player.unMute) return; player.unMute(); player.setVolume(80); player.playVideo(); paint(true); };
    const gesture = (e) => {
      if (e.target.closest && (e.target.closest('.music-btn') || e.target.closest('[data-yt]'))) return;
      if (wanted) playSound();
      ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.removeEventListener(ev, gesture, true));
    };
    ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.addEventListener(ev, gesture, true));
    btn.addEventListener('click', () => {
      if (box.classList.contains('on')) { wanted = false; player && player.pauseVideo(); paint(false); }
      else { wanted = true; playSound(); }
    });
    const init = () => {
      player = new YT.Player('yt-intro', {
        videoId: id, width: 200, height: 112,
        playerVars: Object.assign({ autoplay: 1, controls: 0, rel: 0, playsinline: 1, loop: 1, playlist: id }, start > 0 ? { start: +start } : {}),
        events: {
          onReady: (e) => { e.target.setVolume(80); e.target.unMute(); e.target.playVideo();
            setTimeout(() => { if (e.target.getPlayerState() === 1 && !e.target.isMuted()) paint(true); }, 1200); },
          onStateChange: (e) => { if (e.data === 2 || e.data === 0) paint(false); if (e.data === 1 && !e.target.isMuted()) paint(true); }
        }
      });
    };
    if (window.YT && window.YT.Player) init();
    else { window.onYouTubeIframeAPIReady = init; const sc = document.createElement('script'); sc.src = 'https://www.youtube.com/iframe_api'; sc.onerror = () => box.remove(); document.head.append(sc); }
    music = { stop: () => { wanted = false; player && player.pauseVideo && player.pauseVideo(); paint(false); } };
  }

  function clipBlock(root, opts) {
    opts = opts || {};
    const clips = site.clips && site.clips.length ? site.clips : [{ id: site.clipYoutube, title: site.clipName }];
    root.innerHTML = `<div class="clip-layout">
      <div class="video-frame" data-frame>${ytCover(clips[0].id, clips[0].title)}</div>
      <div><p class="muted" style="margin-top:0">${esc(clips[0].title)}</p>
        <ul class="clip-list">${clips.map((c, i) => `<li><button type="button" data-pick="${i}" aria-current="${i === 0}"><img src="https://i.ytimg.com/vi/${esc(c.id)}/mqdefault.jpg" alt=""><span><strong>${esc(c.title)}</strong><small>YouTube</small></span></button></li>`).join('')}</ul>
        <p style="margin-top:24px"><a class="link-arrow" href="${esc(site.socials.youtube)}" target="_blank" rel="noopener">Abonne-toi à la chaîne</a></p></div></div>`;
    bindYT(root);
    $$('[data-pick]', root).forEach((b) => b.addEventListener('click', () => {
      const c = clips[+b.dataset.pick];
      $('[data-frame]', root).innerHTML = ytCover(c.id, c.title); bindYT(root);
      $('[data-frame] [data-yt]', root).click();
      $$('[data-pick]', root).forEach((x) => x.setAttribute('aria-current', x === b));
      $('p.muted', root).textContent = c.title;
    }));
  }
  function discBlock(root) {
    root.innerHTML = D.albums.map((a, i) => `<button class="disc" type="button" data-album="${i}">
      <div class="sleeve"><img src="${esc(a.cover)}" alt="" loading="lazy"></div>
      <h3>${esc(a.title)}</h3><small>${esc(a.artist)}${a.year ? ' — ' + esc(a.year) : ''}</small></button>`).join('');
    let dlg = $('#album-dialog');
    if (!dlg) { dlg = document.createElement('dialog'); dlg.className = 'modal'; dlg.id = 'album-dialog'; document.body.append(dlg); }
    $$('[data-album]', root).forEach((b) => b.addEventListener('click', () => {
      const a = D.albums[+b.dataset.album];
      dlg.innerHTML = `<div class="modal-inner"><img src="${esc(a.cover)}" alt="Pochette ${esc(a.title)}">
        <div class="modal-text"><button class="icon-btn close" type="button" aria-label="Fermer">${ICON.close}</button>
        <h2 class="display">${esc(a.title)}</h2><p class="muted">${esc(a.artist)}${a.year ? ' — ' + esc(a.year) : ''}</p>
        <div class="prose">${S.paras(a.text)}</div>
        <div class="modal-links">${(a.links || []).map((l) => `<a class="btn btn--ink" href="${esc(l.url)}"${/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)}</a>`).join('')}</div></div></div>`;
      $('.close', dlg).addEventListener('click', () => dlg.close());
      dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
      dlg.showModal();
    }));
  }
  function contactForm(root, dark) {
    root.innerHTML = `<form class="form" novalidate>
      <div class="two"><div class="field"><label for="cf-name">Nom</label><input id="cf-name" name="name" autocomplete="name"></div>
      <div class="field"><label for="cf-phone">Téléphone</label><input id="cf-phone" name="phone" type="tel" autocomplete="tel"></div></div>
      <div class="field"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="cf-subject">Sujet</label><select id="cf-subject" name="subject" ${dark ? 'style="background:transparent;color:#fff;border-color:rgba(255,255,255,.6)"' : ''}><option>Booking</option><option>Collab</option><option>Commande</option><option>Presse</option><option>Autre</option></select></div>
      <div class="field"><label for="cf-msg">Message</label><textarea id="cf-msg" name="message" required></textarea></div>
      <div data-msg></div>
      <button class="btn btn--blood" type="submit">Envoyer le message</button></form>`;
    const f = $('form', root);
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(f));
      const msg = $('[data-msg]', root);
      if (!/^\S+@\S+\.\S+$/.test(fd.email || '') || !(fd.message || '').trim()) {
        msg.innerHTML = '<p class="form-msg">Ajoute ton email et ton message pour envoyer.</p>'; return;
      }
      if (S.remote) {
        S.remoteContact({ type: 'message', ...fd }).then((ok) => { msg.innerHTML = ok ? '<p class="form-msg">Message envoyé. On te répond vite.</p>' : '<p class="form-msg">L’envoi a échoué. Vérifie ta connexion et réessaie.</p>'; if (ok) f.reset(); });
        return;
      }
      D.messages = D.messages || [];
      D.messages.unshift({ id: S.uid('msg'), date: new Date().toISOString(), read: false, ...fd });
      S.save(D);
      msg.innerHTML = `<p class="form-msg">Message envoyé. On te répond vite.</p>`;
      f.reset();
    });
  }

  /* ---------- Pages ---------- */
  const pages = {
    home() {
      const v = $('[data-hero-video]');
      v.src = site.heroVideo;
      if (site.autoplayClip) { const c0 = (site.clips && site.clips[0]) || { id: site.clipYoutube, title: site.clipName }; introMusic(site.introTrack || c0.id, site.introTitle || c0.title, site.introStart); }
      const t = esc(site.ticker); $('[data-ticker]').innerHTML = Array(8).fill(`<span>${t}</span><span aria-hidden="true">🩸</span>`).join('');

      $('[data-shop-title]').textContent = site.shopTitle;
      $('[data-products]').innerHTML = S.visibleProducts(D).filter((p) => p.featured).map(productCard).join('');
      $('[data-clip-title]').textContent = site.clipTitle;
      clipBlock($('[data-clip]'));

      $('[data-bio-photo]').src = site.bioPhoto;
      $('[data-bio-title]').textContent = site.bioTitle;
      $('[data-bio-sub]').textContent = site.bioSubtitle;
      $('[data-bio-text]').innerHTML = S.paras(site.bioText) + `<p><strong>${esc(site.bioCta)}</strong></p>` + socialsHTML();
      $('[data-spotify]').src = `https://open.spotify.com/embed/artist/${site.spotifyArtist}?utm_source=generator&theme=0`;

      $('[data-freestyles]').innerHTML = D.freestyles.map((f, i) => `<a class="poster" href="${esc(f.url)}" target="_blank" rel="noopener" aria-label="Freestyle ${i + 1} sur Instagram"><img src="${esc(f.image)}" alt="" loading="lazy"><span class="ig">${ICON.play}</span></a>`).join('');
      $('[data-stats]').innerHTML = site.stats.map((s) => `<div class="stat"><span class="n" data-count="${esc(s.value)}">${esc(s.value)}<span class="s">${esc(s.suffix)}</span></span><span class="l">${esc(s.label)}</span></div>`).join('');
      countUp();

      $('[data-inde-title]').textContent = site.indeTitle;
      $('[data-inde-text]').innerHTML = S.paras(site.indeText);
      $('[data-bercail]').href = site.bercailUrl; $('[data-bercail] img').src = site.bercailLogo;
      $('[data-tiles]').innerHTML = site.tiles.map((t) => `<a class="tile" href="${esc(t.href)}"><img src="${esc(t.image)}" alt="" loading="lazy"><span>${esc(t.label)}</span></a>`).join('');
      discBlock($('[data-discs]'));

      const ps = posts();
      $('[data-mag]').innerHTML = ps.length ? `${storyCard(ps[0], 'story--big')}<div class="mag-side">${ps.slice(1, 4).map((a) => storyCard(a)).join('')}</div>` : '';

      $('[data-contact-title]').textContent = site.contactTitle;
      $('[data-contact-text]').textContent = site.contactText;
      $('[data-contact-img]').src = site.contactImage;
      contactForm($('[data-contact-form]'), true);
    },

    shop() {
      $('[data-banner]').textContent = site.shopBanner;
      const all = S.visibleProducts(D);
      const cats = ['Tout', ...new Set(all.map((p) => p.category))];
      let cat = 'Tout', sort = 'default';
      const chips = $('[data-chips]');
      chips.innerHTML = cats.map((c) => `<button class="chip" type="button" aria-pressed="${c === cat}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
      const draw = () => {
        let list = all.filter((p) => cat === 'Tout' || p.category === cat);
        if (sort === 'asc') list = [...list].sort((a, b) => a.price - b.price);
        if (sort === 'desc') list = [...list].sort((a, b) => b.price - a.price);
        $('[data-products]').innerHTML = list.map(productCard).join('') || '<p>Aucun article dans cette catégorie.</p>';
        $('[data-count]').textContent = list.length + ' article' + (list.length > 1 ? 's' : '');
      };
      chips.addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (!b) return; cat = b.dataset.cat; $$('.chip', chips).forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(); });
      $('[data-sort]').addEventListener('change', (e) => { sort = e.target.value; draw(); });
      draw();
    },

    product() {
      const slug = new URLSearchParams(location.search).get('p');
      const p = D.products.find((x) => x.slug === slug && x.status !== 'brouillon');
      const root = $('[data-pdp]');
      if (!p) { root.innerHTML = `<div class="empty"><p class="display">Article introuvable</p><p>Il a peut-être été retiré de la boutique.</p><a class="btn btn--ink" href="boutique.html">Retour à la boutique</a></div>`; return; }
      setMeta(p.seoTitle || (p.name + ' — Boutique Fucstyle'), p.seoDesc || p.short, p.images[0], {
        '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: p.seoDesc || p.short, sku: p.sku,
        image: p.images.filter((u) => !/^data:/.test(u)), brand: { '@type': 'Brand', name: 'Fucstyle' },
        offers: { '@type': 'Offer', priceCurrency: 'EUR', price: S.priceOf(D, p).price, availability: 'https://schema.org/' + (S.stockOf(p) > 0 ? 'InStock' : p.preorder ? 'PreOrder' : 'OutOfStock') }
      });
      let img = 0, size = '', color = '';
      const hasV = p.variants.length > 0;
      const variantFor = () => p.variants.find((v) => (v.size || '') === (p.sizes.length ? size : '') && (v.color || '') === (p.colors.length ? color : ''));
      const avail = (s, c) => p.variants.some((v) => (!s || v.size === s) && (!c || v.color === c) && (v.stock > 0 || p.preorder));

      root.innerHTML = `<div class="pdp">
        <div class="pdp-gallery"><div class="poster" style="--r:-.8deg">${S.priceOf(D, p).label ? `<span class="sale-burst">${esc(S.priceOf(D, p).label)}</span>` : ''}<span class="ph"><img data-main src="${esc(p.images[0])}" alt="${esc(p.name)}"${S.imgStyle(D, p.images[0])}></span></div>
          ${p.images.length > 1 ? `<div class="thumbs">${p.images.map((u, i) => `<button type="button" data-img="${i}" aria-current="${i === 0}" aria-label="Photo ${i + 1}"><img src="${esc(u)}" alt=""></button>`).join('')}</div>` : ''}</div>
        <div class="pdp-info">
          <p class="muted" style="margin:0 0 10px"><a href="boutique.html">Shop</a> / ${esc(p.category)}</p>
          <h1 class="display">${esc(p.name)}</h1>
          <div class="pdp-price">${S.money(S.priceOf(D, p).price)}${S.priceOf(D, p).was ? `<s>${S.money(S.priceOf(D, p).was)}</s><span class="pdp-save">${esc(S.priceOf(D, p).label)}</span>` : ''}</div>
          <p class="pdp-short">${esc(p.short)}</p>
          <form data-buy>
            ${p.sizes.length ? `<fieldset class="opt"><legend>Taille</legend><div class="opt-row">${p.sizes.map((s) => `<label><input type="radio" name="size" value="${esc(s)}" ${avail(s, '') ? '' : 'disabled'}><span>${esc(s)}</span></label>`).join('')}</div></fieldset>` : ''}
            ${p.colors.length ? `<fieldset class="opt"><legend>Vinyle collector</legend><div class="opt-row">${p.colors.map((c) => `<label><input type="radio" name="color" value="${esc(c)}" ${avail('', c) ? '' : 'disabled'}><span>${esc(c)}</span></label>`).join('')}</div></fieldset>` : ''}
            <div class="buy-row"><div class="qty"><button type="button" data-qd="-1" aria-label="Moins">−</button><input data-qty type="number" min="1" value="1" aria-label="Quantité"><button type="button" data-qd="1" aria-label="Plus">+</button></div>
              <button class="btn btn--blood" type="submit" data-add>Ajouter au panier</button></div>
            <p class="stock-line" data-stock></p>
          </form>
          <div class="ship-note">${esc(site.shippingNote)}</div>
          <div class="pdp-desc prose">${S.paras(p.description)}</div>
        </div></div>`;

      const main = $('[data-main]', root);
      $$('[data-img]', root).forEach((b) => b.addEventListener('click', () => { img = +b.dataset.img; main.src = p.images[img]; const mm = (D.imgMeta || {})[p.images[img]]; if (mm && mm.cut) main.dataset.cut = '1'; else delete main.dataset.cut; $$('[data-img]', root).forEach((x) => x.setAttribute('aria-current', x === b)); }));
      const qty = $('[data-qty]', root);
      $$('[data-qd]', root).forEach((b) => b.addEventListener('click', () => { qty.value = Math.max(1, (+qty.value || 1) + +b.dataset.qd); }));
      const add = $('[data-add]', root), stockEl = $('[data-stock]', root);
      const update = () => {
        size = ($('input[name=size]:checked', root) || {}).value || '';
        color = ($('input[name=color]:checked', root) || {}).value || '';
        if (hasV) {
          const ready = (!p.sizes.length || size) && (!p.colors.length || color);
          const v = ready ? variantFor() : null;
          if (!ready) { add.disabled = true; add.textContent = p.sizes.length && !size ? 'Choisis ta taille' : 'Choisis ta couleur'; stockEl.textContent = ''; return; }
          const st = v ? v.stock : 0;
          add.disabled = !(st > 0 || p.preorder);
          add.textContent = add.disabled ? 'Rupture de stock' : 'Ajouter au panier';
          stockEl.className = 'stock-line' + (st <= p.lowStock ? ' low' : '');
          stockEl.textContent = st <= 0 ? (p.preorder ? 'Disponible en précommande' : 'Plus de stock sur cette version') : st <= p.lowStock ? `Plus que ${st} en stock` : 'En stock';
        } else {
          const st = p.stock;
          add.disabled = st <= 0;
          add.textContent = st <= 0 ? 'Rupture de stock' : 'Ajouter au panier';
          stockEl.className = 'stock-line' + (st > 0 && st <= p.lowStock ? ' low' : '');
          stockEl.textContent = st <= 0 ? 'Rupture de stock' : st <= p.lowStock ? `Plus que ${st} en stock` : `${st} en stock`;
        }
      };
      root.addEventListener('change', update); update();
      $('[data-buy]', root).addEventListener('submit', (e) => {
        e.preventDefault(); if (add.disabled) return;
        const v = hasV ? variantFor() : null;
        S.addToCart(p.id, v ? v.key : '', Math.max(1, +qty.value || 1));
        toast(p.name + ' ajouté au panier'); openCart();
      });
      const rel = S.visibleProducts(D).filter((x) => x.id !== p.id).slice(0, 4);
      $('[data-related]').innerHTML = rel.map(productCard).join('');
    },

    clips() {
      $('[data-banner-img]').src = site.clipsBanner;
      clipBlock($('[data-clip]'));
      $('[data-products]').innerHTML = S.visibleProducts(D).filter((p) => p.featured).slice(0, 4).map(productCard).join('');
      $('[data-freestyles]').innerHTML = D.freestyles.map((f, i) => `<a class="poster" href="${esc(f.url)}" target="_blank" rel="noopener" aria-label="Freestyle ${i + 1} sur Instagram"><img src="${esc(f.image)}" alt="" loading="lazy"><span class="ig">${ICON.play}</span></a>`).join('');
    },

    magazine() {
      const all = posts();
      const cats = ['Tout', ...new Set(all.map((p) => p.category))];
      let cat = new URLSearchParams(location.search).get('cat') || 'Tout';
      const chips = $('[data-chips]');
      chips.innerHTML = cats.map((c) => `<button class="chip" type="button" aria-pressed="${c === cat}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
      const draw = () => {
        const list = all.filter((p) => cat === 'Tout' || p.category === cat);
        $('[data-list]').innerHTML = list.map((a) => storyCard(a, 'story--list')).join('') || '<p>Aucun article pour le moment.</p>';
      };
      chips.addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (!b) return; cat = b.dataset.cat; $$('.chip', chips).forEach((x) => x.setAttribute('aria-pressed', x === b)); draw(); });
      draw();
    },

    article() {
      const slug = new URLSearchParams(location.search).get('a');
      const a = D.posts.find((x) => x.slug === slug && x.status === 'publie');
      const root = $('[data-article]');
      if (!a) { root.innerHTML = `<section class="section"><div class="wrap empty"><p class="display">Article introuvable</p><a class="btn btn--ink" href="magazine.html">Retour à l’actu</a></div></section>`; return; }
      setMeta(a.seoTitle || (a.title + ' — L’actu Fucstyle'), a.seoDesc || a.excerpt, a.cover, {
        '@context': 'https://schema.org', '@type': 'NewsArticle', headline: a.title, description: a.seoDesc || a.excerpt,
        image: /^data:/.test(a.cover) ? undefined : a.cover, datePublished: a.date, keywords: [a.keyword].concat(a.tags || []).filter(Boolean).join(', '),
        author: { '@type': 'Organization', name: 'Fucstyle' }, publisher: { '@type': 'Organization', name: 'Fucstyle', logo: { '@type': 'ImageObject', url: site.logo } }
      });
      const others = posts().filter((x) => x.id !== a.id).slice(0, 3);
      root.innerHTML = `<header class="article-hero"><div class="wrap">
          <p style="margin:0 0 16px"><a href="magazine.html?cat=${encodeURIComponent(a.category)}" class="kicker" style="background:var(--blood);color:#fff;padding:4px 10px;text-decoration:none;font-weight:700">${esc(a.category)}</a></p>
          <h1 class="display">${esc(a.title)}</h1>
          <p class="meta">${S.date(a.date)}${a.source && a.source.name ? ' — d’après ' + esc(a.source.name) : ''}</p>
          <div class="cover"><img src="${esc(a.cover)}" alt=""></div></div></header>
        <div class="article-body"><div class="wrap">
          <div class="prose"><p class="lede">${esc(a.excerpt)}</p>${S.md(a.body)}</div>
          ${a.source && a.source.url ? `<div class="source-box"><span>Source : <strong>${esc(a.source.name)}</strong></span><a class="link-arrow" href="${esc(a.source.url)}" target="_blank" rel="noopener">Lire l’article original</a></div>` : ''}
        </div></div>
        ${others.length ? `<section class="section section--paper"><div class="wrap"><div class="sec-head"><h2 class="display h-section">À lire aussi</h2><a class="link-arrow" href="magazine.html">Toute l’actu</a></div><div class="mag-list">${others.map((o) => storyCard(o, 'story--list')).join('')}</div></div></section>` : ''}`;
    },

    about() {
      $('[data-intro]').innerHTML = S.paras(site.aboutIntro);
      $('[data-photo]').src = site.aboutPhoto;
      $('[data-bio-title]').textContent = site.bioTitle;
      $('[data-bio-sub]').textContent = site.bioSubtitle;
      $('[data-text]').innerHTML = S.paras(site.aboutText) + socialsHTML();
      $('[data-stats]').innerHTML = site.stats.map((s) => `<div class="stat"><span class="n">${esc(s.value)}<span class="s">${esc(s.suffix)}</span></span><span class="l">${esc(s.label)}</span></div>`).join('');
      $('[data-inde-text]').innerHTML = S.paras(site.indeText);
      discBlock($('[data-discs]'));
      const ev = [...D.events].sort((a, b) => b.date.localeCompare(a.date));
      const today = new Date().toISOString().slice(0, 10);
      $('[data-dates]').innerHTML = ev.map((e) => `<li class="${e.date < today ? 'past' : ''}"><span class="d">${S.date(e.date, { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        <span><strong>${esc(e.title)}</strong><br><span class="muted">${esc(e.venue)}, ${esc(e.city)}</span></span>
        ${e.url ? `<a class="link-arrow" href="${esc(e.url)}" target="_blank" rel="noopener">${e.date < today ? 'Voir' : 'Billets'}</a>` : '<span></span>'}</li>`).join('');
    },

    contact() {
      $('[data-contact-title]').textContent = site.contactTitle;
      $('[data-contact-text]').textContent = site.contactText;
      $('[data-contact-img]').src = site.contactImage;
      $('[data-socials]').innerHTML = socialsHTML();
      contactForm($('[data-contact-form]'), false);
    },

    legal() {
      const doc = document.body.dataset.doc, txt = (D.legal || {})[doc];
      if (txt) $('[data-legal]').innerHTML = S.md(txt);
    },

    checkout() {
      const root = $('[data-checkout]');
      let promo = null;
      const draw = () => {
        const lines = S.cartLines(D);
        if (!lines.length) { root.innerHTML = `<div class="empty"><p class="display">Ton panier est vide</p><a class="btn btn--ink" href="boutique.html">Voir la boutique</a></div>`; return; }
        const sub = lines.reduce((s, l) => s + l.lineTotal, 0);
        const disc = promo ? S.codeDiscount(D, promo, lines) : 0;
        const country = ($('#c-country') || {}).value || 'France';
        const shInfo = S.shippingFor(D, country, sub - disc), ship = shInfo.price;
        $('[data-summary]').innerHTML = `<h2 class="display" style="font-size:2.4rem;margin-bottom:12px">Ta commande</h2>
          ${lines.map((l) => `<div class="line"><img src="${esc(l.product.images[0])}" alt=""><div><strong>${esc(l.product.name)}</strong><small>${esc(l.variantLabel)}${l.variantLabel ? ' — ' : ''}x${l.qty}</small></div><div class="lt">${S.money(l.lineTotal)}</div></div>`).join('')}
          <div class="promo-row"><input data-code placeholder="Code promo" aria-label="Code promo" value="${promo ? esc(promo.code) : ''}"><button type="button" data-apply>Appliquer</button></div>
          <div class="row"><span>Sous-total</span><span>${S.money(sub)}</span></div>
          ${disc ? `<div class="row"><span>Remise ${esc(promo.code)}</span><span>−${S.money(disc)}</span></div>` : ''}
          <div class="row"><span>Livraison ${esc(shInfo.zone.name)}${shInfo.zone.delay ? `<br><small style="opacity:.7">${esc(shInfo.zone.delay)}</small>` : ''}</span><span>${ship ? S.money(ship) : 'Offerte'}</span></div>
          <div class="row total"><span>Total</span><span>${S.money(sub - disc + ship)}</span></div>`;
        $('[data-apply]').addEventListener('click', () => {
          const code = ($('[data-code]').value || '').trim().toUpperCase();
          const pr = D.promos.find((x) => x.code.toUpperCase() === code && x.active);
          const ok = pr && S.live({ ...pr, active: true }) && S.codeDiscount(D, pr, S.cartLines(D)) > 0;
          promo = ok ? pr : null; draw();
          toast(ok ? 'Code ' + pr.code + ' appliqué' : pr ? 'Ce code ne s’applique à aucun article de ton panier' : 'Ce code n’existe pas ou n’est plus actif');
        });
      };
      root.innerHTML = `<div class="checkout"><form class="form" data-form novalidate>
          <h2 class="display" style="font-size:2.6rem">Livraison</h2>
          <div class="two"><div class="field"><label for="c-first">Prénom</label><input id="c-first" name="first" autocomplete="given-name" required></div>
          <div class="field"><label for="c-last">Nom</label><input id="c-last" name="last" autocomplete="family-name" required></div></div>
          <div class="two"><div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="c-phone">Téléphone</label><input id="c-phone" name="phone" type="tel" autocomplete="tel"></div></div>
          <div class="field"><label for="c-address">Adresse</label><input id="c-address" name="address" autocomplete="street-address" required></div>
          <div class="two"><div class="field"><label for="c-zip">Code postal</label><input id="c-zip" name="zip" autocomplete="postal-code" inputmode="numeric" required></div>
          <div class="field"><label for="c-city">Ville</label><input id="c-city" name="city" autocomplete="address-level2" required></div></div>
          <div class="field"><label for="c-country">Pays</label><select id="c-country" name="country">${S.countries(D).map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>
          <label style="display:flex;gap:10px;align-items:flex-start"><input type="checkbox" name="cgv" required style="width:20px;height:20px;margin-top:2px"> <span>J’ai lu et j’accepte les <a href="cgv.html" target="_blank">conditions générales de vente</a> et la <a href="retours.html" target="_blank">politique de retour</a>.</span></label>
          <div data-err></div>
          <button class="btn btn--blood" type="submit" data-topay>Continuer vers le paiement</button>
          <div class="pay-box" data-paybox hidden><h3 class="display" style="font-size:2rem;margin:0 0 6px">Paiement</h3>
            <p class="pay-note" style="margin:0 0 14px">Carte bancaire ou compte PayPal, paiement sécurisé par PayPal.</p>
            ${!(D.payment && D.payment.paypalClientId) ? '<p class="pay-test">Mode test : aucun vrai paiement n’est encaissé tant que l’identifiant PayPal n’est pas renseigné dans le tableau de bord.</p>' : ''}
            <div data-paypal></div><button class="link-arrow" type="button" data-back style="background:none;border:0;cursor:pointer;margin-top:10px">Modifier mes infos</button></div>
          <p class="pay-note" data-paynote>Paiement sécurisé par carte bancaire ou PayPal.</p>
        </form><aside class="summary" data-summary></aside></div>`;
      draw();
      if (!$('[data-form]')) return;
      $('#c-country').addEventListener('change', draw);
      $('[data-form]').addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = Object.fromEntries(new FormData(e.target));
        const need = ['first', 'last', 'email', 'address', 'zip', 'city'];
        const miss = need.filter((k) => !(fd[k] || '').trim());
        if (miss.length || !/^\S+@\S+\.\S+$/.test(fd.email) || !fd.cgv) {
          $('[data-err]').innerHTML = `<p class="form-msg">${!fd.cgv && !miss.length ? 'Accepte les CGV pour continuer.' : 'Complète les champs de livraison et un email valide.'}</p>`; return;
        }
        const lines = S.cartLines(D); if (!lines.length) return;
        delete fd.cgv;
        $('[data-err]').innerHTML = '';
        const form = e.target;
        $$('input,select', form).forEach((i) => (i.disabled = true));
        $('[data-topay]').hidden = true; $('[data-paynote]').hidden = true; $('[data-paybox]').hidden = false;
        $('[data-back]').onclick = () => { $$('input,select', form).forEach((i) => (i.disabled = false)); $('[data-topay]').hidden = false; $('[data-paynote]').hidden = false; $('[data-paybox]').hidden = true; $('[data-paypal]').innerHTML = ''; };
        const total = () => { const l = S.cartLines(D); const sub = l.reduce((a, x) => a + x.lineTotal, 0); const disc = promo ? S.codeDiscount(D, promo, l) : 0; return +(sub - disc + S.shippingFor(D, fd.country, sub - disc).price).toFixed(2); };
        const finish = async (payment, ref) => {
          if (S.remote) {
            const lines = S.cartLines(D);
            try {
              const order = await S.remoteOrder({ customer: fd, lines: lines.map((l) => ({ productId: l.productId, variantKey: l.variantKey, qty: l.qty })), code: promo ? promo.code : '', payment, paypalId: ref || '', paidTotal: total() });
              S.setCart([]); thanks(order);
            } catch (err) {
              $('[data-paybox]').innerHTML = `<p class="form-msg">Ton paiement est bien passé (référence PayPal ${esc(ref || '')}), mais la commande n’a pas pu être enregistrée. Envoie-nous cette référence via la page <a href="contact.html">Booking / contact</a>, on s’en occupe tout de suite.</p>`;
            }
            return;
          }
          const order = S.placeOrder(D, fd, S.cartLines(D), promo);
          order.payment = payment; order.paypalId = ref || ''; S.save(D);
          thanks(order);
        };
        loadPayPal().then((paypal) => {
          paypal.Buttons({
            style: { layout: 'vertical', color: 'black', shape: 'rect', label: 'pay' },
            createOrder: (data, actions) => actions.order.create({ purchase_units: [{ description: 'Commande fucstyle.fr', amount: { currency_code: 'EUR', value: total().toFixed(2) } }], application_context: { shipping_preference: 'NO_SHIPPING' } }),
            onApprove: (data, actions) => actions.order.capture().then((det) => finish(data.paymentSource === 'card' ? 'Carte bancaire (PayPal)' : 'PayPal', det && det.id)),
            onError: () => { $('[data-err]').innerHTML = '<p class="form-msg">Le paiement n’a pas abouti. Réessaie ou choisis un autre moyen.</p>'; }
          }).render($('[data-paypal]'));
        }).catch(() => { $('[data-paypal]').innerHTML = '<p class="form-msg">Le module de paiement PayPal ne se charge pas. Vérifie ta connexion et recharge la page.</p>'; });
      });
      function thanks(order) {
        const fd = order.customer;
        root.innerHTML = `<div class="empty" style="max-width:640px;margin:0 auto"><p class="display" style="font-size:4rem">Merci pour la force 🩸</p>
          <p class="lead" style="margin:0 auto 12px">Commande <strong>${esc(order.id)}</strong> enregistrée — total ${S.money(order.total)}.</p>
          <p class="muted">Un email de confirmation part à ${esc(fd.email)}. ${esc(site.shippingNote)}</p>
          <a class="btn btn--ink" href="index.html">Retour à l’accueil</a></div>`;
        renderCart();
      }
    }
  };

  function countUp() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const els = $$('[data-count]');
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return; io.unobserve(en.target);
      const el = en.target, end = +el.dataset.count, suf = el.querySelector('.s').outerHTML; const t0 = performance.now();
      const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.innerHTML = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: .5 });
    els.forEach((el) => io.observe(el));
  }

  /* Gouttes 🩸 : l'emoji s'affiche rose sur certains écrans, on le remplace par une vraie goutte rouge */
  const DROP = '<svg class="drop" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 3C32 3 11 28.5 11 41.5C11 53.1 20.4 62 32 62C43.6 62 53 53.1 53 41.5C53 28.5 32 3 32 3Z"/></svg>';
  function dropify(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.nodeValue.includes('🩸') && !n.parentNode.closest('textarea,script,style,option,title,svg,input') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => { const span = document.createElement('span'); span.innerHTML = esc(n.nodeValue).replace(/(\S*)🩸([^\s]*)/g, (m, a, b) => '<span class="nw">' + a + DROP + b + '</span>'); n.replaceWith(...span.childNodes); });
  }
  function marks() {
    $$('img[data-mark]').forEach((im) => {
      if (site.mark) { if (!im.getAttribute('src')) im.src = site.mark; return; }
      const t = document.createElement('span');
      t.className = im.className + ' tag69'; t.setAttribute('aria-hidden', 'true');
      t.innerHTML = '<span class="t69">69</span><span class="t100">100</span><span class="tle">LE</span>' + DROP;
      im.replaceWith(t);
    });
  }

  /* ---------- PayPal (carte bancaire + PayPal) ---------- */
  let ppPromise = null;
  function loadPayPal() {
    if (window.paypal) return Promise.resolve(window.paypal);
    if (ppPromise) return ppPromise;
    const id = (D.payment && D.payment.paypalClientId) || 'test';
    ppPromise = new Promise((res, rej) => {
      const sc = document.createElement('script');
      sc.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(id)}&currency=EUR&locale=fr_FR&intent=capture&enable-funding=card&disable-funding=paylater,venmo`;
      sc.onload = () => (window.paypal ? res(window.paypal) : rej()); sc.onerror = rej; document.head.append(sc);
    });
    return ppPromise;
  }

  /* ---------- Typos & couleurs choisies dans le tableau de bord ---------- */
  function applyDesign() {
    const ds = D.design; if (!ds) return;
    const r = document.documentElement.style;
    const CF = D.customFonts || [];
    const files = CF.filter((f) => f.url && (f.name === ds.display || f.name === ds.text));
    if (files.length) { const st = document.createElement('style'); st.textContent = files.map((f) => `@font-face{font-family:'${String(f.name).replace(/'/g, '')}';src:url('${String(f.url).replace(/'/g, '%27')}');font-display:swap}`).join(''); document.head.append(st); }
    const fams = [ds.display, ds.text].filter((f) => f && !files.some((x) => x.name === f));
    if (fams.length) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?' + fams.map((f) => 'family=' + f.replace(/ /g, '+') + ':wght@400;600;700;800;900').join('&') + '&display=swap';
      document.head.append(l);
    }
    if (ds.display) r.setProperty('--f-display', `'${ds.display}', 'Arial Narrow', Impact, sans-serif`);
    if (ds.text) r.setProperty('--f-text', `'${ds.text}', 'Helvetica Neue', Arial, sans-serif`);
    if (ds.blood) r.setProperty('--blood', ds.blood);
    if (ds.wall) r.setProperty('--wall', ds.wall);
    if (ds.paper) r.setProperty('--paper', ds.paper);
    if (ds.titleScale && ds.titleScale !== 1) r.setProperty('--title-scale', ds.titleScale);
    if (ds.upper === false) document.documentElement.classList.add('no-upper');
    if (ds.cards) document.documentElement.dataset.cards = ds.cards;
    if (ds.photoBg) r.setProperty('--photo-bg', ds.photoBg);
  }

  /* ---------- Blocs ajoutés depuis le tableau de bord ---------- */
  const ytIdOf = (u) => { const m = String(u || '').match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : (/^[\w-]{11}$/.test(u || '') ? u : ''); };
  const pic = (u, alt, extra) => u ? `<img src="${esc(u)}" alt="${esc(alt || '')}" loading="lazy"${S.imgStyle(D, u)}${extra || ''}>` : '';
  function renderBlock(b) {
    const bg = { ink: ' section--ink', paper: ' section--paper', blood: ' section--blood', wall: '' }[b.bg || 'wall'] || '';
    const btn = b.button && b.link ? `<p style="margin-top:24px"><a class="btn ${b.bg === 'ink' || b.bg === 'blood' ? 'btn--ghost' : 'btn--ink'}" href="${esc(b.link)}">${esc(b.button)}</a></p>` : '';
    const title = b.title ? `<h2 class="display h-section">${esc(b.title)}</h2>` : '';
    const text = b.text ? `<div class="prose lead">${S.md(b.text)}</div>` : '';
    const al = b.align === 'center' ? ' blk--center' : '';
    let inner = '';
    switch (b.type) {
      case 'image-texte':
        inner = `<div class="wrap blk-split${b.side === 'right' ? ' blk-split--rev' : ''}"><div class="poster" style="--r:${b.side === 'right' ? '1.2' : '-1.2'}deg">${pic(b.image, b.title)}</div><div>${title}${text}${btn}</div></div>`; break;
      case 'banniere':
        return `<section class="blk-banner" data-blk="${b.id}">${pic(b.image, b.title)}<div class="wrap${al}">${title}${text}${btn}</div></section>`;
      case 'galerie':
        inner = `<div class="wrap${al}">${title}${text}<div class="freestyles wall" style="margin-top:32px">${(b.images || []).map((u) => `<div class="poster">${pic(u)}</div>`).join('')}</div>${btn}</div>`; break;
      case 'video': {
        const id = ytIdOf(b.video);
        inner = `<div class="wrap${al}">${title}${text}${id ? `<div class="video-frame" style="margin-top:28px"><button class="yt-cover" type="button" data-yt="${esc(id)}" style="background-image:url('https://i.ytimg.com/vi/${esc(id)}/maxresdefault.jpg')" aria-label="Lire la vidéo"><span class="play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg></span></button></div>` : ''}${btn}</div>`; break;
      }
      case 'citation':
        inner = `<div class="wrap blk--center"><blockquote class="blk-quote display">« ${esc(b.text || '')} »</blockquote>${b.title ? `<p class="blk-quote-by">${esc(b.title)}</p>` : ''}${btn}</div>`; break;
      case 'produits': {
        let list = S.visibleProducts(D);
        if (b.category) list = list.filter((p) => p.category === b.category);
        list = list.slice(0, +b.max || 4);
        inner = `<div class="wrap">${title ? `<div class="sec-head">${title}<a class="link-arrow" href="boutique.html">Toute la boutique</a></div>` : ''}${text}<div class="products wall">${list.map(productCard).join('')}</div></div>`; break;
      }
      default:
        inner = `<div class="wrap${al}">${title}${text}${btn}</div>`;
    }
    return `<section class="section blk${bg}" data-blk="${b.id}">${inner}</section>`;
  }
  function applyLayout() {
    const main = $('main'); if (!main) return;
    const blocks = (D.blocks || []).filter((b) => (b.page || 'home') === page && !b.hidden);
    const byId = {}; blocks.forEach((b) => (byId[b.id] = b));
    const order = (D.layout && D.layout[page]) || null;
    const tmp = document.createElement('div');
    const nodeFor = (id) => {
      if (byId[id]) { tmp.innerHTML = renderBlock(byId[id]); return tmp.firstElementChild; }
      return main.querySelector(`:scope > [data-sec="${id}"]`);
    };
    if (order && order.length) {
      const seen = new Set();
      order.forEach((it) => {
        seen.add(it.id);
        const n = nodeFor(it.id); if (!n) return;
        if (it.hidden) { n.remove(); return; }
        main.append(n);
      });
      blocks.filter((b) => !seen.has(b.id)).forEach((b) => main.append(nodeFor(b.id)));
    } else blocks.forEach((b) => main.append(nodeFor(b.id)));
    bindYT(main);
    const styles = ((D.sectionStyle || {})[page]) || {};
    Object.entries(styles).forEach(([id, st]) => {
      const n = main.querySelector(`:scope > [data-sec="${id}"], :scope > [data-blk="${id}"]`); if (!n) return;
      const img = st.image ? st.image : '';
      if (img) n.style.background = `linear-gradient(rgba(0,0,0,${(st.overlay || 0) / 100}),rgba(0,0,0,${(st.overlay || 0) / 100})), url('${img}') center/cover`;
      else if (st.bg) { n.style.background = st.bg; n.style.backgroundImage = 'none'; }
      if (st.color) { n.style.color = st.color; n.style.setProperty('--muted', st.color); n.style.setProperty('--ink-text', st.color); }
      else if (img) n.style.color = '#fff';
      if (st.title) n.style.setProperty('--title-color', st.title);
      if (st.pad) n.classList.add('pad-' + st.pad);
    });
  }
  /* cadrage réglé dans l'admin, appliqué à toutes les photos du site */
  function frame(root) {
    const meta = D.imgMeta || {};
    $$('img', root.nodeType === 1 ? root : document).forEach((im) => {
      const m = meta[im.getAttribute('src')]; if (!m || im.dataset.framed) return;
      im.dataset.framed = '1';
      if (m.cut) im.dataset.cut = '1';
      im.style.objectPosition = `${+m.x || 50}% ${+m.y || 50}%`;
      if (m.fit === 'contain') im.style.objectFit = 'contain';
      if (m.z > 1) {
        im.style.transform = `scale(${m.z})`; im.style.transformOrigin = `${m.x}% ${m.y}%`;
        if (!im.parentNode.classList.contains('zbox')) { const box = document.createElement('span'); box.className = 'zbox'; im.replaceWith(box); box.append(im); }
      }
    });
  }

  function boot() {
    applyDesign();
    document.title = document.title || site.seoTitle;
    renderChrome();
    if (pages[page]) pages[page]();
    applyLayout(); frame(document.body);
    // un sticker 69💯 le🩸 sur les en-têtes de pages
    $$('.page-head .wrap').forEach((w) => { const im = document.createElement('img'); im.className = 'sticker sticker--head'; im.setAttribute('data-mark', ''); im.alt = ''; im.setAttribute('aria-hidden', 'true'); w.append(im); });
    S.typo(document.body); marks(); dropify(document.body);
    new MutationObserver((ms) => { ms.forEach((m) => m.addedNodes.forEach((n) => { if (n.nodeType === 1) { S.typo(n); dropify(n); frame(n); if (n.matches && (n.matches('img[data-mark]') || n.querySelector('img[data-mark]'))) marks(); } else if (n.nodeType === 3 && n.nodeValue.includes('🩸') && n.parentNode) dropify(n.parentNode); })); }).observe(document.body, { childList: true, subtree: true });
  }
  /* Lit le contenu à jour dans la base en ligne, puis affiche la page.
     Sans réponse sous 3 s, on affiche la dernière version connue. */
  let booted = false;
  const go = () => { if (booted) return; booted = true; document.documentElement.classList.remove('is-loading'); boot(); };
  if (location.protocol === 'file:' || window.__FUC_PREVIEW) go();
  else {
    document.documentElement.classList.add('is-loading');
    setTimeout(go, 3000);
    S.pull().then((d) => { if (d && !booted) { D = d; site = D.site; } go(); });
  }
})();
