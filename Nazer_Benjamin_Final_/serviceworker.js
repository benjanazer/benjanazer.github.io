const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/script.js",
  "/images/MEDIA/felix_hero.png",
  "/images/MEDIA/andy_hero.png",
  "/images/MEDIA/accesorios.png",
  "/images/MEDIA/benjaig.png",
  "/images/MEDIA/ariiig.png",
  "/images/MEDIA/andyig.png",
  "/images/MEDIA/BULLBENNY.jpg.png",
  "/images/MEDIA/CARIG.png",
  "/images/MEDIA/MEDIA/felixig.png",
  "/images/MEDIA/MEDIA/foto_benja.jpg",
  "/images/MEDIA/MEDIA/KONGO.png",
  "/images/MEDIA/MEDIA/LUCKYAN_LOGO.png",
  "/images/MEDIA/MEDIA/patoig.png",
  "/images/MEDIA/MEDIA/rotten.png",
  "/images/MEDIA/MEDIA/vans.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })