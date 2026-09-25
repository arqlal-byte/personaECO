const CACHE='personas-eco-v1';
const ASSETS=['./','./index.html','./manifest.json','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png','./assets/eco-cocacola-oficial.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
