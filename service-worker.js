/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a49744e0308647cefec74167fcf8020b"
  },
  {
    "url": "a-propos/aide-admonitions.html",
    "revision": "4cb0e0039d7df753b8994be808f10dc4"
  },
  {
    "url": "a-propos/aide-charts-math.html",
    "revision": "a0819552c5e8c75e1cd8f1c6cd865d83"
  },
  {
    "url": "a-propos/aide-custom-components.html",
    "revision": "2764d55c204d5dcdc9567aad1a8c1404"
  },
  {
    "url": "a-propos/aide-diagrams-uml.html",
    "revision": "e6b266030ca1e6082952fcf0c9263fb6"
  },
  {
    "url": "a-propos/aide-diagrams.html",
    "revision": "8cb0762bca8f921cbeaa8f8e6bc79df0"
  },
  {
    "url": "a-propos/aide-flowchart.html",
    "revision": "9ef41e997eead0cac2153c7bad4115b2"
  },
  {
    "url": "a-propos/contribuer-en-avant.html",
    "revision": "daa6ae9f3a0a7a4c4396dc4014d042b6"
  },
  {
    "url": "a-propos/contribuer.html",
    "revision": "6346c23145ac48146021d682c033971e"
  },
  {
    "url": "a-propos/index.html",
    "revision": "26b853ab771ba0ac7ab0d4bf8e83f190"
  },
  {
    "url": "a-propos/readme-stack.html",
    "revision": "465b8b18fd16a8251f892c5465f6fec9"
  },
  {
    "url": "assets/css/0.styles.4c1c99a6.css",
    "revision": "3b781205957c6dd78072aa9286837bcb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.892181da.js",
    "revision": "87e6db1f13d5c533c54489b975ef1be3"
  },
  {
    "url": "assets/js/11.788777ff.js",
    "revision": "965c1834052fe6d6b22259a2fbd0221f"
  },
  {
    "url": "assets/js/12.8daf7f42.js",
    "revision": "7aee16642edd3ac920cd4efedf142114"
  },
  {
    "url": "assets/js/13.ae978e33.js",
    "revision": "034c7eb7b99a82ebdc96b2b57d68d7f5"
  },
  {
    "url": "assets/js/14.58bc05aa.js",
    "revision": "e314dae80c8a62124169ab0611f663f3"
  },
  {
    "url": "assets/js/15.7656303c.js",
    "revision": "60f2363057a1057916cfd65075fca49a"
  },
  {
    "url": "assets/js/16.687dcc4f.js",
    "revision": "6607d7b66da372bafdfa0588c4d726c8"
  },
  {
    "url": "assets/js/17.e1758fca.js",
    "revision": "e32fca0bbfdba75cb7f4dcf9c3ef703f"
  },
  {
    "url": "assets/js/18.42c42659.js",
    "revision": "3223ee351011f8bad60b338a427e9916"
  },
  {
    "url": "assets/js/19.79a55a97.js",
    "revision": "aa9372dd0862b7a0c7b0b809d0e94342"
  },
  {
    "url": "assets/js/20.afc83312.js",
    "revision": "52eee37282a74a28251d33f09e44729a"
  },
  {
    "url": "assets/js/21.84b52a54.js",
    "revision": "f71bd37be2f55f01d2c5bc4aa376a024"
  },
  {
    "url": "assets/js/22.85d4aadb.js",
    "revision": "f1562690004a78cdee05b630d159ddf2"
  },
  {
    "url": "assets/js/23.8930f9b3.js",
    "revision": "e929b0150e6a7a35f710ef819dfe6dfd"
  },
  {
    "url": "assets/js/24.9ebb0373.js",
    "revision": "fa239550ee6f7a43071b8a2e8af65ec4"
  },
  {
    "url": "assets/js/25.983753d4.js",
    "revision": "d75a0034c03d7f9980de571141d5aa38"
  },
  {
    "url": "assets/js/26.85b4dc93.js",
    "revision": "d5d6365c83b86e50061efde39278599d"
  },
  {
    "url": "assets/js/27.780a13c8.js",
    "revision": "b964795c51d85099896d3934cea3db4e"
  },
  {
    "url": "assets/js/28.d851baac.js",
    "revision": "6ccd76b61950a1da9ade9e147bca42e1"
  },
  {
    "url": "assets/js/29.647d6526.js",
    "revision": "846c9330832c8389782205c6565aa4fc"
  },
  {
    "url": "assets/js/3.c309d788.js",
    "revision": "91fe60844ade7c0fc6cb4704bb48f0fd"
  },
  {
    "url": "assets/js/30.fd806784.js",
    "revision": "6f1737cbf58876e7899261674bd6d359"
  },
  {
    "url": "assets/js/31.312305c9.js",
    "revision": "a897e2a0cdc9c8f36a9293594899b021"
  },
  {
    "url": "assets/js/32.b7d46044.js",
    "revision": "31008f7183dd7aa4dabb11cfade58c8f"
  },
  {
    "url": "assets/js/33.83b4bda4.js",
    "revision": "1331edce42a624ab39a843c5ebd731a5"
  },
  {
    "url": "assets/js/34.b6206b69.js",
    "revision": "9cea032b1a681bd2e7482473328b939e"
  },
  {
    "url": "assets/js/35.d84ed44a.js",
    "revision": "a0271d5746e421d5e625a698a4cf7284"
  },
  {
    "url": "assets/js/36.ba349a56.js",
    "revision": "a65c46d09c68dd86cf526b60fc410a5b"
  },
  {
    "url": "assets/js/37.1bc3bd31.js",
    "revision": "e93fca8f29c960f72cc1a8af9b1b62db"
  },
  {
    "url": "assets/js/38.030e80b9.js",
    "revision": "0a7280d5158f25a9430d1981abbc82c3"
  },
  {
    "url": "assets/js/39.709e0820.js",
    "revision": "0cf507e4cffbbc5168580f6bb4454f20"
  },
  {
    "url": "assets/js/4.7255d67f.js",
    "revision": "6eaeedcad5f20d810fc57ad72aa442f7"
  },
  {
    "url": "assets/js/40.4fb7fd09.js",
    "revision": "84aadae2b094cd31bc73309f15edf182"
  },
  {
    "url": "assets/js/41.9113d016.js",
    "revision": "c99d8d45d77140bc9a5f94069dd375fb"
  },
  {
    "url": "assets/js/42.74553627.js",
    "revision": "daf0abc10989254a3e06ac889ab7e7dd"
  },
  {
    "url": "assets/js/5.a3dad532.js",
    "revision": "cd4916651a484ab68c206d02707ac56e"
  },
  {
    "url": "assets/js/6.d0204c53.js",
    "revision": "baeadbdafad8eb17dde514c7e77777f1"
  },
  {
    "url": "assets/js/7.11fb8c14.js",
    "revision": "9515e70e1a47893426546c191812a89c"
  },
  {
    "url": "assets/js/8.3327d339.js",
    "revision": "f3bb7529fb749be1342fe81b701e199b"
  },
  {
    "url": "assets/js/9.09c40e9d.js",
    "revision": "64aa7e9ac65c958c03b60b4137d45431"
  },
  {
    "url": "assets/js/app.2399e398.js",
    "revision": "0116931c610077022ca95e07cf689eb6"
  },
  {
    "url": "assets/js/vendors~flowchart.348b2caa.js",
    "revision": "e593b9d62743c10bee420efffb9e37b8"
  },
  {
    "url": "hebergements-mutualises/index.html",
    "revision": "47b1176f70cb311b0e0fe0bd75f5641b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/bientot.png",
    "revision": "5c718203d35ea3bc21cd2263e7fee4b1"
  },
  {
    "url": "images/logo-yulpa.png",
    "revision": "75d7a9c4d3bb98f637f56a52aa7d1a86"
  },
  {
    "url": "index.html",
    "revision": "09ee8d74c401f8c105ecc87783bd0de6"
  },
  {
    "url": "iWal/comptabilite-factures.html",
    "revision": "20c385134b637901a1b3994e1c211577"
  },
  {
    "url": "iWal/comptabilite-paiements.html",
    "revision": "bc294d74b8a361dbc9f5aafa47b1ea73"
  },
  {
    "url": "iWal/comptabilite.html",
    "revision": "0b77802477a975583fa7d75d4a9b657f"
  },
  {
    "url": "iWal/faq.html",
    "revision": "fcf74095074b687e449202e721094563"
  },
  {
    "url": "iWal/index.html",
    "revision": "5c0da5ebe60ce7b46a3a0ce24f5e3b16"
  },
  {
    "url": "iWal/organisation-delegations.html",
    "revision": "2b8db14a2f0f9346cfc66356787d7222"
  },
  {
    "url": "iWal/organisation.html",
    "revision": "cd8250e18a23b38a62f5849bcd3368e8"
  },
  {
    "url": "iWal/services-delegations.html",
    "revision": "267c1379ff9e2fbf0e5db07ca46a373b"
  },
  {
    "url": "iWal/services.html",
    "revision": "c323867a032b17c53242c7dabb7804b5"
  },
  {
    "url": "iWal/utilisateur-2-gestion.html",
    "revision": "7da2b17d594c8e967d71b8c73e42d7bb"
  },
  {
    "url": "iWal/utilisateur-3-delegations.html",
    "revision": "d34cfe7dd5cf9da4b35daf874056bd51"
  },
  {
    "url": "iWal/utilisateur.html",
    "revision": "c4bbe17691f45830da9e0379dc9d67e7"
  },
  {
    "url": "yulpa-modele/chapitre1-section2.html",
    "revision": "a07c2a3260ce3a0c0bfdd75d181e4f6a"
  },
  {
    "url": "yulpa-modele/chapitre1.html",
    "revision": "9a8c97c7e2bc046b84050a46bab69e39"
  },
  {
    "url": "yulpa-modele/chapitre2.html",
    "revision": "58fa11b49ebecc5464465a8994804459"
  },
  {
    "url": "yulpa-modele/images/index.html",
    "revision": "a85da9311bd478da1d32b4acc73dc3fd"
  },
  {
    "url": "yulpa-modele/index.html",
    "revision": "3e1ec6b9a181f25614b8d7d2635a8073"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
