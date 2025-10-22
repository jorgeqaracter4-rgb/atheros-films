// Service Worker for caching critical resources
const CACHE_NAME = 'atheros-films-v1'
const CRITICAL_RESOURCES = [
  '/',
  '/Fundo.mp4',
  '/logo.webp',
  '/backstagePrancheta-1.png',
  '/video-galeria.mp4',
  '/foto03.webp',
  '/Sem-Titulo-1Prancheta-1.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CRITICAL_RESOURCES))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})
