(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[68],{569:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),s=t.n(r),o=t(4),c=t.n(o),u=t(77),m=t.n(u),i=t(53),d=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:i.n,xs:h,sm:h,md:h,lg:h,xl:h,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,c=Object(l.a)(e,d),u=[];r.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var r=!n;if(Object(i.h)(l)){var s,o=r?"-":"-"+a+"-",d=g(r,a,l.size);u.push(Object(i.j)(m()(((s={})[d]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=g(r,a,l);u.push(f)}}})),u.length||u.push("col");var f=Object(i.j)(m()(a,u),t);return s.a.createElement(o,Object(n.a)({},c,{className:f}))};E.propTypes=p,E.defaultProps=b,a.a=E},581:function(e,a,t){},872:function(e,a,t){"use strict";t.r(a);var n=t(184),l=t(179),r=t(180),s=t(181),o=t(182),c=t(0),u=t.n(c),m=t(549),i=t(550),d=t(569),f=t(623),h=t(178),p=(t(581),t(689)),b=t.n(p),g=t(66),E=t.n(g),v=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).handlechange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.changeHandler=function(a){a.preventDefault(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),E.a.post("http://13.235.180.192:8000/user/signup",e.state).then((function(a){console.log(a),localStorage.setItem("auth-token",a.data.token),e.setState({token:a.data.token}),b()("Success!"," OTP Send Your Register Mobile Number Successful Done!","success"),e.props.history.push("/otpverify")})).catch((function(e){console.log(e.response),b()("Error!","Something went wrong","error")}))},e.state={fullname:"",email:"",mobile:"",otp:""},e}return Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(h.a,{headerTop:"visible"},u.a.createElement("section",null,u.a.createElement(m.a,null,u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"2"}),u.a.createElement(d.a,{lg:"8"},u.a.createElement("div",{className:"wal-amt"},u.a.createElement("h1",null,"Register Astrologer"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(d.a,{md:"6"},u.a.createElement("div",{class:"form-group mtb-10"},u.a.createElement("label",null,"Name*"),u.a.createElement("input",{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}))),u.a.createElement(d.a,{md:"6"},u.a.createElement("div",{class:"form-group mtb-10"},u.a.createElement("label",null,"Email address*"),u.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),u.a.createElement(d.a,{md:"6"},u.a.createElement("div",{class:"form-group mtb-10"},u.a.createElement("label",null,"Mobile Number*"),u.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler}))),u.a.createElement(d.a,{md:"12",className:"mt-3"},u.a.createElement(f.a,{className:"btn btn-success"},"Get OTP")))))),u.a.createElement(d.a,{lg:"2"})))))}}]),t}(u.a.Component);a.default=v}}]);
//# sourceMappingURL=68.59724236.chunk.js.map