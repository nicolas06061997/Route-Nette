// Service worker de Route Nette : jeu disponible hors ligne et mises à jour immédiates.
// La version vient de index.html (APPV), passée dans l'adresse : sw.js?v=…
// La progression des joueurs est dans localStorage : elle n'est jamais touchée par les mises à jour.
const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE = 'routenette-' + VERSION;
const LIBS = 'routenette-libs';
const FILES = ['./', './index.html', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('routenette-') && k !== CACHE && k !== LIBS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Réseau d'abord pour avoir tout de suite la dernière version ; copie locale si pas de connexion.
function networkFirst(req) {
  return fetch(req, { cache: 'no-cache' }).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r =>
    r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())));
}

// Polices Google : copie locale d'abord.
function lib(req) {
  return caches.open(LIBS).then(c => c.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') c.put(req, r.clone());
    return r;
  })));
}

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') { e.respondWith(lib(req)); return; }
  if (url.origin !== location.origin) return;
  if (url.pathname.endsWith('/version.json')) return;
  e.respondWith(networkFirst(req));
});
