(function(e){function t(t){for(var n,a,r=t[0],u=t[1],c=t[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var r=i[a];0!==s[r]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=i[0]))}return e}var n={},a={app:0},s={app:0},o=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-230674ec":"f008a646","chunk-25637cca":"f54f8816","chunk-3118726b":"06deb55b","chunk-3233cfa6":"46f29ddb","chunk-11806d16":"5431fc26","chunk-73a1cef5":"72004333","chunk-3763a9be":"20e448da","chunk-5c3c85ea":"89e56ad7","chunk-66ef5601":"e5d1e94a","chunk-872aa364":"69ff7b39","chunk-cb7b9de6":"a4d14c7e"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(e){var t=[],i={"chunk-25637cca":1,"chunk-3118726b":1,"chunk-11806d16":1,"chunk-73a1cef5":1,"chunk-3763a9be":1,"chunk-5c3c85ea":1,"chunk-66ef5601":1,"chunk-872aa364":1,"chunk-cb7b9de6":1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var n="css/"+({}[e]||e)+"."+{"chunk-230674ec":"31d6cfe0","chunk-25637cca":"fa3e945a","chunk-3118726b":"2fec744d","chunk-3233cfa6":"31d6cfe0","chunk-11806d16":"60c2c2a2","chunk-73a1cef5":"b272b645","chunk-3763a9be":"847ffffb","chunk-5c3c85ea":"fa70bb7a","chunk-66ef5601":"38a8d449","chunk-872aa364":"fa70bb7a","chunk-cb7b9de6":"455c62ba"}[e]+".css",s=u.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),i(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var i=s[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,i[1](d)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,i){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(i,n,function(t){return e[t]}.bind(null,n));return i},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("5c96"),s=i.n(a),o=(i("0fae"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-view")}),r=[],u=(i("cb29"),{data:function(){var e={date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"};return{tableData:Array(20).fill(e)}}}),c=u,l=(i("034f"),i("2877")),d=Object(l["a"])(c,o,r,!1,null,null,null),f=d.exports,p=(i("d3b7"),i("8c4f"));n["default"].use(p["a"]);var m=[{path:"/",redirect:"/login",component:function(){return Promise.all([i.e("chunk-3233cfa6"),i.e("chunk-73a1cef5")]).then(i.bind(null,"ebad"))},children:[{path:"/users",name:"Users",component:function(){return i.e("chunk-3763a9be").then(i.bind(null,"ed81"))}},{path:"/new-group",name:"Groups",component:function(){return Promise.all([i.e("chunk-3233cfa6"),i.e("chunk-11806d16")]).then(i.bind(null,"39d7"))}},{path:"/message",name:"Messages",component:function(){return i.e("chunk-cb7b9de6").then(i.bind(null,"eaad"))}},{path:"/groups",name:"Groups",component:function(){return i.e("chunk-3118726b").then(i.bind(null,"696f"))}},{path:"/icons",name:"Icons",component:function(){return i.e("chunk-230674ec").then(i.bind(null,"9cc6"))}},{path:"/computers",name:"Computers",component:function(){return i.e("chunk-66ef5601").then(i.bind(null,"533d"))}}]},{path:"/add-group",name:"Add Group",component:function(){return i.e("chunk-872aa364").then(i.bind(null,"8de9"))}},{path:"/edit-group",name:"Edit Group",component:function(){return i.e("chunk-5c3c85ea").then(i.bind(null,"42da"))}},{path:"/login",name:"Login",component:function(){return i.e("chunk-25637cca").then(i.bind(null,"a55b"))}}],g=new p["a"]({mode:"history",base:"/",routes:m}),h=g,b=i("2f62"),y=(i("4de4"),i("d81d"),i("db49")),v=i("bc3a"),k=i.n(v),D=y["SERVER_URL"]+"/users",V={namespaced:!0,state:{list:[],updateUser:null},mutations:{setList:function(e,t){e.list=t},addNewUser:function(e,t){e.list.push(t)},setUpdateUser:function(e,t){e.updateUser=t},updateUser:function(e,t){var i=e.list.map((function(e){return e._id==t._id?t:e}));e.list=i},deleteUser:function(e,t){var i=e.list.filter((function(e){return e._id!=t}));e.list=i}},actions:{create:function(e,t){var i=e.commit,n=t.user,a=t.notify;k.a.post(D,n).then((function(e){var t=parseInt(e.data.result);if(t>0){var n=e.data.data;i("addNewUser",n),a({title:"Success",message:"New User is created.",type:"success"})}else a.error({title:"Failed to create user",message:e.data.message})}))},loadList:function(e,t){var i=e.commit,n=t.notify;k.a.get(D).then((function(e){i("setList",e.data)})).catch((function(e){n.error({title:"Failed to load user",message:e.message})}))},update:function(e,t){var i=e.commit,n=t.user,a=t.notify;k.a.put(D+"/"+n._id,n).then((function(){i("updateUser",n),a({title:"Success",message:" User updated!",type:"success"})})).catch((function(e){a.error({title:"Failed to update user",message:e.message})}))},delete:function(e,t){var i=e.commit,n=e.state,a=t.notify,s=n.updateUser._id;k.a.delete(D+"/"+s).then((function(){i("deleteUser",s),a({title:"Success",message:"User deleted!",type:"success"})})).catch((function(e){a.error({title:"Failed to delete user",message:e.message})}))}}},w=y["SERVER_URL"]+"/computers",U={namespaced:!0,state:{list:[],updateComputer:null},mutations:{setList:function(e,t){e.list=t},addNewComputer:function(e,t){e.list.push(t)},setUpdateComputer:function(e,t){e.updateComputer=t},updateComputer:function(e,t){var i=e.list.map((function(e){return e._id==t._id?t:e}));e.list=i},deleteComputer:function(e,t){var i=e.list.filter((function(e){return e._id!=t}));e.list=i}},actions:{create:function(e,t){var i=e.commit,n=t.computer,a=t.notify;k.a.post(w,n).then((function(e){var t=parseInt(e.data.result);if(t>0){var n=e.data.data;i("addNewComputer",n),a({title:"Success",message:"New Computer is created.",type:"success"})}else a.error({title:"Failed to create computer",message:e.data.message})}))},loadList:function(e,t){var i=e.commit,n=t.notify;k.a.get(w).then((function(e){i("setList",e.data)})).catch((function(e){n.error({title:"Failed to load computer",message:e.message})}))},update:function(e,t){var i=e.commit,n=t.computer,a=t.notify;k.a.put(w+"/"+n._id,n).then((function(){i("updateComputer",n),a({title:"Success",message:" Computer updated!",type:"success"})})).catch((function(e){a.error({title:"Failed to update computer",message:e.message})}))},delete:function(e,t){var i=e.commit,n=e.state,a=t.notify,s=n.updateComputer._id;k.a.delete(w+"/"+s).then((function(){i("deleteComputer",s),a({title:"Success",message:"Computer deleted!",type:"success"})})).catch((function(e){a.error({title:"Failed to delete computer",message:e.message})}))}}},C=y["SERVER_URL"]+"/messages",_={namespaced:!0,state:{list:[],updateMessage:null},mutations:{setList:function(e,t){e.list=t},addNewMessage:function(e,t){e.list.push(t)},setUpdateMessage:function(e,t){e.updateMessage=t},updateMessage:function(e,t){var i=e.list.map((function(e){return e._id==t._id?t:e}));e.list=i},deleteMessage:function(e,t){var i=e.list.filter((function(e){return e._id!=t}));e.list=i}},actions:{create:function(e,t){var i=e.commit,n=t.message,a=t.notify;k.a.post(C,n).then((function(e){var t=parseInt(e.data.result);if(t>0){var n=e.data.data;i("addNewMessage",n),a({title:"Success",message:"New Message is created.",type:"success"})}else a.error({title:"Failed to create message",message:e.data.message})}))},loadList:function(e,t){var i=e.commit,n=t.notify;k.a.get(C).then((function(e){i("setList",e.data)})).catch((function(e){n.error({title:"Failed to load message",message:e.message})}))},update:function(e,t){var i=e.commit,n=t.message,a=t.notify;k.a.put(C+"/"+n._id,n).then((function(){i("updateMessage",n),a({title:"Success",message:" Message updated!",type:"success"})})).catch((function(e){a.error({title:"Failed to update message",message:e.message})}))},delete:function(e,t){var i=e.commit,n=e.state,a=t.notify,s=n.updateMessage._id;k.a.delete(C+"/"+s).then((function(){i("deleteMessage",s),a({title:"Success",message:"Message deleted!",type:"success"})})).catch((function(e){a.error({title:"Failed to delete message",message:e.message})}))}}};n["default"].use(b["a"]);var S=new b["a"].Store({state:{selectedSidebar:"Users",computerDialogVisibility:!1,backgroundDialogVisibility:!1,newUserDialogVisibility:!1,editUserDialogVisibility:!1,deleteUserDialogVisibility:!1,newIconDialogVisibility:!1,editIconDialogVisibility:!1,deleteIconDialogVisibility:!1,newComputerDialogVisibility:!1,editComputerDialogVisibility:!1,deleteComputerDialogVisibility:!1,newMessageDialogVisibility:!1,editMessageDialogVisibility:!1,deleteMessageDialogVisibility:!1},mutations:{setComputerDialogVisibility:function(e,t){e.computerDialogVisibility=t},setSelectedSidebar:function(e,t){e.selectedSidebar=t},setBackgroundDialogVisibility:function(e,t){e.backgroundDialogVisibility=t},setNewUserDialogVisibility:function(e,t){e.newUserDialogVisibility=t},setEditUserDialogVisibility:function(e,t){e.editUserDialogVisibility=t},setDeleteUserDialogVisibility:function(e,t){e.deleteUserDialogVisibility=t},setNewIconDialogVisibility:function(e,t){e.newIconDialogVisibility=t},setEditIconDialogVisibility:function(e,t){e.editIconDialogVisibility=t},setDeleteIconDialogVisibility:function(e,t){e.deleteIconDialogVisibility=t},setNewComputerDialogVisibility:function(e,t){e.newComputerDialogVisibility=t},setEditComputerDialogVisibility:function(e,t){e.editComputerDialogVisibility=t},setDeleteComputerDialogVisibility:function(e,t){e.deleteComputerDialogVisibility=t},setNewMessageDialogVisibility:function(e,t){e.newMessageDialogVisibility=t},setEditMessageDialogVisibility:function(e,t){e.editMessageDialogVisibility=t},setDeleteMessageDialogVisibility:function(e,t){e.deleteMessageDialogVisibility=t}},modules:{user:V,computer:U,message:_}}),M=S,E=i("b2d6"),L=i.n(E),N=i("d8c5"),I=i.n(N),F=i("df76"),O=i.n(F);n["default"].use(I.a),n["default"].use(O.a),n["default"].config.productionTip=!1,n["default"].use(s.a,{locale:L.a}),new n["default"]({router:h,store:M,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,i){},db49:function(e,t){e.exports={SERVER_URL:"http://localhost:3000/api"}}});
//# sourceMappingURL=app.7419028d.js.map