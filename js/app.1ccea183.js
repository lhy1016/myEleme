(function(n){function e(e){for(var c,u,o=e[0],h=e[1],d=e[2],f=0,i=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&i.push(r[u][0]),r[u]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(n[c]=h[c]);l&&l(e);while(i.length)i.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(e--,1),n=h(h.s=t[0]))}return n}var c={},u={app:0},r={app:0},a=[];function o(n){return h.p+"js/"+({}[n]||n)+"."+{"chunk-19414623":"408a7c29","chunk-1d7ae54d":"7144fde7","chunk-1ec39a86":"85140ffa","chunk-2953ff5c":"8247c515","chunk-2ba81c7e":"843107dc","chunk-2d45b981":"6fa77608","chunk-302c58ee":"cd86f3f5","chunk-32900918":"5830a8c7","chunk-34819d5f":"849ca022","chunk-383d7e1c":"d7cf9fdf","chunk-38c5e306":"756fca52","chunk-3aa189c8":"6ee5230d","chunk-3b7a1078":"90127901","chunk-55e8bf8a":"dd4430fc","chunk-69b3d658":"9b96152b","chunk-77bf8295":"7d74c0f7","chunk-7a2b8c3b":"61a8fe8d","chunk-7bcfeea3":"d3d08f65","chunk-8061d052":"12d4ef34","chunk-a06f46ac":"560a5556","chunk-c0d518c0":"6220f446","chunk-c373006a":"a627afb1"}[n]+".js"}function h(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(n){var e=[],t={"chunk-19414623":1,"chunk-1d7ae54d":1,"chunk-1ec39a86":1,"chunk-2953ff5c":1,"chunk-2ba81c7e":1,"chunk-2d45b981":1,"chunk-302c58ee":1,"chunk-32900918":1,"chunk-34819d5f":1,"chunk-383d7e1c":1,"chunk-38c5e306":1,"chunk-3aa189c8":1,"chunk-3b7a1078":1,"chunk-55e8bf8a":1,"chunk-69b3d658":1,"chunk-77bf8295":1,"chunk-7a2b8c3b":1,"chunk-7bcfeea3":1,"chunk-8061d052":1,"chunk-a06f46ac":1,"chunk-c0d518c0":1,"chunk-c373006a":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-19414623":"86b7c162","chunk-1d7ae54d":"78ed193d","chunk-1ec39a86":"4d9b7fc0","chunk-2953ff5c":"46fead89","chunk-2ba81c7e":"bba74ba6","chunk-2d45b981":"de8ebb6d","chunk-302c58ee":"84bb1df3","chunk-32900918":"72a03bca","chunk-34819d5f":"7b44f7d9","chunk-383d7e1c":"ef408abd","chunk-38c5e306":"6539af2b","chunk-3aa189c8":"e30d7d18","chunk-3b7a1078":"2acd8783","chunk-55e8bf8a":"96ea295b","chunk-69b3d658":"c569ebec","chunk-77bf8295":"f6b14a6b","chunk-7a2b8c3b":"1f4aab07","chunk-7bcfeea3":"4213b6d0","chunk-8061d052":"26c6866e","chunk-a06f46ac":"099c8236","chunk-c0d518c0":"3f757348","chunk-c373006a":"210cc969"}[n]+".css",r=h.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var d=a[o],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===c||f===r))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){d=i[o],f=d.getAttribute("data-href");if(f===c||f===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[n],l.parentNode.removeChild(l),t(a)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){u[n]=0})));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise((function(e,t){c=r[n]=[e,t]}));e.push(c[2]=a);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,h.nc&&f.setAttribute("nonce",h.nc),f.src=o(n);var i=new Error;d=function(e){f.onerror=f.onload=null,clearTimeout(l);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+c+": "+u+")",i.name="ChunkLoadError",i.type=c,i.request=u,t[1](i)}r[n]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(e)},h.m=n,h.c=c,h.d=function(n,e,t){h.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},h.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},h.t=function(n,e){if(1&e&&(n=h(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)h.d(t,c,function(e){return n[e]}.bind(null,c));return t},h.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return h.d(e,"a",e),e},h.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},h.p="",h.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var l=f;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("85ec"),u=t.n(c);u.a},"3aa6":function(n,e){(function(n,e){var t=n.documentElement,c="orientationchange"in window?"orientationchange":"resize",u=function(){var n=t.clientWidth;n&&(t.style.fontSize=n/768*48+"px")};n.addEventListener&&(e.addEventListener(c,u,!1),n.addEventListener("DOMContentLoaded",u,!1))})(document,window)},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a=(t("034f"),t("2877")),o={},h=Object(a["a"])(o,u,r,!1,null,null,null),d=h.exports,f=(t("d3b7"),t("8c4f"));c["default"].use(f["a"]);var i=[{path:"/",redirect:"home"},{path:"/home",component:function(){return t.e("chunk-3b7a1078").then(t.bind(null,"bb51"))}},{path:"/city/:cityId",name:"c",component:function(){return t.e("chunk-77bf8295").then(t.bind(null,"0d5f"))}},{path:"/msite",component:function(){return t.e("chunk-55e8bf8a").then(t.bind(null,"e07d"))}},{path:"/login",component:function(){return t.e("chunk-302c58ee").then(t.bind(null,"a55b"))}},{path:"/profile",component:function(){return t.e("chunk-7a2b8c3b").then(t.bind(null,"c66d"))}},{path:"/info",component:function(){return t.e("chunk-69b3d658").then(t.bind(null,"2469"))}},{path:"/balance",component:function(){return t.e("chunk-2ba81c7e").then(t.bind(null,"bd30"))}},{path:"/benefit",component:function(){return t.e("chunk-1d7ae54d").then(t.bind(null,"5212"))}},{path:"/hbHistory",component:function(){return t.e("chunk-2953ff5c").then(t.bind(null,"0575"))}},{path:"/huanhb",component:function(){return t.e("chunk-a06f46ac").then(t.bind(null,"1249"))}},{path:"/food",component:function(){return t.e("chunk-34819d5f").then(t.bind(null,"ae7f"))}},{path:"/search",component:function(){return t.e("chunk-19414623").then(t.bind(null,"2d3b"))}},{path:"/order",component:function(){return t.e("chunk-8061d052").then(t.bind(null,"cf2a"))}},{path:"/forget",component:function(){return t.e("chunk-383d7e1c").then(t.bind(null,"4f3a"))}},{path:"/points",component:function(){return t.e("chunk-1ec39a86").then(t.bind(null,"0577"))}},{path:"/shop",component:function(){return t.e("chunk-c373006a").then(t.bind(null,"0fa5"))}},{path:"/fooddetail",component:function(){return t.e("chunk-2d45b981").then(t.bind(null,"dbc9"))}},{path:"/confirmOrder",component:function(){return t.e("chunk-c0d518c0").then(t.bind(null,"8873"))}},{path:"/chooseAddress",component:function(){return t.e("chunk-32900918").then(t.bind(null,"c405"))}},{path:"/addAddress",component:function(){return t.e("chunk-38c5e306").then(t.bind(null,"2d3d"))}},{path:"/payment",component:function(){return t.e("chunk-3aa189c8").then(t.bind(null,"1175"))}},{path:"/orderDetail",component:function(){return t.e("chunk-7bcfeea3").then(t.bind(null,"d3bb"))}}],l=new f["a"]({routes:i}),b=l,p=t("2f62");c["default"].use(p["a"]);var s=new p["a"].Store({state:{shop:"",orderDe:""},getters:{},mutations:{cart:function(n,e){n.shop=e,console.log(n.shop)},orderDe:function(n,e){n.orderDe=e}},actions:{},modules:{}}),k=(t("1157"),t("5c96")),m=t.n(k),v=(t("0fae"),t("fa6d"),t("bc3a")),g=t.n(v),y=t("a7fe"),w=t.n(y);c["default"].use(w.a,g.a),g.a.defaults.baseURL="https://elm.cangdu.org",g.a.defaults.withCredentials=!0,g.a.interceptors.response.use((function(n){return n.data}),(function(n){return Promise.reject(n)}));t("3aa6");c["default"].config.productionTip=!1,c["default"].use(m.a),new c["default"]({router:b,store:s,render:function(n){return n(d)}}).$mount("#app")},"85ec":function(n,e,t){}});
//# sourceMappingURL=app.1ccea183.js.map