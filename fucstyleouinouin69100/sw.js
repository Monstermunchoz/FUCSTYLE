/* Service worker de l'appli admin : installation sur téléphone + notifications push */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
self.addEventListener('push', (e) => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { title: 'Fucstyle', body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Nouvelle commande', { body: d.body || '', icon: 'icon-192.png', badge: 'icon-192.png', data: { url: d.url || './#/commandes' } }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then((cs) => { const c = cs.find((x) => 'focus' in x); if (c) { c.navigate(e.notification.data.url); return c.focus(); } return self.clients.openWindow(e.notification.data.url); }));
});
