(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activites/activites"],{3204:function(t,n,e){"use strict";var o=e("c1c0"),i=e.n(o);i.a},"56b6":function(t,n,e){"use strict";e.r(n);var o=e("cdba"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"8a82":function(t,n,e){"use strict";e.r(n);var o=e("8f20"),i=e("56b6");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("3204");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=r.exports},"8f20":function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},bb6b:function(t,n,e){"use strict";(function(t){e("a8a6"),e("921b");o(e("66fd"));var n=o(e("8a82"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c1c0:function(t,n,e){},cdba:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("567f"),i=o.constant,a=o.util,u={data:function(){return{activities:[],communityId:""}},components:{},props:{},onLoad:function(t){var n=this;o.getOwner((function(t){var e="";e=null==t?"7020181217000001":t.communityId,n.communityId=e,n.loadActivitesFun()}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{loadActivitesFun:function(){var t=this,n={page:1,row:15,communityId:this.communityId};o.request({url:i.url.listActivitiess,header:o.getHeaders(),method:"GET",data:n,success:function(n){if(console.log("请求返回信息：",n),200==n.statusCode){var e=n.data.activitiess,o=[];return e.forEach((function(n){n.src=i.url.filePath+"?fileId="+n.headerImg+"&communityId="+t.communityId+"&time="+new Date;var e=n.startTime.replace(/\-/g,"/"),u=new Date(e);n.startTime=a.date.formatDate(u),o.push(n)})),void(t.activities=o)}wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}}};n.default=u}},[["bb6b","common/runtime","common/vendor"]]]);