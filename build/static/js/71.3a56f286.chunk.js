(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[71,96],{569:function(e,a,t){"use strict";var l=t(7),n=t(12),r=t(0),c=t.n(r),o=t(3),m=t.n(o),s=t(77),i=t.n(s),u=t(53),d=["className","cssModule","widths","tag"],p=m.a.oneOfType([m.a.number,m.a.string]),E=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:p,offset:p})]),b={tag:u.n,xs:E,sm:E,md:E,lg:E,xl:E,className:m.a.string,cssModule:m.a.object,widths:m.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,m=Object(n.a)(e,d),s=[];r.forEach((function(a,l){var n=e[a];if(delete m[a],n||""===n){var r=!l;if(Object(u.h)(n)){var c,o=r?"-":"-"+a+"-",d=h(r,a,n.size);s.push(Object(u.j)(i()(((c={})[d]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var p=h(r,a,n);s.push(p)}}})),s.length||s.push("col");var p=Object(u.j)(i()(a,s),t);return c.a.createElement(o,Object(l.a)({},m,{className:p}))};v.propTypes=b,v.defaultProps=f,a.a=v},610:function(e,a,t){"use strict";var l=t(7),n=t(12),r=t(186),c=t(16),o=t(0),m=t.n(o),s=t(3),i=t.n(s),u=t(77),d=t.n(u),p=t(53),E=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:i.a.bool,"aria-label":i.a.string,block:i.a.bool,color:i.a.string,disabled:i.a.bool,outline:i.a.bool,tag:p.n,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),onClick:i.a.func,size:i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,close:i.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,c=e.className,o=e.close,s=e.cssModule,i=e.color,u=e.outline,b=e.size,f=e.tag,h=e.innerRef,v=Object(n.a)(e,E);o&&"undefined"===typeof v.children&&(v.children=m.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+i,y=Object(p.j)(d()(c,{close:o},o||"btn",o||g,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),s);v.href&&"button"===f&&(f="a");var N=o?"Close":null;return m.a.createElement(f,Object(l.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:y,ref:h,onClick:this.onClick,"aria-label":t||N}))},a}(m.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},667:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(656);a.default=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"st-search"},n.a.createElement(r.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,a){console.log(e,a)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){console.log("Focused")},autoFocus:!0,formatResult:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),n.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}},901:function(e,a,t){"use strict";t.r(a);var l=t(179),n=t(181),r=t(182),c=t(183),o=t(0),m=t.n(o),s=t(4),i=t(549),u=t(550),d=t(569),p=t(610),E=t(178),b=(t(667),function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement(E.a,{headerTop:"visible"},m.a.createElement("section",{className:"pt-0 pb-0"},m.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},m.a.createElement(i.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"12"},m.a.createElement("div",{className:"leftcont text-left"},m.a.createElement("h1",null,"Astromall Shop/ Product Detail/ Consultant List/  Address"),m.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),m.a.createElement("section",{className:""},m.a.createElement(i.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"4"},m.a.createElement("div",{className:"wal-amt"},m.a.createElement("h3",null,"Continue with your saved address"),m.a.createElement("hr",null),m.a.createElement("div",{className:"user-pro py-0"},m.a.createElement("ul",null,m.a.createElement("li",null,"Name :    ",m.a.createElement("span",null,"lorem")),m.a.createElement("li",null,"Mobile :    ",m.a.createElement("span",null,"4454544545")),m.a.createElement("li",null,"Email :    ",m.a.createElement("span",null,"Test@gmail.com")),m.a.createElement("li",null,"State :    ",m.a.createElement("span",null,"MP")),m.a.createElement("li",null,"City :    ",m.a.createElement("span",null,"Indore")),m.a.createElement("li",null,"Address :    ",m.a.createElement("span",null,"Vijay Nagar")),m.a.createElement("li",null,"Locality :    ",m.a.createElement("span",null,"Indore")),m.a.createElement("li",null,"Pin Code :    ",m.a.createElement("span",null,"452001")))),m.a.createElement("div",{className:"py-3 text-center"},m.a.createElement(s.b,{to:"/cartlist"},m.a.createElement(p.a,{className:"btn btn-warning"},"Deliver To This Address "))))),m.a.createElement(d.a,{lg:"8"},m.a.createElement("div",{className:"wal-amt"},m.a.createElement("h3",null,"Add New Address "),m.a.createElement("hr",null),m.a.createElement("form",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Name*"),m.a.createElement("input",{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Email address*"),m.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Mobile Number*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Alternative Number*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Flat No:*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Locality*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"City*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"State / Province*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Country*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"PinCode*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Landmark*"),m.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"12",className:"mt-3"},m.a.createElement(p.a,{className:"btn btn-warning"},"Save Address"))))))))))}}]),t}(m.a.Component));a.default=b}}]);
//# sourceMappingURL=71.3a56f286.chunk.js.map