(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-applicationKeyUser-applicationKeyUser"],{2778:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".block__title[data-v-744414fb]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?60?% %?30?% %?20?%}.button_up_blank[data-v-744414fb]{height:%?40?%}.aku_photo_view[data-v-744414fb]{background-color:#fff;height:%?250?%;padding:%?40?% 0 %?40?% %?40?%}.aku_photo_view uni-text[data-v-744414fb]{font-size:%?30?%;color:#8a8a8a}",""]),e.exports=t},"593e":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"block__title"},[e._v("业主信息")]),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("姓名")]),i("v-uni-input",{attrs:{required:!0,label:"姓名",clearable:!0,placeholder:"请输入名称",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("年龄")]),i("v-uni-input",{attrs:{type:"number",label:"年龄",placeholder:"请输入年龄",required:!0,clearable:!0,name:"age"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("性别")]),i("v-uni-picker",{attrs:{value:e.sex,range:e.sexList},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.index>-1?e.sexList[e.index]:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"block__title"},[e._v("身份信息")]),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("身份")]),i("v-uni-picker",{attrs:{value:e.typeCdName,range:e.typeCdList},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PickerIdentChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}},[e._v(e._s(e.indexIdent>-1?e.typeCdList[e.indexIdent]:"请选择身份"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("身份证")]),i("v-uni-input",{attrs:{required:!0,label:"身份证",clearable:!0,placeholder:"请输入身份证",name:"idCard"},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("有效期")]),i("v-uni-picker",{attrs:{value:e.expiry,range:e.expiryList},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PickerExpiryChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.indexExpiry>-1?e.expiryList[e.indexExpiry]:"请选择有效期"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("手机号")]),i("v-uni-input",{attrs:{type:"number",required:!0,label:"手机号",clearable:!0,placeholder:"请输入手机号",name:"tel"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("验证码")]),i("v-uni-input",{attrs:{placeholder:"请输入短信验证码",name:"input"},model:{value:e.msgCode,callback:function(t){e.msgCode=t},expression:"msgCode"}}),i("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{type:"number",disabled:e.btnDisabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendMsgCode()}}},[e._v(e._s(e.btnValue))])],1),i("v-uni-view",{staticClass:"block__title"},[e._v("证件照片")]),i("v-uni-view",{staticClass:"cu-bar bg-white "},[i("v-uni-view",{staticClass:"action"},[e._v("请上传身份证正反面")]),i("v-uni-view",{staticClass:"action"},[e._v(e._s(e.imgList.length)+"/2")])],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"grid col-2 grid-square flex-sub"},[e._l(e.imgList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"bg-img",attrs:{"data-url":e.imgList[n]}},[i("v-uni-image",{attrs:{src:e.imgList[n],mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":n},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.removePhoto(n)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),e.imgList.length<2?i("v-uni-view",{staticClass:"solids",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ChooseImage()}}},[i("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):e._e()],2)],1),i("v-uni-view",{staticClass:"button_up_blank"}),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-green lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveApplicationKey()}}},[e._v("提交申请")])],1),i("v-uni-view",{staticClass:"button_up_blank"})],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"7a93":function(e,t,i){"use strict";var n=i("dbf9"),a=i.n(n);a.a},"7ba6":function(e,t,i){"use strict";i.r(t);var n=i("d73d"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},d73d:function(e,t,i){"use strict";i("4160"),i("a434"),i("d3b7"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("7b36"),a=n.util,o=n.factory,s=n.constant,l={data:function(){return{index:-1,indexIdent:-1,indexExpiry:-1,locations:[],communityId:"",showTypeCd:!1,typeCdList:["业主","家庭成员","租客"],typeCdName:"业主",sexList:["男","女"],showSex:!1,showExpiry:!1,expiryList:["一个月","半年","一年"],photoList:[],name:"",age:null,sex:"男",typeCd:"10004",idCard:"",startTime:null,endTime:null,tel:"",photos:[],msgCode:"",imgList:[],expiry:"",second:60,btnValue:"验证码",btnDisabled:!1,propertyId:""}},components:{},props:{},onLoad:function(e){var t=this;n.onLoad(e),n.getOwner((function(e){t.name=e.appUserName,t.idCard=e.idCard,t.tel=e.link})),this.locations=JSON.parse(e.locations),this.communityId=e.communityId,n.getProperty().then((function(e){t.propertyId=e.storeId}))},onReady:function(){},onShow:function(){var e=a.date.formatTime(new Date);this.startTime=e},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{PickerChange:function(e){this.index=e.detail.value,console.log("选择性别",e),this.showSex=!1,this.sex=e.detail.value},PickerIdentChange:function(e){this.indexIdent=e.detail.value},PickerExpiryChange:function(e){this.indexExpiry=e.detail.value;var t=null;t="一个月"==e.detail.value?a.date.formatTime(a.date.addMonth(new Date,1)):"半年"==e.detail.value?a.date.formatTime(a.date.addMonth(new Date,6)):a.date.formatTime(a.date.addYear(new Date,1)),this.showExpiry=!1,this.expiry=e.detail.value,this.endTime=t},ViewImage:function(e){uni.previewImage({urls:this.imgList,current:e.currentTarget.dataset.url})},removePhoto:function(e){var t=[];this.imgList.forEach((function(i,n){n!=e&&t.push(i)}));var i=[];this.photos.forEach((function(t,n){n!=e&&i.push(t)})),this.photos=i,this.imgList=t},deleteImage:function(e){console.log(e);var t=this.$data.imgList;t.splice(e,1)},ChooseImage:function(e){var t=this;wx.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){console.log(e),t.$data.imgList.push(e.tempFilePaths[0]);var i="";o.base64.urlTobase64(e.tempFilePaths[0]).then((function(e){i=e,console.log("base64",i),t.photos.push(i)}))}})},sendMsgCode:function(){console.log("获取验证码");var e=this,t={tel:this.tel};console.log("obj",t),""!=t.tel?uni.request({url:s.url.userSendSms,header:n.getHeaders(),method:"POST",data:t,success:function(t){if(console.log(t),200==t.statusCode)return wx.showToast({title:"验证码下发成功",icon:"none",duration:2e3}),wx.hideLoading(),void e.timer();wx.hideLoading(),wx.showToast({title:t.data,icon:"none",duration:2e3})},fail:function(e){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}}):wx.showToast({title:"请输入手机号",icon:"none",duration:2e3})},timer:function(){var e=this,t=new Promise((function(t,i){var n=setInterval((function(){var i=e.second-1;e.second=i,e.btnValue=i+"秒",e.btnDisabled=!0,e.second<=0&&(e.second=60,e.btnValue="获取验证码",e.btnDisabled=!1,t(n))}),1e3)}));t.then((function(e){clearInterval(e)}))},chooseTypeCd:function(){this.showTypeCd=!0},onConfirm:function(e){console.log("onConfirm",e);var t="";t=0==e.detail.index?"10004":1==e.detail.index?"10005":"10006",this.showTypeCd=!1,this.typeCd=t,this.typeCdName=e.detail.value},onChange:function(e){console.log(e)},onCancel:function(e){this.showTypeCd=!1},chooseSex:function(){this.showSex=!0},onSexConfirm:function(e){console.log("onConfirm",e),this.showSex=!1,this.sex=e.detail.value},onSexChange:function(e){console.log(e)},onSexCancel:function(e){this.showSex=!1},chooseExpiry:function(){this.showExpiry=!0},onExpiryConfirm:function(e){console.log("onConfirm",e);var t=null;t="一个月"==e.detail.value?a.date.formatTime(a.date.addMonth(new Date,1)):"半年"==e.detail.value?a.date.formatTime(a.date.addMonth(new Date,6)):a.date.formatTime(a.date.addYear(new Date,1)),this.showExpiry=!1,this.expiry=e.detail.value,this.endTime=t},onExpiryChange:function(e){console.log(e)},onExpiryCancel:function(e){this.showExpiry=!1},saveApplicationKey:function(){var e={name:this.name,age:this.age,sex:this.sex,typeCd:this.typeCd,idCard:this.idCard,startTime:this.startTime,endTime:this.endTime,tel:this.tel,photos:[],msgCode:this.msgCode,communityId:this.communityId,machineIds:[],typeFlag:"1100102",storeId:this.propertyId};console.log(e);var t=this.photos;t.forEach((function(t){e.photos.push({photo:t})}));var i="";""==e.name&&(i="请填写名称"),null==e.age&&(i="请填写年龄"),0!=e.sex&&1!=e.sex&&(i="请选择性别"),""==e.typeCd&&(i="请选择身份"),""==e.idCard&&(i="请填写身份证"),null==e.startTime&&(i="请选择有效期"),null==e.endTime&&(i="请选择有效期"),""==e.tel&&(i="请选择填写手机号"),(null==e.photos||e.photos.length<2)&&(i="请选择证件照片"),""==e.msgCode&&(i="请填写验证码"),(null==this.locations||this.locations.length<1)&&(i="没有设备可申请钥匙"),""==i?(this.locations.forEach((function(t){e.machineIds.push({machineId:t.machineId})})),console.log(e),n.request({url:s.url.applyApplicationKey,header:n.getHeaders(),method:"POST",data:e,success:function(e){console.log("请求返回信息：",e),200!=e.statusCode?wx.showToast({title:"服务器异常了",icon:"none",duration:2e3}):wx.redirectTo({url:"/pages/applicationKeyProgress/applicationKeyProgress"})},fail:function(e){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})):wx.showToast({title:i,icon:"none",duration:2e3})}}};t.default=l},dbf9:function(e,t,i){var n=i("2778");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1ee28bbd",n,!0,{sourceMap:!1,shadowMode:!1})},f4ac:function(e,t,i){"use strict";i.r(t);var n=i("593e"),a=i("7ba6");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("7a93");var s,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"744414fb",null,!1,n["a"],s);t["default"]=c.exports}}]);