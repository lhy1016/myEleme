(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d7ae54d"],{2734:function(t,s,i){"use strict";var e=i("d345"),a=i.n(e);a.a},5212:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.explainIsShow?e("div",[e("header",{attrs:{id:"head_top"}},[e("section",{staticClass:"head_goback",on:{click:t.goMy}},[e("i",{staticClass:"el-icon-arrow-left"})]),t._m(0)]),e("section",[e("section",{staticClass:"category_title"},[e("span",{class:t.isShow?"choosed":"",on:{click:function(s){t.isShow=!t.isShow}}},[t._v("红包")]),e("span",{class:t.isShow?"":"choosed",on:{click:function(s){t.isShow=!t.isShow}}},[t._v("商家代金券")])]),t.isShow?e("section",{staticClass:"content"},[e("section",{staticClass:"hongbao_container"},[e("header",{staticClass:"hongbao_title"},[e("section",{staticClass:"total_number"},[t._v(" 有 "),e("span",[t._v(t._s(t.redPacket.length))]),t._v("个红包即将到期 ")]),e("section",{staticClass:"hongbao_description"},[e("i",{staticClass:"el-icon-question"}),e("a",{on:{click:function(s){t.explainIsShow=!t.explainIsShow}}},[t._v("红包说明")])])]),e("ul",{staticClass:"hongbao_list_ul"},t._l(t.redPacket,(function(s){return e("li",{staticClass:"hongbao_list_li"},[e("section",{staticClass:"list_item"},[e("div",{staticClass:"list_item_left"},[e("span",[t._v("￥")]),e("span",[t._v(t._s(4.5==s.amount?4:s.amount))]),e("span",[t._v(".")]),e("span",[t._v("0")]),e("p",[t._v(t._s(s.description_map.sum_condition))])]),e("div",{staticClass:"list_item_right"},[e("h4",[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.description_map.validity_periods)+" ")]),e("p",[t._v(t._s(s.description_map.phone))])]),e("div",{staticClass:"time_left"},[t._v(t._s(s.description_map.validity_delta))])])])})),0),t._m(1)]),e("router-link",{attrs:{to:"/hbHistory"}},[e("span",{staticClass:"check_history"},[t._v("查看历史红包")]),e("i",{staticClass:"el-icon-arrow-right"})]),e("footer",{staticClass:"hongbao_footer"},[e("router-link",{attrs:{to:"/huanhb"}},[t._v("兑换红包")]),e("router-link",{attrs:{to:""}},[t._v("推荐有奖")])],1)],1):t._e(),t.isShow?t._e():e("section",{staticClass:"voucher_container"},[e("section",{staticClass:"hongbao_description voucher_header"},[e("i",{staticClass:"el-icon-question"}),e("router-link",{attrs:{to:""}},[t._v("商家代金券说明")])],1)]),t.isShow?t._e():e("section",{staticClass:"unable_use"},[e("img",{attrs:{src:i("dd3b"),alt:""}}),e("p",[t._v("无法使用代金券")]),e("p",[t._v("非客户端或客户端版本过低")]),e("router-link",{attrs:{to:""}},[t._v(" 下载或升级客户端 ")])],1)])]):t._e(),t.explainIsShow?t._e():e("div",[e("header",{attrs:{id:"explain_top"}},[e("section",{staticClass:"head_goback",on:{click:function(s){t.explainIsShow=!t.explainIsShow}}},[e("i",{staticClass:"el-icon-arrow-left"})]),t._m(2)]),t._m(3)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"title_head ellipsis"},[i("span",{staticClass:"title_text"},[t._v(" 我的优惠 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",{staticClass:"list_item_footer"},[i("p",[t._v("限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"title_head ellipsis"},[i("span",{staticClass:"title_text"},[t._v(" 红包说明 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"scroll_container",attrs:{id:"scroll_section"}},[i("div",{staticClass:"markdown"},[i("h3",[t._v("Q1: 怎么获得红包？")]),i("ul",[i("li",[t._v("通过邀请好友获得")]),i("li",[t._v("在下单返红包的商家下单获得")]),i("li",[t._v("抢微信朋友分享的红包获得")])]),i("h3",[t._v("Q2: 红包可以做什么？")]),i("p",[t._v("可以抵扣在线支付时的实际支付金额。")]),i("h3",[t._v("Q3: 红包的门槛金额按照什么金额计算？")]),i("p",[t._v("红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。")]),i("h3",[t._v("Q4: 一个红包能拆开多次使用吗？")]),i("p",[t._v("不能，一个红包只能一次性使用，不能分开使用。")]),i("h3",[t._v("Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？")]),i("p",[t._v("会的，订单无效后红包会自动返还到您的账户里。")]),i("h3",[t._v("Q6: 红包兑换码怎样兑换成红包，怎样查看红包？")]),i("p",[t._v("在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换.")])])])}],o={name:"Benefit",data:function(){return{isShow:!0,user:"",user_id:"",redPacket:[],explainIsShow:!0}},created:function(){var t=this;localStorage.getItem("user")&&(this.user=JSON.parse(localStorage.getItem("user")),this.user_id=this.user[0].user_id,console.log(this.user_id),this.axios.get("promotion/v2/users/"+this.user_id+"/hongbaos?limit=20&offset=0",{user_id:this.user_id,limit:20,offset:0}).then((function(s){t.redPacket=s,console.log(s)})).catch((function(t){})))},methods:{goMy:function(){this.$router.push({path:"/profile"})}}},n=o,c=(i("2734"),i("2877")),l=Object(c["a"])(n,e,a,!1,null,"648dc05b",null);s["default"]=l.exports},d345:function(t,s,i){},dd3b:function(t,s,i){t.exports=i.p+"img/voucher.a38e23b6.png"}}]);
//# sourceMappingURL=chunk-1d7ae54d.7144fde7.js.map