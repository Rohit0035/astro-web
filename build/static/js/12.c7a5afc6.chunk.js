(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[12],{601:function(e,t,n){"use strict";e.exports=n(624)},603:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},606:function(e,t,n){"use strict";n(18);var r=n(0);n(601);n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l}));var o=["xxl","xl","lg","md","sm","xs"],u=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"});u.Consumer,u.Provider;function a(e,t){var n=Object(r.useContext)(u).prefixes;return e||n[t]||t}function i(){return Object(r.useContext)(u).breakpoints}function c(){return Object(r.useContext)(u).minBreakpoint}function l(){return"rtl"===Object(r.useContext)(u).dir}},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return u.default}}),t.default=void 0;var r=a(n(616)),o=a(n(609)),u=a(n(618));function a(e){return e&&e.__esModule?e:{default:e}}var i=o.default;t.default=i},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(3)),u=i(n(35)),a=n(617);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,v,b,h=function(e){function t(){return l(this,t),s(this,p(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&u.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);u.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,u=o.innerHTML;(r=(r=r.filter((function(e){return-1===u.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,a.getDuplicateTitle)();n&&(0,a.removeChild)(o,n)}else if("meta"===t){var r=(0,a.getDuplicateMeta)(e);r&&(0,a.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var u=(0,a.getDuplicateCanonical)(e);u&&(0,a.removeChild)(o,u)}})),(0,a.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(n.prototype,o),i&&f(n,i),t}(r.Component);y=h,v="contextTypes",b={extract:o.default.func},v in y?Object.defineProperty(y,v,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[v]=b;var m=h;t.default=m,e.exports=t.default},616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),u=(r=n(3))&&r.__esModule?r:{default:r};function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return i(this,t),l(this,f(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&c(n.prototype,r),u&&c(n,u),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:u.default.func});var d=p;t.default=d,e.exports=t.default},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],a=[];return e.forEach((function(e){var o=e.type,u=e.props;"title"===o?t=e:"link"===o&&"canonical"===u.rel?n=e:"meta"===o?r.push(e):a.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};u.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var a=e[r],i=a.props.id;(i?!t.id[i]:0===o.filter((function(e){var n=a.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(a),u.forEach((function(e){var n=a.props[e];n&&(t[e][n]=a)})))},a=e.length-1;a>=0;a--)r(a);return n}(r)),[n],a)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,u=e.getAttribute(r);return u?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(u,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),u=o.concat(["id"])},618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=a(n(3)),u=a(n(609));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,y,v,b=function(e){function t(){return c(this,t),f(this,s(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(u.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,o),a&&l(n,a),t}(r.Component);d=b,y="propTypes",v={title:o.default.string},y in d?Object.defineProperty(d,y,{value:v,enumerable:!0,configurable:!0,writable:!0}):d[y]=v;var h=b;t.default=h,e.exports=t.default},623:function(e,t,n){"use strict";var r=n(18),o=n(603),u=n(77),a=n.n(u),i=/-(.)/g;var c=n(0),l=n(606),f=n(601);n.d(t,"a",(function(){return d}));var s=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,u=void 0===n?p(e):n,i=t.Component,d=t.defaultProps,y=c.forwardRef((function(t,n){var u=t.className,c=t.bsPrefix,p=t.as,d=void 0===p?i||"div":p,y=Object(o.a)(t,s),v=Object(l.c)(c,e);return Object(f.jsx)(d,Object(r.a)({ref:n,className:a()(u,v)},y))}));return y.defaultProps=d,y.displayName=u,y}},624:function(e,t,n){"use strict";n(141);var r=n(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),t.Fragment=u("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,u={},l=null,f=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:f,props:u,_owner:a.current}}t.jsx=l,t.jsxs=l},627:function(e,t,n){"use strict";var r=n(644);function o(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var u=/([A-Z])/g;var a=/^ms-/;function i(e){return function(e){return e.replace(u,"-$1").toLowerCase()}(e).replace(a,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(i(t))||o(e).getPropertyValue(i(t));Object.keys(t).forEach((function(o){var u=t[o];u||0===u?!function(e){return!(!e||!c.test(e))}(o)?n+=i(o)+": "+u+";":r+=o+"("+u+") ":e.style.removeProperty(i(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},632:function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=o(e),r=o(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},637:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},638:function(e,t,n){"use strict";var r,o=n(18),u=n(603),a=n(198),i=n(77),c=n.n(i),l=n(0),f=n(26),s=n(650),p=n(649),d=n(653),y=n(601),v=["className","children","transitionClasses"],b=(r={},Object(a.a)(r,f.b,"show"),Object(a.a)(r,f.a,"show"),r),h=l.forwardRef((function(e,t){var n=e.className,r=e.children,a=e.transitionClasses,i=void 0===a?{}:a,f=Object(u.a)(e,v),h=Object(l.useCallback)((function(e,t){Object(p.a)(e),null==f.onEnter||f.onEnter(e,t)}),[f]);return Object(y.jsx)(d.a,Object(o.a)(Object(o.a)({ref:t,addEndListener:s.a},f),{},{onEnter:h,childRef:r.ref,children:function(e,t){return l.cloneElement(r,Object(o.a)(Object(o.a)({},t),{},{className:c()("fade",n,r.props.className,b[e],i[e])}))}}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",t.a=h},644:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},649:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(627),o=n(657);function u(e,t){var n=Object(r.a)(e,t)||"",o=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*o}function a(e,t){var n=u(e,"transitionDuration"),r=u(e,"transitionDelay"),a=Object(o.a)(e,(function(n){n.target===e&&(a(),t(n))}),n+r)}},653:function(e,t,n){"use strict";var r=n(18),o=n(603),u=n(0),a=n.n(u),i=n(26),c=n(632),l=n(35),f=n.n(l);var s=n(601),p=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],d=a.a.forwardRef((function(e,t){var n=e.onEnter,l=e.onEntering,d=e.onEntered,y=e.onExit,v=e.onExiting,b=e.onExited,h=e.addEndListener,m=e.children,O=e.childRef,g=Object(o.a)(e,p),j=Object(u.useRef)(null),w=Object(c.a)(j,O),E=function(e){var t;w((t=e)&&"setState"in t?f.a.findDOMNode(t):null!=t?t:null)},C=function(e){return function(t){e&&j.current&&e(j.current,t)}},_=Object(u.useCallback)(C(n),[n]),P=Object(u.useCallback)(C(l),[l]),S=Object(u.useCallback)(C(d),[d]),x=Object(u.useCallback)(C(y),[y]),k=Object(u.useCallback)(C(v),[v]),I=Object(u.useCallback)(C(b),[b]),D=Object(u.useCallback)(C(h),[h]);return Object(s.jsx)(i.e,Object(r.a)(Object(r.a)({ref:t},g),{},{onEnter:_,onEntered:S,onEntering:P,onExit:x,onExited:I,onExiting:k,addEndListener:D,nodeRef:j,children:"function"===typeof m?function(e,t){return m(e,Object(r.a)(Object(r.a)({},t),{},{ref:E}))}:a.a.cloneElement(m,{ref:E})}))}));t.a=d},654:function(e,t,n){"use strict";var r=n(637),o=!1,u=!1;try{var a={get passive(){return o=!0},get once(){return u=o=!0}};r.a&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(i){}t.a=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!u){var a=r.once,i=r.capture,c=n;!u&&a&&(c=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=c),e.addEventListener(t,c,o?r:i)}e.addEventListener(t,n,r)}},655:function(e,t,n){"use strict";t.a=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}},656:function(e,t,n){"use strict";var r=n(654),o=n(655);t.a=function(e,t,n,u){return Object(r.a)(e,t,n,u),function(){Object(o.a)(e,t,n,u)}}},657:function(e,t,n){"use strict";var r=n(627),o=n(656);function u(e,t,n){void 0===n&&(n=5);var r=!1,u=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=Object(o.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(u),a()}}function a(e,t,n,a){null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var i=u(e,n,a),c=Object(o.a)(e,"transitionend",t);return function(){i(),c()}}n.d(t,"a",(function(){return a}))},781:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==m(e)&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O=function(e){return"object"===m(e)},g=function(e){s(n,e);var t=d(n);function n(e){var o;return c(this,n),h(v(o=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!O(e)&&!1!==e})).join(" ")})),h(v(o),"getType",(function(){var e=o.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),o.input=r.default.createRef(),o}return f(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,u=e.isLastChild,c=e.inputStyle,l=e.focus,f=e.isDisabled,s=e.hasErrored,p=e.errorStyle,d=e.focusStyle,y=e.disabledStyle,v=(e.shouldAutoFocus,e.isInputNum),b=e.index,h=e.value,m=e.className,g=(e.isInputSecure,i(e,o));return r.default.createElement("div",{className:m,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",a({"aria-label":"".concat(0===b?"Please enter verification code. ":"").concat(v?"Digit":"Character"," ").concat(b+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},O(c)&&c,l&&O(d)&&d,f&&O(y)&&y,s&&O(p)&&p),placeholder:t,className:this.getClasses(c,l&&d,f&&y,s&&p),type:this.getType(),maxLength:"1",ref:this.input,disabled:f,value:h||""},g)),!u&&n)}}]),n}(r.PureComponent),j=function(e){s(n,e);var t=d(n);function n(){var e;c(this,n);for(var o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return h(v(e=t.call.apply(t,[this].concat(u))),"state",{activeInput:0}),h(v(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),h(v(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),h(v(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),h(v(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),h(v(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),h(v(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),h(v(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),h(v(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),h(v(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,o=r.numInputs;if(!r.isDisabled){for(var u=e.getOtpValue(),a=n,i=t.clipboardData.getData("text/plain").slice(0,o-n).split(""),c=0;c<o;++c)c>=n&&i.length>0&&(u[c]=i.shift(),a++);e.setState({activeInput:a},(function(){e.focusInput(a),e.handleOtpChange(u)}))}})),h(v(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),h(v(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),h(v(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),h(v(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,o=n.numInputs,u=n.inputStyle,a=n.focusStyle,i=n.separator,c=n.isDisabled,l=n.disabledStyle,f=n.hasErrored,s=n.errorStyle,p=n.shouldAutoFocus,d=n.isInputNum,y=n.isInputSecure,v=n.className,b=[],h=e.getOtpValue(),m=e.getPlaceholderValue(),O=e.props["data-cy"],j=e.props["data-testid"],w=function(n){b.push(r.default.createElement(g,{placeholder:m&&m[n],key:n,index:n,focus:t===n,value:h&&h[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:i,inputStyle:u,focusStyle:a,isLastChild:n===o-1,isDisabled:c,disabledStyle:l,hasErrored:f,errorStyle:s,shouldAutoFocus:p,isInputNum:d,isInputSecure:y,className:v,"data-cy":O&&"".concat(O,"-").concat(n),"data-testid":j&&"".concat(j,"-").concat(n)}))},E=0;E<o;E++)w(E);return b})),e}return f(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},O(e)&&e),className:O(e)?"":e},this.renderInputs())}}]),n}(r.Component);h(j,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var w=j;t.default=w}}]);
//# sourceMappingURL=12.c7a5afc6.chunk.js.map