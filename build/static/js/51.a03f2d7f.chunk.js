(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[51],{555:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(3),r=t(183);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},565:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){for(var a=e.ratingValue,t=[],c=0;c<5;c++)t.push(n.a.createElement("i",{className:"fa fa-star-o",key:c}));if(a&&a>0)for(var r=0;r<=a-1;r++)t[r]=n.a.createElement("i",{className:"fa fa-star-o yellow",key:r});return n.a.createElement(l.Fragment,null,t)}},611:function(e,a,t){"use strict";var l=t(67),n=t.n(l),c=t(104),r=t(30),o=t(0),i=t.n(o),s=t(578),m=t(596),d=t(66),u=t.n(d),p=t(665),v=t(666);a.a=function(e){var a,t=e.spaceBottomClass,l=e.productFullDesc,d=e.productid,E=i.a.useState({}),f=Object(r.a)(E,2),g=f[0],N=f[1],h=i.a.useState([]),b=Object(r.a)(h,2),y=(b[0],b[1]),w=Object(o.useState)([]),O=Object(r.a)(w,2),k=O[0],S=O[1],j=Object(o.useState)([]),I=Object(r.a)(j,2),_=I[0],C=I[1],z=Object(o.useState)([]),x=Object(r.a)(z,2),D=x[0],T=x[1],B=Object(o.useState)([]),J=Object(r.a)(B,2),A=J[0],F=J[1],P=Object(o.useState)([!0,!0,!1,!1,!1]),K=Object(r.a)(P,2);K[0],K[1];console.log(d);var W=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,l,c,r,o,i,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,u.a.get("http://13.235.180.192/api/admin/getonereviewproduct/".concat(a));case 3:for(t=e.sent,l=t.data,console.log(l),c=l.data,r=0,o=0;o<c.length;o++)i=c[o].rating,r+=i;console.log(r),s=r/c.length,console.log(s),C(s),console.log(c),S(c);case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){localStorage.getItem("auth-token")&&d&&W(d)}),[d]),i.a.useEffect((function(){var e=JSON.parse(l).product_img;void 0!==e&&null!==e&&y(e),N(JSON.parse(l))}),[l]),console.log(g),i.a.createElement("div",{className:"description-review-area ".concat(t)},i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"description-review-wrapper"},i.a.createElement(s.a.Container,{defaultActiveKey:"productDescription"},i.a.createElement(m.a,{variant:"pills",className:"description-review-topbar"},i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"additionalInfo"},"Additional Information")),i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"productDescription"},"Description")),i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"productReviews"},"Reviews"))),i.a.createElement(s.a.Content,{className:"description-review-bottom"},i.a.createElement(s.a.Pane,{eventKey:"additionalInfo"},i.a.createElement("div",{className:"product-anotherinfo-wrapper"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Brand"),null===g||void 0===g||null===(a=g.brand)||void 0===a?void 0:a.name),i.a.createElement("li",null,i.a.createElement("span",null,"Material"),null===g||void 0===g?void 0:g.material),i.a.createElement("li",null,i.a.createElement("span",null,"Other Info")," ",null===g||void 0===g?void 0:g.short_desc)))),i.a.createElement(s.a.Pane,{eventKey:"productDescription"},i.a.createElement("h5",null,null===g||void 0===g?void 0:g.long_desc)),i.a.createElement(s.a.Pane,{eventKey:"productReviews"},i.a.createElement("h3",null,"RATINGS ",i.a.createElement("i",{class:"fa fa-star"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h1",{style:{fontSize:96,marginTop:39,marginRight:15,marginBottom:20,marginLeft:0}},parseFloat(_).toFixed(1)),i.a.createElement("p",null,k.length," Verified Buyers")),i.a.createElement("div",{className:"col-md-6"},i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:70}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#ff"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:10}))),i.a.createElement("hr",null),null===k||void 0===k?void 0:k.map((function(e){var a,t;return i.a.createElement("div",{className:"review-wrapper",key:e._id},i.a.createElement("div",{className:"single-review"},i.a.createElement("div",{className:"review-content"},i.a.createElement("div",{className:"review-top-wrap"},i.a.createElement("div",{className:"review-left"},i.a.createElement("div",{className:"review-name"},i.a.createElement("h4",{style:{textTransform:"capitalize",margin:5}},null===e||void 0===e?void 0:e.comment)),i.a.createElement("div",{className:"review-rating"},i.a.createElement(p.a,{name:"disabled",style:{opacity:1},value:null===e||void 0===e?void 0:e.rating,disabled:!0})))),i.a.createElement("div",{className:"review-bottom"},i.a.createElement("p",{style:{display:"inline",textTransform:"capitalize"}},null===e||void 0===e||null===(a=e.customer)||void 0===a?void 0:a.firstname," ",null===e||void 0===e||null===(t=e.customer)||void 0===t?void 0:t.lastname," |"," ",e.createdAt.split("T")[0])))))}))),i.a.createElement("div",{className:"col-lg-5"},i.a.createElement("div",{className:"ratting-form-wrapper pl-50"},i.a.createElement("h3",null,"Write a Review"),i.a.createElement("div",{className:"ratting-form"},i.a.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault(),console.log({rating:D,comment:A,productid:d}),u.a.post("http://13.235.180.192/api/admin/addreview",{rating:D,comment:A,product:d},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),W(d)})).catch((function(e){console.log(e.response)}))}},i.a.createElement("div",{className:"star-box"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rating-form-style mb-10"},i.a.createElement(p.a,{name:"simple-controlled",value:D,onChange:function(e,a){console.log(e),T(a)}})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"rating-form-style form-submit"},i.a.createElement("textarea",{name:"comment",placeholder:"Comment",defaultValue:"",onChange:function(e){F(e.target.value)},style:{height:"auto"},rows:3}),i.a.createElement("input",{type:"submit",defaultValue:"Submit"})))))))))))))))}},756:function(e,a,t){},762:function(e,a,t){},912:function(e,a,t){"use strict";t.r(a);var l=t(179),n=t(180),c=t(181),r=t(182),o=t(0),i=t.n(o),s=t(559),m=t.n(s),d=t(183),u=t(178),p=t(555),v=(t(756),t(611)),E=t(184),f=t(30),g=t(43),N=(t(757),t(702)),h=(t(68),t(105),t(134),t(565),t(66)),b=t.n(h),y=t(626),w=(t(762),t(22)),O={margin:"-4px 8px"},k=Object(g.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}))((function(e){var a,t,l,n,c=e.spaceTopClass,r=e.spaceBottomClass,s=e.wishlistItems,m=e.productImage,d=Object(o.useState)(1),u=Object(f.a)(d,2),p=u[0],v=u[1],g=Object(o.useState)(""),h=Object(f.a)(g,2),k=h[0],S=h[1],j=Object(o.useState)([!1,!1,!1,!1,!1]),I=Object(f.a)(j,2),_=I[0],C=I[1],z=Object(o.useState)(0),x=Object(f.a)(z,2),D=x[0],T=x[1],B=i.a.useState({}),J=Object(f.a)(B,2),A=J[0],F=J[1],P=i.a.useState([]),K=Object(f.a)(P,2),W=K[0],q=K[1],R=i.a.useState([0]),L=Object(f.a)(R,2),V=(L[0],L[1]);i.a.useEffect((function(){var e=JSON.parse(m).product_img,a=JSON.parse(m).color,t=JSON.parse(m).size;void 0!==e&&null!==e&&q(e),void 0!==a&&null!==a&&T(a[0].colorName),void 0!==t&&null!==t&&S(t[0].sizeName),console.log(a),console.log(t),F(JSON.parse(m))}),[m]);var M=Object(w.g)();return i.a.createElement("div",{className:"shop-area ".concat(c||""," ").concat(r||"")},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"product-large-image-wrapper product-large-image-wrapper--sticky"},i.a.createElement("div",{className:""},i.a.createElement(N.a,null,null===W||void 0===W?void 0:W.map((function(e){return i.a.createElement(N.a.Item,{key:e},i.a.createElement("img",{src:e,alt:"",className:"img-fluid",style:{width:"550px",height:"105vh"}}))})))))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"product-details-content ml-70 mt-5 mb-5"},i.a.createElement("h4",{style:{color:"#282c3f",textTransform:"uppercase",fontWeight:700,fontSize:24}},null===A||void 0===A||null===(a=A.brand)||void 0===a?void 0:a.name),i.a.createElement("h2",{className:"",style:(t={textTransform:"capitalize",fontSize:20,fontWeight:400},Object(E.a)(t,"fontWeight",500),Object(E.a)(t,"color","#535665"),t)},null===A||void 0===A?void 0:A.product_name," ",i.a.createElement("span",null,"(",null===A||void 0===A?void 0:A.material,")")),i.a.createElement("div",{className:"pro-details-list"},i.a.createElement("p",null,null===A||void 0===A?void 0:A.short_desc),i.a.createElement("p",null,null===A||void 0===A?void 0:A.long_desc),i.a.createElement("p",{className:" w-25 shadow-none p-1 mb-0 bg-white rounded"},"#",null===A||void 0===A||null===(l=A.productsubcategory)||void 0===l?void 0:l.name)),i.a.createElement("div",{className:"product-details-price"},i.a.createElement("h2",null,"\u20b9",null===A||void 0===A?void 0:A.sell_price,"\xa0\xa0",i.a.createElement("del",null," ","\u20b9",Math.floor(parseInt(null===A||void 0===A?void 0:A.sell_price)*parseInt(null===A||void 0===A?void 0:A.discount_perc)/100+parseInt(null===A||void 0===A?void 0:A.sell_price)),"\xa0\xa0"," "),i.a.createElement("span",{style:{color:"#ffa500"}}," ","\xa0\xa0(",null===A||void 0===A?void 0:A.discount_perc,"% OFF)"))),i.a.createElement("div",{className:"pro-details-rating-wrap"},i.a.createElement("div",{className:"pro-details-rating"},_.map((function(e,a){return i.a.createElement("span",{key:a,onClick:function(){for(var e=[],t=0;t<5;t++)t<=a?e.push(!0):e.push(!1);C(e)}},_[a]?i.a.createElement("i",{className:"fa fa-star-o yellow",key:a}):i.a.createElement("i",{className:"fa fa-star-o",key:a}))})))),i.a.createElement("div",{className:"pro-details-size-color"},i.a.createElement("div",{className:"pro-details-color-wrap"},i.a.createElement("span",null,"Color"),i.a.createElement("div",{className:"pro-details-color-content",style:{flexDirection:"row"}},i.a.createElement("div",{class:"colors"},i.a.createElement("ul",null,null===A||void 0===A||null===(n=A.color)||void 0===n?void 0:n.map((function(e,a){return i.a.createElement("li",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"color",checked:(null===e||void 0===e?void 0:e.colorName)==D,onClick:function(){V(a),console.log(null===e||void 0===e?void 0:e.colorName),T(null===e||void 0===e?void 0:e.colorName)}}),i.a.createElement("span",{class:"swatch",style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderColor:(null===e||void 0===e?void 0:e.colorName)==D?"black":"transparent",borderWidth:2,padding:2}})," "))}))))))),i.a.createElement("div",{className:"pro-details-size-color mt-5"},i.a.createElement("div",{className:"pro-details-color-wrap"},i.a.createElement("span",null,"Size"),i.a.createElement("div",{className:"pro-details-color-content",style:{flexDirection:"row"}},A&&A.size?A.size.map((function(e){return i.a.createElement(y.a,{outline:k===(null===e||void 0===e?void 0:e.sizeName),color:k===(null===e||void 0===e?void 0:e.sizeName)?"danger":"primary",className:"m-1 ",key:null===e||void 0===e?void 0:e.sizeName,onClick:function(){S(null===e||void 0===e?void 0:e.sizeName)}},i.a.createElement("h5",{className:"mb-0"},null===e||void 0===e?void 0:e.sizeName))})):null))),i.a.createElement("div",{className:"pro-details-quality"},i.a.createElement("div",{className:"cart-plus-minus"},i.a.createElement("button",{onClick:function(){return v(p>1?p-1:1)},className:"dec qtybutton"},"-"),i.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:p}),i.a.createElement("button",{className:"inc qtybutton",onClick:function(){return v(p>=1?p+1:1)}},"+")),i.a.createElement("div",{className:"pro-details-cart btn-hover"},i.a.createElement("button",{onClick:function(){console.log({product:A._id,product_qty:p,product_price:A.sell_price,color:D,size:k}),localStorage.getItem("auth-token")?b.a.post("http://13.235.180.192/api/admin/add_ToCart",{product:A._id,product_qty:p,product_price:A.sell_price,color:D,size:k},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){alert("Added To Cart"),window.location.reload(),console.log(e)})).catch((function(e){alert("error by pratima"),console.log(e.response)})):M.push("/login-register")}},"Add To Cart")),i.a.createElement("div",{className:"pro-details-cart btn-hover"},i.a.createElement("button",{title:void 0!==s?"Added to wishlist":"Add to wishlist",onClick:function(){console.log("btn clicked"),b.a.post("http://13.235.180.192/api/admin/addwishlist",{product:A._id,color:D,size:k,qty:p,price:A.sell_price},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){alert("Added To Wishlist"),window.location.reload(),console.log(e)})).catch((function(e){console.log(e.response)}))}},i.a.createElement("i",{className:"pe-7s-like",style:O}),"Wishlist"))))))))}));t.d(a,"ProductSticky",(function(){return S}));var S=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={detail:{},pid:""},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("http://13.235.180.192/api/admin/getoneproduct/".concat(a)).then((function(a){console.log(a.data.data),e.setState({detail:a.data.data,pid:a.data.data._id})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,"Buynaa | Product Page"),i.a.createElement("meta",{name:"description",content:"Product page of flone react minimalist eCommerce template."})),i.a.createElement(d.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(d.BreadcrumbsItem,null,"/ Shop Product"),i.a.createElement(u.a,{headerTop:"visible"},i.a.createElement(p.a,null),i.a.createElement(k,{spaceTopclass:"mt-100",spaceBottomclass:"mb-100",productImage:JSON.stringify(this.state.detail)}),i.a.createElement(v.a,{spaceBottomclass:"pb-90",productFullDesc:JSON.stringify(this.state.detail),productid:this.state.pid})))}}]),t}(o.Component);a.default=S}}]);
//# sourceMappingURL=51.a03f2d7f.chunk.js.map