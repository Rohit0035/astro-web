(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[37,96],{552:function(e,t,a){"use strict";e.exports=a(574)},564:function(e,t,a){"use strict";var n=a(0);t.a=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t}},571:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a(564);function l(e){var t=Object(r.a)(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},572:function(e,t,a){"use strict";var n=a(15),r=a(553),l=a(77),c=a.n(l),u=/-(.)/g;var m=a(0),s=a(556),i=a(552);a.d(t,"a",(function(){return f}));var o=["className","bsPrefix","as"],E=function(e){return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,l=void 0===a?E(e):a,u=t.Component,f=t.defaultProps,b=m.forwardRef((function(t,a){var l=t.className,m=t.bsPrefix,E=t.as,f=void 0===E?u||"div":E,b=Object(r.a)(t,o),p=Object(s.a)(m,e);return Object(i.jsx)(f,Object(n.a)({ref:a,className:c()(l,p)},b))}));return b.defaultProps=f,b.displayName=l,b}},574:function(e,t,a){"use strict";a(133);var n=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),t.Fragment=l("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,a){var n,l={},s=null,i=null;for(n in void 0!==a&&(s=""+a),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,n)&&!m.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:s,ref:i,props:l,_owner:c.current}}t.jsx=s,t.jsxs=s},585:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));function n(e){return"".concat("data-rr-ui-").concat(e)}function r(e){return"".concat("rrUi").concat(e)}},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},587:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},594:function(e,t,a){"use strict";var n,r=a(15),l=a(553),c=a(184),u=a(77),m=a.n(u),s=a(0),i=a(25),o=a(584),E=a(583),f=a(591),b=a(552),p=["className","children","transitionClasses"],d=(n={},Object(c.a)(n,i.b,"show"),Object(c.a)(n,i.a,"show"),n),v=s.forwardRef((function(e,t){var a=e.className,n=e.children,c=e.transitionClasses,u=void 0===c?{}:c,i=Object(l.a)(e,p),v=Object(s.useCallback)((function(e,t){Object(E.a)(e),null==i.onEnter||i.onEnter(e,t)}),[i]);return Object(b.jsx)(f.a,Object(r.a)(Object(r.a)({ref:t,addEndListener:o.a},i),{},{onEnter:v,childRef:n.ref,children:function(e,t){return s.cloneElement(n,Object(r.a)(Object(r.a)({},t),{},{className:m()("fade",a,n.props.className,d[e],u[e])}))}}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},606:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},698:function(e,t,a){"use strict";a.r(t);var n=a(179),r=a(180),l=a(181),c=a(182),u=a(0),m=a.n(u),s=a(3),i=a(549),o=a(550),E=a(569),f=(a(185),a(621)),b=a.n(f),p=a(673),d=a.n(p),v=a(674),h=a.n(v),O=a(675),y=a.n(O),N=a(676),g=a.n(N),j=a(677),x=a.n(j),A=a(678),w=a.n(A),_=a(679),k=a.n(_),C=a(680),M=a.n(C),P=a(681),R=a.n(P),S=a(682),I=a.n(S),L=a(631),K=a.n(L),F=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},m.a.createElement("div",{className:"category-home"},m.a.createElement("section",null,m.a.createElement(i.a,null,m.a.createElement(o.a,null,m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:b.a,alt:""}),m.a.createElement("h5",null,"Aries"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:d.a,alt:""}),m.a.createElement("h5",null,"Taurus"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:h.a,alt:""}),m.a.createElement("h5",null,"Gemini"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:y.a,alt:""}),m.a.createElement("h5",null,"Cancer"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:g.a,alt:""}),m.a.createElement("h5",null,"Leo"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:x.a,alt:""}),m.a.createElement("h5",null,"virgo"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:w.a,alt:""}),m.a.createElement("h5",null,"libra"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:k.a,alt:""}),m.a.createElement("h5",null,"Scorpio"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:M.a,alt:""}),m.a.createElement("h5",null,"Sagittarius"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:R.a,alt:""}),m.a.createElement("h5",null,"Capricorn"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:I.a,alt:""}),m.a.createElement("h5",null,"Aquarius"),m.a.createElement("p",null,"Mar 21 - Apr 19")))),m.a.createElement(E.a,{lg:"2"},m.a.createElement("div",{className:"bx-1"},m.a.createElement(s.b,null,m.a.createElement("img",{src:K.a,alt:""}),m.a.createElement("h5",null,"Pisces"),m.a.createElement("p",null,"Mar 21 - Apr 19")))))))))}}]),a}(m.a.Component);t.default=F},721:function(e,t,a){"use strict";a.r(t);var n=a(179),r=a(180),l=a(181),c=a(182),u=a(0),m=a.n(u),s=a(579),i=a(597),o=a(185),E=a.n(o),f=a(698),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"tab-st"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"heading bt"},m.a.createElement("h2",null,"Update / Predictions"),m.a.createElement("img",{src:E.a,alt:""})),m.a.createElement(s.a.Container,{defaultActiveKey:"bestSeller"},m.a.createElement(i.a,{variant:"pills",className:"product-tab-list pt-30 pb-20 text-left"},m.a.createElement(i.a.Item,null,m.a.createElement(i.a.Link,{eventKey:"newArrival"},m.a.createElement("h4",null,"Daily"))),m.a.createElement(i.a.Item,null,m.a.createElement(i.a.Link,{eventKey:"bestSeller"},m.a.createElement("h4",null,"Weekly"))),m.a.createElement(i.a.Item,null,m.a.createElement(i.a.Link,{eventKey:"saleItems"},m.a.createElement("h4",null,"Monthly")))),m.a.createElement("hr",null),m.a.createElement(s.a.Content,null,m.a.createElement(s.a.Pane,{eventKey:"newArrival"},m.a.createElement("div",{className:"row three-column"},m.a.createElement("h3",{className:"s-tt"},"Daily"),m.a.createElement(f.default,null))),m.a.createElement(s.a.Pane,{eventKey:"bestSeller"},m.a.createElement("div",{className:"row three-column"},m.a.createElement("h3",{className:"s-tt"},"Weekly"),m.a.createElement(f.default,null))),m.a.createElement(s.a.Pane,{eventKey:"saleItems"},m.a.createElement("div",{className:"row three-column"},m.a.createElement("h3",{className:"s-tt"},"Monthly"),m.a.createElement(f.default,null))))),m.a.createElement("div",{className:"view-more text-center mt-20 toggle-btn6 col-12"})))}}]),a}(m.a.Component);t.default=b}}]);
//# sourceMappingURL=37.ac9fc6a0.chunk.js.map