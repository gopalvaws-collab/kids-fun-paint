// Kids Fun Paint service worker: lets the app work offline.
// Change the version number when you update the app so people get the new files.
const CACHE='kids-fun-paint-v1';
const FILES=['./','index.html','manifest.webmanifest','favicon.ico','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
  }).catch(()=>caches.match('index.html'))));
});
