(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ba5f83"],{"42da":function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"new-group-container"},[n("div",{staticClass:"new-group-card"},[n("div",{staticClass:"ngc-title"},[t._v(" Edit Group ")]),t.updateGroup?n("div",{staticClass:"ngc-body"},[n("div",{staticStyle:{flex:"2"}},[n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-label"},[t._v("Group Name*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input-group-input",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(i){i.target.composing||(t.name=i.target.value)}}})]),n("ul",{staticClass:"icon-list"},t._l(t.activeIcons,(function(i,a){return n("drop",{key:"active-icon-"+a,staticClass:"drop",on:{drop:t.handleDrop,dragover:function(i){return t.handleDragover(a)}}},[n("drag",{attrs:{"transfer-data":i},on:{dragstart:function(i){t.dragStartIndex=a}}},[n("li",[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v("Name: "+t._s(i.name))]),n("p",[t._v("Program location: ***")]),i.filePath?n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("img",{attrs:{src:t._f("filePath")(i.filePath),alt:""}})]):t._e()])],1)])],1)})),1),n("div",{staticClass:"ngc-buttons"},[n("div",{staticClass:"ngc-button btn-computers",on:{click:t.openComputersDialog}},[t._v(" Computers ")]),n("div",{staticClass:"ngc-button btn-background",on:{click:t.openBackgroundDialog}},[t._v(" Background ")]),n("div",{staticClass:"ngc-button btn-save",on:{click:t.onClickSave}},[t._v(" Save ")]),n("div",{staticClass:"ngc-button btn-delete",on:{click:t.onClickDelete}},[t._v(" Delete ")]),n("div",{staticClass:"ngc-button btn-cancel",on:{click:t.onClickCancel}},[t._v(" Cancel ")])])]),n("div",{staticStyle:{flex:"1","margin-left":"30px"}},[n("span",{staticClass:"input-group-label"},[t._v("Icon List")]),n("drop",{on:{drop:t.handleDropIconList}},[n("div",{staticClass:"icon-area"},t._l(t.iconList,(function(i,a){return n("div",{key:"icon-"+a},[n("drag",{staticClass:"drag",attrs:{"transfer-data":i},on:{dragstart:function(i){t.dragStartIndex=-1}}},[n("el-tooltip",{staticClass:"icon-image",attrs:{content:i.name,placement:"right"}},[n("img",{attrs:{src:t._f("filePath")(i.filePath),alt:""}})])],1)],1)})),0)])],1)]):t._e()])])},e=[],s=(n("cb29"),n("4de4"),n("b0c0"),n("5530")),o=n("df76"),r={components:{Drag:o["Drag"],Drop:o["Drop"]},data:function(){return{activeIcons:Array(12).fill(""),dropIndex:-1,iconList:[],name:""}},methods:{handleDragover:function(t){this.dropIndex=t},handleDrop:function(t){var i=Object(s["a"])({},this.activeIcons),n=!1;if(""==this.activeIcons[this.dropIndex])i[this.dropIndex]=t,this.dragStartIndex>-1&&(i[this.dragStartIndex]="");else if(this.dragStartIndex>-1){var a=i[this.dragStartIndex];i[this.dragStartIndex]=i[this.dropIndex],i[this.dropIndex]=a}else this.$notify({title:"Warning",message:"Please place icon to the other area",type:"warning"}),n=!0;if(this.activeIcons=i,!n){var e=this.iconList.filter((function(i){return i._id!=t._id}));this.iconList=e}},getImage:function(t){var i=n("a38c");return i("./".concat(t))},openComputersDialog:function(){this.$store.commit("setComputerDialogVisibility",!0)},handleDropIconList:function(t){for(var i=!1,n={},a=0;a<12;a++){var e=this.activeIcons[a];e._id&&e._id==t._id&&(e="",i=!0),n[a]=e}i&&(this.activeIcons=n,this.iconList.push(t))},openBackgroundDialog:function(){this.$store.commit("setBackgroundDialogVisibility",!0)},onClickSave:function(){var t={name:this.name,activeIcons:this.activeIcons,_id:this.updateGroup._id};this.$store.dispatch("group/update",{group:t,notify:this.$notify}),this.$router.push("/groups")},onClickCancel:function(){this.$router.push("/groups")},onClickDelete:function(){this.$store.dispatch("group/delete",{notify:this.$notify}),this.$router.push("/groups")}},computed:{icons:function(){return this.$store.state.icon.list},updateGroup:function(){return this.$store.state.group.updateGroup}},mounted:function(){var t={notify:this.$notify};this.$store.dispatch("icon/loadList",t);var i=this.$route.params.group_id;this.$store.dispatch("group/getGroup",{groupId:i,notify:this.$notify})},watch:{icons:function(){this.iconList=this.icons},updateGroup:function(){for(var t=[],i=0;i<12;i++)this.updateGroup.activeIcons[i]._id&&t.push(this.updateGroup.activeIcons[i]._id);var n=this.iconList.filter((function(i){return t.filter((function(t){return t==i._id})).length<1}));this.iconList=n,this.activeIcons=this.updateGroup.activeIcons,this.name=this.updateGroup.name}}},c=r,u=(n("b181"),n("2877")),d=Object(u["a"])(c,a,e,!1,null,"2abd574d",null);i["default"]=d.exports},b181:function(t,i,n){"use strict";n("ba97")},ba97:function(t,i,n){}}]);
//# sourceMappingURL=chunk-45ba5f83.21419aba.js.map