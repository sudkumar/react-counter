webpackJsonp([0],[function(t,e,n){var r=n(42)("wks"),o=n(16),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},,function(t,e,n){var r=n(2),o=n(8),i=n(5),u=n(16)("src"),a="toString",c=Function[a],s=(""+c).split(a);n(12).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,u)||o(n,u,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,e,n){var r=n(9),o=n(22);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(10),o=n(43),i=n(45),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},,function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports={}},,,function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(82);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(86),o=n(24);t.exports=function(t){return r(o(t))}},,,function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(81),o=n(47),i=n(7),u=n(8),a=n(5),c=n(13),s=n(83),f=n(27),l=n(90),p=n(0)("iterator"),h=!([].keys&&"next"in[].keys()),v="values",d=function(){return this};t.exports=function(t,e,n,y,m,_,g){s(n,e,y);var x,b,w,E=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",L=m==v,M=!1,S=t.prototype,k=S[p]||S["@@iterator"]||m&&S[m],j=!h&&k||E(m),T=m?L?E("entries"):j:void 0,C="Array"==e?S.entries||k:k;if(C&&(w=l(C.call(new t)))!==Object.prototype&&w.next&&(f(w,O,!0),r||a(w,p)||u(w,p,d)),L&&k&&k.name!==v&&(M=!0,j=function(){return k.call(this)}),r&&!g||!h&&!M&&S[p]||u(S,p,j),c[e]=j,c[O]=d,m)if(x={values:L?j:E(v),keys:_?j:E("keys"),entries:T},g)for(b in x)b in S||i(S,b,x[b]);else o(o.P+o.F*(h||M),e,x);return x}},function(t,e,n){var r=n(42)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(9).f,o=n(5),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e){function n(){}function r(t){return"info"===i&&"info"===t||["info","warning"].indexOf(i)>=0&&"warning"===t||["info","warning","error"].indexOf(i)>=0&&"error"===t}function o(t){return function(e,n){r(e)&&t(n)}}var i="info";t.exports=function(t,e){r(t)&&("info"===t?console.log(e):"warning"===t?console.warn(e):"error"===t&&console.error(e))};var u=console.group||n,a=console.groupCollapsed||n,c=console.groupEnd||n;t.exports.group=o(u),t.exports.groupCollapsed=o(a),t.exports.groupEnd=o(c),t.exports.setLogLevel=function(t){i=t}},,,,,,,,,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(40),o={};o[n(0)("toStringTag")]="z",o+""!="[object z]"&&n(7)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,e,n){var r=n(41),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){t.exports=!n(4)&&!n(17)(function(){return 7!=Object.defineProperty(n(44)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var r=n(80)(!0);n(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(2),o=n(12),i=n(8),u=n(7),a=n(18),c="prototype",s=function(t,e,n){var f,l,p,h,v=t&s.F,d=t&s.G,y=t&s.S,m=t&s.P,_=t&s.B,g=d?r:y?r[e]||(r[e]={}):(r[e]||{})[c],x=d?o:o[e]||(o[e]={}),b=x[c]||(x[c]={});d&&(n=e);for(f in n)p=((l=!v&&g&&void 0!==g[f])?g:n)[f],h=_&&l?a(p,r):m&&"function"==typeof p?a(Function.call,p):p,g&&u(g,f,p,t&s.U),x[f]!=p&&i(x,f,h),m&&b[f]!=p&&(b[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(10),o=n(84),i=n(51),u=n(26)("IE_PROTO"),a=function(){},c="prototype",s=function(){var t,e=n(44)("iframe"),r=i.length;for(e.style.display="none",n(89).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(85),o=n(51);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){for(var r=n(92),o=n(49),i=n(7),u=n(2),a=n(8),c=n(13),s=n(0),f=s("iterator"),l=s("toStringTag"),p=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(h),d=0;d<v.length;d++){var y,m=v[d],_=h[m],g=u[m],x=g&&g.prototype;if(x&&(x[f]||a(x,f,p),x[l]||a(x,l,m),c[m]=p,_))for(y in r)x[y]||i(x,y,r[y],!0)}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(9).f,o=n(48),i=n(55),u=n(18),a=n(56),c=n(57),s=n(25),f=n(53),l=n(98),p=n(4),h=n(58).fastKey,v=n(28),d=p?"_s":"size",y=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t(function(t,r){a(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&c(r,n,t[s],t)});return i(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=y(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(v(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,e)[d]}}),f},def:function(t,e,n){var r,o,i=y(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,e,n){s(t,e,function(t,n){this._t=v(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))},n?"entries":"values",!n,!0),l(e)}}},function(t,e,n){var r=n(7);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(18),o=n(95),i=n(96),u=n(10),a=n(50),c=n(97),s={},f={};(e=t.exports=function(t,e,n,l,p){var h,v,d,y,m=p?function(){return t}:c(t),_=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=a(t.length);h>g;g++)if((y=e?_(u(v=t[g])[0],v[1]):_(t[g]))===s||y===f)return y}else for(d=m.call(t);!(v=d.next()).done;)if((y=o(d,_,v.value,e))===s||y===f)return y}).BREAK=s,e.RETURN=f},function(t,e,n){var r=n(16)("meta"),o=n(3),i=n(5),u=n(9).f,a=0,c=Object.isExtensible||function(){return!0},s=!n(17)(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&c(t)&&!i(t,r)&&f(t),t}}},function(t,e,n){"use strict";var r=n(2),o=n(47),i=n(7),u=n(55),a=n(58),c=n(57),s=n(56),f=n(3),l=n(17),p=n(99),h=n(27),v=n(100);t.exports=function(t,e,n,d,y,m){var _=r[t],g=_,x=y?"set":"add",b=g&&g.prototype,w={},E=function(t){var e=b[t];i(b,t,"delete"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof g&&(m||b.forEach&&!l(function(){(new g).entries().next()}))){var O=new g,L=O[x](m?{}:-0,1)!=O,M=l(function(){O.has(1)}),S=p(function(t){new g(t)}),k=!m&&l(function(){for(var t=new g,e=5;e--;)t[x](e,e);return!t.has(-0)});S||((g=e(function(e,n){s(e,g,t);var r=v(new _,e,g);return void 0!=n&&c(n,y,r[x],r),r})).prototype=b,b.constructor=g),(M||k)&&(E("delete"),E("has"),y&&E("get")),(k||L)&&E(x),m&&b.clear&&delete b.clear}else g=d.getConstructor(e,t,y,x),u(g.prototype,n),a.NEED=!0;return h(g,t),w[t]=g,o(o.G+o.W+o.F*(g!=_),w),m||d.setStrong(g,t,y),g}},function(t,e,n){n(61),t.exports=n(65)},function(t,e,n){var r,o=function(){return r.indexOf(n.h())>=0},i=n(29);n(63).on("webpackHotUpdate",function(e){r=e,o()||"idle"!==t.hot.status()||(i("info","[HMR] Checking for updates on the server..."),function e(){t.hot.check(!0).then(function(t){if(!t)return i("warning","[HMR] Cannot find update. Need to do a full reload!"),i("warning","[HMR] (Probably because of restarting the webpack-dev-server)"),void window.location.reload();o()||e(),n(62)(t,t),o()&&i("info","[HMR] App is up to date.")}).catch(function(e){var n=t.hot.status();["abort","fail"].indexOf(n)>=0?(i("warning","[HMR] Cannot apply update. Need to do a full reload!"),i("warning","[HMR] "+e.stack||e.message),window.location.reload()):i("warning","[HMR] Update failed: "+e.stack||e.message)})}())}),i("info","[HMR] Waiting for update signal from WDS...")},function(t,e,n){t.exports=function(t,e){var r=t.filter(function(t){return e&&e.indexOf(t)<0}),o=n(29);if(r.length>0&&(o("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),r.forEach(function(t){o("warning","[HMR]  - "+t)})),e&&0!==e.length){o("info","[HMR] Updated modules:"),e.forEach(function(t){if("string"==typeof t&&-1!==t.indexOf("!")){var e=t.split("!");o.groupCollapsed("info","[HMR]  - "+e.pop()),o("info","[HMR]  - "+t),o.groupEnd("info")}else o("info","[HMR]  - "+t)});e.every(function(t){return"number"==typeof t})&&o("info","[HMR] Consider using the NamedModulesPlugin for module names.")}else o("info","[HMR] Nothing hot updated.")}},function(t,e,n){var r=n(64);t.exports=new r},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function o(t){return"object"==typeof t&&null!==t}function i(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!function(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,u,a,c,s;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var f=new Error('Uncaught, unspecified "error" event. ('+e+")");throw f.context=e,f}if(n=this._events[t],i(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),u=(s=n.slice()).length,c=0;c<u;c++)s[c].apply(this,a);return!0},n.prototype.addListener=function(t,e){var u;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(u=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&u>0&&this._events[t].length>u&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),o||(o=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var o=!1;return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,i,u,a;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],u=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(a=u;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Donut=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=r(n(11)),s=r(n(31)),f=r(n(77)),l=document.getElementById("root"),p=function(t){var e=t.easeFn,n=t.value;return c.default.createElement(f.default,{value:n,easeFn:e,render:function(t){return c.default.createElement("input",{type:"range",value:parseInt(t,10),readOnly:!0,min:0,max:n})}})},h=function(t){var e=t.value;return c.default.createElement("table",{className:"table"},c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("td",null,"Linear"),c.default.createElement("th",null,c.default.createElement(p,{easeFn:"linear",value:e}))),c.default.createElement("tr",null,c.default.createElement("td",null,"Ease In"),c.default.createElement("th",null,c.default.createElement(p,{easeFn:"ease-in",value:e}))),c.default.createElement("tr",null,c.default.createElement("td",null,"Ease Out"),c.default.createElement("th",null,c.default.createElement(p,{easeFn:"ease-out",value:e}))),c.default.createElement("tr",null,c.default.createElement("td",null,"Ease In-Out"),c.default.createElement("th",null,c.default.createElement(p,{easeFn:"ease-in-out",value:e})))))},v=e.Donut=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,c.default.Component),a(e,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.color,r=function(t){return 158*t/100}(e);return c.default.createElement("svg",{width:"100",height:"100",className:"donut"},c.default.createElement("circle",{r:"25",cx:"50",cy:"50",className:"donut__circle",style:{stroke:n,strokeDasharray:r+" 158"}}),"}",c.default.createElement("circle",{r:"10",cx:"50",cy:"50",className:"donut__hole"}))}}]),e}();v.defaultProps={color:"#0074d9",value:0};var d=function(t){function e(){var t,n,r,u;o(this,e);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.state={value:1e3},u=n,i(r,u)}return u(e,c.default.Component),a(e,[{key:"render",value:function(){var t=this.state.value;return c.default.createElement("div",null,c.default.createElement(f.default,{value:1,render:function(t){return c.default.createElement("section",{className:"hero text-center",style:{opacity:t}},c.default.createElement("div",{className:"container"},c.default.createElement("h1",null,"ReactJS Counter"),c.default.createElement("p",null,"A Simple counter utility component to help manage the counting with easing.")))}}),c.default.createElement("section",{className:"example example--slider"},c.default.createElement("h1",{className:"text-center"},"Sliders"),c.default.createElement("p",{className:"text-center"},"Simple usage of counter with sliding effects"),c.default.createElement("div",{className:"container"},c.default.createElement(h,{value:t}))),c.default.createElement("section",{className:"example example--donut"},c.default.createElement("h1",{className:"text-center"},"Donuts"),c.default.createElement("p",{className:"text-center"},"Simple usage of counter with donut fill effects"),c.default.createElement("div",{className:"container"},c.default.createElement(f.default,{value:70,render:function(t){return c.default.createElement(v,{value:t})}}))))}}]),e}();s.default.render(c.default.createElement(d,null),l)},,,,,,,,,,,,function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.Counter=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(78);var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(11)),i=n(109),u=("undefined"==typeof window?t:window).requestAnimationFrame,a=e.Counter=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r)));u.state={count:0};var a=u.props.easeFn;switch(a){case"linear":u.easeFn=i.linear;break;case"ease-in":u.easeFn=i.easeIn;break;case"ease-out":u.easeFn=i.easeOut;break;case"ease-in-out":u.easeFn=i.easeInOut;break;default:console.warn("Unhandled tyep of ease function: ",a,". Using linear"),u.easeFn=i.linear}return u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"componentDidMount",value:function(){this.incrementCounter()}},{key:"incrementCounter",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.props,r=n.value,o=n.duration,a=n.strict;this.state.count<r&&this.setState(function(n){n.count;return{count:t.easeFn(e,0,r,o)}},function(){var n=(0,i.getCurrentTime)();u(function(){var r=(0,i.getCurrentTime)();t.incrementCounter(e+(a?r-n:16))})})}},{key:"render",value:function(){var t=this.props.render;return t(this.state.count)}}]),e}();a.defaultProps={value:0,easeFn:"ease-out",duration:1500,render:function(t){return o.createElement("span",null,t)},strict:!1},e.default=a}).call(e,n(38))},function(t,e,n){"use strict";n(79),n(104),n(106)},function(t,e,n){n(39),n(46),n(52),n(94),t.exports=n(12).Map},function(t,e,n){var r=n(23),o=n(24);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(48),o=n(22),i=n(27),u={};n(8)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(9),o=n(10),i=n(49);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(5),o=n(19),i=n(87)(!1),u=n(26)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(41);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(19),o=n(50),i=n(88);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=o(c.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(5),o=n(91),i=n(26)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(93),o=n(53),i=n(13),u=n(19);t.exports=n(25)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;void 0==o[r]&&n(8)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){"use strict";var r=n(54),o=n(28);t.exports=n(59)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},function(t,e,n){var r=n(10);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(13),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(40),o=n(0)("iterator"),i=n(13);t.exports=n(12).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(2),o=n(9),i=n(4),u=n(0)("species");t.exports=function(t){var e=r[t];i&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){var r=n(3),o=n(101).set;t.exports=function(t,e,n){var i,u=e.constructor;return u!==n&&"function"==typeof u&&(i=u.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},function(t,e,n){var r=n(3),o=n(10),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(18)(Function.call,n(102).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(103),o=n(22),i=n(19),u=n(45),a=n(5),c=n(43),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=i(t),e=u(e,!0),c)try{return s(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){n(39),n(46),n(52),n(105),t.exports=n(12).Set},function(t,e,n){"use strict";var r=n(54),o=n(28);t.exports=n(59)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){n(107).polyfill()},function(t,e,n){(function(e){for(var r=n(108),o="undefined"==typeof window?e:window,i=["moz","webkit"],u="AnimationFrame",a=o["request"+u],c=o["cancel"+u]||o["cancelRequest"+u],s=0;!a&&s<i.length;s++)a=o[i[s]+"Request"+u],c=o[i[s]+"Cancel"+u]||o[i[s]+"CancelRequest"+u];if(!a||!c){var f=0,l=0,p=[];a=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-f));f=n+e,setTimeout(function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},c=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){c.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=c}}).call(e,n(38))},function(t,e,n){(function(e){(function(){var n,r,o,i,u,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-u)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),a=1e9*e.uptime(),u=i-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(e,n(1))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.linear=function(t,e,n,r){return Math.min(n*t/r,n)+e},e.easeIn=function(t,e,n,r){return t/=r,Math.min(n*t*t*t,n)+e},e.easeOut=function(t,e,n,r){return t/=r,t--,Math.min(n*(t*t*t+1),n)+e},e.easeInOut=function(t,e,n,r){return(t/=r/2)<1?Math.min(n/2*t*t*t,n)+e:(t-=2,Math.min(n/2*(t*t*t+2),n)+e)},e.getCurrentTime=function(){return(new Date).valueOf()}}],[60]);
//# sourceMappingURL=app.aa1b9455f0be1ca1114f.js.map