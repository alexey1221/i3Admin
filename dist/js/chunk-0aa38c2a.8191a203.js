(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa38c2a"],{"0125":function(t,e,i){"use strict";i("4ae6")},"01ac":function(t,e,i){"use strict";i("761f")},"0333":function(t,e,i){},"0ae5":function(t,e,i){},"0b85":function(t,e,i){"use strict";i("4631")},"10b2":function(t,e,i){"use strict";i("8184")},"1a27":function(t,e,i){"use strict";i("0ae5")},2159:function(t,e,i){"use strict";i("0333")},"2e43":function(t,e,i){},"40b2":function(t,e,i){"use strict";i("df89")},4179:function(t,e,i){"use strict";i("f2c5")},4631:function(t,e,i){},"4ae6":function(t,e,i){},5407:function(t,e,i){},"5ab0":function(t,e,i){"use strict";i("5407")},"68f0":function(t,e,i){},"6bd9":function(t,e,i){},"6c3b":function(t,e,i){"use strict";i("a159")},"6cad":function(t,e,i){"use strict";i("2e43")},"761f":function(t,e,i){},8184:function(t,e,i){},"8a01":function(t,e,i){},"8c45":function(t,e,i){},a159:function(t,e,i){},a6d0:function(t,e,i){"use strict";i("c627")},aa6b:function(t,e,i){"use strict";i("6bd9")},bd1e:function(t,e,i){"use strict";i("68f0")},c627:function(t,e,i){},c740:function(t,e,i){"use strict";var s=i("23e7"),a=i("b727").findIndex,l=i("44d2"),o=i("ae40"),n="findIndex",c=!0,u=o(n);n in[]&&Array(1)[n]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),l(n)},c975:function(t,e,i){"use strict";var s=i("23e7"),a=i("4d64").indexOf,l=i("a640"),o=i("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,u=l("indexOf"),r=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!u||!r},{indexOf:function(t){return c?n.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},cba6:function(t,e,i){"use strict";i("8a01")},df89:function(t,e,i){},ebad:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"sidebar"},[t._m(0),t._l(t.sidebarItems,(function(e,s){return i("router-link",{key:"sidebar-item-"+s,staticClass:"sidebar-item",class:{selected:t.$route.name==e.label},attrs:{to:e.to}},[i("img",{staticClass:"sidebar-item-icon",attrs:{src:e.icon,alt:""}}),i("span",{staticClass:"sidebar-item-label"},[t._v(" "+t._s(e.label)+" ")])])}))],2),i("div",{staticStyle:{width:"100%"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"logout-button",on:{click:t.logout}},[t._v(" Logout ")])]),i("div",{staticClass:"view-container"},[i("router-view"),i("ComputersModal"),i("BackgroundModal"),i("NewUserModal"),i("EditUserModal"),i("DeleteUserModal"),i("NewIconModal"),i("EditIconModal"),i("DeleteIconModal"),i("NewComputerModal"),i("EditComputerModal"),i("DeleteComputerModal"),i("NewMessageModal"),i("EditMessageModal"),i("DeleteMessageModal")],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-logo"},[s("img",{attrs:{src:i("a1d8"),alt:""}})])}],l=i("5530"),o=i("84d2"),n=i.n(o),c=i("143c"),u=i.n(c),r=i("e37f"),p=i.n(r),d=i("d7c1"),m=i.n(d),v=i("865f"),b=i.n(v),g=i("2f62"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.computerDialog},on:{"update:visible":function(e){t.computerDialog=e}}},[s("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Assign Computers ")]),s("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[s("div",[s("div",{staticClass:"subtitle"},[t._v("Active Computers")]),s("div",{staticClass:"list-area"},[s("el-checkbox-group",{staticStyle:{display:"flex","flex-direction":"column"},model:{value:t.activeCheckList,callback:function(e){t.activeCheckList=e},expression:"activeCheckList"}},t._l(t.activeComputers,(function(e,i){return s("el-checkbox",{key:"active-computer-"+i,attrs:{label:e._id}},[t._v(" "+t._s(e.computerName)+" ")])})),1)],1)]),s("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[s("img",{staticClass:"arrow-image",attrs:{src:i("3707")},on:{click:t.moveToAvailableComputers}}),s("img",{staticClass:"arrow-image",staticStyle:{"margin-top":"10px"},attrs:{src:i("06ed")},on:{click:t.moveToActiveComputers}})]),s("div",[s("div",{staticClass:"subtitle"},[t._v("Available Computers")]),s("div",{staticClass:"list-area"},[s("el-checkbox-group",{staticStyle:{display:"flex","flex-direction":"column"},model:{value:t.availableCheckList,callback:function(e){t.availableCheckList=e},expression:"availableCheckList"}},t._l(t.availableComputers,(function(e,i){return s("el-checkbox",{key:"available-computer-"+i,attrs:{label:e._id}},[t._v(" "+t._s(e.computerName)+" ")])})),1)],1)])]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"ngc-button btn-save",on:{click:t.updateActiveComputers}},[t._v(" Save ")]),s("div",{staticClass:"ngc-button btn-cancel",on:{click:function(e){t.computerDialog=!1}}},[t._v(" Cancel ")])])])],1)},C=[],h=(i("4de4"),i("c740"),i("4160"),i("c975"),i("d81d"),i("159b"),{computed:{computerDialog:{get:function(){return this.$store.state.computerDialogVisibility},set:function(t){this.$store.commit("setComputerDialogVisibility",t)}},computerList:function(){return this.$store.state.computer.list},storeActiveComputers:function(){return this.$store.state.group.activeComputers}},data:function(){return{availableComputers:[],activeComputers:[],availableCheckList:[],activeCheckList:[]}},methods:{moveToActiveComputers:function(){var t=this,e=this.availableComputers.filter((function(e){return!(t.availableCheckList.indexOf(e._id)>-1)||(t.activeComputers.push(e),!1)}));this.availableComputers=e,this.availableCheckList=[]},moveToAvailableComputers:function(){var t=this,e=this.activeComputers.filter((function(e){return!(t.activeCheckList.indexOf(e._id)>-1)||(t.availableComputers.push(e),!1)}));this.activeComputers=e,this.activeCheckList=[]},updateActiveComputers:function(){var t=this.activeComputers.map((function(t){return t._id}));this.$store.commit("group/setActiveComputers",t),this.computerDialog=!1},checkActiveComputers:function(){var t=this,e=[],i=[];this.computerList.forEach((function(s){t.storeActiveComputers.findIndex((function(t){return t==s._id}))>-1?i.push(s):e.push(s)})),this.activeComputers=i,this.availableComputers=e}},mounted:function(){this.$store.dispatch("computer/loadList",{notify:this.$notify})},watch:{computerList:function(){this.checkActiveComputers()},storeActiveComputers:function(){this.checkActiveComputers()}}}),D=h,y=(i("10b2"),i("2877")),k=Object(y["a"])(D,f,C,!1,null,"b4904842",null),_=k.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{visible:t.computerDialog},on:{"update:visible":function(e){t.computerDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Background ")]),i("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),i("div",{staticClass:"image-preview"},[i("img",{attrs:{src:t.image,alt:""}})]),i("div",{staticClass:"select-image"},[i("span",{staticClass:"sl-label"},[t._v("Select Image")]),i("div",{staticClass:"sl-button",on:{click:function(e){return t.$refs.file.click()}}},[t._v("Select")])]),i("div",{staticClass:"action-buttons"},[i("div",{staticClass:"ngc-button btn-save",on:{click:t.uploadBackground}},[t._v(" Updated ")]),i("div",{staticClass:"ngc-button btn-cancel",on:{click:function(e){t.computerDialog=!1}}},[t._v(" Cancel ")])])])],1)},w=[],x=i("bc3a"),M=i.n(x),N=i("db49"),I={computed:{computerDialog:{get:function(){return this.$store.state.backgroundDialogVisibility},set:function(t){this.$store.commit("setBackgroundDialogVisibility",t)}},backgroundImage:function(){return this.$store.state.group.backgroundImage}},data:function(){return{image:"",file:null}},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.file=e[0],this.createImage(e[0]))},createImage:function(t){var e=new FileReader,i=this;e.onload=function(t){i.image=t.target.result},e.readAsDataURL(t)},uploadBackground:function(){var t=this,e=new FormData;e.append("file",this.file),M.a.post(N["SERVER_URL"]+"/groups/uploadBackground",e).then((function(e){t.$store.commit("group/setBackgroundImage",e.data),t.$notify({title:"Success",message:"Background image uploaded!",type:"success"})})).catch((function(e){t.$notify.error({title:"Failed to upload background",message:e.message})})),this.computerDialog=!1}},watch:{backgroundImage:function(){this.backgroundImage.length>0&&(this.image=this.$options.filters.filePath(this.backgroundImage))}}},S=I,U=(i("6cad"),Object(y["a"])(S,$,w,!1,null,"d59a0f30",null)),O=U.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{visible:t.newUserDialog},on:{"update:visible":function(e){t.newUserDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" New User ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Username")]),i("el-input",{model:{value:t.user.userName,callback:function(e){t.$set(t.user,"userName",e)},expression:"user.userName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("First Name")]),i("el-input",{model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Last Name")]),i("el-input",{model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Company Name")]),i("el-input",{model:{value:t.user.companyName,callback:function(e){t.$set(t.user,"companyName",e)},expression:"user.companyName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickCreate}},[t._v("Create")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)])],1)},E=[],V={computed:{newUserDialog:{get:function(){return this.$store.state.newUserDialogVisibility},set:function(t){this.$store.commit("setNewUserDialogVisibility",t)}}},data:function(){return{user:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{onClickCreate:function(){this.$store.dispatch("user/create",{user:this.user,notify:this.$notify}),this.initUserObject(),this.newUserDialog=!1},onClickCancel:function(){this.initUserObject(),this.newUserDialog=!1},initUserObject:function(){this.user={userName:"",firstName:"",lastName:"",companyName:"",status:!0}}},created:function(){this.initUserObject()}},A=V,L=(i("ff8f"),Object(y["a"])(A,j,E,!1,null,"6e4931f2",null)),F=L.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.user?i("el-dialog",{attrs:{visible:t.editUserDialog},on:{"update:visible":function(e){t.editUserDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Edit User ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Username")]),i("el-input",{model:{value:t.user.userName,callback:function(e){t.$set(t.user,"userName",e)},expression:"user.userName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("First Name")]),i("el-input",{model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Last Name")]),i("el-input",{model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Company Name")]),i("el-input",{model:{value:t.user.companyName,callback:function(e){t.$set(t.user,"companyName",e)},expression:"user.companyName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickUpdate}},[t._v("Update")]),i("el-button",{staticClass:"btn-delete",on:{click:t.openDeleteUserDialog}},[t._v("Delete")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)]):t._e()],1)},K=[],B={computed:Object(l["a"])({editUserDialog:{get:function(){return this.$store.state.editUserDialogVisibility},set:function(t){this.$store.commit("setEditUserDialogVisibility",t)}}},Object(g["c"])("user",["updateUser"])),data:function(){return{user:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{openDeleteUserDialog:function(){this.$store.commit("setEditUserDialogVisibility",!1),this.$store.commit("setDeleteUserDialogVisibility",!0)},onClickUpdate:function(){this.$store.dispatch("user/update",{user:this.user,notify:this.$notify}),this.editUserDialog=!1},onClickCancel:function(){this.editUserDialog=!1}},watch:{editUserDialog:function(){this.user=Object(l["a"])({},this.updateUser)}}},T=B,R=(i("bd1e"),Object(y["a"])(T,P,K,!1,null,"7ed5a383",null)),G=R.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.deleteUserDialog},on:{"update:visible":function(e){t.deleteUserDialog=e}}},[s("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Delete User ")]),s("div",{staticClass:"trash-image"},[s("img",{attrs:{src:i("2ed9"),alt:""}})]),s("div",{staticClass:"description"},[s("span",[t._v("Are you sure to want to delete?")]),s("span",[t._v("You will not be able to undo this action")])]),s("div",{staticClass:"action-buttons"},[s("el-button",{staticClass:"btn-delete",on:{click:t.onClickDelete}},[t._v("Delete")]),s("el-button",{staticClass:"btn-cancel",on:{click:function(e){t.deleteUserDialog=!1}}},[t._v("Cancel")])],1)])],1)},J=[],q={computed:{deleteUserDialog:{get:function(){return this.$store.state.deleteUserDialogVisibility},set:function(t){this.$store.commit("setDeleteUserDialogVisibility",t)}}},data:function(){return{}},methods:{onClickDelete:function(){this.$store.dispatch("user/delete",{notify:this.$notify}),this.deleteUserDialog=!1}}},z=q,H=(i("aa6b"),Object(y["a"])(z,Y,J,!1,null,"1beb3897",null)),Q=H.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{visible:t.newIconDialogVisibility},on:{"update:visible":function(e){t.newIconDialogVisibility=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" New Icon ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Application Name")]),i("el-input",{model:{value:t.icon.applicationName,callback:function(e){t.$set(t.icon,"applicationName",e)},expression:"icon.applicationName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.icon.status,callback:function(e){t.$set(t.icon,"status",e)},expression:"icon.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("File Path")]),i("el-input",{model:{value:t.icon.filePath,callback:function(e){t.$set(t.icon,"filePath",e)},expression:"icon.filePath"}})],1),i("div",{staticClass:"input-group"},[t.selectedFile?t._e():i("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),i("div",{staticClass:"label"},[t._v("Select Image")]),i("el-button",{staticStyle:{width:"150px",background:"#DEDEDE","border-color":"#404040"},on:{click:function(e){return t.$refs.file.click()}}},[t._v("Select")])],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickCreate}},[t._v("Create")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)])],1)},X=[],Z={computed:{newIconDialogVisibility:{get:function(){return this.$store.state.newIconDialogVisibility},set:function(t){this.$store.commit("setNewIconDialogVisibility",t)}}},data:function(){return{icon:{applicationName:"",filePath:"",status:!0},options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}],selectedFile:null}},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.selectedFile=e[0])},onClickCreate:function(){var t=new FormData;t.append("file",this.selectedFile),t.append("name",this.icon.applicationName),t.append("path",this.icon.filePath),t.append("status",this.icon.status),this.$store.dispatch("icon/create",{icon:t,notify:this.$notify}),this.initIconObject(),this.newIconDialogVisibility=!1},onClickCancel:function(){this.initIconObject(),this.newIconDialogVisibility=!1},initIconObject:function(){this.icon={applicationName:"",filePath:"",status:!0},this.selectedFile=null}},created:function(){this.initIconObject()}},tt=Z,et=(i("1a27"),Object(y["a"])(tt,W,X,!1,null,"5e0132bf",null)),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.icon?i("el-dialog",{attrs:{visible:t.editIconDialogVisibility},on:{"update:visible":function(e){t.editIconDialogVisibility=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Edit Icon ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Application Name")]),i("el-input",{model:{value:t.icon.name,callback:function(e){t.$set(t.icon,"name",e)},expression:"icon.name"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.icon.status,callback:function(e){t.$set(t.icon,"status",e)},expression:"icon.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("File Path")]),i("el-input",{model:{value:t.icon.path,callback:function(e){t.$set(t.icon,"path",e)},expression:"icon.path"}})],1),i("div",{staticClass:"input-group"},[t.selectedFile?t._e():i("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),i("div",{staticClass:"label"},[t._v("Select Image")]),i("el-button",{staticStyle:{width:"150px",background:"#DEDEDE","border-color":"#404040"},on:{click:function(e){return t.$refs.file.click()}}},[t._v("Select")])],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickUpdate}},[t._v("Update")]),i("el-button",{staticClass:"btn-delete",on:{click:t.openDeleteIconDialog}},[t._v("Delete")]),i("el-button",{staticClass:"btn-cancel",on:{click:function(e){t.editIconDialogVisibility=!1}}},[t._v("Cancel")])],1)]):t._e()],1)},at=[],lt=(i("b0c0"),{computed:Object(l["a"])({editIconDialogVisibility:{get:function(){return this.$store.state.editIconDialogVisibility},set:function(t){this.$store.commit("setEditIconDialogVisibility",t)}}},Object(g["c"])("icon",["updateIcon"])),data:function(){return{icon:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}],selectedFile:null}},methods:{openDeleteIconDialog:function(){this.$store.commit("setEditIconDialogVisibility",!1),this.$store.commit("setDeleteIconDialogVisibility",!0)},onClickUpdate:function(){var t=new FormData;t.append("file",this.selectedFile),t.append("name",this.icon.name),t.append("path",this.icon.path),t.append("status",this.icon.status),this.$store.dispatch("icon/update",{icon:t,notify:this.$notify,id:this.icon._id}),this.editIconDialogVisibility=!1},onClickCancel:function(){this.editIconDialogVisibility=!1},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.selectedFile=e[0])}},watch:{editIconDialogVisibility:function(){this.icon=Object(l["a"])({},this.updateIcon)}}}),ot=lt,nt=(i("4179"),Object(y["a"])(ot,st,at,!1,null,"5515a152",null)),ct=nt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.deleteIconDialog},on:{"update:visible":function(e){t.deleteIconDialog=e}}},[s("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Delete Icon ")]),s("div",{staticClass:"trash-image"},[s("img",{attrs:{src:i("2ed9"),alt:""}})]),s("div",{staticClass:"description"},[s("span",[t._v("Are you sure to want to delete?")]),s("span",[t._v("You will not be able to undo this action")])]),s("div",{staticClass:"action-buttons"},[s("el-button",{staticClass:"btn-delete",on:{click:t.onClickDelete}},[t._v("Delete")]),s("el-button",{staticClass:"btn-cancel",on:{click:function(e){t.deleteIconDialog=!1}}},[t._v("Cancel")])],1)])],1)},rt=[],pt={computed:{deleteIconDialog:{get:function(){return this.$store.state.deleteIconDialogVisibility},set:function(t){this.$store.commit("setDeleteIconDialogVisibility",t)}}},data:function(){return{}},methods:{onClickDelete:function(){this.$store.dispatch("icon/delete",{notify:this.$notify}),this.deleteIconDialog=!1}}},dt=pt,mt=(i("0b85"),Object(y["a"])(dt,ut,rt,!1,null,"160bd93e",null)),vt=mt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{visible:t.newComputerDialog},on:{"update:visible":function(e){t.newComputerDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" New Computer ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer ID")]),i("el-input",{model:{value:t.computer.computerId,callback:function(e){t.$set(t.computer,"computerId",e)},expression:"computer.computerId"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer Name")]),i("el-input",{model:{value:t.computer.computerName,callback:function(e){t.$set(t.computer,"computerName",e)},expression:"computer.computerName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Group")]),i("el-input",{model:{value:t.computer.group,callback:function(e){t.$set(t.computer,"group",e)},expression:"computer.group"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.computer.status,callback:function(e){t.$set(t.computer,"status",e)},expression:"computer.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer Key")]),i("el-input",{model:{value:t.computer.computerKey,callback:function(e){t.$set(t.computer,"computerKey",e)},expression:"computer.computerKey"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("End Point Key")]),i("el-input",{model:{value:t.computer.endPointKey,callback:function(e){t.$set(t.computer,"endPointKey",e)},expression:"computer.endPointKey"}})],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickCreate}},[t._v("Create")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)])],1)},gt=[],ft={computed:{newComputerDialog:{get:function(){return this.$store.state.newComputerDialogVisibility},set:function(t){this.$store.commit("setNewComputerDialogVisibility",t)}}},data:function(){return{computer:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{onClickCreate:function(){this.$store.dispatch("computer/create",{computer:this.computer,notify:this.$notify}),this.initComputerObject(),this.newComputerDialog=!1},onClickCancel:function(){this.initComputerObject(),this.newComputerDialog=!1},initComputerObject:function(){this.computer={computerName:"",firstName:"",lastName:"",companyName:"",status:!0}}},created:function(){this.initComputerObject()}},Ct=ft,ht=(i("0125"),Object(y["a"])(Ct,bt,gt,!1,null,"6110cc68",null)),Dt=ht.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.computer?i("el-dialog",{attrs:{visible:t.editComputerDialog},on:{"update:visible":function(e){t.editComputerDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Edit Computer ")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer ID")]),i("el-input",{model:{value:t.computer.computerId,callback:function(e){t.$set(t.computer,"computerId",e)},expression:"computer.computerId"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer Name")]),i("el-input",{model:{value:t.computer.computerName,callback:function(e){t.$set(t.computer,"computerName",e)},expression:"computer.computerName"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Group")]),i("el-input",{model:{value:t.computer.group,callback:function(e){t.$set(t.computer,"group",e)},expression:"computer.group"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.computer.status,callback:function(e){t.$set(t.computer,"status",e)},expression:"computer.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Computer Key")]),i("el-input",{model:{value:t.computer.computerKey,callback:function(e){t.$set(t.computer,"computerKey",e)},expression:"computer.computerKey"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("End Point Key")]),i("el-input",{model:{value:t.computer.endPointKey,callback:function(e){t.$set(t.computer,"endPointKey",e)},expression:"computer.endPointKey"}})],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickUpdate}},[t._v("Update")]),i("el-button",{staticClass:"btn-delete",on:{click:t.openDeleteComputerDialog}},[t._v("Delete")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)]):t._e()],1)},kt=[],_t={computed:Object(l["a"])({editComputerDialog:{get:function(){return this.$store.state.editComputerDialogVisibility},set:function(t){this.$store.commit("setEditComputerDialogVisibility",t)}}},Object(g["c"])("computer",["updateComputer"])),data:function(){return{computer:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{openDeleteComputerDialog:function(){this.editComputerDialog=!1,this.$store.commit("setDeleteComputerDialogVisibility",!0)},onClickUpdate:function(){this.$store.dispatch("computer/update",{computer:this.computer,notify:this.$notify}),this.editComputerDialog=!1},onClickCancel:function(){this.editComputerDialog=!1}},watch:{editComputerDialog:function(){this.computer=Object(l["a"])({},this.updateComputer)}}},$t=_t,wt=(i("2159"),Object(y["a"])($t,yt,kt,!1,null,"269a1226",null)),xt=wt.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.deleteComputerDialog},on:{"update:visible":function(e){t.deleteComputerDialog=e}}},[s("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Delete Computer ")]),s("div",{staticClass:"trash-image"},[s("img",{attrs:{src:i("2ed9"),alt:""}})]),s("div",{staticClass:"description"},[s("span",[t._v("Are you sure to want to delete?")]),s("span",[t._v("You will not be able to undo this action")])]),s("div",{staticClass:"action-buttons"},[s("el-button",{staticClass:"btn-delete",on:{click:t.onClickDelete}},[t._v("Delete")]),s("el-button",{staticClass:"btn-cancel",on:{click:function(e){t.deleteComputerDialog=!1}}},[t._v("Cancel")])],1)])],1)},Nt=[],It={computed:{deleteComputerDialog:{get:function(){return this.$store.state.deleteComputerDialogVisibility},set:function(t){this.$store.commit("setDeleteComputerDialogVisibility",t)}}},data:function(){return{}},methods:{onClickDelete:function(){this.$store.dispatch("computer/delete",{notify:this.$notify}),this.deleteComputerDialog=!1}}},St=It,Ut=(i("01ac"),Object(y["a"])(St,Mt,Nt,!1,null,"7607e4f2",null)),Ot=Ut.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{width:"500px",visible:t.newMessageDialog},on:{"update:visible":function(e){t.newMessageDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" New Message ")]),i("div",{staticClass:"input-group"},[i("div",{staticClass:"label"},[t._v("Active Date")]),i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date"},model:{value:t.message.activeDate,callback:function(e){t.$set(t.message,"activeDate",e)},expression:"message.activeDate"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("End Date")]),i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date"},model:{value:t.message.endDate,callback:function(e){t.$set(t.message,"endDate",e)},expression:"message.endDate"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.message.status,callback:function(e){t.$set(t.message,"status",e)},expression:"message.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Group")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.message.group,callback:function(e){t.$set(t.message,"group",e)},expression:"message.group"}},t._l(t.groupList,(function(t){return i("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Message")]),i("el-input",{attrs:{rows:5,type:"textarea"},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickCreate}},[t._v("Create")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)])],1)},Et=[],Vt={computed:{newMessageDialog:{get:function(){return this.$store.state.newMessageDialogVisibility},set:function(t){this.$store.commit("setNewMessageDialogVisibility",t)}},groupList:function(){return this.$store.state.group.list}},data:function(){return{message:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{onClickCreate:function(){this.$store.dispatch("message/create",{message:this.message,notify:this.$notify}),this.initMessageObject(),this.newMessageDialog=!1},onClickCancel:function(){this.initMessageObject(),this.newMessageDialog=!1},initMessageObject:function(){this.message={activeDate:new Date,endDate:new Date,content:"",status:!0,group:""}}},created:function(){this.initMessageObject()},mounted:function(){this.$store.dispatch("group/loadList",{notify:this.$notify})}},At=Vt,Lt=(i("cba6"),Object(y["a"])(At,jt,Et,!1,null,"2958c84c",null)),Ft=Lt.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.message?i("el-dialog",{attrs:{visible:t.editMessageDialog},on:{"update:visible":function(e){t.editMessageDialog=e}}},[i("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Edit Message ")]),i("div",{staticClass:"input-group"},[i("div",{staticClass:"label"},[t._v("Active Date")]),i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date"},model:{value:t.message.activeDate,callback:function(e){t.$set(t.message,"activeDate",e)},expression:"message.activeDate"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("End Date")]),i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date"},model:{value:t.message.endDate,callback:function(e){t.$set(t.message,"endDate",e)},expression:"message.endDate"}})],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Status")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.message.status,callback:function(e){t.$set(t.message,"status",e)},expression:"message.status"}},t._l(t.options,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Group")]),i("el-select",{staticStyle:{width:"100%"},model:{value:t.message.group,callback:function(e){t.$set(t.message,"group",e)},expression:"message.group"}},t._l(t.groupList,(function(t){return i("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("Message")]),i("el-input",{attrs:{rows:5,type:"textarea"},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1),i("div",{staticClass:"action-buttons"},[i("el-button",{staticClass:"btn-create",on:{click:t.onClickUpdate}},[t._v("Update")]),i("el-button",{staticClass:"btn-delete",on:{click:t.openDeleteMessageDialog}},[t._v("Delete")]),i("el-button",{staticClass:"btn-cancel",on:{click:t.onClickCancel}},[t._v("Cancel")])],1)]):t._e()],1)},Kt=[],Bt={computed:Object(l["a"])(Object(l["a"])({editMessageDialog:{get:function(){return this.$store.state.editMessageDialogVisibility},set:function(t){this.$store.commit("setEditMessageDialogVisibility",t)}}},Object(g["c"])("message",["updateMessage"])),{},{groupList:function(){return this.$store.state.group.list}}),data:function(){return{message:null,options:[{value:!0,label:"Active"},{value:!1,label:"Deactivate"}]}},methods:{openDeleteMessageDialog:function(){this.$store.commit("setEditMessageDialogVisibility",!1),this.$store.commit("setDeleteMessageDialogVisibility",!0)},onClickUpdate:function(){this.$store.dispatch("message/update",{message:this.message,notify:this.$notify}),this.editMessageDialog=!1},onClickCancel:function(){this.editMessageDialog=!1}},watch:{editMessageDialog:function(){this.message=Object(l["a"])({},this.updateMessage)}},mounted:function(){this.$store.dispatch("group/loadList",{notify:this.$notify})}},Tt=Bt,Rt=(i("a6d0"),Object(y["a"])(Tt,Pt,Kt,!1,null,"02cb8b19",null)),Gt=Rt.exports,Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{visible:t.deleteMessageDialog},on:{"update:visible":function(e){t.deleteMessageDialog=e}}},[s("div",{staticStyle:{color:"white","text-align":"center"},attrs:{slot:"title"},slot:"title"},[t._v(" Delete Message ")]),s("div",{staticClass:"trash-image"},[s("img",{attrs:{src:i("2ed9"),alt:""}})]),s("div",{staticClass:"description"},[s("span",[t._v("Are you sure to want to delete?")]),s("span",[t._v("You will not be able to undo this action")])]),s("div",{staticClass:"action-buttons"},[s("el-button",{staticClass:"btn-delete",on:{click:t.onClickDelete}},[t._v("Delete")]),s("el-button",{staticClass:"btn-cancel",on:{click:function(e){t.deleteMessageDialog=!1}}},[t._v("Cancel")])],1)])],1)},Jt=[],qt={computed:{deleteMessageDialog:{get:function(){return this.$store.state.deleteMessageDialogVisibility},set:function(t){this.$store.commit("setDeleteMessageDialogVisibility",t)}}},data:function(){return{}},methods:{onClickDelete:function(){this.$store.dispatch("message/delete",{notify:this.$notify}),this.deleteMessageDialog=!1}}},zt=qt,Ht=(i("5ab0"),Object(y["a"])(zt,Yt,Jt,!1,null,"4419cc7f",null)),Qt=Ht.exports,Wt={data:function(){return{sidebarItems:[{icon:n.a,label:"Users",to:"users"},{icon:u.a,label:"Computers",to:"computers"},{icon:p.a,label:"Messages",to:"message"},{icon:m.a,label:"Groups",to:"groups"},{icon:b.a,label:"Icons",to:"icons"}]}},components:{ComputersModal:_,BackgroundModal:O,NewUserModal:F,EditUserModal:G,DeleteUserModal:Q,NewIconModal:it,EditIconModal:ct,DeleteIconModal:vt,NewComputerModal:Dt,EditComputerModal:xt,DeleteComputerModal:Ot,NewMessageModal:Ft,EditMessageModal:Gt,DeleteMessageModal:Qt},computed:Object(l["a"])({},Object(g["c"])(["selectedSidebar"])),methods:Object(l["a"])(Object(l["a"])({},Object(g["b"])(["setSelectedSidebar","setComputerDialogVisibility"])),{},{logout:function(){this.$router.push("/login")}})},Xt=Wt,Zt=(i("40b2"),i("6c3b"),Object(y["a"])(Xt,s,a,!1,null,"7d213035",null));e["default"]=Zt.exports},f2c5:function(t,e,i){},ff8f:function(t,e,i){"use strict";i("8c45")}}]);
//# sourceMappingURL=chunk-0aa38c2a.8191a203.js.map