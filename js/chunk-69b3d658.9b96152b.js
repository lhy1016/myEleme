(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b3d658"],{"1cda":function(t,s,a){},2469:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",[a("header",{attrs:{id:"head_top"}},[a("section",{staticClass:"head_goback",on:{click:t.goMy}},[a("i",{staticClass:"el-icon-arrow-left"})]),t._m(0)]),a("section",{staticClass:"profile-info"},[a("section",{staticClass:"headportrait"},[a("input",{staticClass:"profileinfopanel-upload",attrs:{type:"file"}}),a("h2",[t._v("头像")]),a("div",{staticClass:"headportrait-div"},[a("img",{staticClass:"headportrait-div-top",attrs:{src:"//elm.cangdu.org/img/"+t.user.avatar,alt:""}}),t._m(1)])]),a("router-link",{attrs:{to:""}},[a("section",{staticClass:"headportraitwo headportrait"},[a("h2",[t._v("用户名")]),a("div",{staticClass:"headportrait-div"},[a("p",[t._v(t._s(t.user.username))]),a("span",{staticClass:"headportrait-div-bottom"},[a("i",{staticClass:"el-icon-arrow-right"})])])])]),a("router-link",{attrs:{to:""}},[a("section",{staticClass:"headportraithree headportraitwo headportrait"},[a("h2",[t._v("收获地址")]),a("div",{staticClass:"headportrait-div"},[a("span",{staticClass:"headportrait-div-bottom"},[a("i",{staticClass:"el-icon-arrow-right"})])])])]),a("section",{staticClass:"bind-phone"},[t._v(" 账号绑定 ")]),a("section",{staticClass:"headportraithree  headportraitwo headportrait blue",on:{click:t.phone}},[t._m(2),t._m(3)]),a("section",{staticClass:"bind-phone"},[t._v(" 安全设置 ")]),a("router-link",{attrs:{to:"/forget"}},[a("section",{staticClass:"headportraithree  headportraitwo headportrait"},[a("h2",[t._v(" 登录密码 ")]),a("div",{staticClass:"headportrait-div"},[a("p",[t._v("修改")]),a("span",{staticClass:"headportrait-div-bottom"},[a("i",{staticClass:"el-icon-arrow-right"})])])])]),a("section",{staticClass:"exitlogin",on:{click:t.logOut}},[t._v(" 退出登录 ")]),t.isShow?a("section",{staticClass:"coverpart"},[a("section",{staticClass:"cover-background"}),a("section",{staticClass:"cover-animate  cover-content"},[t._m(4),a("h2",[t._v("是否退出登录")]),a("div",{staticClass:"sa-botton"},[a("button",{staticClass:"waiting",on:{click:t.await}},[t._v("再等等")]),a("div",{staticStyle:{display:"inline-block"}},[a("button",{staticClass:"quitlogin",on:{click:t.quit}},[t._v("退出登录")])])])])]):t._e(),t.phoneIsShow?a("section",{staticClass:"tip_text_container"},[t._m(5),a("p",{staticClass:"tip_text"},[t._v("请在手机APP中设置")]),a("div",{staticClass:"confrim",on:{click:t.phoneClose}},[t._v("确认")])]):t._e()],1)])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"title_head ellipsis"},[a("span",{staticClass:"title_text"},[t._v(" 账户信息 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"headportrait-div-bottom"},[a("i",{staticClass:"el-icon-arrow-right"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",[a("i",{staticClass:"el-icon-mobile"}),t._v(" 手机 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"headportrait-div"},[a("p"),a("span",{staticClass:"headportrait-div-bottom"},[a("i",{staticClass:"el-icon-arrow-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sa-icon"},[a("span",{staticClass:"sa-body"}),a("span",{staticClass:"sa-dot"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip_icon"},[a("span"),a("span")])}],o={name:"Info",data:function(){return{user:"",isShow:!1,phoneIsShow:!1}},created:function(){var t=this;this.axios.get("v1/user").then((function(s){console.log(s),t.user=s})).catch((function(t){}))},methods:{logOut:function(){this.isShow=!0},await:function(){this.isShow=!1},quit:function(){localStorage.removeItem("user"),this.isShow=!1,this.$router.push({path:"/profile"})},goMy:function(){this.$router.push({path:"/profile"})},phone:function(){this.phoneIsShow=!0},phoneClose:function(){this.phoneIsShow=!1}}},r=o,n=(a("7017"),a("2877")),c=Object(n["a"])(r,i,e,!1,null,"50f8362a",null);s["default"]=c.exports},7017:function(t,s,a){"use strict";var i=a("1cda"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-69b3d658.9b96152b.js.map