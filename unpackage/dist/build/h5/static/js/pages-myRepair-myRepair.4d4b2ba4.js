(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myRepair-myRepair"],{"0f7a":function(t,i,e){"use strict";e("4160"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("567f"),s=(a.factory,a.constant),n={data:function(){return{active:0,ownerId:"",roomId:"",communityId:"",waitRepair:[],doingRepair:[],repaired:[]}},onLoad:function(t){var i=this;a.getRooms().then((function(t){var e=t.data.owner,a=t.data.rooms;if(null!=a&&void 0!=a&&0!=a.length){var s="";a.forEach((function(t){s+=t.roomId+","})),""!=s&&(s=s.substring(0,s.length-1)),i.communityId=e.communityId,i.ownerId=e.memberId,i.roomId=s,i._loadRepair(i.active)}}))},methods:{_loadRepair:function(t){var i=this,e="";e=0==t?"1000":1==t?"1100":"1200";var n={communityId:i.communityId,ownerId:i.ownerId,roomId:i.roomId,state:e,page:1,row:10};a.request({url:s.url.listMyRepair,header:a.getHeaders(),method:"GET",data:n,success:function(e){if(200==e.statusCode){var a=e.data.ownerRepairs;return console.log("_ownerRepairs",a),void(0==t?i.waitRepair=a:1==t?i.doingRepair=a:i.repaired=a)}wx.showToast({title:"查询报修单失败",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},onChange:function(t){console.log(t),this._loadRepair(t.detail.index)},tabSelect:function(t){this.active=t,this._loadRepair(t)}}};i.default=n},"0fac":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".solid-bottom[data-v-6a60aace]::after{border-bottom:%?2?% solid rgba(0,0,0,.1)}",""]),t.exports=i},1387:function(t,i,e){"use strict";e.r(i);var a=e("0f7a"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"5a1a":function(t,i,e){"use strict";e.r(i);var a=e("f5af"),s=e("1387");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("c7d8");var v,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"6a60aace",null,!1,a["a"],v);i["default"]=u.exports},ac14:function(t,i,e){var a=e("0fac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("9726942e",a,!0,{sourceMap:!1,shadowMode:!1})},c7d8:function(t,i,e){"use strict";var a=e("ac14"),s=e.n(a);s.a},f5af:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"flex text-center"},[e("v-uni-view",{staticClass:"cu-item flex-sub",class:0==t.active?"text-green cur":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect(0)}}},[t._v("待处理")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:1==t.active?"text-green cur":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect(1)}}},[t._v("接单中")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:2==t.active?"text-green cur":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect(2)}}},[t._v("完成")])],1)],1),0==t.active?e("v-uni-view",{staticClass:"ppfl_c"},t._l(t.waitRepair,(function(i,a){return e("v-uni-view",{key:a,staticClass:"bg-white margin-top margin-right-xs radius margin-left-xs padding"},[e("v-uni-view",{staticClass:"flex padding-bottom-xs solid-bottom justify-between"},[e("v-uni-view",[t._v(t._s(i.repairId))]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.tel))])],1),e("v-uni-view",{staticClass:"flex margin-top justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修类型")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairTypeName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修人")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修房间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.roomId))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("预约时间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.appointmentTime))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修内容")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.context))])],1)],1)})),1):t._e(),1==t.active?e("v-uni-view",{staticClass:"ppfl_c"},t._l(t.doingRepair,(function(i,a){return e("v-uni-view",{key:a,staticClass:"bg-white margin-top margin-right-xs radius margin-left-xs padding"},[e("v-uni-view",{staticClass:"flex padding-bottom-xs solid-bottom justify-between"},[e("v-uni-view",[t._v(t._s(i.repairId))]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.tel))])],1),e("v-uni-view",{staticClass:"flex margin-top justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修类型")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairTypeName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修人")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修房间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.roomId))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("预约时间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.appointmentTime))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修内容")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.context))])],1)],1)})),1):t._e(),2==t.active?e("v-uni-view",{staticClass:"ppfl_c"},t._l(t.repaired,(function(i,a){return e("v-uni-view",{key:a,staticClass:"bg-white margin-top margin-right-xs radius margin-left-xs padding"},[e("v-uni-view",{staticClass:"flex padding-bottom-xs solid-bottom justify-between"},[e("v-uni-view",[t._v(t._s(i.repairId))]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.tel))])],1),e("v-uni-view",{staticClass:"flex margin-top justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修类型")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairTypeName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修人")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.repairName))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修房间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.roomId))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("预约时间")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.appointmentTime))])],1),e("v-uni-view",{staticClass:"flex margin-top-xs justify-between"},[e("v-uni-view",{staticClass:"text-gray"},[t._v("报修内容")]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.context))])],1)],1)})),1):t._e()],1)},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))}}]);