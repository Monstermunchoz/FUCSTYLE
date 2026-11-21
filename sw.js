/* Service worker du site : permet d'installer Fucstyle comme une appli (pas de cache, toujours à jour) */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
