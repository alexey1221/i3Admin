(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c10c134"],{"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),o=r("7b0b"),a=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,p=Math.min,h=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(r,n){var i=u(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!m&&y||"string"===typeof n&&-1===n.indexOf(x)){var o=r(e,t,this,n);if(o.done)return o.value}var u=i(t),h=String(this),d="function"===typeof n;d||(n=String(n));var v=u.global;if(v){var E=u.unicode;u.lastIndex=0}var b=[];while(1){var _=l(u,h);if(null===_)break;if(b.push(_),!v)break;var L=String(_[0]);""===L&&(u.lastIndex=s(h,a(u.lastIndex),E))}for(var R="",S=0,P=0;P<b.length;P++){_=b[P];for(var C=String(_[0]),k=f(p(c(_.index),h.length),0),I=[],$=1;$<_.length;$++)I.push(g(_[$]));var A=_.groups;if(d){var N=[C].concat(I,k,h);void 0!==A&&N.push(A);var O=String(n.apply(void 0,N))}else O=w(C,h,k,I,A,n);k>=S&&(R+=h.slice(S,k)+O,S=k+C.length)}return R+h.slice(S)}];function w(t,r,n,i,a,c){var u=n+t.length,s=i.length,l=v;return void 0!==a&&(a=o(a),l=d),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var f=h(l/10);return 0===f?e:f<=s?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},"64bb":function(t,e,r){"use strict";r("9256")},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"67a4":function(t,e,r){t.exports=r.p+"img/logo_login.a6b30d0a.png"},"7f60":function(t,e,r){t.exports=r.p+"img/login_illustration.d0958eef.png"},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9256:function(t,e,r){},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,r,i,c,f=this,p=s&&f.sticky,h=n.call(f),d=f.source,v=0,g=t;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),r=new RegExp("^(?:"+d+")",h)),l&&(r=new RegExp("^"+d+"$(?!\\s)",h)),u&&(e=f.lastIndex),i=o.call(p?r:f,g),p?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=R(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var x={};x[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==r&&n.call(E,o)&&(x=E);var b=y.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function R(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return $()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),u(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-container"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"login-form"},[t._m(0),r("div",{staticClass:"input-area"},[t._m(1),r("div",{staticClass:"input-group",staticStyle:{"margin-top":"30px"}},[r("span",{staticClass:"input-group-label"},[t._v("Login ID*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-group-input",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("div",{staticClass:"input-group",staticStyle:{"margin-top":"10px"}},[r("span",{staticClass:"input-group-label"},[t._v("Password*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-group-input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"login-button",on:{click:t.submitLogin}},[t._v(" Login ")])]),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-area"},[n("img",{attrs:{src:r("7f60"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-logo"},[n("img",{attrs:{src:r("67a4"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"external-link-area"},[r("span",{staticClass:"external-link"},[t._v("Privacy Policy")]),r("span",{staticClass:"external-link",staticStyle:{"margin-left":"45px"}},[t._v("Term & Conditions")])])}];r("ac1f"),r("5319"),r("96cf"),r("d3b7");function o(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}var c=r("2591"),u=r("bc3a"),s=r.n(u),l=r("f121"),f={data:function(){return{username:"",password:"",loading:!1}},methods:{submitLogin:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,r=l["SERVER_URL"]+"/users/getEmailByUserName",n={username:t.username},e.prev=3,e.next=6,s.a.post(r,n);case 6:i=e.sent,o=i.data.email,c["a"].auth().signInWithEmailAndPassword(o,t.password).then((function(e){t.loading=!1,e.user.emailVerified?t.$router.replace("users"):t.$notify.error({title:"Email isn't verified",message:"Please check your inbox and confirm invite link."})}),(function(e){t.$notify.error({title:"Failed to login in",message:e.message}),t.loading=!1})),e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](3),console.log(e.t0),t.$notify.error({title:"Failed to Login",message:"Username doesn't exist."}),t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}},p=f,h=(r("64bb"),r("2877")),d=Object(h["a"])(p,n,i,!1,null,"05c9c4d2",null);e["default"]=d.exports},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),o=r("b622"),a=r("9263"),c=r("9112"),u=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var d=o(t),v=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!v||!g||"replace"===t&&(!s||!l||p)||"split"===t&&!h){var m=/./[d],y=r(d,""[t],(function(t,e,r,n,i){return e.exec===a?v&&!i?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=y[0],w=y[1];n(String.prototype,t,x),n(RegExp.prototype,d,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-2c10c134.04148efd.js.map