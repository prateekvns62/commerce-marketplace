!function(){"use strict";var e,s,n,c,r,t={},o={};function d(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=t,e=[],d.O=function(s,n,c,r){if(!n){var t=1/0;for(p=0;p<e.length;p++){n=e[p][0],c=e[p][1],r=e[p][2];for(var o=!0,a=0;a<n.length;a++)(!1&r||t>=r)&&Object.keys(d.O).every((function(e){return d.O[e](n[a])}))?n.splice(a--,1):(o=!1,r<t&&(t=r));if(o){e.splice(p--,1);var i=c();void 0!==i&&(s=i)}}return s}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,c,r]},d.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(s,{a:s}),s},d.d=function(e,s){for(var n in s)d.o(s,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(s,n){return d.f[n](e,s),s}),[]))},d.u=function(e){return({170:"component---src-pages-guides-sellers-extension-create-md",178:"component---src-pages-guides-sellers-technical-reference-md",305:"5e65052d",461:"e82996df",486:"component---src-pages-guides-eqp-v-1-help-md",532:"styles",989:"component---src-pages-guides-sellers-extension-update-information-md",1194:"component---src-pages-guides-sellers-submit-for-marketing-review-md",1206:"2dee68d8",1644:"component---src-pages-guides-sellers-code-sniffer-md",1705:"component---src-pages-guides-sellers-extensions-md",1731:"component---src-pages-guides-sellers-subscriptions-buying-subscriptions-md",2e3:"component---src-pages-guides-eqp-v-1-auth-md",2298:"component---src-pages-guides-sellers-extension-quality-program-md",2359:"component---src-pages-guides-sellers-product-descriptions-md",2529:"component---src-pages-guides-sellers-developer-portal-md",2853:"component---src-pages-guides-eqp-v-1-getting-started-md",2899:"component---src-pages-guides-eqp-v-1-reports-md",2955:"component---src-pages-guides-eqp-v-1-filtering-md",2993:"component---src-pages-guides-sellers-index-md",3031:"component---src-pages-guides-sellers-compatibility-releases-md",3035:"0abf01d3",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3228:"component---src-pages-guides-sellers-account-setup-process-md",3262:"component---src-pages-guides-eqp-v-1-access-keys-md",3334:"component---src-pages-guides-eqp-v-1-callbacks-md",3490:"b6f3ea4c",3559:"component---src-pages-guides-sellers-content-md",3580:"component---src-pages-guides-sellers-video-tips-md",4e3:"component---src-pages-guides-sellers-extension-version-md",4174:"component---src-pages-guides-sellers-submit-for-review-md",4189:"component---src-pages-guides-sellers-profile-company-md",4209:"component---src-pages-guides-sellers-branding-md",4224:"component---src-pages-guides-sellers-developer-register-md",4382:"component---src-pages-guides-sellers-extension-information-md",4519:"component---src-pages-guides-sellers-compatibility-abandoned-extensions-md",4746:"component---src-pages-guides-sellers-extension-resubmit-md",4803:"component---src-pages-guides-sellers-business-value-md",4953:"component---src-pages-guides-sellers-analytics-md",5114:"component---src-pages-guides-eqp-v-1-rest-api-md",5180:"component---src-pages-guides-sellers-shared-packages-md",5512:"component---src-pages-guides-sellers-installation-and-varnish-tests-md",5578:"component---src-pages-guides-eqp-v-1-sandbox-md",5612:"component---src-pages-guides-sellers-mftf-vendor-md",5768:"component---src-pages-guides-sellers-extension-footprint-md",6120:"component---src-pages-guides-sellers-marketing-review-guidelines-md",6230:"component---src-pages-guides-sellers-mftf-magento-md",6305:"component---src-pages-guides-sellers-review-report-md",6388:"component---src-pages-guides-sellers-account-setup-md",6530:"f5cc1685",6792:"component---src-pages-guides-sellers-copy-paste-detector-md",6883:"component---src-pages-guides-sellers-malware-scan-md",7109:"component---src-pages-guides-sellers-sales-md",7122:"component---src-pages-guides-sellers-subscriptions-selling-subscriptions-md",7331:"component---src-pages-guides-sellers-marketing-submission-preview-md",7336:"component---src-pages-guides-sellers-image-tips-md",7365:"component---src-pages-guides-sellers-compatibility-requirements-md",7369:"component---src-pages-guides-sellers-profile-information-md",7483:"component---src-pages-guides-sellers-compatibility-obsolete-extensions-md",7714:"8b61fb39",7778:"component---src-pages-guides-eqp-v-1-test-results-md",8035:"component---src-pages-index-md",8518:"component---src-pages-guides-sellers-submit-for-technical-review-md",8540:"component---src-pages-guides-sellers-seller-overview-md",8621:"component---src-pages-guides-eqp-v-1-handling-errors-md",8738:"component---src-pages-guides-sellers-revenue-share-md",8775:"component---src-pages-guides-sellers-before-you-begin-md",8910:"component---src-pages-guides-sellers-profile-personal-md",9126:"component---src-pages-guides-eqp-v-1-index-md",9132:"component---src-pages-guides-eqp-v-1-packages-md",9189:"component---src-pages-guides-sellers-technical-review-guidelines-md",9351:"commons",9393:"component---src-pages-guides-sellers-themes-md",9610:"component---src-pages-guides-sellers-subscriptions-extension-subscriptions-md",9853:"component---src-pages-guides-eqp-v-1-users-md",9887:"component---src-pages-guides-eqp-v-1-files-md",9974:"component---src-pages-guides-sellers-semantic-version-check-md"}[e]||e)+"-"+{170:"d4e3f5646bdc7127c7e8",178:"28fab8a9b81b53775db9",305:"e4bc66aa7ab392058735",461:"babc5447d8bfe367b066",486:"4fbd2628875278e40d4a",532:"4cc201ce6066751be337",989:"4e4cc362e7874bbb80b6",1194:"7e93b0d7b87b8c77c79f",1206:"2d68f2c9d416c2d7d50b",1644:"5df3070fc1b991cd042f",1705:"229131cdd75d8ea415f1",1731:"d132ccaa4d1809979f9f",2e3:"14d3803c859e83e9f121",2298:"c2b7d151d68cd1c30f80",2359:"cba742c7399b12f6471d",2529:"98b7d20be14f3b5e7751",2853:"e085c3f83425cef51120",2899:"3e70eb6cf1e842b6c535",2955:"debcfa71a60037b7a02d",2993:"7b83786eceef792aa8dc",3031:"b83f3a39b1437180d407",3035:"30c20d710bcdf71c95bb",3125:"cf2c30d7d39f91be56ff",3228:"b5296e01b5206f5be1e2",3262:"e075dfe189a15be5e3ba",3334:"d0d7084ea8b48d47b462",3490:"78334dfdabffcd37eb6b",3559:"978dd9577c821fe2ef8f",3580:"4093d2b105904a33b778",4e3:"1d4a5c6cc0e91370b3da",4174:"61df0d65e48e9f8edd5e",4189:"f9f45c9ed6f35493e187",4209:"8bc98a12f7bd4ff909c6",4224:"f29baf10491081d6272e",4382:"58b1dd553939ec659f1c",4519:"cdd69b664906e267a45a",4574:"ae5cd6b99c2b3c1a68b2",4746:"1e222c6b23d22a52d9fc",4803:"a4ed5a05f787c9a3327b",4953:"2a64a33acdb353e61ca6",5114:"26144c7bf76b37cc32b6",5180:"0b1355bb26872c863e40",5512:"d5593738bcb712381928",5578:"f6e54e0eed8992422406",5612:"cf5c642872b0e7c92bcb",5768:"6f3600b95569b06d46b1",6008:"97d3c8b4e12b7d2a0f06",6120:"4b9c41356e152dfb29eb",6230:"02c0ec41e14dd4bd10ff",6305:"e52a1c18bfa6ca4d76c3",6388:"5589fafe2cc006114e77",6530:"5126d5f595011e63b28b",6617:"239e4a0968fe088a6c81",6792:"bb2205019aff5a51bb62",6883:"4a901cc5d4e088786819",7109:"4d89cdbd0e3fa64e678c",7122:"3db8089903da0374e298",7331:"3ea479bf22c27954c3ac",7336:"3aeadd55a478599cdb3b",7365:"5ac69db98a5bab3fe5df",7369:"bcf1bf0575f7d7c1a199",7483:"1d0b2451d86881194fe0",7714:"a32cc49fa7510948e5de",7778:"65d8a11ba63f864f875a",8035:"9444bf4517ae64f6f585",8453:"30e6d574545567884a7d",8518:"4d9c8c732c130eae96f2",8540:"3bbb35c19217829f5920",8621:"d18c39ee6bdd04e6e39a",8738:"9b911b2fd46dc24b4d79",8775:"e970fc8edd63994fe644",8910:"6f089ad737616d695efd",9126:"b3d2b322342304266e72",9132:"63fa9ff129b2dddd2766",9189:"22f626d6255ef3fa5645",9351:"c5ab4da75f9b46e18a07",9393:"8d560bb06371801d2fc8",9610:"a417e52a45a21c020363",9853:"2da68f509243d43d60ee",9887:"f262aa249605be9abde3",9974:"bb29b3a0fb145da666e8"}[e]+".js"},d.miniCssF=function(e){return"styles.8b488b0323b167a09ac6.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},s={},n="dev-site-documentation-template:",d.l=function(e,c,r,t){if(s[e])s[e].push(c);else{var o,a;if(void 0!==r)for(var i=document.getElementsByTagName("script"),p=0;p<i.length;p++){var l=i[p];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){o=l;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.setAttribute("data-webpack",n+r),o.src=e),s[e]=[c];var m=function(n,c){o.onerror=o.onload=null,clearTimeout(u);var r=s[e];if(delete s[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(c)})),n)return n(c)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),a&&document.head.appendChild(o)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},d.p="/commerce-marketplace/",c=function(e){return new Promise((function(s,n){var c=d.miniCssF(e),r=d.p+c;if(function(e,s){for(var n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var r=(o=n[c]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===s))return o}var t=document.getElementsByTagName("style");for(c=0;c<t.length;c++){var o;if((r=(o=t[c]).getAttribute("data-href"))===e||r===s)return o}}(c,r))return s();!function(e,s,n,c){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(t){if(r.onerror=r.onload=null,"load"===t.type)n();else{var o=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.href||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=o,a.request=d,r.parentNode.removeChild(r),c(a)}},r.href=s,document.head.appendChild(r)}(e,r,s,n)}))},r={6658:0},d.f.miniCss=function(e,s){r[e]?s.push(r[e]):0!==r[e]&&{532:1}[e]&&s.push(r[e]=c(e).then((function(){r[e]=0}),(function(s){throw delete r[e],s})))},function(){var e={6658:0,532:0};d.f.j=function(s,n){var c=d.o(e,s)?e[s]:void 0;if(0!==c)if(c)n.push(c[2]);else if(/^(532|6658)$/.test(s))e[s]=0;else{var r=new Promise((function(n,r){c=e[s]=[n,r]}));n.push(c[2]=r);var t=d.p+d.u(s),o=new Error;d.l(t,(function(n){if(d.o(e,s)&&(0!==(c=e[s])&&(e[s]=void 0),c)){var r=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;o.message="Loading chunk "+s+" failed.\n("+r+": "+t+")",o.name="ChunkLoadError",o.type=r,o.request=t,c[1](o)}}),"chunk-"+s,s)}},d.O.j=function(s){return 0===e[s]};var s=function(s,n){var c,r,t=n[0],o=n[1],a=n[2],i=0;if(t.some((function(s){return 0!==e[s]}))){for(c in o)d.o(o,c)&&(d.m[c]=o[c]);if(a)var p=a(d)}for(s&&s(n);i<t.length;i++)r=t[i],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(p)},n=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-7264ea6290a83103e360.js.map