(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2217fa79"],{"6ddf":function(t,e,c){"use strict";c("7655")},7655:function(t,e,c){},aa98:function(t,e,c){"use strict";c.d(e,"c",(function(){return i})),c.d(e,"e",(function(){return a})),c.d(e,"b",(function(){return s})),c.d(e,"d",(function(){return o})),c.d(e,"a",(function(){return u}));var n=c("b775");function i(t){return Object(n["a"])({url:"/canoon/mhxysy/device/list",method:"get",params:t})}function a(t){return Object(n["a"])({url:"/canoon/mhxysy/device/updateDeviceNickName",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/canoon/mhxysy/device/getDeviceAccountList",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/canoon/mhxysy/device/updateDeviceAccountList",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/canoon/mhxysy/device/bind",method:"post",data:t})}},cce8:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"remote-files"},[c("div",{staticClass:"tips"},[t._v(" 当前设备号:"+t._s(t.deviceId)+",帐号数量:"+t._s(t.deviceAccountListNum)+" ")]),c("div",{staticClass:"text"},[c("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入文件执行内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),c("div",{staticClass:"buttons"},[c("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)])},i=[],a=(c("a15b"),c("ac1f"),c("1276"),c("aa98")),s={name:"DashboardAdmin",components:{},data:function(){return{deviceId:"",textarea:"",id:"",deviceAccountListNum:""}},watch:{},mounted:function(){this.id=this.$route.query.data,this.deviceId=this.$route.query.deviceId,this.deviceAccountList()},methods:{deviceAccountList:function(){var t=this;Object(a["b"])({deviceId:this.id}).then((function(e){t.textarea=e.data.deviceAccountList.join("\n"),t.deviceAccountListNum=e.data.deviceAccountList.length}))},save:function(){var t=this,e=this.textarea.split(/\n/);console.log(this.textarea),console.log(e),Object(a["d"])({deviceId:this.id,accountInfoList:e}).then((function(e){t.$message({message:"保存成功",type:"success"})}))}}},o=s,u=(c("6ddf"),c("2877")),d=Object(u["a"])(o,n,i,!1,null,"6cf165c9",null);e["default"]=d.exports}}]);