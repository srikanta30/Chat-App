if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404 Error-pana.svg",revision:"ce9734d584dd44ab8929c18df4ac9917"},{url:"/Launching-amico.svg",revision:"81e1255c88267110c77e3ffeed34e58e"},{url:"/Under construction-amico.svg",revision:"297bc9787f4018b1552b0e7243a3e58d"},{url:"/_next/static/M2hL2TEW1ZjvLqyA2JBAf/_buildManifest.js",revision:"7e5700c76274950ec93bdf975b6ccde4"},{url:"/_next/static/M2hL2TEW1ZjvLqyA2JBAf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/133-2f1951d76b6771e6.js",revision:"2f1951d76b6771e6"},{url:"/_next/static/chunks/251-1842f258ef8d9097.js",revision:"1842f258ef8d9097"},{url:"/_next/static/chunks/65-91f156776c8a1282.js",revision:"91f156776c8a1282"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-b3b52fe1e13e8446.js",revision:"b3b52fe1e13e8446"},{url:"/_next/static/chunks/pages/404-3045a9ff9a3e9d35.js",revision:"3045a9ff9a3e9d35"},{url:"/_next/static/chunks/pages/500-943e3c1a7fcc1d36.js",revision:"943e3c1a7fcc1d36"},{url:"/_next/static/chunks/pages/_app-b9ef70c9f29d1ba4.js",revision:"b9ef70c9f29d1ba4"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/chats/%5Bid%5D-03e24da1b5309bb5.js",revision:"03e24da1b5309bb5"},{url:"/_next/static/chunks/pages/index-9716a5b6ec6c6d89.js",revision:"9716a5b6ec6c6d89"},{url:"/_next/static/chunks/pages/rooms/%5Bid%5D-3dd5da872db089c3.js",revision:"3dd5da872db089c3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7e0a04d6d1a844f2.js",revision:"7e0a04d6d1a844f2"},{url:"/chakra-ui-logomark-colored.svg",revision:"c1e816730197517b6977fda1c8ee0ec9"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"7beb2fd0a79e26bbaef042f27a6818be"},{url:"/next-app-chakra-ts.png",revision:"31fb8d30477672d6be25555898ba86ec"},{url:"/nextjs-black-logo.svg",revision:"8d9ffb0bd488386a946ef7cb87c0e391"},{url:"/nextjs-icon-dark.svg",revision:"add4ddcc93edd11199df5996c5443d96"},{url:"/nextjs-icon-light.svg",revision:"112e21eebb868eb7c613e0f75f370f06"},{url:"/robots.txt",revision:"b46a25bfde48eb99184777fe55598170"},{url:"/sitemap-0.xml",revision:"78774dee67838f18ecc73bfccbd133dd"},{url:"/sitemap.xml",revision:"d6a78d1f897fa03fd749bad87a11b5e7"},{url:"/ts-logo-512.svg",revision:"c87187cad0ab07cb31c76fb8facda1e1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
