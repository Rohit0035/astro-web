(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[100],{869:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(716),l=a(184),r=a(179),o=a(180),s=a(181),i=a(182),c=a(0),m=a.n(c),u=a(559),d=a.n(u),g=a(579),p=a(597),h=a(66),f=a.n(h),v=a(178),E=a(689),b=a(734),y=a(789),N=a(623),S=a(667),H=a.n(S),C=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.otpHandler=function(e){e.preventDefault(),console.log(o.state),f.a.post("http://13.235.180.192:8000/user/userVryfyotp",{mobile:parseInt(o.state.mobile),otp:parseInt(o.state.otp)}).then((function(e){console.log("@@@####",e.data);var t,a,n,l;e.data.user;!0===e.data.status&&(o.setState({otpMsg:e.data.msg}),localStorage.setItem("userData",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)),localStorage.setItem("token",JSON.stringify(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.token)),localStorage.setItem("user_id",JSON.stringify(null===e||void 0===e||null===(n=e.data)||void 0===n||null===(l=n.data)||void 0===l?void 0:l._id)),"otp verified"===e.data.msg&&(H()("otp verified"),o.props.history.push("/")))})).catch((function(e){console.log(e)}))},o.handlechange=function(e){e.preventDefault(),o.setState(Object(l.a)({},e.target.name,e.target.value))},o.loginHandler=function(e){e.preventDefault();var t={mobile:parseInt(o.state.mobile)};f.a.post("http://13.235.180.192:8000/user/userlogin",t).then((function(e){console.log("@@@####",e.data),o.setState({otpMsg:e.data.msg}),"otp Send Successfully"===e.data.msg&&H()("otp Send Successfully")})).catch((function(e){console.log(e),console.log(e.response),H()("Error!","User doesn't Exist","error")}))},o.changeHandler=function(e){e.preventDefault(),o.setState(Object(l.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.state.data);var t=new FormData;t.append("fullname",o.state.fullname),t.append("email",o.state.email),t.append("mobile",o.state.mobile),t.append("dob",o.state.dob),null!==o.state.selectedFile&&t.append("userimg",o.state.selectedFile,o.state.selectedName);var a,l=Object(n.a)(t.values());try{for(l.s();!(a=l.n()).done;){var r=a.value;console.log(r)}}catch(m){l.e(m)}finally{l.f()}var s,i=Object(n.a)(t.keys());try{for(i.s();!(s=i.n()).done;){var c=s.value;console.log(c)}}catch(m){i.e(m)}finally{i.f()}f.a.post("http://13.235.180.192:8000/user/usersignup",t).then((function(e){console.log(e.data.msg),localStorage.setItem("auth-token",e.data.token),o.setState({otpMsg:e.data.otp}),H()("Success!"," Register Successful Done!","success"),o.props.history.push("/")})).catch((function(e){console.log(e.response),H()("Error!","Something went wrong","error")}))},o.state={fullname:"",email:"",mobile:"",dob:"",userimg:"",selectedName:"",selectedFile:null,otp:"",otpMsg:""},o}return Object(o.a)(a,[{key:"render",value:function(){return m.a.createElement(c.Fragment,null,m.a.createElement(d.a,null,m.a.createElement("title",null,"AstroVipra"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(v.a,{headerTop:"visible"},m.a.createElement("div",{className:"login-register-area pt-100 pb-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},m.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},m.a.createElement("div",{className:"login-register-wrapper"},m.a.createElement(g.a.Container,{defaultActiveKey:"login"},m.a.createElement(p.a,{variant:"pills",className:"login-register-tab-list"},m.a.createElement(p.a.Item,null,m.a.createElement(p.a.Link,{eventKey:"login"},m.a.createElement("h4",null,"Login"))),m.a.createElement(p.a.Item,null,m.a.createElement(p.a.Link,{eventKey:"register"},m.a.createElement("h4",null,"Register")))),m.a.createElement(g.a.Content,null,m.a.createElement(g.a.Pane,{eventKey:"login"},m.a.createElement("div",{className:"login-form-container"},"otp Send Successfully"===this.state.otpMsg?m.a.createElement("div",{className:"login-register-form"},m.a.createElement(E.a,{onSubmit:this.otpHandler},m.a.createElement(b.a,{type:"number",name:"otp",required:!0,placeholder:"Enter otp",value:this.state.otp,onChange:this.changeHandler}),m.a.createElement("div",{className:"button-box"},m.a.createElement("div",{className:"login-toggle-btn"}),m.a.createElement("button",{type:"submit"},m.a.createElement("span",null,"Otp Verify"))))):m.a.createElement("div",{className:"login-register-form"},m.a.createElement(E.a,{onSubmit:this.loginHandler},m.a.createElement(b.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),m.a.createElement("div",{className:"button-box"},m.a.createElement("div",{className:"login-toggle-btn"}),m.a.createElement("button",{type:"submit"},m.a.createElement("span",null,"Login"))))))),m.a.createElement(g.a.Pane,{eventKey:"register"},m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement(E.a,{className:"text-center",onSubmit:this.submitHandler,method:"post"},m.a.createElement(b.a,{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}),m.a.createElement(b.a,{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}),m.a.createElement(b.a,{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),m.a.createElement(b.a,{type:"date",name:"dob",required:!0,placeholder:"Date of birth",value:this.state.dob,onChange:this.changeHandler}),m.a.createElement(y.a,null,"User Image"),m.a.createElement(b.a,{className:"form-control",type:"file",name:"userimg",onChange:this.onChangeHandler}),m.a.createElement("div",{className:"button-box"},m.a.createElement(N.a,{type:"submit"},m.a.createElement("span",null,"Register")))))))))),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement("div",{className:"button-box"},m.a.createElement("div",{className:"login-toggle-btn"})))))))))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=100.ec3d7f49.chunk.js.map