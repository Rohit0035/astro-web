(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[29],{552:function(e,t,n){"use strict";e.exports=n(575)},553:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));n(15);var r=n(0),a=(n(552),r.createContext({prefixes:{}}));a.Consumer,a.Provider;function c(e,t){var n=Object(r.useContext)(a).prefixes;return e||n[t]||t}function u(){return"rtl"===Object(r.useContext)(a).dir}},569:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n(569);function c(e){var t=Object(a.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},574:function(e,t,n){"use strict";var r=n(15),a=n(553),c=n(77),u=n.n(c),o=/-(.)/g;var i=n(0),s=n(557),l=n(552);n.d(t,"a",(function(){return v}));var f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,c=void 0===n?d(e):n,o=t.Component,v=t.defaultProps,m=i.forwardRef((function(t,n){var c=t.className,i=t.bsPrefix,d=t.as,v=void 0===d?o||"div":d,m=Object(a.a)(t,f),b=Object(s.a)(i,e);return Object(l.jsx)(v,Object(r.a)({ref:n,className:u()(c,b)},m))}));return m.defaultProps=v,m.displayName=c,m}},575:function(e,t,n){"use strict";n(133);var r=n(0),a=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),t.Fragment=c("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,c={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:l,props:c,_owner:u.current}}t.jsx=s,t.jsxs=s},578:function(e,t,n){"use strict";var r=n(591);function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var c=/([A-Z])/g;var u=/^ms-/;function o(e){return function(e){return e.replace(c,"-$1").toLowerCase()}(e).replace(u,"-ms-")}var i=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(o(t))||a(e).getPropertyValue(o(t));Object.keys(t).forEach((function(a){var c=t[a];c||0===c?!function(e){return!(!e||!i.test(e))}(a)?n+=o(a)+": "+c+";":r+=a+"("+c+") ":e.style.removeProperty(o(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},590:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},591:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));function r(e){return"".concat("data-rr-ui-").concat(e)}function a(e){return"".concat("rrUi").concat(e)}},593:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},596:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(578),a=n(605);function c(e,t){var n=Object(r.a)(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function u(e,t){var n=c(e,"transitionDuration"),r=c(e,"transitionDelay"),u=Object(a.a)(e,(function(n){n.target===e&&(u(),t(n))}),n+r)}},600:function(e,t,n){"use strict";var r=n(15),a=n(553),c=n(0),u=n.n(c),o=n(26),i=n(603),s=n(35),l=n.n(s);var f=n(552),d=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],v=u.a.forwardRef((function(e,t){var n=e.onEnter,s=e.onEntering,v=e.onEntered,m=e.onExit,b=e.onExiting,E=e.onExited,p=e.addEndListener,O=e.children,j=e.childRef,y=Object(a.a)(e,d),h=Object(c.useRef)(null),w=Object(i.a)(h,j),x=function(e){var t;w((t=e)&&"setState"in t?l.a.findDOMNode(t):null!=t?t:null)},g=function(e){return function(t){e&&h.current&&e(h.current,t)}},C=Object(c.useCallback)(g(n),[n]),N=Object(c.useCallback)(g(s),[s]),k=Object(c.useCallback)(g(v),[v]),_=Object(c.useCallback)(g(m),[m]),L=Object(c.useCallback)(g(b),[b]),P=Object(c.useCallback)(g(E),[E]),R=Object(c.useCallback)(g(p),[p]);return Object(f.jsx)(o.e,Object(r.a)(Object(r.a)({ref:t},y),{},{onEnter:C,onEntered:k,onEntering:N,onExit:_,onExited:P,onExiting:L,addEndListener:R,nodeRef:h,children:"function"===typeof O?function(e,t){return O(e,Object(r.a)(Object(r.a)({},t),{},{ref:x}))}:u.a.cloneElement(O,{ref:x})}))}));t.a=v},601:function(e,t,n){"use strict";var r=n(590),a=!1,c=!1;try{var u={get passive(){return a=!0},get once(){return c=a=!0}};r.a&&(window.addEventListener("test",u,u),window.removeEventListener("test",u,!0))}catch(o){}t.a=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!c){var u=r.once,o=r.capture,i=n;!c&&u&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,a?r:o)}e.addEventListener(t,n,r)}},602:function(e,t,n){"use strict";t.a=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}},603:function(e,t,n){"use strict";var r=n(0),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},604:function(e,t,n){"use strict";var r=n(601),a=n(602);t.a=function(e,t,n,c){return Object(r.a)(e,t,n,c),function(){Object(a.a)(e,t,n,c)}}},605:function(e,t,n){"use strict";var r=n(578),a=n(604);function c(e,t,n){void 0===n&&(n=5);var r=!1,c=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),u=Object(a.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(c),u()}}function u(e,t,n,u){null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=c(e,n,u),i=Object(a.a)(e,"transitionend",t);return function(){o(),i()}}n.d(t,"a",(function(){return u}))},611:function(e,t,n){"use strict";var r,a=n(15),c=n(553),u=n(184),o=n(77),i=n.n(o),s=n(0),l=n(26),f=n(597),d=n(596),v=n(600),m=n(552),b=["className","children","transitionClasses"],E=(r={},Object(u.a)(r,l.b,"show"),Object(u.a)(r,l.a,"show"),r),p=s.forwardRef((function(e,t){var n=e.className,r=e.children,u=e.transitionClasses,o=void 0===u?{}:u,l=Object(c.a)(e,b),p=Object(s.useCallback)((function(e,t){Object(d.a)(e),null==l.onEnter||l.onEnter(e,t)}),[l]);return Object(m.jsx)(v.a,Object(a.a)(Object(a.a)({ref:t,addEndListener:f.a},l),{},{onEnter:p,childRef:r.ref,children:function(e,t){return s.cloneElement(r,Object(a.a)(Object(a.a)({},t),{},{className:i()("fade",n,r.props.className,E[e],o[e])}))}}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",t.a=p},621:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},883:function(e,t,n){"use strict";n.r(t);var r=n(179),a=n(180),c=n(181),u=n(182),o=n(0),i=n.n(o),s=n(584),l=n(598),f=n(186),d=n.n(f),v=n(798),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"tab-st"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading bt"},i.a.createElement("h2",null,"Update / Predictions"),i.a.createElement("img",{src:d.a,alt:""})),i.a.createElement(s.a.Container,{defaultActiveKey:"bestSeller"},i.a.createElement(l.a,{variant:"pills",className:"product-tab-list pt-30 pb-20 text-left"},i.a.createElement(l.a.Item,null,i.a.createElement(l.a.Link,{eventKey:"newArrival"},i.a.createElement("h4",null,"Daily"))),i.a.createElement(l.a.Item,null,i.a.createElement(l.a.Link,{eventKey:"bestSeller"},i.a.createElement("h4",null,"Weekly"))),i.a.createElement(l.a.Item,null,i.a.createElement(l.a.Link,{eventKey:"saleItems"},i.a.createElement("h4",null,"Monthly")))),i.a.createElement("hr",null),i.a.createElement(s.a.Content,null,i.a.createElement(s.a.Pane,{eventKey:"newArrival"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Daily"),i.a.createElement(v.default,null))),i.a.createElement(s.a.Pane,{eventKey:"bestSeller"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Weekly"),i.a.createElement(v.default,null))),i.a.createElement(s.a.Pane,{eventKey:"saleItems"},i.a.createElement("div",{className:"row three-column"},i.a.createElement("h3",{className:"s-tt"},"Monthly"),i.a.createElement(v.default,null))))),i.a.createElement("div",{className:"view-more text-center mt-20 toggle-btn6 col-12"})))}}]),n}(i.a.Component);t.default=m}}]);
//# sourceMappingURL=29.eb302134.chunk.js.map