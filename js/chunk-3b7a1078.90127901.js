(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7a1078"],{"110e":function(t,e,i){},"159b":function(t,e,i){var n=i("da84"),r=i("fdbc"),s=i("17c2"),o=i("9112");for(var a in r){var c=n[a],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,r=i("a640"),s=i("ae40"),o=r("forEach"),a=s("forEach");t.exports=o&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1ba4":function(t,e,i){"use strict";var n=i("110e"),r=i.n(n);r.a},4160:function(t,e,i){"use strict";var n=i("23e7"),r=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"65f0":function(t,e,i){var n=i("861d"),r=i("e8b5"),s=i("b622"),o=s("species");t.exports=function(t,e){var i;return r(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var n=i("83ab"),r=i("d039"),s=i("5135"),o=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(s(a,t))return a[t];e||(e={});var i=[][t],u=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:c,f=s(e,1)?e[1]:void 0;return a[t]=!!i&&!r((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,l,f)}))}},b64b:function(t,e,i){var n=i("23e7"),r=i("7b0b"),s=i("df75"),o=i("d039"),a=o((function(){s(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return s(r(t))}})},b727:function(t,e,i){var n=i("0366"),r=i("44ad"),s=i("7b0b"),o=i("50c4"),a=i("65f0"),c=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f;return function(y,p,v,d){for(var C,g,b=s(y),S=r(b),_=n(p,v,3),m=o(S.length),L=0,E=d||a,k=e?E(y,m):i?E(y,0):void 0;m>L;L++)if((h||L in S)&&(C=S[L],g=_(C,L,b),t))if(e)k[L]=g;else if(g)switch(t){case 3:return!0;case 5:return C;case 6:return L;case 2:c.call(k,C)}else if(l)return!1;return f?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeWrap"},[i("header",[i("span",{staticClass:"logo"},[t._v("ele.me")]),t.isShow?t._e():i("router-link",{attrs:{to:"/login"}},[i("span",[t._v("登录|注册")])]),t.isShow?i("router-link",{attrs:{to:"/profile"}},[i("span",[i("i",{staticClass:"el-icon-user"})])]):t._e()],1),i("nav",[t._m(0),i("router-link",{attrs:{to:{name:"c",params:{cityId:t.guessCity?t.guessCity.id:1}}}},[i("span",[t._v(t._s(t.guessCity?t.guessCity.name:""))]),i("i",{staticClass:"el-icon-arrow-right"})])],1),i("section",{staticClass:"hot_city"},[i("h4",{staticClass:"city_title"},[t._v("热门城市")]),i("ul",t._l(t.hotCity,(function(e){return i("li",{key:e.id,staticClass:"city_style",on:{click:function(i){return t.chooseCity(e.id)}}},[t._v(t._s(e.name))])})),0)]),i("section",{staticClass:"group_city"},[i("ul",t._l(t.groupCity,(function(e,n,r){return i("li",{key:n,staticClass:"g_li"},[i("h4",{staticClass:"city_title"},[t._v(" "+t._s(n)+" "+t._s(r?"":"(按字母排序)")+" ")]),i("ul",t._l(e,(function(e){return i("li",{key:e.id,staticClass:"city_style ellipsis",on:{click:function(i){return t.chooseCity(e.id)}}},[t._v(t._s(e.name))])})),0)])})),0)])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v("当前定位城市：")]),i("span",[t._v("定位不准时，请在城市列表中选择")])])}],s=(i("4160"),i("b64b"),i("159b"),{name:"Home",data:function(){return{guessCity:null,hotCity:[],groupCity:null,isShow:!0}},created:function(){var t=this;localStorage.getItem("user")?this.isShow=!0:this.isShow=!1,this.axios.get("v1/cities",{params:{type:"guess"}}).then((function(e){t.guessCity=e})).catch((function(t){})),this.axios.get("v1/cities",{params:{type:"hot"}}).then((function(e){t.hotCity=e})).catch((function(t){})),this.axios.get("v1/cities",{params:{type:"group"}}).then((function(e){t.handleGroupCity(e)})).catch((function(t){}))},methods:{handleGroupCity:function(t){var e={};Object.keys(t).sort().forEach((function(i){e[i]=t[i]})),this.groupCity=e},chooseCity:function(t){this.$router.push({name:"c",params:{cityId:t}})}}}),o=s,a=(i("1ba4"),i("2877")),c=Object(a["a"])(o,n,r,!1,null,"0e64fea6",null);e["default"]=c.exports},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3b7a1078.90127901.js.map