(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[46],{552:function(e,a,t){"use strict";e.exports=t(575)},553:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,c=function(e,a){if(null==e)return{};var t,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}t.d(a,"a",(function(){return r}))},557:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return n}));t(15);var r=t(0),c=(t(552),r.createContext({prefixes:{}}));c.Consumer,c.Provider;function s(e,a){var t=Object(r.useContext)(c).prefixes;return e||t[a]||a}function n(){return"rtl"===Object(r.useContext)(c).dir}},562:function(e,a,t){"use strict";var r=t(7),c=t(12),s=t(0),n=t.n(s),o=t(3),i=t.n(o),l=t(77),d=t.n(l),f=t(54),b=["className","cssModule","widths","tag"],u=i.a.oneOfType([i.a.number,i.a.string]),j=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),m={tag:f.n,xs:j,sm:j,md:j,lg:j,xl:j,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,s=e.widths,o=e.tag,i=Object(c.a)(e,b),l=[];s.forEach((function(a,r){var c=e[a];if(delete i[a],c||""===c){var s=!r;if(Object(f.h)(c)){var n,o=s?"-":"-"+a+"-",b=O(s,a,c.size);l.push(Object(f.j)(d()(((n={})[b]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),t))}else{var u=O(s,a,c);l.push(u)}}})),l.length||l.push("col");var u=Object(f.j)(d()(a,l),t);return n.a.createElement(o,Object(r.a)({},i,{className:u}))};p.propTypes=m,p.defaultProps=v,a.a=p},574:function(e,a,t){"use strict";var r=t(15),c=t(553),s=t(77),n=t.n(s),o=/-(.)/g;var i=t(0),l=t(557),d=t(552);t.d(a,"a",(function(){return u}));var f=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,s=void 0===t?b(e):t,o=a.Component,u=a.defaultProps,j=i.forwardRef((function(a,t){var s=a.className,i=a.bsPrefix,b=a.as,u=void 0===b?o||"div":b,j=Object(c.a)(a,f),m=Object(l.a)(i,e);return Object(d.jsx)(u,Object(r.a)({ref:t,className:n()(s,m)},j))}));return j.defaultProps=u,j.displayName=s,j}},575:function(e,a,t){"use strict";t(133);var r=t(0),c=60103;if(a.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;c=s("react.element"),a.Fragment=s("react.fragment")}var n=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,r)&&!i.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:c,type:e,key:l,ref:d,props:s,_owner:n.current}}a.jsx=l,a.jsxs=l},672:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return n}));var r=t(0);function c(e,a){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?a(e,t++):e}))}function s(e,a){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&a(e,t++)}))}function n(e,a){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===a}))}},685:function(e,a,t){"use strict";var r=function(){};e.exports=r},713:function(e,a,t){"use strict";var r=t(15),c=t(553),s=t(77),n=t.n(s),o=t(3),i=t.n(o),l=t(0),d=t(552),f=["as","className","type","tooltip"],b={type:i.a.string,tooltip:i.a.bool,as:i.a.elementType},u=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,o=e.className,i=e.type,l=void 0===i?"valid":i,b=e.tooltip,u=void 0!==b&&b,j=Object(c.a)(e,f);return Object(d.jsx)(s,Object(r.a)(Object(r.a)({},j),{},{ref:a,className:n()(o,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=b;var j=u,m=l.createContext({}),v=t(557),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.className,i=e.type,f=void 0===i?"checkbox":i,b=e.isValid,u=void 0!==b&&b,j=e.isInvalid,p=void 0!==j&&j,x=e.as,y=void 0===x?"input":x,h=Object(c.a)(e,O),N=Object(l.useContext)(m).controlId;return s=Object(v.a)(s,"form-check-input"),Object(d.jsx)(y,Object(r.a)(Object(r.a)({},h),{},{ref:a,type:f,id:t||N,className:n()(o,s,u&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,y=["bsPrefix","className","htmlFor"],h=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.htmlFor,i=Object(c.a)(e,y),f=Object(l.useContext)(m).controlId;return t=Object(v.a)(t,"form-check-label"),Object(d.jsx)("label",Object(r.a)(Object(r.a)({},i),{},{ref:a,htmlFor:o||f,className:n()(s,t)}))}));h.displayName="FormCheckLabel";var N=h,P=t(672),g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsSwitchPrefix,i=e.inline,f=void 0!==i&&i,b=e.disabled,u=void 0!==b&&b,O=e.isValid,p=void 0!==O&&O,y=e.isInvalid,h=void 0!==y&&y,w=e.feedbackTooltip,I=void 0!==w&&w,C=e.feedback,F=e.feedbackType,k=e.className,R=e.style,S=e.title,T=void 0===S?"":S,_=e.type,z=void 0===_?"checkbox":_,E=e.label,V=e.children,L=e.as,M=void 0===L?"input":L,U=Object(c.a)(e,g);s=Object(v.a)(s,"form-check"),o=Object(v.a)(o,"form-switch");var H=Object(l.useContext)(m).controlId,A=Object(l.useMemo)((function(){return{controlId:t||H}}),[H,t]),D=!V&&null!=E&&!1!==E||Object(P.b)(V,N),G=Object(d.jsx)(x,Object(r.a)(Object(r.a)({},U),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:p,isInvalid:h,disabled:u,as:M}));return Object(d.jsx)(m.Provider,{value:A,children:Object(d.jsx)("div",{style:R,className:n()(k,D&&s,f&&"".concat(s,"-inline"),"switch"===z&&o),children:V||Object(d.jsxs)(d.Fragment,{children:[G,D&&Object(d.jsx)(N,{title:T,children:E}),C&&Object(d.jsx)(j,{type:F,tooltip:I,children:C})]})})})}));w.displayName="FormCheck";var I=Object.assign(w,{Input:x,Label:N}),C=t(184),F=(t(685),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=l.forwardRef((function(e,a){var t,s,o=e.bsPrefix,i=e.type,f=e.size,b=e.htmlSize,u=e.id,j=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,h=e.plaintext,N=e.readOnly,P=e.as,g=void 0===P?"input":P,w=Object(c.a)(e,F),I=Object(l.useContext)(m).controlId;(o=Object(v.a)(o,"form-control"),h)?t=Object(C.a)({},"".concat(o,"-plaintext"),!0):(s={},Object(C.a)(s,o,!0),Object(C.a)(s,"".concat(o,"-").concat(f),f),t=s);return Object(d.jsx)(g,Object(r.a)(Object(r.a)({},w),{},{type:i,size:b,ref:a,readOnly:N,id:u||I,className:n()(j,t,p&&"is-valid",y&&"is-invalid","color"===i&&"".concat(o,"-color"))}))}));k.displayName="FormControl";var R=Object.assign(k,{Feedback:j}),S=t(574),T=Object(S.a)("form-floating"),_=["controlId","as"],z=l.forwardRef((function(e,a){var t=e.controlId,s=e.as,n=void 0===s?"div":s,o=Object(c.a)(e,_),i=Object(l.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(m.Provider,{value:i,children:Object(d.jsx)(n,Object(r.a)(Object(r.a)({},o),{},{ref:a}))})}));z.displayName="FormGroup";var E=z,V=t(24),L=["as","bsPrefix","className"],M=["className"],U=["xxl","xl","lg","md","sm","xs"];var H=l.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,s=e.className,o=Object(c.a)(e,L);t=Object(v.a)(t,"col");var i=[],l=[];return U.forEach((function(e){var a,r,c,s=o[e];delete o[e],"object"===typeof s&&null!=s?(a=s.span,r=s.offset,c=s.order):a=s;var n="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(t).concat(n):"".concat(t).concat(n,"-").concat(a)),null!=c&&l.push("order".concat(n,"-").concat(c)),null!=r&&l.push("offset".concat(n,"-").concat(r))})),[Object(r.a)(Object(r.a)({},o),{},{className:n.a.apply(void 0,[s].concat(i,l))}),{as:a,bsPrefix:t,spans:i}]}(e),s=Object(V.a)(t,2),o=s[0],i=o.className,l=Object(c.a)(o,M),f=s[1],b=f.as,u=void 0===b?"div":b,j=f.bsPrefix,m=f.spans;return Object(d.jsx)(u,Object(r.a)(Object(r.a)({},l),{},{ref:a,className:n()(i,!m.length&&j)}))}));H.displayName="Col";var A=H,D=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],G=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,o=e.bsPrefix,i=e.column,f=e.visuallyHidden,b=e.className,u=e.htmlFor,j=Object(c.a)(e,D),O=Object(l.useContext)(m).controlId;o=Object(v.a)(o,"form-label");var p="col-form-label";"string"===typeof i&&(p="".concat(p," ").concat(p,"-").concat(i));var x=n()(b,o,f&&"visually-hidden",i&&p);return u=u||O,i?Object(d.jsx)(A,Object(r.a)({ref:a,as:"label",className:x,htmlFor:u},j)):Object(d.jsx)(s,Object(r.a)({ref:a,className:x,htmlFor:u},j))}));G.displayName="FormLabel",G.defaultProps={column:!1,visuallyHidden:!1};var J=G,$=["bsPrefix","className","id"],B=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.id,i=Object(c.a)(e,$),f=Object(l.useContext)(m).controlId;return t=Object(v.a)(t,"form-range"),Object(d.jsx)("input",Object(r.a)(Object(r.a)({},i),{},{type:"range",ref:a,className:n()(s,t),id:o||f}))}));B.displayName="FormRange";var W=B,Y=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],q=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,o=e.htmlSize,i=e.className,f=e.isValid,b=void 0!==f&&f,u=e.isInvalid,j=void 0!==u&&u,O=e.id,p=Object(c.a)(e,Y),x=Object(l.useContext)(m).controlId;return t=Object(v.a)(t,"form-select"),Object(d.jsx)("select",Object(r.a)(Object(r.a)({},p),{},{size:o,ref:a,className:n()(i,t,s&&"".concat(t,"-").concat(s),b&&"is-valid",j&&"is-invalid"),id:O||x}))}));q.displayName="FormSelect";var K=q,Q=["bsPrefix","className","as","muted"],X=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,i=void 0===o?"small":o,l=e.muted,f=Object(c.a)(e,Q);return t=Object(v.a)(t,"form-text"),Object(d.jsx)(i,Object(r.a)(Object(r.a)({},f),{},{ref:a,className:n()(s,t,l&&"text-muted")}))}));X.displayName="FormText";var Z=X,ee=l.forwardRef((function(e,a){return Object(d.jsx)(I,Object(r.a)(Object(r.a)({},e),{},{ref:a,type:"switch"}))}));ee.displayName="Switch";var ae=Object.assign(ee,{Input:I.Input,Label:I.Label}),te=["bsPrefix","className","children","controlId","label"],re=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.children,i=e.controlId,l=e.label,f=Object(c.a)(e,te);return t=Object(v.a)(t,"form-floating"),Object(d.jsxs)(E,Object(r.a)(Object(r.a)({ref:a,className:n()(s,t),controlId:i},f),{},{children:[o,Object(d.jsx)("label",{htmlFor:i,children:l})]}))}));re.displayName="FloatingLabel";var ce=re,se=["className","validated","as"],ne={_ref:i.a.any,validated:i.a.bool,as:i.a.elementType},oe=l.forwardRef((function(e,a){var t=e.className,s=e.validated,o=e.as,i=void 0===o?"form":o,l=Object(c.a)(e,se);return Object(d.jsx)(i,Object(r.a)(Object(r.a)({},l),{},{ref:a,className:n()(t,s&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=ne;a.a=Object.assign(oe,{Group:E,Control:R,Floating:T,Check:I,Switch:ae,Label:J,Text:Z,Range:W,Select:K,FloatingLabel:ce})}}]);
//# sourceMappingURL=46.52359eb6.chunk.js.map