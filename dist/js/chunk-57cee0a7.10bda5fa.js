(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57cee0a7"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},1988:function(t,e,n){t.exports=n.p+"img/google-logo.dad2164f.png"},"42eb":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),o=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),p=Math.max,f=Math.min,g=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,E=x?"$":"$0";return[function(n,r){var a=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!x&&m||"string"===typeof r&&-1===r.indexOf(E)){var i=n(e,t,this,r);if(i.done)return i.value}var c=a(t),g=String(this),d="function"===typeof r;d||(r=String(r));var v=c.global;if(v){var _=c.unicode;c.lastIndex=0}var C=[];while(1){var y=u(c,g);if(null===y)break;if(C.push(y),!v)break;var w=String(y[0]);""===w&&(c.lastIndex=l(g,o(c.lastIndex),_))}for(var S="",R=0,I=0;I<C.length;I++){y=C[I];for(var P=String(y[0]),$=p(f(s(y.index),g.length),0),A=[],T=1;T<y.length;T++)A.push(h(y[T]));var k=y.groups;if(d){var U=[P].concat(A,$,g);void 0!==k&&U.push(k);var L=String(r.apply(void 0,U))}else L=b(P,g,$,A,k,r);$>=R&&(S+=g.slice(R,$)+L,R=$+P.length)}return S+g.slice(R)}];function b(t,n,r,a,o,s){var c=r+t.length,l=a.length,u=v;return void 0!==o&&(o=i(o),u=d),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var p=g(u/10);return 0===p?e:p<=l?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):e}s=a[u-1]}return void 0===s?"":s}))}}))},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,o,s=String(a(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):i:t?s.slice(c,c+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"67a4":function(t,e,n){t.exports=n.p+"img/logo_login.a6b30d0a.png"},"7f60":function(t,e,n){t.exports=n.p+"img/login_illustration.d0958eef.png"},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(s=function(t){var e,n,a,s,p=this,f=l&&p.sticky,g=r.call(p),d=p.source,v=0,h=t;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,v++),n=new RegExp("^(?:"+d+")",g)),u&&(n=new RegExp("^"+d+"$(?!\\s)",g)),c&&(e=p.lastIndex),a=i.call(f?n:p,h),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:c&&a&&(p.lastIndex=p.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-form"},[t._m(0),r("div",{staticClass:"input-area"},[t._m(1),r("div",{staticClass:"input-group",staticStyle:{"margin-top":"30px"}},[r("span",{staticClass:"input-group-label"},[t._v("Login ID*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-group-input",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"input-group",staticStyle:{"margin-top":"10px"}},[r("span",{staticClass:"input-group-label"},[t._v("Password*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-group-input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"login-button",on:{click:t.submitLogin}},[t._v(" Login ")]),r("p",{staticClass:"social-login-buttons"},[t._v(" or Sign In with Google "),r("br"),r("button",{staticClass:"social-button",on:{click:t.socialLogin}},[r("img",{attrs:{alt:"Google Logo",src:n("1988")}})])])]),t._m(2)])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-area"},[r("img",{attrs:{src:n("7f60"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-logo"},[r("img",{attrs:{src:n("67a4"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"external-link-area"},[n("span",{staticClass:"external-link"},[t._v("Privacy Policy")]),n("span",{staticClass:"external-link",staticStyle:{"margin-left":"45px"}},[t._v("Term & Conditions")])])}],i=(n("ac1f"),n("5319"),n("2591")),o={data:function(){return{email:"",password:""}},methods:{submitLogin:function(){var t=this;i["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){console.log(e),t.$router.replace("users")}),(function(e){t.$notify.error({title:"Failed to login in",message:e.message})}))},socialLogin:function(){var t=this,e=new i["a"].auth.GoogleAuthProvider;i["a"].auth().signInWithPopup(e).then((function(e){console.log(e),t.$router.replace("users")})).catch((function(t){alert("Oops. "+t.message)}))}}},s=o,c=(n("f86b"),n("2877")),l=Object(c["a"])(s,r,a,!1,null,"6a281058",null);e["default"]=l.exports},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),s=n("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),g=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var d=i(t),v=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!h||"replace"===t&&(!l||!u||f)||"split"===t&&!g){var x=/./[d],m=n(d,""[t],(function(t,e,n,r,a){return e.exec===o?v&&!a?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=m[0],b=m[1];r(String.prototype,t,E),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}p&&s(RegExp.prototype[d],"sham",!0)}},f86b:function(t,e,n){"use strict";n("42eb")}}]);
//# sourceMappingURL=chunk-57cee0a7.10bda5fa.js.map