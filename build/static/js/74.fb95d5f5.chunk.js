(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[74],{563:function(e,a,t){"use strict";var l=t(7),n=t(12),r=t(0),c=t.n(r),s=t(3),o=t.n(s),i=t(77),u=t.n(i),f=t(54),g=["className","cssModule","widths","tag"],m=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:m,offset:m})]),p={tag:f.n,xs:d,sm:d,md:d,lg:d,xl:d,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},A=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,o=Object(n.a)(e,g),i=[];r.forEach((function(a,l){var n=e[a];if(delete o[a],n||""===n){var r=!l;if(Object(f.h)(n)){var c,s=r?"-":"-"+a+"-",g=A(r,a,n.size);i.push(Object(f.j)(u()(((c={})[g]=n.size||""===n.size,c["order"+s+n.order]=n.order||0===n.order,c["offset"+s+n.offset]=n.offset||0===n.offset,c)),t))}else{var m=A(r,a,n);i.push(m)}}})),i.length||i.push("col");var m=Object(f.j)(u()(a,i),t);return c.a.createElement(s,Object(l.a)({},o,{className:m}))};E.propTypes=p,E.defaultProps=b,a.a=E},595:function(e,a,t){"use strict";var l=t(7),n=t(12),r=t(185),c=t(16),s=t(0),o=t.n(s),i=t(3),u=t.n(i),f=t(77),g=t.n(f),m=t(54),d=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,c=e.className,s=e.close,i=e.cssModule,u=e.color,f=e.outline,p=e.size,b=e.tag,A=e.innerRef,E=Object(n.a)(e,d);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(f?"-outline":"")+"-"+u,y=Object(m.j)(g()(c,{close:s},s||"btn",s||h,!!p&&"btn-"+p,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===b&&(b="a");var v=s?"Close":null;return o.a.createElement(b,Object(l.a)({type:"button"===b&&E.onClick?"button":void 0},E,{className:y,ref:A,onClick:this.onClick,"aria-label":t||v}))},a}(o.a.Component);b.propTypes=p,b.defaultProps={color:"secondary",tag:"button"},a.a=b},788:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAMAAADImI+JAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAAJJcMJJcMIpYLI5YNJJcNI5cNIJ8AI5cLI5cMIJcII5YMI5YNI5cNJJcMI5YNIJULJJcMI5YNJJYMI5cNI5cMJJcMJJYMJJgNdMofWAAAABl0Uk5TAEC/cKD/3xBgkCCv75+AUDDQ4MDwsH8/T6YatRMAAADFSURBVHiczZHNEoMgDIQhuuWnqCBa+/5P2gRwtIdOvbV7yGTIB8kGpX4tTUTdFbAHcLvAGYj0d9AC/GYvqSPyd4TBcD7e+DpNSkWiCibAzwhSzECQ5/nWCCxcGdkCUDgPrMoBtoIpcgGSJj6I+gALE4UuYCyxhOGxSRuj6/wz8Nw27ugbUmNcZIZgjyViV/cGKjON69K6tiWmzCqrPIG6jWXajCZIXr3HM5jB/8XOdzO2bVB1gDuDroyT4+H6o7y+8Fv/oxdhTAfxcKTptgAAAABJRU5ErkJggg=="},878:function(e,a,t){"use strict";t.r(a);var l=t(179),n=t(180),r=t(181),c=t(182),s=t(0),o=t.n(s),i=t(549),u=t(550),f=t(563),g=t(595),m=t(178),d=(t(187),t(619),t(788)),p=t.n(d),b=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{headerTop:"visible"},o.a.createElement("section",{className:"pt-0 pb-0"},o.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(f.a,{md:"12"},o.a.createElement("div",{className:"leftcont text-left"},o.a.createElement("h1",null,"Ask Question to Astrologer"))))))),o.a.createElement("section",{className:""},o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(f.a,{lg:"12"},o.a.createElement("div",{className:"support-box"},o.a.createElement(u.a,null,o.a.createElement(f.a,{lg:"12"},o.a.createElement("div",{className:"supp-2 ask-qes-2"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h3",null,"Astrologer :  ",o.a.createElement("span",null,"Tilak"))),o.a.createElement("li",null,"Date: ",o.a.createElement("span",null,"01/11/2022")),o.a.createElement("li",null,"Time: ",o.a.createElement("span",null,"4:00pm")),o.a.createElement("li",null,"Status: ",o.a.createElement("span",null)),o.a.createElement("li",null,"Question:",o.a.createElement("ul",{className:"ask-ques"},o.a.createElement("li",null,o.a.createElement("i",{class:"fa fa-quora","aria-hidden":"true",style:{marginRight:6}},"1."),"In what area of work can I best show my abilities?",o.a.createElement("p",null,o.a.createElement("img",{src:p.a,alt:""}),"If you\u2019re not sure which skills you want to share, consider your previous experiences. Where did you excel? Where would your peers say you\u2019re especially practiced? Here are a few ways to determine good skills to put on a resume.")),o.a.createElement("li",null,o.a.createElement("i",{class:"fa fa-quora","aria-hidden":"true",style:{marginRight:6}},"2."),"In what area of work can I best show my abilities?",o.a.createElement("p",null,o.a.createElement("img",{src:p.a,alt:""}),"If you\u2019re not sure which skills you want to share, consider your previous experiences. Where did you excel? Where would your peers say you\u2019re especially practiced? Here are a few ways to determine good skills to put on a resume.")),o.a.createElement("li",null,"3. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?"),o.a.createElement("li",null,"4. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?"),o.a.createElement("li",null,"5. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?")))),o.a.createElement("div",{className:"supp-4"},o.a.createElement("h3",null,"Write Your Question"),o.a.createElement("form",null,o.a.createElement(f.a,{md:"12"},o.a.createElement("div",{class:"form-group mtb-10"},o.a.createElement("label",null,"Question*"),o.a.createElement("textarea",{className:"form-control stp",placeholder:"Ask ypur question here...",maxLength:200}),o.a.createElement("small",{className:"sm-txt"},"Note: Maximum 150 Words Accepted. "))),o.a.createElement(g.a,{className:"btn btn-primary"},"Submit"))))))))))))}}]),t}(o.a.Component);a.default=b}}]);
//# sourceMappingURL=74.fb95d5f5.chunk.js.map