!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(16)},function(e,t){function n(e){return e&&"Widget"===e.type}e.exports=n},function(e,t,n){function r(e){return e&&"VirtualNode"===e.type&&e.version===o}var o=n(3);e.exports=r},function(e,t){e.exports="2"},function(e,t){function n(e){return e&&"Thunk"===e.type}e.exports=n},function(e,t){function n(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}e.exports=n},function(e,t,n){function r(e){return e&&"VirtualText"===e.type&&e.version===o}var o=n(3);e.exports=r},function(e,t){function n(e){return"[object Array]"===o.call(e)}var r=Array.isArray,o=Object.prototype.toString;e.exports=r||n},function(e,t,n){(function(t){var r="undefined"!=typeof t?t:"undefined"!=typeof window?window:{},o=n(37);if("undefined"!=typeof document)e.exports=document;else{var i=r["__GLOBAL_DOCUMENT_CACHE@4"];i||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=o),e.exports=i}}).call(t,function(){return this}())},function(e,t){"use strict";e.exports=function(e){return"object"==typeof e&&null!==e}},function(e,t,n){function r(e,t,n){for(var r in t){var u=t[r];void 0===u?o(e,r,u,n):s(u)?(o(e,r,u,n),u.hook&&u.hook(e,r,n?n[r]:void 0)):a(u)?i(e,t,n,r,u):e[r]=u}}function o(e,t,n,r){if(r){var o=r[t];if(s(o))o.unhook&&o.unhook(e,t,n);else if("attributes"===t)for(var i in o)e.removeAttribute(i);else if("style"===t)for(var u in o)e.style[u]="";else"string"==typeof o?e[t]="":e[t]=null}}function i(e,t,n,r,o){var i=n?n[r]:void 0;if("attributes"!==r){if(i&&a(i)&&u(i)!==u(o))return void(e[r]=o);a(e[r])||(e[r]={});var s="style"===r?"":void 0;for(var c in o){var f=o[c];e[r][c]=void 0===f?s:f}}else for(var p in o){var l=o[p];void 0===l?e.removeAttribute(p):e.setAttribute(p,l)}}function u(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var a=n(9),s=n(5);e.exports=r},function(e,t,n){function r(e,t){var n=t?t.document||o:o,f=t?t.warn:null;if(e=c(e).a,s(e))return e.init();if(a(e))return n.createTextNode(e.text);if(!u(e))return f&&f("Item is not a valid virtual dom node",e),null;var p=null===e.namespace?n.createElement(e.tagName):n.createElementNS(e.namespace,e.tagName),l=e.properties;i(p,l);for(var v=e.children,d=0;d<v.length;d++){var h=r(v[d],t);h&&p.appendChild(h)}return p}var o=n(8),i=n(10),u=n(2),a=n(6),s=n(1),c=n(12);e.exports=r},function(e,t,n){function r(e,t){var n=e,r=t;return s(t)&&(r=o(t,e)),s(e)&&(n=o(e,null)),{a:n,b:r}}function o(e,t){var n=e.vnode;if(n||(n=e.vnode=e.render(t)),!(i(n)||u(n)||a(n)))throw new Error("thunk did not return a valid node");return n}var i=n(2),u=n(6),a=n(1),s=n(4);e.exports=r},function(e,t,n){function r(e,t,n,r,o){this.tagName=e,this.properties=t||c,this.children=n||f,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof o?o:null;var p,l=n&&n.length||0,v=0,d=!1,h=!1,y=!1;for(var g in t)if(t.hasOwnProperty(g)){var x=t[g];s(x)&&x.unhook&&(p||(p={}),p[g]=x)}for(var m=0;l>m;m++){var N=n[m];i(N)?(v+=N.count||0,!d&&N.hasWidgets&&(d=!0),!h&&N.hasThunks&&(h=!0),y||!N.hooks&&!N.descendantHooks||(y=!0)):!d&&u(N)?"function"==typeof N.destroy&&(d=!0):!h&&a(N)&&(h=!0)}this.count=l+v,this.hasWidgets=d,this.hasThunks=h,this.hooks=p,this.descendantHooks=y}var o=n(3),i=n(2),u=n(1),a=n(4),s=n(5);e.exports=r;var c={},f=[];r.prototype.version=o,r.prototype.type="VirtualNode"},function(e,t,n){function r(e,t,n){this.type=Number(e),this.vNode=t,this.patch=n}var o=n(3);r.NONE=0,r.VTEXT=1,r.VNODE=2,r.WIDGET=3,r.PROPS=4,r.ORDER=5,r.INSERT=6,r.REMOVE=7,r.THUNK=8,e.exports=r,r.prototype.version=o,r.prototype.type="VirtualPatch"},function(e,t,n){function r(e){this.text=String(e)}var o=n(3);e.exports=r,r.prototype.version=o,r.prototype.type="VirtualText"},function(e,t,n){var r,o,i=n(36),u=document.getElementById("input"),a=document.getElementById("render"),s=document.getElementById("output"),c=new i.XMLRenderer;a.addEventListener("click",function(){console.time("renderer.update");var e=c.update(u.value,s,r,o);r=e[0],o=e[1],console.timeEnd("renderer.update")})},function(e,t,n){var r=n(11);e.exports=r},function(e,t,n){var r=n(35);e.exports=r},function(e,t,n){var r=n(32);e.exports=r},function(e,t,n){var r=n(18),o=n(25),i=n(19),u=n(17),a=n(13),s=n(15);e.exports={diff:r,patch:o,h:i,create:u,VNode:a,VText:s}},function(e,t){/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */
e.exports=function(e){var t,n=String.prototype.split,r=/()??/.exec("")[1]===e;return t=function(t,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return n.call(t,o,i);var u,a,s,c,f=[],p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),l=0,o=new RegExp(o.source,p+"g");for(t+="",r||(u=new RegExp("^"+o.source+"$(?!\\s)",p)),i=i===e?-1>>>0:i>>>0;(a=o.exec(t))&&(s=a.index+a[0].length,!(s>l&&(f.push(t.slice(l,a.index)),!r&&a.length>1&&a[0].replace(u,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(a[t]=e)}),a.length>1&&a.index<t.length&&Array.prototype.push.apply(f,a.slice(1)),c=a[0].length,l=s,f.length>=i)));)o.lastIndex===a.index&&o.lastIndex++;return l===t.length?(c||!o.test(""))&&f.push(""):f.push(t.slice(l)),f.length>i?f.slice(0,i):f}}()},function(e,t,n){"use strict";function r(e){var t=e[u];return t||(t=e[u]={}),t}var o=n(24),i="7";o("ev-store",i);var u="__EV_STORE_KEY@"+i;e.exports=r},function(e,t){(function(t){"use strict";function n(e,t){return e in r?r[e]:(r[e]=t,t)}var r="undefined"!=typeof window?window:"undefined"!=typeof t?t:{};e.exports=n}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e,t,n){var r="__INDIVIDUAL_ONE_VERSION_"+e,i=r+"_ENFORCE_SINGLETON",u=o(i,t);if(u!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+u+" installed.\nThis means you cannot install version "+t);return o(r,n)}var o=n(23);e.exports=r},function(e,t,n){var r=n(28);e.exports=r},function(e,t){function n(e,t,n,o){return n&&0!==n.length?(n.sort(i),r(e,t,n,o,0)):{}}function r(e,t,n,i,a){if(i=i||{},e){o(n,a,a)&&(i[a]=e);var s=t.children;if(s)for(var c=e.childNodes,f=0;f<t.children.length;f++){a+=1;var p=s[f]||u,l=a+(p.count||0);o(n,a,l)&&r(c[f],p,n,i,a),a=l}}return i}function o(e,t,n){if(0===e.length)return!1;for(var r,o,i=0,u=e.length-1;u>=i;){if(r=(u+i)/2>>0,o=e[r],i===u)return o>=t&&n>=o;if(t>o)i=r+1;else{if(!(o>n))return!0;u=r-1}}return!1}function i(e,t){return e>t?1:-1}var u={};e.exports=n},function(e,t,n){function r(e,t,n){var r=e.type,c=e.vNode,v=e.patch;switch(r){case d.REMOVE:return o(t,c);case d.INSERT:return i(t,v,n);case d.VTEXT:return u(t,c,v,n);case d.WIDGET:return a(t,c,v,n);case d.VNODE:return s(t,c,v,n);case d.ORDER:return f(t,v),t;case d.PROPS:return l(t,v,c.properties),t;case d.THUNK:return p(t,n.patch(t,v,n));default:return t}}function o(e,t){var n=e.parentNode;return n&&n.removeChild(e),c(e,t),null}function i(e,t,n){var r=h(t,n);return e&&e.appendChild(r),e}function u(e,t,n,r){var o;if(3===e.nodeType)e.replaceData(0,e.length,n.text),o=e;else{var i=e.parentNode;o=h(n,r),i&&o!==e&&i.replaceChild(o,e)}return o}function a(e,t,n,r){var o,i=y(t,n);o=i?n.update(t,e)||e:h(n,r);var u=e.parentNode;return u&&o!==e&&u.replaceChild(o,e),i||c(e,t),o}function s(e,t,n,r){var o=e.parentNode,i=h(n,r);return o&&i!==e&&o.replaceChild(i,e),i}function c(e,t){"function"==typeof t.destroy&&v(t)&&t.destroy(e)}function f(e,t){for(var n,r,o,i=e.childNodes,u={},a=0;a<t.removes.length;a++)r=t.removes[a],n=i[r.from],r.key&&(u[r.key]=n),e.removeChild(n);for(var s=i.length,c=0;c<t.inserts.length;c++)o=t.inserts[c],n=u[o.key],e.insertBefore(n,o.to>=s++?null:i[o.to])}function p(e,t){return e&&t&&e!==t&&e.parentNode&&e.parentNode.replaceChild(t,e),t}var l=n(10),v=n(1),d=n(14),h=n(11),y=n(29);e.exports=r},function(e,t,n){function r(e,t){return o(e,t)}function o(e,t,n){var r=u(t);if(0===r.length)return e;var s=c(e,t.a,r),f=e.ownerDocument;n||(n={patch:o},f!==a&&(n.document=f));for(var p=0;p<r.length;p++){var l=r[p];e=i(e,s[l],t[l],n)}return e}function i(e,t,n,r){if(!t)return e;var o;if(s(n))for(var i=0;i<n.length;i++)o=f(n[i],t,r),t===e&&(e=o);else o=f(n,t,r),t===e&&(e=o);return e}function u(e){var t=[];for(var n in e)"a"!==n&&t.push(Number(n));return t}var a=n(8),s=n(7),c=n(26),f=n(27);e.exports=r},function(e,t,n){function r(e,t){return o(e)&&o(t)?"name"in e&&"name"in t?e.id===t.id:e.init===t.init:!1}var o=n(1);e.exports=r},function(e,t,n){"use strict";function r(e){return this instanceof r?void(this.value=e):new r(e)}var o=n(22);e.exports=r,r.prototype.hook=function(e,t){var n=o(e),r=t.substr(3);n[r]=this.value},r.prototype.unhook=function(e,t){var n=o(e),r=t.substr(3);n[r]=void 0}},function(e,t){"use strict";function n(e){return this instanceof n?void(this.value=e):new n(e)}e.exports=n,n.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},function(e,t,n){"use strict";function r(e,t,n){var r,u,s,c,f=[];return!n&&a(t)&&(n=t,u={}),u=u||t||{},r=x(e,u),u.hasOwnProperty("key")&&(s=u.key,u.key=void 0),u.hasOwnProperty("namespace")&&(c=u.namespace,u.namespace=void 0),"INPUT"!==r||c||!u.hasOwnProperty("value")||void 0===u.value||y(u.value)||(u.value=m(u.value)),i(u),void 0!==n&&null!==n&&o(n,f,r,u),new p(r,u,f,s,c)}function o(e,t,n,r){if("string"==typeof e)t.push(new l(e));else if(u(e))t.push(e);else{if(!f(e)){if(null===e||void 0===e)return;throw s({foreignObject:e,parentVnode:{tagName:n,properties:r}})}for(var i=0;i<e.length;i++)o(e[i],t,n,r)}}function i(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];if(y(n))continue;"ev-"===t.substr(0,3)&&(e[t]=N(n))}}function u(e){return v(e)||d(e)||h(e)||g(e)}function a(e){return"string"==typeof e||f(e)||u(e)}function s(e){var t=new Error;return t.type="virtual-hyperscript.unexpected.virtual-element",t.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+c(e.foreignObject)+".\nThe parent vnode is:\n"+c(e.parentVnode),t.foreignObject=e.foreignObject,t.parentVnode=e.parentVnode,t}function c(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}var f=n(7),p=n(13),l=n(15),v=n(2),d=n(6),h=n(1),y=n(5),g=n(4),x=n(33),m=n(31),N=n(30);e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!e)return"DIV";var n=!t.hasOwnProperty("id"),r=o(e,i),a=null;u.test(r[1])&&(a="DIV");var s,c,f,p;for(p=0;p<r.length;p++)c=r[p],c&&(f=c.charAt(0),a?"."===f?(s=s||[],s.push(c.substring(1,c.length))):"#"===f&&n&&(t.id=c.substring(1,c.length)):a=c);return s&&(t.className&&s.push(t.className),t.className=s.join(" ")),t.namespace?a:a.toUpperCase()}var o=n(21),i=/([\.#]?[a-zA-Z0-9_:-]+)/,u=/^\.|#/;e.exports=r},function(e,t,n){function r(e,t){var n;for(var a in e){a in t||(n=n||{},n[a]=void 0);var s=e[a],c=t[a];if(s!==c)if(i(s)&&i(c))if(o(c)!==o(s))n=n||{},n[a]=c;else if(u(c))n=n||{},n[a]=c;else{var f=r(s,c);f&&(n=n||{},n[a]=f)}else n=n||{},n[a]=c}for(var p in t)p in e||(n=n||{},n[p]=t[p]);return n}function o(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var i=n(9),u=n(5);e.exports=r},function(e,t,n){function r(e,t){var n={a:e};return o(e,t,n,0),n}function o(e,t,n,r){if(e!==t){var o=n[r],a=!1;if(k(e)||k(t))s(e,t,n,r);else if(null==t)N(e)||(u(e,n,r),o=n[r]),o=h(o,new g(g.REMOVE,e,t));else if(x(t))if(x(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var c=O(e.properties,t.properties);c&&(o=h(o,new g(g.PROPS,e,c))),o=i(e,t,n,o,r)}else o=h(o,new g(g.VNODE,e,t)),a=!0;else o=h(o,new g(g.VNODE,e,t)),a=!0;else m(t)?m(e)?e.text!==t.text&&(o=h(o,new g(g.VTEXT,e,t))):(o=h(o,new g(g.VTEXT,e,t)),a=!0):N(t)&&(N(e)||(a=!0),o=h(o,new g(g.WIDGET,e,t)));o&&(n[r]=o),a&&u(e,n,r)}}function i(e,t,n,r,i){for(var u=e.children,a=l(u,t.children),s=a.children,c=u.length,f=s.length,p=c>f?c:f,v=0;p>v;v++){var d=u[v],y=s[v];i+=1,d?o(d,y,n,i):y&&(r=h(r,new g(g.INSERT,null,y))),x(d)&&d.count&&(i+=d.count)}return a.moves&&(r=h(r,new g(g.ORDER,e,a.moves))),r}function u(e,t,n){f(e,t,n),a(e,t,n)}function a(e,t,n){if(N(e))"function"==typeof e.destroy&&(t[n]=h(t[n],new g(g.REMOVE,e,null)));else if(x(e)&&(e.hasWidgets||e.hasThunks))for(var r=e.children,o=r.length,i=0;o>i;i++){var u=r[i];n+=1,a(u,t,n),x(u)&&u.count&&(n+=u.count)}else k(e)&&s(e,null,t,n)}function s(e,t,n,o){var i=E(e,t),u=r(i.a,i.b);c(u)&&(n[o]=new g(g.THUNK,null,u))}function c(e){for(var t in e)if("a"!==t)return!0;return!1}function f(e,t,n){if(x(e)){if(e.hooks&&(t[n]=h(t[n],new g(g.PROPS,e,p(e.hooks)))),e.descendantHooks||e.hasThunks)for(var r=e.children,o=r.length,i=0;o>i;i++){var u=r[i];n+=1,f(u,t,n),x(u)&&u.count&&(n+=u.count)}}else k(e)&&s(e,null,t,n)}function p(e){var t={};for(var n in e)t[n]=void 0;return t}function l(e,t){var n=d(t),r=n.keys,o=n.free;if(o.length===t.length)return{children:t,moves:null};var i=d(e),u=i.keys,a=i.free;if(a.length===e.length)return{children:t,moves:null};for(var s=[],c=0,f=o.length,p=0,l=0;l<e.length;l++){var h,y=e[l];y.key?r.hasOwnProperty(y.key)?(h=r[y.key],s.push(t[h])):(h=l-p++,s.push(null)):f>c?(h=o[c++],s.push(t[h])):(h=l-p++,s.push(null))}for(var g=c>=o.length?t.length:o[c],x=0;x<t.length;x++){var m=t[x];m.key?u.hasOwnProperty(m.key)||s.push(m):x>=g&&s.push(m)}for(var N,k=s.slice(),E=0,O=[],w=[],T=0;T<t.length;){var _=t[T];for(N=k[E];null===N&&k.length;)O.push(v(k,E,null)),N=k[E];N&&N.key===_.key?(E++,T++):_.key?(N&&N.key&&r[N.key]!==T+1?(O.push(v(k,E,N.key)),N=k[E],N&&N.key===_.key?E++:w.push({key:_.key,to:T})):w.push({key:_.key,to:T}),T++):N&&N.key&&O.push(v(k,E,N.key))}for(;E<k.length;)N=k[E],O.push(v(k,E,N&&N.key));return O.length!==p||w.length?{children:s,moves:{removes:O,inserts:w}}:{children:s,moves:null}}function v(e,t,n){return e.splice(t,1),{from:t,key:n}}function d(e){for(var t={},n=[],r=e.length,o=0;r>o;o++){var i=e[o];i.key?t[i.key]=o:n.push(o)}return{keys:t,free:n}}function h(e,t){return e?(y(e)?e.push(t):e=[e,t],e):t}var y=n(7),g=n(14),x=n(2),m=n(6),N=n(1),k=n(4),E=n(12),O=n(34);e.exports=r},function(e,t,n){var r=n(20),o=function(){function e(e){void 0===e&&(e=[]),this.exclude=e}return e.prototype.isIncluded=function(e){return-1===this.exclude.indexOf(e)},e.prototype.renderAttributes=function(e){for(var t,n=[],r=0;t=e[r];r++)this.isIncluded(t.name)&&n.push(this.renderAttribute(t));return n},e.prototype.renderAttribute=function(e){return r.h("span.attribute",[" ",r.h("span.name",e.name),"=",r.h("span.value",'"'+e.value+'"')])},e.prototype.renderNodes=function(e){for(var t,n=[],r=0;t=e[r];r++){var o=t.nodeType===Node.ELEMENT_NODE?this.isIncluded(t.tagName):!0;o&&n.push(this.renderNode(t))}return n},e.prototype.renderNode=function(e){if(e.nodeType==Node.TEXT_NODE){var t=e;return r.h("div.text",t.data)}if(e.nodeType==Node.ELEMENT_NODE){var n=e,o=n.tagName,i=[["<",o],this.renderAttributes(n.attributes),[">"]],u=r.h("span.start",Array.prototype.concat.apply([],i)),a=r.h("span.end",{},["</",o,">"]);return r.h("div.element",[u,this.renderNodes(e.childNodes),a])}return r.h("span","(Ignoring node type = "+e.nodeType+")")},e.prototype.render=function(e){var t=(new DOMParser).parseFromString(e,"application/xml");return r.h("div.xmltree",this.renderNodes(t.childNodes))},e.prototype.update=function(e,t,n,o){var i=this.render(e);if(void 0===o)o=i,n=r.create(o),t.appendChild(n);else{var u=r.diff(o,i);n=r.patch(n,u),o=i}return[n,o]},e}();t.XMLRenderer=o},function(e,t){}]);