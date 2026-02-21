const CACHE_NAME = "version-4";
const urlsToCache = [
    '/offline.html',
    '/media/logo.png'
];

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .catch(() => {
                // If network fails
                if (event.request.mode === 'navigate') {
                    // Always show offline page for navigation failures
                    return caches.match('/offline.html');
                }

                // For other assets (images, etc), try to find them in cache
                return caches.match(event.request);
            })
    );
});

// Activate - Cleanup old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        )).then(() => self.clients.claim())
    )
});