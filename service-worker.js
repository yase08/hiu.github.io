const CACHE_NAME = 'my-app-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/detail/index.html', // Include the detail page
  '/manifest.json',
  // Removed 'assets/.DS_Store', as it's a system file
  'assets/css/bootstrap/bootstrap-grid.css',
  // Removed 'assets/css/bootstrap/bootstrap-grid.css.map',
  'assets/css/bootstrap/bootstrap-grid.min.css',
  // Removed 'assets/css/bootstrap/bootstrap-grid.min.css.map',
  'assets/css/bootstrap/bootstrap-grid.rtl.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-grid.rtl.css.map',
  'assets/css/bootstrap/bootstrap-grid.rtl.min.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-grid.rtl.min.css.map',
  'assets/css/bootstrap/bootstrap-reboot.css',
  // Removed 'assets/css/bootstrap/bootstrap-reboot.css.map',
  'assets/css/bootstrap/bootstrap-reboot.min.css',
  // Removed 'assets/css/bootstrap/bootstrap-reboot.min.css.map',
  'assets/css/bootstrap/bootstrap-reboot.rtl.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-reboot.rtl.css.map',
  'assets/css/bootstrap/bootstrap-reboot.rtl.min.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-reboot.rtl.min.css.map',
  'assets/css/bootstrap/bootstrap-utilities.css',
  // Removed 'assets/css/bootstrap/bootstrap-utilities.css.map',
  'assets/css/bootstrap/bootstrap-utilities.min.css',
  // Removed 'assets/css/bootstrap/bootstrap-utilities.min.css.map',
  'assets/css/bootstrap/bootstrap-utilities.rtl.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-utilities.rtl.css.map',
  'assets/css/bootstrap/bootstrap-utilities.rtl.min.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap-utilities.rtl.min.css.map',
  'assets/css/bootstrap/bootstrap.css',
  // Removed 'assets/css/bootstrap/bootstrap.css.map',
  'assets/css/bootstrap/bootstrap.min.css',
  // Removed 'assets/css/bootstrap/bootstrap.min.css.map',
  'assets/css/bootstrap/bootstrap.rtl.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap.rtl.css.map',
  'assets/css/bootstrap/bootstrap.rtl.min.css', // Check if this file exists and is needed
  // Removed 'assets/css/bootstrap/bootstrap.rtl.min.css.map',
  'assets/css/style.css',
  // Add other assets like fonts if used via @font-face and are local
  'assets/fonts/ProximaNova-Black.ttf',
  'assets/fonts/ProximaNova-Bold.otf',
  'assets/fonts/ProximaNova-Bold.ttf',
  'assets/fonts/ProximaNova-Extrabld.ttf',
  'assets/fonts/ProximaNova-Light.otf',
  'assets/fonts/ProximaNova-Light.ttf',
  'assets/fonts/ProximaNova-Reg.otf',
  'assets/fonts/ProximaNova-Regular.ttf',
  'assets/fonts/ProximaNova-Sbold.otf',
  'assets/fonts/ProximaNova-Semibold.ttf',
  'assets/fonts/ProximaNova-ThinIt.ttf',
  'assets/fonts/proximanovaexcn-medium.otf',
  // Card Menu Icons - Check if all these exist
  'assets/img/01.png',
  'assets/img/02.png',
  'assets/img/03.png',
  'assets/img/04.png',
  'assets/img/05.png',
  'assets/img/06.png',
  'assets/img/07.png',
  'assets/img/1-1.png',
  'assets/img/1-2.png',
  'assets/img/1-3.png',
  'assets/img/2-1.png',
  'assets/img/2-2.png',
  'assets/img/2-3.png',
  'assets/img/2-4.png',
  'assets/img/3-1.png',
  'assets/img/3-2.png',
  'assets/img/3-3.png',
  'assets/img/6-1.png',
  'assets/img/6-2.png',
  'assets/img/6-3.png',
  'assets/img/ancaman.png',
  'assets/img/Artboard-d1.png',
  'assets/img/bacground.png',
  'assets/img/bacground02.png',
  'assets/img/bacground111.png',
  'assets/img/background/background-image.jpg',
  'assets/img/BG-DISPLAY-01.png',
  'assets/img/bg-menu-01.png',
  'assets/img/bg-menu.png',
  'assets/img/button.png',
  'assets/img/card-menu/01.png',
  'assets/img/card-menu/02.png',
  'assets/img/card-menu/03.png',
  'assets/img/card-menu/04.png',
  'assets/img/card-menu/05.png',
  'assets/img/card-menu/06.png',
  'assets/img/card-menu/07.png',
  'assets/img/card-menu/sub-menu/1-1.png',
  'assets/img/card-menu/sub-menu/1-10.png', // Check if this file exists
  'assets/img/card-menu/sub-menu/1-2.png',
  'assets/img/card-menu/sub-menu/1-3.png',
  'assets/img/card-menu/sub-menu/1-4.png',
  'assets/img/card-menu/sub-menu/1-5.png',
  'assets/img/card-menu/sub-menu/1-6.png',
  'assets/img/card-menu/sub-menu/1-7.png',
  'assets/img/card-menu/sub-menu/1-8.png',
  'assets/img/card-menu/sub-menu/1-9.png',
  'assets/img/card-menu/sub-menu/2-1.png',
  'assets/img/card-menu/sub-menu/2-2.png',
  'assets/img/card-menu/sub-menu/2-3.png',
  'assets/img/card-menu/sub-menu/2-4.png',
  'assets/img/card-menu/sub-menu/2-5.png',
  'assets/img/card-menu/sub-menu/2-6.png',
  'assets/img/card-menu/sub-menu/2-7.png',
  'assets/img/card-menu/sub-menu/3-1.png',
  'assets/img/card-menu/sub-menu/3-2.png',
  'assets/img/card-menu/sub-menu/3-3.png',
  'assets/img/card-menu/sub-menu/3-4.png',
  'assets/img/card-menu/sub-menu/4-1.png',
  'assets/img/card-menu/sub-menu/4-2.png',
  'assets/img/card-menu/sub-menu/5-1.png',
  'assets/img/card-menu/sub-menu/5-2.png',
  'assets/img/card-menu/sub-menu/6-1.png',
  // Content Images/Videos/Sliders (based on your datas array) - Check if all these exist
  'assets/img/content/1.jpg',
  'assets/img/content/2. Siklus hidup hiu paus.png', // Check for spaces or special characters in filenames
  'assets/img/content/2.jpg',
  'assets/img/content/2.png',
  'assets/img/content/3.jpg',
  'assets/img/content/3.png',
  'assets/img/content/4.jpg',
  'assets/img/content/alat-kelamin-hiu-paus.png',
  'assets/img/content/anatomy-whale.png',
  'assets/img/content/anatomy-whale1.png',
  'assets/img/content/ancaman-hiu-paus.png',
  'assets/img/content/cara-makan-en.png',
  'assets/img/content/cara-makan-id.png',
  'assets/img/content/Default.mp4', // Check capitalization
  'assets/img/content/default.png',
  'assets/img/content/distribusi-en.gif',
  'assets/img/content/distribusi-eng.png',
  'assets/img/content/distribusi-english.png',
  'assets/img/content/distribusi-id.gif',
  'assets/img/content/distribusi-ina.png',
  'assets/img/content/distribusi-indone.png',
  'assets/img/content/ekosistem.jpg',
  'assets/img/content/ekowisata.jpg',
  'assets/img/content/Koridor.jpg',
  'assets/img/content/Overall-model.jpg',
  'assets/img/content/penemuan-terbaru.png',
  'assets/img/content/peran.png',
  'assets/img/content/pertumbuhan-en.png',
  'assets/img/content/pertumbuhan-hiu-paus.png',
  'assets/img/content/pertumbuhan-id.png',
  'assets/img/content/pertumbuhan.png',
  'assets/img/content/peta-global.png',
  'assets/img/content/pola-kemunculan.png',
  'assets/img/content/pola-musiman-02.png',
  'assets/img/content/pola-musiman-03.png',
  'assets/img/content/pola-musiman.png',
  'assets/img/content/populasi_glob_eng.png',
  'assets/img/content/populasi_glob_ind.png',
  'assets/img/content/rantai-makanan.png',
  'assets/img/content/reproduksi-hiu-paus-en.png',
  'assets/img/content/reproduksi-hiu-paus-id.png',
  'assets/img/content/sains-penelitian.jpg',
  'assets/img/content/sejarah-hiupaus-eng.png',
  'assets/img/content/sejarah-hiupaus-ina.png',
  'assets/img/content/siklus-nutrient.png',
  'assets/img/content/spesies-payung-1.png',
  'assets/img/content/spesies-payung-2.png',
  'assets/img/content/struktur-populasi-en.png',
  'assets/img/content/struktur-populasi-id.png',
  'assets/img/content/struktur-populasi.png',
  'assets/img/content/tooltip/heart.jpg',
  'assets/img/content/tooltip/intestine.jpg',
  'assets/img/content/tooltip/kidney.jpg',
  'assets/img/content/tooltip/rectum.jpg',
  'assets/img/content/tooltip/stomach.jpg',
  'assets/img/content/whale-shark.png',
  'assets/img/content/wisata.png',
  'assets/img/default-bg.png',
  'assets/img/default.gif',
  'assets/img/Default.mp4', // Check capitalization
  'assets/img/header.png',
  'assets/img/hiu-01.png',
  'assets/img/informasi-ekosistem-laut.png',
  'assets/img/kembali.png',
  'assets/img/keunikan.png',
  'assets/img/kolaborasi-global.png',
  'assets/img/konservasi.png',
  'assets/img/kv-convert-01.png',
  'assets/img/langkah2.png',
  'assets/img/logo.png',
  'assets/img/logo01.png',
  'assets/img/mengenal-hiu.png',
  'assets/img/menu.png',
  'assets/img/menu01.png',
  'assets/img/metode-penelitian.png',
  'assets/img/panduan.png',
  'assets/img/peluang.png',
  'assets/img/penelitian.png',
  'assets/img/perilaku.png',
  'assets/img/peta-global.png',
  'assets/img/peta-interaktif.png',
  'assets/img/revisi-bacground.png',
  'assets/img/revisi-bg-content.png',
  'assets/img/revisi-bg-menu.png',
  'assets/img/sains.png',
  'assets/img/teluk-saleh.png',
  'assets/img/underwater-bg.jpg',
  'assets/js/bootstrap.bundle.js', // Check if this file exists and is needed
  // Removed 'assets/js/bootstrap.bundle.js.map',
  'assets/js/bootstrap.bundle.min.js',
  // Removed 'assets/js/bootstrap.bundle.min.js.map',
  'assets/js/bootstrap.esm.js', // Check if this file exists and is needed
  // Removed 'assets/js/bootstrap.esm.js.map',
  'assets/js/bootstrap.esm.min.js', // Check if this file exists and is needed
  // Removed 'assets/js/bootstrap.esm.min.js.map',
  'assets/js/bootstrap.js', // Check if this file exists and is needed
  // Removed 'assets/js/bootstrap.js.map',
  'assets/js/bootstrap.min.js', // Check if this file exists and is needed
  // Removed 'assets/js/bootstrap.min.js.map',
  'assets/js/websocket.js' // Check if this file exists
];

// Saat install, cache semua file penting
// Inside your 'install' event listener
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => { // Make this function async
        console.log('Opened cache');
        for (const url of urlsToCache) {
          try {
            await cache.add(url); // await each add operation
          } catch (error) {
            console.error('Failed to cache:', url, error);
            // Decide if you want to stop or continue
          }
        }
      })
      .catch(error => {
          console.error('Cache open failed:', error);
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

//
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