(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[62],{569:function(e,a,t){"use strict";var n=t(7),l=t(12),o=t(0),r=t.n(o),s=t(4),c=t.n(s),i=t(78),u=t.n(i),b=t(54),d=["className","cssModule","widths","tag"],m=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),p={tag:b.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.widths,s=e.tag,c=Object(l.a)(e,d),i=[];o.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var o=!n;if(Object(b.h)(l)){var r,s=o?"-":"-"+a+"-",d=g(o,a,l.size);i.push(Object(b.j)(u()(((r={})[d]=l.size||""===l.size,r["order"+s+l.order]=l.order||0===l.order,r["offset"+s+l.offset]=l.offset||0===l.offset,r)),t))}else{var m=g(o,a,l);i.push(m)}}})),i.length||i.push("col");var m=Object(b.j)(u()(a,i),t);return r.a.createElement(s,Object(n.a)({},c,{className:m}))};v.propTypes=p,v.defaultProps=h,a.a=v},580:function(e,a,t){},610:function(e,a,t){"use strict";var n=t(7),l=t(12),o=t(186),r=t(16),s=t(0),c=t.n(s),i=t(4),u=t.n(i),b=t(78),d=t.n(b),m=t(54),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,s=e.close,i=e.cssModule,u=e.color,b=e.outline,p=e.size,h=e.tag,g=e.innerRef,v=Object(l.a)(e,f);s&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(b?"-outline":"")+"-"+u,E=Object(m.j)(d()(r,{close:s},s||"btn",s||j,!!p&&"btn-"+p,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var O=s?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:E,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(c.a.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"},a.a=h},900:function(e,a,t){"use strict";t.r(a);var n=t(179),l=t(181),o=t(188),r=t(182),s=t(183),c=t(0),i=t.n(c),u=t(549),b=t(550),d=t(569),m=t(610),f=t(178),p=(t(580),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={modal:!1},l.toggle=l.toggle.bind(Object(o.a)(l)),l}return Object(l.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return i.a.createElement(f.a,{headerTop:"visible"},i.a.createElement("section",null,i.a.createElement(u.a,null,i.a.createElement(b.a,null,i.a.createElement(d.a,{lg:"2"}),i.a.createElement(d.a,{lg:"8"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h3",null,"Add Amount to Wallet"),i.a.createElement("form",null,i.a.createElement(b.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("label",null,"Amount"),i.a.createElement("input",{type:"text",placeholder:"Enter Amount",name:"firstname",value:this.state.firstname,onChange:this.changeHandler})),i.a.createElement(d.a,{md:"12",className:"mt-3"},i.a.createElement(m.a,{className:"btn btn-success"},"Submit")))))),i.a.createElement(d.a,{lg:"2"})))))}}]),t}(i.a.Component));a.default=p}}]);
//# sourceMappingURL=62.c2f26db0.chunk.js.map