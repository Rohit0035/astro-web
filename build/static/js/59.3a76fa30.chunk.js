(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[59],{623:function(e,t,a){"use strict";var n=a(7),l=a(11),r=a(188),s=a(16),i=a(0),o=a.n(i),c=a(3),m=a.n(c),u=a(55),p=a.n(u),d=a(30),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:d.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,s=e.className,i=e.close,c=e.cssModule,m=e.color,u=e.outline,b=e.size,E=e.tag,g=e.innerRef,v=Object(l.a)(e,h);i&&"undefined"===typeof v.children&&(v.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(u?"-outline":"")+"-"+m,_=Object(d.j)(p()(s,{close:i},i||"btn",i||f,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===E&&(E="a");var y=i?"Close":null;return o.a.createElement(E,Object(n.a)({type:"button"===E&&v.onClick?"button":void 0},v,{className:_,ref:g,onClick:this.onClick,"aria-label":a||y}))},t}(o.a.Component);E.propTypes=b,E.defaultProps={color:"secondary",tag:"button"},t.a=E},717:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},799:function(e,t,a){},800:function(e,t,a){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var t=window.Element.prototype.matches,a=function(e,t){return e.closest(t)},n=function(e,t){return new window.Event(e,t)},l=function(e,t){return new window.CustomEvent(e,t)};!function(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(a=function(e,a){if(!document.documentElement.contains(e))return null;do{if(t.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(n=function(e,t){t=t||{};var a=document.createEvent("Event");return a.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),a}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;l=function(t,a){var n=document.createEvent("CustomEvent");return a=a||{bubbles:!1,cancelable:!1,detail:null},n.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),n.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},n}}}();var r="active",s="linear",i="dstepper-block",o="dstepper-none",c="fade",m="vertical",u=function(e,t,a,n){var s=e.bsStepper;if(!s._steps[t].classList.contains(r)&&!s._stepsContents[t].classList.contains(r)){var o=l("show.bs-stepper",{cancelable:!0,detail:{from:s._currentIndex,to:t,indexStep:t}});e.dispatchEvent(o);var c=s._steps.filter((function(e){return e.classList.contains(r)})),u=s._stepsContents.filter((function(e){return e.classList.contains(r)}));o.defaultPrevented||(c.length&&c[0].classList.remove(r),u.length&&(u[0].classList.remove(r),e.classList.contains(m)||s.options.animation||u[0].classList.remove(i)),p(e,s._steps[t],s._steps,a),d(e,s._stepsContents[t],s._stepsContents,u,n))}},p=function(e,t,a,n){a.forEach((function(t){var a=t.querySelector(n.selectors.trigger);a.setAttribute("aria-selected","false"),e.classList.contains(s)&&a.setAttribute("disabled","disabled")})),t.classList.add(r);var l=t.querySelector(n.selectors.trigger);l.setAttribute("aria-selected","true"),e.classList.contains(s)&&l.removeAttribute("disabled")},d=function(e,t,a,n,s){var m=e.bsStepper,u=a.indexOf(t),p=l("shown.bs-stepper",{cancelable:!0,detail:{from:m._currentIndex,to:u,indexStep:u}});if(t.classList.contains(c)){t.classList.remove(o);var d=h(t);t.addEventListener("transitionend",(function a(){t.classList.add(i),t.removeEventListener("transitionend",a),e.dispatchEvent(p),s()})),n.length&&n[0].classList.add(o),t.classList.add(r),b(t,d)}else t.classList.add(r),t.classList.add(i),e.dispatchEvent(p),s()},h=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},b=function(e,t){var a=!1,l=t+5;function r(){a=!0,e.removeEventListener("transitionend",r)}e.addEventListener("transitionend",r),window.setTimeout((function(){a||e.dispatchEvent(n("transitionend")),e.removeEventListener("transitionend",r)}),l)},E={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,a){var n,l=this;void 0===a&&(a={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},E,{},a),this.options.selectors=e({},E.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(s),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){l._stepsContents.push(l._element.querySelector(e.getAttribute("data-target")))})),n=this._stepsContents,this.options.animation&&n.forEach((function(e){e.classList.add(c),e.classList.add(o)})),this._setLinkListeners(),Object.defineProperty(this._element,"bsStepper",{value:this,writable:!0}),this._steps.length&&u(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n,l=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=(e.options,function(e){e.preventDefault()}),l.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=(n=e.options,function(e){e.preventDefault();var t=a(e.target,n.selectors.steps),l=a(t,n.selectors.stepper),r=l.bsStepper,s=r._steps.indexOf(t);u(l,s,n,(function(){r._currentIndex=s}))}),l.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;u(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,a=e-1,n=a>=0&&a<this._steps.length?a:0;u(this._element,n,this.options,(function(){t._currentIndex=n}))},n.reset=function(){var e=this;u(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var a=t.querySelector(e.options.selectors.trigger);e.options.linear?a.removeEventListener("click",e._clickStepLinearListener):a.removeEventListener("click",e._clickStepNonLinearListener)})),this._element.bsStepper=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},869:function(e,t,a){"use strict";a.r(t);var n=a(186),l=a(104),r=a(105),s=a(106),i=a(107),o=a(0),c=a.n(o),m=(a(690),a(799),a(800)),u=a.n(m),p=a(558),d=a(553),h=a(183),b=a(623),E=a(717),g=a.n(E),v=a(703),f=a.n(v),_=a(56),y=a.n(_),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handlechange=function(t){e.setState(Object(n.a)({},t.target.name,t.target.value))},e.changeHandler=function(t){t.preventDefault(),e.setState(Object(n.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),y.a.post("http://13.235.180.192:8000/user/astrosignup",e.state).then((function(t){console.log(t),localStorage.setItem("auth-token",t.data.token),e.setState({token:t.data.token}),f()("Success!"," Register Successful Done!","success"),e.props.history.push("/")})).catch((function(e){console.log(e.response),f()("Error!","Something went wrong","error")}))},e.state={fullname:"",email:"",mobile:"",otp:"",gender:"",dob:"",primary_skills:"",all_skills:"",language:"",exp_in_years:"",conrubute_hrs:"",hear_abt_astrology:"",other_online_platform:"",why_onboard_you:"",suitable_tym_interview:"",crnt_city:"",income_src:"",highest_qualification:"",degree_deploma:"",clg_scl_name:"",lrn_abt_astrology:"",insta_link:"",fb_link:"",linkedln_link:"",youtube_link:"",website_link:"",anybody_prefer:"",min_earning_expe:"",max_earning_expe:"",long_bio:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.stepper=new u.a(document.querySelector("#stepper1"),{linear:!1,animation:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("section",{className:"",style:{backgroundImage:"url(".concat(g.a,")"),width:"100%",padding:"50px 0px",height:"100%",backgroundSize:"cover"}},c.a.createElement(p.a,null,c.a.createElement("section",{className:"ptb-30"},c.a.createElement("div",{className:"stp-1"},c.a.createElement("h2",{className:"th-1"},"AstroVipra"),c.a.createElement("h4",{className:"th-2"},"Astrologer Register"),c.a.createElement("div",{id:"stepper1",class:"bs-stepper"},c.a.createElement("div",{class:"bs-stepper-header"},c.a.createElement("div",{class:"step","data-target":"#test-l-1"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"1"),c.a.createElement("span",{class:"bs-stepper-label"},"Personal Details"))),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"step","data-target":"#test-otp"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"2"),c.a.createElement("span",{class:"bs-stepper-label"},"Verify OTP"))),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"step","data-target":"#test-l-2"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"3"),c.a.createElement("span",{class:"bs-stepper-label"},"Skill Details"))),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"step","data-target":"#test-l-3"},c.a.createElement("button",{class:"step-trigger"},c.a.createElement("span",{class:"bs-stepper-circle"},"3"),c.a.createElement("span",{class:"bs-stepper-label"},"Other Details")))),c.a.createElement("div",{class:"bs-stepper-content"},c.a.createElement("form",{onSubmit:this.submitHandler},c.a.createElement("div",{id:"test-l-1",class:"content"},c.a.createElement(d.a,null,c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Name*"),c.a.createElement("input",{type:"text",name:"fullname",required:!0,placeholder:"Enter Your Fullname",value:this.state.fullname,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Email address*"),c.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Mobile Number*"),c.a.createElement("input",{type:"text",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler})))),c.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-otp",class:"content"},c.a.createElement(d.a,null,c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Otp*"),c.a.createElement("input",{type:"text",required:!0,name:"otp",value:this.state.otp,onChange:this.changeHandler})))),c.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-l-2",class:"content"},c.a.createElement(d.a,null,c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Gender*"),c.a.createElement("select",{className:"form-control",value:this.state.gender,onChange:this.changeHandler,name:"gender"},c.a.createElement("option",{selected:!0},"--select--"),c.a.createElement("option",null,"Male"),c.a.createElement("option",null,"Female")))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"DOB*"),c.a.createElement("input",{type:"date",required:!0,name:"dob",maxLength:"8",value:this.state.dob,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Primary Skills*"),c.a.createElement("input",{placeholder:"Primary Skills",name:"primary_skills",type:"text",value:this.state.primary_skills,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"All Skills*"),c.a.createElement("input",{placeholder:"All Skills",name:"all_skills",type:"text",value:this.state.all_skills,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Language*"),c.a.createElement("input",{placeholder:"language",name:"language",type:"text",value:this.state.language,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Experience in years*"),c.a.createElement("input",{type:"text",name:"exp_in_years",required:!0,value:this.state.exp_in_years,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"How many hours you can contribute daily?*"),c.a.createElement("input",{type:"text",name:"conrubute_hrs",required:!0,value:this.state.conrubute_hrs,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Where did you hear about Astrotalk?*"),c.a.createElement("input",{type:"text",name:"hear_abt_astrology",value:this.state.hear_abt_astrology,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"12"},c.a.createElement("p",{className:"mb-0 mt-10"},"Are you working on any other online platform?*"),c.a.createElement(d.a,null,c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Name of platform"),c.a.createElement("input",{type:"text",name:"other_online_platform",value:this.state.other_online_platform,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Monthly Earning"),c.a.createElement("input",{type:"text"})))))),c.a.createElement("button",{class:"btn btn-primary",onClick:function(){return e.stepper.next()}},"Next")),c.a.createElement("div",{id:"test-l-3",class:"content"},c.a.createElement(d.a,null,c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Why do you think we should onboard you?*"),c.a.createElement("input",{type:"text",required:!0,name:"why_onboard_you",value:this.state.why_onboard_you,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"What is a suitable time for interview*"),c.a.createElement("input",{type:"text",required:!0,name:"suitable_tym_interview",value:this.suitable_tym_interview,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Which city do you currently live in?"),c.a.createElement("input",{type:"text",required:!0,name:"crnt_city",value:this.crnt_city,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Main source of business (other than astrology)*"),c.a.createElement("input",{placeholder:"source of business",name:"income_src",type:"text",value:this.state.income_src,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Select your highest qualification*"),c.a.createElement("input",{placeholder:"qualification",name:"highest_qualification",type:"text",value:this.state.highest_qualification,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Degree/Diploma*"),c.a.createElement("input",{placeholder:"Degree/Diploma",name:"degree_deploma",type:"text",value:this.state.degree_deploma,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"College/School/University*"),c.a.createElement("input",{type:"text",name:"clg_scl_name",required:!0,value:this.clg_scl_name,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"From where did you learn Astrology?"),c.a.createElement("input",{type:"text",name:"lrn_abt_astrology",required:!0,value:this.lrn_abt_astrology,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Instagram profile link"),c.a.createElement("input",{type:"text",name:"insta_link ",required:!0,value:this.insta_link,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Facebook profile link"),c.a.createElement("input",{type:"text",name:"fb_link",required:!0,value:this.fb_link,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"LinkedIn profile link"),c.a.createElement("input",{type:"text",name:"linkedln_link",required:!0,value:this.linkedln_link,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Youtube channel link"),c.a.createElement("input",{type:"text",name:"youtube_link",required:!0,value:this.youtube_link,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Name of the person who referred you?"),c.a.createElement("input",{type:"text",name:"anybody_prefer",required:!0,value:this.anybody_prefer,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Minimum Earning Expectation from AstroVipra*"),c.a.createElement("input",{type:"text",name:"min_earning_expe",required:!0,value:this.min_earning_expe,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Maximum Earning Expectation from AstroVipra*"),c.a.createElement("input",{type:"text",name:"max_earning_expe",required:!0,value:this.max_earning_expe,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"6"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Website profile link"),c.a.createElement("input",{type:"text",name:"max_earning_expe",required:!0,value:this.max_earning_expe,onChange:this.changeHandler}))),c.a.createElement(h.a,{md:"12"},c.a.createElement("div",{class:"form-group mtb-10"},c.a.createElement("label",null,"Long bio*"),c.a.createElement("textarea",{type:"text",class:"form-control",name:"long_bio",required:!0,value:this.long_bio,onChange:this.changeHandler,placeholder:"Please let us know more about you"})))),c.a.createElement("p",{className:"ptb-10"},"You can reach out to us for Astrologer onboarding support team at onboarding@astrovipra.com in case of any issues or queries."),c.a.createElement(b.a,{type:"submit",class:"btn btn-primary mt-5"},"Submit")))))))))}}]),a}(c.a.Component);t.default=k}}]);
//# sourceMappingURL=59.3a76fa30.chunk.js.map