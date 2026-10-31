/* Estudio de Carmen · funciona sin conexión. La página intenta la red primero (para tener siempre la última versión) y, si no hay, usa la copia guardada. */
const CACHE = 'estudio-carmen-1ffeeb4542';
const FILES = ["index.html", "manifest.webmanifest", "apple-touch-icon.png", "favicon-32.png", "fonts/manrope-latin-wght-normal.woff2", "fonts/playfair-display-latin-400-italic.woff2", "fonts/playfair-display-latin-400-normal.woff2", "fonts/playfair-display-latin-500-normal.woff2", "fonts/playfair-display-latin-600-normal.woff2", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "vendor/LICENCIAS.txt", "vendor/fflate.min.js", "vendor/jsQR.min.js", "vendor/jspdf.plugin.autotable.min.js", "vendor/jspdf.umd.min.js", "vendor/jszip.min.js", "vendor/qrcode.min.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => './' + f)).catch(() => {})).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('estudio-carmen-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html')) {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return res; }).catch(() => caches.match('./index.html').then(m => m || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); } return res; })));
});
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(self.clients.matchAll({type: 'window'}).then(cs => { for (const c of cs) { if ('focus' in c) return c.focus(); } return self.clients.openWindow('./'); })); });
