!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InstructureIconsSolid=t(require("react")):e.InstructureIconsSolid=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(111)},1:function(e,t,r){"use strict";function n(){p=!1}function o(e){if(!e)return void(l!==h&&(l=h,n()));if(e!==l){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,n()}}function i(e){return o(e),l}function u(e){d.seed(e),f!==e&&(n(),f=e)}function s(){l||o(h);for(var e,t=l.split(""),r=[],n=d.nextValue();t.length>0;)n=d.nextValue(),e=Math.floor(n*t.length),r.push(t.splice(e,1)[0]);return r.join("")}function c(){return p?p:p=s()}function a(e){var t=c();return t[e]}var l,f,p,d=r(10),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:i,seed:u,lookup:a,shuffled:c}},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),a=n(c),l=r(4),f=n(l),p=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this));return r.titleId=e.name+"__"+f["default"].generate(),r.descId=e.name+"__"+f["default"].generate(),r}return u(t,e),s(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?a["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?a["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.width,n=e.height,o=e.viewBox,i={fill:"currentColor"};return a["default"].createElement("svg",{style:i,width:r,height:n,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),a["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(c.Component);p.propTypes={name:c.PropTypes.string.isRequired,children:c.PropTypes.node.isRequired,viewBox:c.PropTypes.string.isRequired,title:c.PropTypes.string,desc:c.PropTypes.string,width:c.PropTypes.string,height:c.PropTypes.string},p.defaultProps={width:"1em",height:"1em"},t["default"]=p},4:function(e,t,r){"use strict";e.exports=r(7)},5:function(e,t,r){"use strict";function n(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=r(1);e.exports=n},6:function(e,t,r){"use strict";function n(e,t){for(var r,n=0,i="";!r;)i+=e(t>>4*n&15|o()),r=t<Math.pow(16,n+1),n++;return i}var o=r(9);e.exports=n},7:function(e,t,r){"use strict";function n(){var e="",t=Math.floor(.001*(Date.now()-d));return t===c?s++:(s=0,c=t),e+=l(a.lookup,h),e+=l(a.lookup,y),s>0&&(e+=l(a.lookup,s)),e+=l(a.lookup,t)}function o(t){return a.seed(t),e.exports}function i(t){return y=t,e.exports}function u(e){return void 0!==e&&a.characters(e),a.shuffled()}var s,c,a=r(1),l=r(6),f=r(5),p=r(8),d=1459707606518,h=6,y=r(11)||0;e.exports=n,e.exports.generate=n,e.exports.seed=o,e.exports.worker=i,e.exports.characters=u,e.exports.decode=f,e.exports.isValid=p},8:function(e,t,r){"use strict";function n(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),r=e.length,n=0;r>n;n++)if(-1===t.indexOf(e[n]))return!1;return!0}var o=r(1);e.exports=n},9:function(e,t){"use strict";function r(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=r},10:function(e,t){"use strict";function r(){return o=(9301*o+49297)%233280,o/233280}function n(e){o=e}var o=1;e.exports={nextValue:r,seed:n}},11:function(e,t){"use strict";e.exports=0},111:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),l=n(a),f=r(3),p=n(f),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement(p["default"],s({},this.props,{name:"IconMatureSolid",viewBox:"0 0 1920 1920"}),l["default"].createElement("path",{d:"M1610 160H310c-150 0-150 151.493-150 151.493v1300S160 1760 310 1760h1300c150 0 150-148.507 150-148.507v-1300S1760 160 1610 160zm-244.85 1288.657l-196.568-725 63.209 760.298-250.15 66.194-329.925-689.627 196.568 725L548.134 1665 257.761 594.03l466.866-123.657 260.224 602.164-76.791-650.746 466.865-123.657 290.448 1071.045-300.074 79.478h-.15z",stroke:"none",strokeWidth:"1",fillRule:"evenodd"}))}}]),t}(a.Component);t["default"]=d}})});