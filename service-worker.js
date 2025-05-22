const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/detail/index.html', // Include the detail page
  '/assets/css/bootstrap/bootstrap.min.css',
  // Note: External CSS like Font Awesome might not be reliably cacheable by your service worker
  // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
  '/assets/css/style.css',
  '/manifest.json',
  '/assets/js/bootstrap.bundle.min.js',
  // Note: External Firebase SDKs might not be reliably cacheable by your service worker
  // 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js',
  // 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js',
  '/assets/img/header.png',
  // Card Menu Icons
  '/assets/img/card-menu/01.png',
  '/assets/img/card-menu/02.png',
  '/assets/img/card-menu/03.png',
  '/assets/img/card-menu/04.png',
  '/assets/img/card-menu/05.png',
  '/assets/img/card-menu/06.png',
  // Backgrounds
  '/assets/img/hiu-01.png',
  '/assets/img/teluk-saleh.png',
  '/assets/img/konservasi.png',
  '/assets/img/bg-menu.png', // Default background
  '/assets/img/revisi-bg-content.png',
  '/assets/img/perilaku.png',
  '/assets/img/kv-convert-01.png',
  '/assets/img/panduan.png',
  '/assets/img/langkah2.png',
  '/assets/img/peluang.png',
  // Submenu Icons
  '/assets/img/card-menu/sub-menu/1-1.png',
  '/assets/img/card-menu/sub-menu/1-2.png',
  '/assets/img/card-menu/sub-menu/1-3.png',
  '/assets/img/card-menu/sub-menu/2-4.png',
  '/assets/img/card-menu/sub-menu/2-1.png',
  '/assets/img/card-menu/sub-menu/3-1.png',
  '/assets/img/card-menu/sub-menu/3-2.png',
  '/assets/img/card-menu/sub-menu/3-3.png',
  '/assets/img/card-menu/sub-menu/4-1.png',
  '/assets/img/card-menu/sub-menu/5-2.png',
  '/assets/img/card-menu/sub-menu/6-1.png',
  // Content Images/Videos/Sliders (based on your datas array)
  '/assets/img/content/1.jpg',
  '/assets/img/content/2.png',
  '/assets/img/content/pertumbuhan-id.png',
  '/assets/img/content/pertumbuhan-en.png',
  '/assets/img/content/reproduksi-hiu-paus-id.png',
  '/assets/img/content/reproduksi-hiu-paus-en.png',
  '/assets/img/content/cara-makan-id.png',
  '/assets/img/content/cara-makan-en.png',
  '/assets/img/content/cara-makan-id.mp4',
  '/assets/img/content/cara-makan.mp4',
  '/assets/img/content/distribusi-ina.png',
  '/assets/img/content/distribusi-indone.png',
  '/assets/img/content/distribusi-english.png',
  '/assets/img/content/distribusi-eng.png',
  '/assets/img/content/global_population.mp4',
  '/assets/img/content/populasi_glob_ind.png',
  '/assets/img/content/populasi_glob_eng.png',
  '/assets/img/content/funfact_ind.mp4',
  '/assets/img/content/fungsi_ekologi_ind.mp4',
  '/assets/img/content/funfact_eng.mp4',
  '/assets/img/content/fungsi_ekologi_eng.mp4',
  '/assets/img/content/ancaman-hiu-paus.png',
  '/assets/img/content/3.mp4',
  '/assets/img/content/demografi_populasi.mp4',
  '/assets/img/content/pola_kemunculan.mp4',
  '/assets/img/content/discovery_curve.mp4',
  '/assets/img/content/Koridor.jpg',
  '/assets/img/content/pola-musiman.png',
  '/assets/img/content/pola-musiman-02.png',
  '/assets/img/content/pola-musiman-03.png',
  '/assets/img/content/Overall-model.jpg',
  '/assets/img/content/upaya_konservasi.mp4',
  '/assets/img/content/tagging.mp4',
  '/assets/img/content/wisata.png',
  '/assets/img/content/whale-shark.png',
  '/assets/img/content/peran.png',
  // Add other assets like fonts if used via @font-face and are local
  // '/assets/fonts/YourFont.woff2',
  // ... any other local assets ...
];

// Saat install, cache semua file penting
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Saat fetch, sajikan dari cache jika tersedia, fallback ke network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache hit - fetch from network
        return fetch(event.request);
      })
  );
});

// Saat activate, hapus cache lama
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});