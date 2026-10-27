/* FUCSTYLE — rendu du site public */
(function () {
  const S = window.Store;
  const D = S.load();
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = S.esc;
  const site = D.site;

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
    ['magazine.html', 'Magazine', 'magazine'], ['a-propos.html', 'À propos', 'about'], ['contact.html', 'Contact', 'contact']
  ];

  function renderChrome() {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `<div class="wrap">
      <a class="brand" href="index.html"><img src="${esc(site.logo)}" alt="Fucstyle — accueil"></a>
      <nav class="nav" id="nav" aria-label="Navigation principale">
        ${NAV.map(([h, l, k]) => `<a href="${h}"${(page === k || (page === 'product' && k === 'shop') || (page === 'article' && k === 'magazine')) ? ' aria-current="page"' : ''}>${l}</a>`).join('')}
      </nav>
      <button class="cart-btn" type="button" data-open-cart aria-label="Ouvrir le panier">${ICON.cart}<span class="cart-count" data-cart-count>0</span></button>
      <button class="menu-btn" type="button" aria-controls="nav" aria-expanded="false" aria-label="Menu">${ICON.menu}</button>
    </div>`;
    document.body.prepend(header);

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="wrap">
      <div class="footer-top">
        <div><img src="${esc(site.logo)}" alt="Fucstyle"><p>Rappeur lyonnais, membre du SnakeS Crew, cofondateur de Bercail Records. Freestyle tous les dimanches.</p>${socialsHTML()}</div>
        <div><h3>Le site</h3><ul class="footer-links">
          <li><a href="boutique.html">Shop</a></li><li><a href="clips.html">Les derniers clips</a></li><li><a href="magazine.html">Magazine</a></li>
          <li><a href="a-propos.html">À propos</a></li><li><a href="contact.html">Contact & booking</a></li></ul></div>
        <div><h3>Infos</h3><ul class="footer-links">
          <li><a href="cgv.html">CGV</a></li><li><a href="confidentialite.html">Politique de confidentialité</a></li>
          <li><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li><li><a href="${esc(site.bercailUrl)}" target="_blank" rel="noopener">Bercail Records</a></li></ul></div>
      </div>
      <img class="footer-mark" src="${esc(site.mark)}" alt="69💯 le🩸">
      <div class="footer-big" aria-hidden="true">FUCSTYLE</div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} FUCSTYLE. Tous droits réservés.</span><a href="${esc(site.creditUrl)}" target="_blank" rel="noopener">${esc(site.credit)}</a></div>
    </div>`;
    document.body.append(footer);

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
    $$('[data-cart-count]').forEach((el) => (el.textContent = count));
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
      <div class="lt">${S.money(l.lineTotal)}</div></div>`).join('');
    const sub = lines.reduce((s, l) => s + l.lineTotal, 0);
    const left = D.shipping.freeFrom - sub;
    foot.innerHTML = `<div class="row"><span>Sous-total</span><strong>${S.money(sub)}</strong></div>
      <div class="row muted"><span>${left > 0 ? 'Livraison offerte dès ' + S.money(D.shipping.freeFrom) : 'Livraison offerte'}</span><span>${left > 0 ? 'encore ' + S.money(left) : ''}</span></div>
      <div class="row total"><span>Total</span><span>${S.money(sub + (left > 0 ? D.shipping.flat : 0))}</span></div>
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
  function productCard(p) {
    const out = S.stockState(p) === 'out';
    return `<a class="poster product-card${out ? ' is-out' : ''}" href="produit.html?p=${encodeURIComponent(p.slug)}">
      <span class="price-tag">${S.money(p.price).replace(/\s?€/, '€')}</span>
      ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}
      ${out ? '<span class="stamp">Rupture</span>' : ''}
      <img src="${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy">
      <div class="meta"><h3>${esc(p.name)}</h3><div class="cat">${esc(p.type || p.category)}${p.preorder && !out ? ' — précommande' : ''}</div></div>
    </a>`;
  }
  function storyCard(a, cls) {
    return `<a class="story ${cls || ''}" href="article.html?a=${encodeURIComponent(a.slug)}">
      <div class="img"><img src="${esc(a.cover)}" alt="" loading="lazy"></div>
      <div><span class="kicker">${esc(a.category)}</span><h3>${esc(a.title)}</h3>${cls === 'story--big' || cls === 'story--list' ? `<p>${esc(a.excerpt)}</p>` : ''}<span class="date">${S.date(a.date)}</span></div>
    </a>`;
  }
  const posts = () => D.posts.filter((p) => p.status === 'publie').sort((a, b) => b.date.localeCompare(a.date));

  function ytCover(id, title) {
    return `<button class="yt-cover" type="button" data-yt="${esc(id)}" style="background-image:url('https://i.ytimg.com/vi/${esc(id)}/maxresdefault.jpg')" aria-label="Lire le clip ${esc(title)}"><span class="play">${ICON.play}</span></button>`;
  }
  function bindYT(root) {
    $$('[data-yt]', root).forEach((b) => b.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true; f.title = b.getAttribute('aria-label');
      b.replaceWith(f);
    }));
  }
  /* Clip lancé avec le son dès l'arrivée (comme sur le site actuel).
     Si le navigateur bloque le son, le clip part en muet et le son arrive au premier clic/toucher. */
  let ytPlayer = null, soundCb = null;
  function autoClip(frame, id) {
    frame.innerHTML = '<div id="yt-auto" style="position:absolute;inset:0;width:100%;height:100%"></div>';
    const setSound = (on) => { if (soundCb) soundCb(on); };
    const waitGesture = () => {
      const go = (e) => {
        if (e && e.target && e.target.closest && e.target.closest('[data-sound]')) return;
        if (!ytPlayer || !ytPlayer.unMute) return;
        ytPlayer.unMute(); ytPlayer.setVolume(100); ytPlayer.playVideo(); setSound(true);
        ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.removeEventListener(ev, go, true));
      };
      ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.addEventListener(ev, go, true));
    };
    const init = () => {
      ytPlayer = new YT.Player('yt-auto', {
        videoId: id,
        playerVars: { autoplay: 1, rel: 0, playsinline: 1, modestbranding: 1 },
        events: {
          onReady: (e) => {
            e.target.unMute(); e.target.setVolume(100); e.target.playVideo();
            setTimeout(() => {
              if (e.target.getPlayerState() === 1 && !e.target.isMuted()) { setSound(true); return; }
              e.target.mute(); e.target.playVideo(); setSound(false); waitGesture();
            }, 1500);
          }
        }
      });
    };
    if (window.YT && window.YT.Player) init();
    else {
      window.onYouTubeIframeAPIReady = init;
      const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api';
      s.onerror = () => { frame.innerHTML = ytCover(id, site.clipName || 'clip'); bindYT(frame); };
      document.head.append(s);
    }
  }

  function clipBlock(root, opts) {
    opts = opts || {};
    const clips = site.clips && site.clips.length ? site.clips : [{ id: site.clipYoutube, title: site.clipName }];
    root.innerHTML = `<div class="clip-layout">
      <div class="video-frame" data-frame>${opts.autoplay ? '' : ytCover(clips[0].id, clips[0].title)}</div>
      <div><p class="muted" style="margin-top:0">${esc(clips[0].title)}</p>
        <ul class="clip-list">${clips.map((c, i) => `<li><button type="button" data-pick="${i}" aria-current="${i === 0}"><img src="https://i.ytimg.com/vi/${esc(c.id)}/mqdefault.jpg" alt=""><span><strong>${esc(c.title)}</strong><small>YouTube</small></span></button></li>`).join('')}</ul>
        <p style="margin-top:24px"><a class="link-arrow" href="${esc(site.socials.youtube)}" target="_blank" rel="noopener">Abonne-toi à la chaîne</a></p></div></div>`;
    if (opts.autoplay) autoClip($('[data-frame]', root), clips[0].id);
    bindYT(root);
    $$('[data-pick]', root).forEach((b) => b.addEventListener('click', () => {
      const c = clips[+b.dataset.pick];
      if (ytPlayer && ytPlayer.destroy) { try { ytPlayer.destroy(); } catch (e) {} ytPlayer = null; soundCb && soundCb(false); }
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
      D.messages = D.messages || [];
      D.messages.unshift({ id: S.uid('msg'), date: new Date().toISOString(), read: false, ...fd });
      S.save(D);
      const body = encodeURIComponent(`${fd.message}\n\n${fd.name || ''} — ${fd.email}${fd.phone ? ' — ' + fd.phone : ''}`);
      msg.innerHTML = `<p class="form-msg">Message envoyé. On te répond vite.</p>`;
      f.reset();
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('[' + fd.subject + '] Message depuis fucstyle.fr')}&body=${body}`;
    });
  }

  /* ---------- Pages ---------- */
  const pages = {
    home() {
      const v = $('[data-hero-video]');
      v.src = site.heroVideo;
      $('[data-mark]').src = site.mark;
      v.addEventListener('loadedmetadata', () => { try { v.currentTime = site.heroVideoStart || 0; } catch (e) {} }, { once: true });
      const words = site.heroTitle.split(' ');
      const lines = words.length >= 3 ? [words.slice(0, words.length - 2).join(' '), words[words.length - 2], words[words.length - 1]] : words;
      $('[data-hero-title]').innerHTML = lines.map((l) => `<span class="ln"><span>${esc(l)}</span></span>`).join('');
      $('[data-hero-cta]').textContent = site.heroCta;
      const sb = $('[data-sound]');
      const paint = (on) => { sb.innerHTML = on ? ICON.soundOn : ICON.soundOff; sb.setAttribute('aria-label', on ? 'Couper le son' : 'Activer le son'); sb.setAttribute('aria-pressed', on); };
      paint(false);
      if (site.autoplayClip) {
        // le bouton son pilote le clip Vanille Pistache ; la vidéo d'entrée reste muette
        soundCb = paint;
        sb.addEventListener('click', () => {
          if (!ytPlayer || !ytPlayer.isMuted) return;
          if (ytPlayer.isMuted()) { ytPlayer.unMute(); ytPlayer.setVolume(100); ytPlayer.playVideo(); paint(true); } else { ytPlayer.mute(); paint(false); }
        });
      } else {
        sb.addEventListener('click', () => { v.muted = !v.muted; paint(!v.muted); if (v.paused) v.play(); });
      }
      const t = esc(site.ticker); $('[data-ticker]').innerHTML = Array(8).fill(`<span>${t}</span><span aria-hidden="true">🩸</span>`).join('');

      $('[data-shop-title]').textContent = site.shopTitle;
      $('[data-products]').innerHTML = S.visibleProducts(D).filter((p) => p.featured).map(productCard).join('');
      $('[data-clip-title]').textContent = site.clipTitle;
      clipBlock($('[data-clip]'), { autoplay: site.autoplayClip });

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
      document.title = p.name + ' — Fucstyle';
      let img = 0, size = '', color = '';
      const hasV = p.variants.length > 0;
      const variantFor = () => p.variants.find((v) => (v.size || '') === (p.sizes.length ? size : '') && (v.color || '') === (p.colors.length ? color : ''));
      const avail = (s, c) => p.variants.some((v) => (!s || v.size === s) && (!c || v.color === c) && (v.stock > 0 || p.preorder));

      root.innerHTML = `<div class="pdp">
        <div class="pdp-gallery"><div class="poster" style="--r:-.8deg"><img data-main src="${esc(p.images[0])}" alt="${esc(p.name)}"></div>
          ${p.images.length > 1 ? `<div class="thumbs">${p.images.map((u, i) => `<button type="button" data-img="${i}" aria-current="${i === 0}" aria-label="Photo ${i + 1}"><img src="${esc(u)}" alt=""></button>`).join('')}</div>` : ''}</div>
        <div class="pdp-info">
          <p class="muted" style="margin:0 0 10px"><a href="boutique.html">Shop</a> / ${esc(p.category)}</p>
          <h1 class="display">${esc(p.name)}</h1>
          <div class="pdp-price">${S.money(p.price)}${p.compareAt ? `<s>${S.money(p.compareAt)}</s>` : ''}</div>
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
      $$('[data-img]', root).forEach((b) => b.addEventListener('click', () => { img = +b.dataset.img; main.src = p.images[img]; $$('[data-img]', root).forEach((x) => x.setAttribute('aria-current', x === b)); }));
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
      if (!a) { root.innerHTML = `<section class="section"><div class="wrap empty"><p class="display">Article introuvable</p><a class="btn btn--ink" href="magazine.html">Retour au magazine</a></div></section>`; return; }
      document.title = a.title + ' — Magazine Fucstyle';
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
        ${others.length ? `<section class="section section--paper"><div class="wrap"><div class="sec-head"><h2 class="display h-section">À lire aussi</h2><a class="link-arrow" href="magazine.html">Tout le magazine</a></div><div class="mag-list">${others.map((o) => storyCard(o, 'story--list')).join('')}</div></div></section>` : ''}`;
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
      $('[data-email]').href = 'mailto:' + site.email; $('[data-email]').textContent = site.email;
      $('[data-socials]').innerHTML = socialsHTML();
      contactForm($('[data-contact-form]'), false);
    },

    checkout() {
      const root = $('[data-checkout]');
      let promo = null;
      const draw = () => {
        const lines = S.cartLines(D);
        if (!lines.length) { root.innerHTML = `<div class="empty"><p class="display">Ton panier est vide</p><a class="btn btn--ink" href="boutique.html">Voir la boutique</a></div>`; return; }
        const sub = lines.reduce((s, l) => s + l.lineTotal, 0);
        const disc = promo ? (promo.type === 'percent' ? sub * promo.value / 100 : Math.min(promo.value, sub)) : 0;
        const ship = sub - disc >= D.shipping.freeFrom ? 0 : D.shipping.flat;
        $('[data-summary]').innerHTML = `<h2 class="display" style="font-size:2.4rem;margin-bottom:12px">Ta commande</h2>
          ${lines.map((l) => `<div class="line"><img src="${esc(l.product.images[0])}" alt=""><div><strong>${esc(l.product.name)}</strong><small>${esc(l.variantLabel)}${l.variantLabel ? ' — ' : ''}x${l.qty}</small></div><div class="lt">${S.money(l.lineTotal)}</div></div>`).join('')}
          <div class="promo-row"><input data-code placeholder="Code promo" aria-label="Code promo" value="${promo ? esc(promo.code) : ''}"><button type="button" data-apply>Appliquer</button></div>
          <div class="row"><span>Sous-total</span><span>${S.money(sub)}</span></div>
          ${disc ? `<div class="row"><span>Remise ${esc(promo.code)}</span><span>−${S.money(disc)}</span></div>` : ''}
          <div class="row"><span>Livraison</span><span>${ship ? S.money(ship) : 'Offerte'}</span></div>
          <div class="row total"><span>Total</span><span>${S.money(sub - disc + ship)}</span></div>`;
        $('[data-apply]').addEventListener('click', () => {
          const code = ($('[data-code]').value || '').trim().toUpperCase();
          const pr = D.promos.find((x) => x.code.toUpperCase() === code && x.active);
          promo = pr || null; draw();
          toast(pr ? 'Code ' + pr.code + ' appliqué' : 'Ce code n’existe pas ou n’est plus actif');
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
          <div class="field"><label for="c-country">Pays</label><select id="c-country" name="country">${D.shipping.countries.map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>
          <label style="display:flex;gap:10px;align-items:flex-start"><input type="checkbox" name="cgv" required style="width:20px;height:20px;margin-top:2px"> <span>J’accepte les <a href="cgv.html" target="_blank">conditions générales de vente</a>.</span></label>
          <div data-err></div>
          <button class="btn btn--blood" type="submit">Payer la commande</button>
          <p class="pay-note">Paiement sécurisé par carte bancaire ou PayPal.</p>
        </form><aside class="summary" data-summary></aside></div>`;
      draw();
      if (!$('[data-form]')) return;
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
        const order = S.placeOrder(D, fd, lines, promo);
        root.innerHTML = `<div class="empty" style="max-width:640px;margin:0 auto"><p class="display" style="font-size:4rem">Merci pour la force 🩸</p>
          <p class="lead" style="margin:0 auto 12px">Commande <strong>${esc(order.id)}</strong> enregistrée — total ${S.money(order.total)}.</p>
          <p class="muted">Un email de confirmation part à ${esc(fd.email)}. ${esc(site.shippingNote)}</p>
          <a class="btn btn--ink" href="index.html">Retour à l’accueil</a></div>`;
        renderCart();
      });
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

  document.title = document.title || site.seoTitle;
  renderChrome();
  if (pages[page]) pages[page]();
})();
