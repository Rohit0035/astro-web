(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[29],{552:function(e,t,n){"use strict";e.exports=n(577)},553:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},555:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n(183);t.a=function(){return o.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"breadcrumb-content text-center"},o.a.createElement(i.Breadcrumbs,{separator:o.a.createElement("span",null,"/"),item:a.c,finalItem:"span"}))))}},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));n(15);var r=n(0),o=(n(552),r.createContext({prefixes:{}}));o.Consumer,o.Provider;function a(e,t){var n=Object(r.useContext)(o).prefixes;return e||n[t]||t}function i(){return"rtl"===Object(r.useContext)(o).dir}},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(566)),o=i(n(560)),a=i(n(568));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default;t.default=c},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=c(n(3)),a=c(n(35)),i=n(567);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,y,v=function(e){function t(){return l(this,t),s(this,p(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,a=o.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if("meta"===t){var r=(0,i.getDuplicateMeta)(e);r&&(0,i.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(n.prototype,o),c&&f(n,c),t}(r.Component);m=v,b="contextTypes",y={extract:o.default.func},b in m?Object.defineProperty(m,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):m[b]=y;var h=v;t.default=h,e.exports=t.default},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(3))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return c(this,t),l(this,f(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&u(n.prototype,r),a&&u(n,a),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:a.default.func});var d=p;t.default=d,e.exports=t.default},567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],c=i.props.id;(c?!t.id[c]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),a.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,a=e.getAttribute(r);return a?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),a=o.concat(["id"])},568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(3)),a=i(n(560));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,m,b,y=function(e){function t(){return u(this,t),f(this,s(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,o),i&&l(n,i),t}(r.Component);d=y,m="propTypes",b={title:o.default.string},m in d?Object.defineProperty(d,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[m]=b;var v=y;t.default=v,e.exports=t.default},574:function(e,t,n){"use strict";var r=n(15),o=n(553),a=n(77),i=n.n(a),c=/-(.)/g;var u=n(0),l=n(557),f=n(552);n.d(t,"a",(function(){return d}));var s=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,a=void 0===n?p(e):n,c=t.Component,d=t.defaultProps,m=u.forwardRef((function(t,n){var a=t.className,u=t.bsPrefix,p=t.as,d=void 0===p?c||"div":p,m=Object(o.a)(t,s),b=Object(l.a)(u,e);return Object(f.jsx)(d,Object(r.a)({ref:n,className:i()(a,b)},m))}));return m.defaultProps=d,m.displayName=a,m}},577:function(e,t,n){"use strict";n(133);var r=n(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,f=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:f,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},578:function(e,t,n){"use strict";var r=n(591);function o(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var a=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(a,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||o(e).getPropertyValue(c(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!u.test(e))}(o)?n+=c(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(c(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},590:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},591:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},596:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(578),o=n(605);function a(e,t){var n=Object(r.a)(e,t)||"",o=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*o}function i(e,t){var n=a(e,"transitionDuration"),r=a(e,"transitionDelay"),i=Object(o.a)(e,(function(n){n.target===e&&(i(),t(n))}),n+r)}},600:function(e,t,n){"use strict";var r=n(15),o=n(553),a=n(0),i=n.n(a),c=n(26),u=n(603),l=n(35),f=n.n(l);var s=n(552),p=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],d=i.a.forwardRef((function(e,t){var n=e.onEnter,l=e.onEntering,d=e.onEntered,m=e.onExit,b=e.onExiting,y=e.onExited,v=e.addEndListener,h=e.children,O=e.childRef,g=Object(o.a)(e,p),j=Object(a.useRef)(null),E=Object(u.a)(j,O),_=function(e){var t;E((t=e)&&"setState"in t?f.a.findDOMNode(t):null!=t?t:null)},w=function(e){return function(t){e&&j.current&&e(j.current,t)}},C=Object(a.useCallback)(w(n),[n]),P=Object(a.useCallback)(w(l),[l]),x=Object(a.useCallback)(w(d),[d]),S=Object(a.useCallback)(w(m),[m]),N=Object(a.useCallback)(w(b),[b]),k=Object(a.useCallback)(w(y),[y]),T=Object(a.useCallback)(w(v),[v]);return Object(s.jsx)(c.e,Object(r.a)(Object(r.a)({ref:t},g),{},{onEnter:C,onEntered:x,onEntering:P,onExit:S,onExited:k,onExiting:N,addEndListener:T,nodeRef:j,children:"function"===typeof h?function(e,t){return h(e,Object(r.a)(Object(r.a)({},t),{},{ref:_}))}:i.a.cloneElement(h,{ref:_})}))}));t.a=d},601:function(e,t,n){"use strict";var r=n(590),o=!1,a=!1;try{var i={get passive(){return o=!0},get once(){return a=o=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(c){}t.a=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!a){var i=r.once,c=r.capture,u=n;!a&&i&&(u=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=u),e.addEventListener(t,u,o?r:c)}e.addEventListener(t,n,r)}},602:function(e,t,n){"use strict";t.a=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}},603:function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=o(e),r=o(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},604:function(e,t,n){"use strict";var r=n(601),o=n(602);t.a=function(e,t,n,a){return Object(r.a)(e,t,n,a),function(){Object(o.a)(e,t,n,a)}}},605:function(e,t,n){"use strict";var r=n(578),o=n(604);function a(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=Object(o.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function i(e,t,n,i){null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var c=a(e,n,i),u=Object(o.a)(e,"transitionend",t);return function(){c(),u()}}n.d(t,"a",(function(){return i}))},611:function(e,t,n){"use strict";var r,o=n(15),a=n(553),i=n(184),c=n(77),u=n.n(c),l=n(0),f=n(26),s=n(597),p=n(596),d=n(600),m=n(552),b=["className","children","transitionClasses"],y=(r={},Object(i.a)(r,f.b,"show"),Object(i.a)(r,f.a,"show"),r),v=l.forwardRef((function(e,t){var n=e.className,r=e.children,i=e.transitionClasses,c=void 0===i?{}:i,f=Object(a.a)(e,b),v=Object(l.useCallback)((function(e,t){Object(p.a)(e),null==f.onEnter||f.onEnter(e,t)}),[f]);return Object(m.jsx)(d.a,Object(o.a)(Object(o.a)({ref:t,addEndListener:s.a},f),{},{onEnter:v,childRef:r.ref,children:function(e,t){return l.cloneElement(r,Object(o.a)(Object(o.a)({},t),{},{className:u()("fade",n,r.props.className,y[e],c[e])}))}}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},677:function(e,t,n){"use strict";var r=n(7),o=n(12),a=n(185),i=n(16),c=n(0),u=n.n(c),l=n(3),f=n.n(l),s=n(77),p=n.n(s),d=n(54),m=["className","cssModule","inline","tag","innerRef"],b={children:f.a.node,inline:f.a.bool,tag:d.n,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),className:f.a.string,cssModule:f.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.submit=n.submit.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,i=e.tag,c=e.innerRef,l=Object(o.a)(e,m),f=Object(d.j)(p()(t,!!a&&"form-inline"),n);return u.a.createElement(i,Object(r.a)({},l,{ref:c,className:f}))},t}(c.Component);y.propTypes=b,y.defaultProps={tag:"form"},t.a=y},727:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(184),o=n(179),a=n(180),i=n(181),c=n(182),u=n(0),l=n.n(u),f=n(559),s=n.n(f),p=n(584),d=n(178),m=n(555),b=n(41),y=n.n(b),v=n(677),h=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeHandler=function(e){a.setState({selectedFile:e.target.files[0]}),a.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},a.changeHandler=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),y.a.post("http://13.235.180.192/api/user/sendotp",a.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},a.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},a}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(s.a,null,l.a.createElement("title",null,"Buynaa | Login"),l.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),l.a.createElement(d.a,{headerTop:"visible"},l.a.createElement(m.a,null),l.a.createElement("div",{className:"login-register-area pt-100 pb-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},l.a.createElement("div",{className:"login-register-wrapper"},l.a.createElement(p.a.Container,{defaultActiveKey:"login"},l.a.createElement(p.a.Content,null,l.a.createElement(p.a.Pane,{eventKey:"login"},l.a.createElement("div",{className:"login-form-container"},l.a.createElement("div",{className:"login-register-form"},l.a.createElement(v.a,{onSubmit:this.submitHandler},l.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),l.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),l.a.createElement("div",{className:"button-box"},l.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),n}(u.Component)}}]);
//# sourceMappingURL=29.d9c89b4f.chunk.js.map