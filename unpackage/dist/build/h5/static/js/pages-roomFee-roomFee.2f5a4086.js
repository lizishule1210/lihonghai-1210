(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-roomFee-roomFee"],{"14f5":function(e,t,i){var n;i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var a=i("5757");!function(a,o){n=function(){return o(a)}.call(t,i,t,e),void 0===n||(e.exports=n)}(window,(function(e,t){if(!e.jWeixin){var i,n,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var t in o)e[o[t]]=t;return e}(),r=e.document,c=r.title,u=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),l=!(!d.match("mac")&&!d.match("win")),f=-1!=u.indexOf("wxdebugger"),p=-1!=u.indexOf("micromessenger"),m=-1!=u.indexOf("android"),v=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),g=(n=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",h={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:m?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},y={},_={_completes:[]},x={state:0,data:{}};B((function(){h.initEndTime=O()}));var I=!1,S=[],C=(i={config:function(t){V("config",y=t);var i=!1!==y.check;B((function(){if(i)M(o.config,{verifyJsApiList:L(y.jsApiList),verifyOpenTagList:L(y.openTagList)},function(){_._complete=function(e){h.preVerifyEndTime=O(),x.state=1,x.data=e},_.success=function(e){w.isPreVerifyOk=0},_.fail=function(e){_._fail?_._fail(e):x.state=-1};var e=_._completes;return e.push((function(){!function(){if(!(l||f||y.debug||g<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=h.initEndTime-h.initStartTime,w.preVerifyTime=h.preVerifyEndTime-h.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(t){w.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=i}})}}()})),_.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();_._completes=[]},_}()),h.preVerifyStartTime=O();else{x.state=1;for(var e=_._completes,t=0,n=e.length;t<n;++t)e[t]();_._completes=[]}})),C.invoke||(C.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,P(i),n)},C.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=x.state?e():(_._completes.push(e),!p&&y.debug&&e())},error:function(e){g<"6.0.2"||(-1==x.state?e(x.data):_._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:L(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=s[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){b(o.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){b(o.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?M("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):M("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){b(o.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){b(o.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){b(o.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){b("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){b("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},a(i,"getLocation",(function(e){M(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),a(i,"hideOptionMenu",(function(e){M("hideOptionMenu",{},e)})),a(i,"showOptionMenu",(function(e){M("showOptionMenu",{},e)})),a(i,"closeWindow",(function(e){M("closeWindow",{},e=e||{})})),a(i,"hideMenuItems",(function(e){M("hideMenuItems",{menuList:e.menuList},e)})),a(i,"showMenuItems",(function(e){M("showMenuItems",{menuList:e.menuList},e)})),a(i,"hideAllNonBaseMenuItem",(function(e){M("hideAllNonBaseMenuItem",{},e)})),a(i,"showAllNonBaseMenuItem",(function(e){M("showAllNonBaseMenuItem",{},e)})),a(i,"scanQRCode",(function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(v){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),a(i,"openAddress",(function(e){M(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),a(i,"openProductSpecificView",(function(e){M(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),a(i,"addCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var s=t[n],r={card_id:s.cardId,card_ext:s.cardExt};i.push(r)}M(o.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),a(i,"chooseCard",(function(e){M("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),a(i,"openCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var s=t[n],r={card_id:s.cardId,code:s.code};i.push(r)}M(o.openCard,{card_list:i},e)})),a(i,"consumeAndShareCard",(function(e){M(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),a(i,"chooseWXPay",(function(e){M(o.chooseWXPay,A(e),e)})),a(i,"openEnterpriseRedPacket",(function(e){M(o.openEnterpriseRedPacket,A(e),e)})),a(i,"startSearchBeacons",(function(e){M(o.startSearchBeacons,{ticket:e.ticket},e)})),a(i,"stopSearchBeacons",(function(e){M(o.stopSearchBeacons,{},e)})),a(i,"onSearchBeacons",(function(e){b(o.onSearchBeacons,e)})),a(i,"openEnterpriseChat",(function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),a(i,"launchMiniProgram",(function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)})),a(i,"openBusinessView",(function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),a(i,"miniProgram",{navigateBack:function(e){e=e||{},B((function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){B((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),i),T=1,k={};return r.addEventListener("error",(function(e){if(!m){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=T++,t["wx-id"]=a),k[a])return;k[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),r.addEventListener("load",(function(e){if(!m){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(k[n]=!1)}}}),!0),t&&(e.wx=e.jWeixin=C),C}function M(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,P(i),(function(e){N(t,e,n)})):V(t,n)}function b(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),N(t,e,i)})):V(t,n||i)}function P(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function N(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=s[i];n&&(i=n);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",y.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function L(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=o[n];a&&(e[t]=a)}return e}}function V(e,t){if(!(!y.debug||t&&t.isInnerInvoke)){var i=s[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function O(){return(new Date).getTime()}function B(t){p&&(e.WeixinJSBridge?t():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",t,!1))}}))},"52be":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"block__title"},[e._v("房屋信息")]),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("小区名称")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.communityName))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("楼栋编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.floorNum+"号楼"))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("单元编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.unitNum+"单元"))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("房屋编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.roomNum+"室"))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("房屋楼层")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.layer+"层"))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("建筑面积")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.builtUpArea+"平方米"))])],1)],1)],1),i("v-uni-view",{staticClass:"block__title"},[e._v("费用信息")]),i("v-uni-view",{staticClass:"cu-list menu fee-last"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("费用编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.feeId))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("金额")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.amount+"元/月"))])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("周期")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{bindchange:"PickerChange",value:e.index,range:e.feeMonthList},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.dateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.feeMonthName))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[e._v("到期时间")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[e._v(e._s(e.endTime))])],1)],1)],1)],1),i("v-uni-view",{staticClass:" bg-white  border flex justify-end",staticStyle:{position:"fixed",width:"100%",bottom:"0"}},[i("v-uni-view",{staticClass:"action text-orange margin-right line-height"},[e._v("合计："+e._s(e.receivableAmount)+"元")]),i("v-uni-view",{staticClass:"btn-group"},[i("v-uni-button",{staticClass:"cu-btn bg-red shadow-blur lgplus sharp",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPayFee()}}},[e._v("提交订单")])],1)],1)],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"702b":function(e,t,i){var n=i("df34"),a=i("1003"),o=i("14f5"),s=function(){"use strict";function e(){n(this,e)}return a(e,[{key:"wexinPay",value:function(e,t){var i=[e.appId,e.timeStamp,e.nonceStr,e.sign,e.package,e.sign],n=i[0],a=i[1],s=i[2],r=i[3],c=i[4],u=i[5];o.config({debug:!1,appId:n,timestamp:a,nonceStr:s,signature:r,jsApiList:["chooseWXPay"]}),o.ready((function(){o.chooseWXPay({timestamp:a,nonceStr:s,package:c,signType:"MD5",paySign:u,success:function(e){t(e)},fail:function(e){uni.showToast({icon:"none",title:"支付失败"})}})})),o.error((function(e){}))}}]),e}();e.exports=new s},"74de":function(e,t,i){var n=i("fb63");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("8283189e",n,!0,{sourceMap:!1,shadowMode:!1})},7722:function(e,t,i){"use strict";i.r(t);var n=i("52be"),a=i("9e35");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("f732");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"477624f1",null,!1,n["a"],s);t["default"]=c.exports},9507:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("7b36"),a=n.constant,o=n.util,s=i("702b"),r={data:function(){return{date:"2018-12-25",index:0,active:0,tablist:["缴费","历史"],TabCur:0,scrollLeft:0,showFeeMonth:!1,feeMonthList:["一个月","半年","一年","两年"],feeMonthName:"一个月",feeMonth:1,endTime:"",ordEndTime:"",amount:0,receivableAmount:0,communityId:"",communityName:"",feeId:"",floorNum:"",unitNum:"",roomNum:"",layer:"",builtUpArea:"",costList:[{},{}],additionalAmount:"",appId:""}},components:{},props:{},onLoad:function(e){n.onLoad(e),this.appId=uni.getStorageSync(a.mapping.W_APP_ID);var t=JSON.parse(e.fee);console.log("_fee",t);var i=t.amount,s=i,r=n.getCurrentCommunity(),c=new Date(t.endTime),u=o.date.addMonth(c,this.feeMonth);this.receivableAmount=s,this.communityId=r.communityId,this.communityName=r.communityName,this.floorNum=t.floorNum,this.unitNum=t.unitNum,this.roomNum=t.roomNum,this.layer=t.layer,this.builtUpArea=t.builtUpArea,this.feeId=t.feeId,this.amount=i,this.additionalAmount=t.additionalAmount,this.endTime=o.date.formatDate(u),this.ordEndTime=t.endTime},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{dateChange:function(e){console.log("onConfirm",e);var t=null;t=this.feeMonthList[e.detail.value];var i=1;if("一个月"==t)i=1;else if("半年"==t)i=6;else if("一年"==t)i=12;else{if("两年"!=t)return;i=24}var n=i*this.amount,a=new Date(this.ordEndTime),s=o.date.addMonth(a,i);this.showFeeMonth=!1,this.feeMonthName=t,this.receivableAmount=n,this.feeMonth=i,this.endTime=o.date.formatDate(s)},onFeeMonthChange:function(e){console.log(e)},onFeeMonthCancel:function(e){this.showFeeMonth=!1},_payWxApp:function(e){var t=this.receivableAmount;wx.showLoading({title:"支付中"});var i="APP",o={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"物业费",receivedAmount:t,tradeType:i,appId:this.appId};n.request({url:a.url.preOrder,header:n.getHeaders(),method:"POST",data:o,success:function(e){if(console.log(e),200==e.statusCode&&"0"==e.data.code){var t=e.data,i={appid:t.appId,noncestr:t.nonceStr,package:"Sign=WXPay",partnerid:t.partnerid,prepayid:t.prepayid,timestamp:t.timeStamp,sign:t.sign},n=JSON.stringify(i);return uni.requestPayment({provider:"wxpay",orderInfo:n,success:function(e){uni.showToast({title:"支付成功",duration:2e3}),uni.navigateBack({})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}),void wx.hideLoading()}wx.hideLoading(),wx.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(e){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},onPayFee:function(){var e=this.receivableAmount;wx.showLoading({title:"支付中"});var t="JSAPI",i={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"物业费",receivedAmount:e,tradeType:t,appId:this.appId};n.request({url:a.url.preOrder,header:n.getHeaders(),method:"POST",data:i,success:function(e){if(200==e.statusCode&&"0"==e.data.code){var t=e.data;return s.wexinPay(t,(function(){uni.showToast({title:"支付成功",duration:2e3}),uni.navigateBack({})})),void wx.hideLoading()}wx.hideLoading(),wx.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(e){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}}};t.default=r},"9e35":function(e,t,i){"use strict";i.r(t);var n=i("9507"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},f732:function(e,t,i){"use strict";var n=i("74de"),a=i.n(n);a.a},fb63:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".ppf_item[data-v-477624f1]{padding:%?0?% %?0?% %?0?% %?0?%}.block__title[data-v-477624f1]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-477624f1]{height:%?40?%}.block__bottom[data-v-477624f1]{height:%?180?%}.fee-last[data-v-477624f1]{margin-bottom:%?200?%}.cu-btn.lgplus[data-v-477624f1]{padding:0 20px;font-size:18px;height:%?100?%}.cu-btn.sharp[data-v-477624f1]{border-radius:%?0?%}.line-height[data-v-477624f1]{line-height:%?100?%}",""]),e.exports=t}}]);