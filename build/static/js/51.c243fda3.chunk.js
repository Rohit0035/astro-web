(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[51,95],{569:function(e,t,l){"use strict";var a=l(7),n=l(12),o=l(0),r=l.n(o),c=l(3),m=l.n(c),i=l(77),u=l.n(i),E=l(53),p=["className","cssModule","widths","tag"],s=m.a.oneOfType([m.a.number,m.a.string]),v=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:s,offset:s})]),d={tag:E.n,xs:v,sm:v,md:v,lg:v,xl:v,className:m.a.string,cssModule:m.a.object,widths:m.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,l){return!0===l||""===l?e?"col":"col-"+t:"auto"===l?e?"col-auto":"col-"+t+"-auto":e?"col-"+l:"col-"+t+"-"+l},f=function(e){var t=e.className,l=e.cssModule,o=e.widths,c=e.tag,m=Object(n.a)(e,p),i=[];o.forEach((function(t,a){var n=e[t];if(delete m[t],n||""===n){var o=!a;if(Object(E.h)(n)){var r,c=o?"-":"-"+t+"-",p=b(o,t,n.size);i.push(Object(E.j)(u()(((r={})[p]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r)),l))}else{var s=b(o,t,n);i.push(s)}}})),i.length||i.push("col");var s=Object(E.j)(u()(t,i),l);return r.a.createElement(c,Object(a.a)({},m,{className:s}))};f.propTypes=d,f.defaultProps=h,t.a=f},604:function(e,t,l){e.exports=l.p+"static/media/pagetitle.504c1cba.jpg"},610:function(e,t,l){"use strict";var a=l(7),n=l(12),o=l(186),r=l(16),c=l(0),m=l.n(c),i=l(3),u=l.n(i),E=l(77),p=l.n(E),s=l(53),v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],d={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:s.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var l;return(l=e.call(this,t)||this).onClick=l.onClick.bind(Object(o.a)(l)),l}Object(r.a)(t,e);var l=t.prototype;return l.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},l.render=function(){var e=this.props,t=e.active,l=e["aria-label"],o=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,E=e.outline,d=e.size,h=e.tag,b=e.innerRef,f=Object(n.a)(e,v);c&&"undefined"===typeof f.children&&(f.children=m.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(E?"-outline":"")+"-"+u,y=Object(s.j)(p()(r,{close:c},c||"btn",c||g,!!d&&"btn-"+d,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);f.href&&"button"===h&&(h="a");var N=c?"Close":null;return m.a.createElement(h,Object(a.a)({type:"button"===h&&f.onClick?"button":void 0},f,{className:y,ref:b,onClick:this.onClick,"aria-label":l||N}))},t}(m.a.Component);h.propTypes=d,h.defaultProps={color:"secondary",tag:"button"},t.a=h},655:function(e,t,l){},706:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(656);t.default=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"mst-serch"},n.a.createElement(o.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){console.log("Focused")},autoFocus:!0,formatResult:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),n.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}},739:function(e,t,l){"use strict";var a=l(7),n=l(12),o=l(0),r=l.n(o),c=l(3),m=l.n(c),i=l(77),u=l.n(i),E=l(53),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],s={tag:E.n,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},v=function(e){var t=e.className,l=e.cssModule,o=e.color,c=e.body,m=e.inverse,i=e.outline,s=e.tag,v=e.innerRef,d=Object(n.a)(e,p),h=Object(E.j)(u()(t,"card",!!m&&"text-white",!!c&&"card-body",!!o&&(i?"border":"bg")+"-"+o),l);return r.a.createElement(s,Object(a.a)({},d,{className:h,ref:v}))};v.propTypes=s,v.defaultProps={tag:"div"},t.a=v},893:function(e,t,l){"use strict";l.r(t);var a=l(179),n=l(181),o=l(182),r=l(183),c=l(0),m=l.n(c),i=l(4),u=l(549),E=l(550),p=l(569),s=l(739),v=l(610),d=(l(655),l(604),l(178)),h=l(706),b=function(e){Object(o.a)(l,e);var t=Object(r.a)(l);function l(){return Object(a.a)(this,l),t.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return m.a.createElement(d.a,{headerTop:"visible"},m.a.createElement("section",{className:"pt-0 pb-0"},m.a.createElement("div",{className:"",style:{backgroundColor:"#FFD59E",width:"100%",padding:"70px 0px",backgroundSize:"cover"}},m.a.createElement(u.a,null,m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"12"},m.a.createElement("div",{className:"leftcont text-left"},m.a.createElement("h1",null,"Kundli Matching"),m.a.createElement("h3",null,"Find your right one, through matchmaking"))))))),m.a.createElement(u.a,null,m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"12"},m.a.createElement(s.a,{className:"mb-50 pt-d"},m.a.createElement("h3",null,"Free Match Making - Kundli Milan & Gun Milan to Check Possibilities of Marriage"),m.a.createElement("p",null,"Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so. So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself."),m.a.createElement("div",{className:"match-bx"},m.a.createElement("form",null,m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"8"},m.a.createElement("h3",null,"Fill Up Partner's Detail"),m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"6"},m.a.createElement("div",{className:"form-m"},m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Name"),m.a.createElement("input",{type:"text",name:"",placeholder:"Name"})),m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Gender"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"Male"),m.a.createElement("option",null,"Female"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Day"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"0"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Month"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"January"),m.a.createElement("option",null,"February"),m.a.createElement("option",null,"March"),m.a.createElement("option",null,"April"),m.a.createElement("option",null,"May"),m.a.createElement("option",null,"June"),m.a.createElement("option",null,"July"),m.a.createElement("option",null,"August"),m.a.createElement("option",null,"September"),m.a.createElement("option",null,"October"),m.a.createElement("option",null,"November"),m.a.createElement("option",null,"December"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Year"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",{value:"1942"},"1942"),m.a.createElement("option",{value:"1943"},"1943"),m.a.createElement("option",{value:"1944"},"1944"),m.a.createElement("option",{value:"1945"},"1945"),m.a.createElement("option",{value:"1946"},"1946"),m.a.createElement("option",{value:"1947"},"1947"),m.a.createElement("option",{value:"1948"},"1948"),m.a.createElement("option",{value:"1949"},"1949"),m.a.createElement("option",{value:"1950"},"1950"),m.a.createElement("option",{value:"1951"},"1951"),m.a.createElement("option",{value:"1952"},"1952"),m.a.createElement("option",{value:"1953"},"1953"),m.a.createElement("option",{value:"1954"},"1954"),m.a.createElement("option",{value:"1955"},"1955"),m.a.createElement("option",{value:"1956"},"1956"),m.a.createElement("option",{value:"1957"},"1957"),m.a.createElement("option",{value:"1958"},"1958"),m.a.createElement("option",{value:"1959"},"1959"),m.a.createElement("option",{value:"1960"},"1960"),m.a.createElement("option",{value:"1961"},"1961"),m.a.createElement("option",{value:"1962"},"1962"),m.a.createElement("option",{value:"1963"},"1963"),m.a.createElement("option",{value:"1964"},"1964"),m.a.createElement("option",{value:"1965"},"1965"),m.a.createElement("option",{value:"1966"},"1966"),m.a.createElement("option",{value:"1967"},"1967"),m.a.createElement("option",{value:"1968"},"1968"),m.a.createElement("option",{value:"1969"},"1969"),m.a.createElement("option",{value:"1970"},"1970"),m.a.createElement("option",{value:"1971"},"1971"),m.a.createElement("option",{value:"1972"},"1972"),m.a.createElement("option",{value:"1973"},"1973"),m.a.createElement("option",{value:"1974"},"1974"),m.a.createElement("option",{value:"1975"},"1975"),m.a.createElement("option",{value:"1976"},"1976"),m.a.createElement("option",{value:"1977"},"1977"),m.a.createElement("option",{value:"1978"},"1978"),m.a.createElement("option",{value:"1979"},"1979"),m.a.createElement("option",{value:"1980"},"1980"),m.a.createElement("option",{value:"1981"},"1981"),m.a.createElement("option",{value:"1982"},"1982"),m.a.createElement("option",{value:"1983"},"1983"),m.a.createElement("option",{value:"1984"},"1984"),m.a.createElement("option",{value:"1985"},"1985"),m.a.createElement("option",{value:"1986"},"1986"),m.a.createElement("option",{value:"1987"},"1987"),m.a.createElement("option",{value:"1988"},"1988"),m.a.createElement("option",{value:"1989"},"1989"),m.a.createElement("option",{value:"1990"},"1990"),m.a.createElement("option",{value:"1991"},"1991"),m.a.createElement("option",{value:"1992"},"1992"),m.a.createElement("option",{value:"1993"},"1993"),m.a.createElement("option",{value:"1994"},"1994"),m.a.createElement("option",{value:"1995"},"1995"),m.a.createElement("option",{value:"1996"},"1996"),m.a.createElement("option",{value:"1997"},"1997"),m.a.createElement("option",{value:"1998"},"1998"),m.a.createElement("option",{value:"1999"},"1999"),m.a.createElement("option",{value:"2000"},"2000"),m.a.createElement("option",{value:"2001"},"2001"),m.a.createElement("option",{value:"2002"},"2002"),m.a.createElement("option",{value:"2003"},"2003"),m.a.createElement("option",{value:"2004"},"2004"),m.a.createElement("option",{value:"2005"},"2005"),m.a.createElement("option",{value:"2006"},"2006"),m.a.createElement("option",{value:"2007"},"2007"),m.a.createElement("option",{value:"2008"},"2008"),m.a.createElement("option",{value:"2009"},"2009"),m.a.createElement("option",{value:"2010"},"2010"),m.a.createElement("option",{value:"2011"},"2011"),m.a.createElement("option",{value:"2011"},"2012"),m.a.createElement("option",{value:"2011"},"2013"),m.a.createElement("option",{value:"2011"},"2014"),m.a.createElement("option",{value:"2011"},"2015"),m.a.createElement("option",{value:"2011"},"2016"),m.a.createElement("option",{value:"2011"},"2017"),m.a.createElement("option",{value:"2011"},"2018"),m.a.createElement("option",{value:"2011"},"2019"),m.a.createElement("option",{value:"2011"},"2020"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2022"),m.a.createElement("option",{value:"2011"},"2023"),m.a.createElement("option",{value:"2011"},"2024"),m.a.createElement("option",{value:"2011"},"2025"),m.a.createElement("option",{value:"2011"},"2026"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2027"),m.a.createElement("option",{value:"2011"},"2028"),m.a.createElement("option",{value:"2011"},"2029"),m.a.createElement("option",{value:"2011"},"2030"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Hour"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Minute"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59")," ",m.a.createElement("option",null,"60"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Second"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59")," ",m.a.createElement("option",null,"60"))),m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Birth Place"),m.a.createElement("input",{type:"text",name:"",placeholder:"Enter Birth Place"}))))),m.a.createElement(p.a,{md:"6"},m.a.createElement("div",{className:"form-m"},m.a.createElement(E.a,null,m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Name"),m.a.createElement("input",{type:"text",name:"",placeholder:"Name"})),m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Gender"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"Male"),m.a.createElement("option",null,"Female"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Day"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"0"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Month"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"January"),m.a.createElement("option",null,"February"),m.a.createElement("option",null,"March"),m.a.createElement("option",null,"April"),m.a.createElement("option",null,"May"),m.a.createElement("option",null,"June"),m.a.createElement("option",null,"July"),m.a.createElement("option",null,"August"),m.a.createElement("option",null,"September"),m.a.createElement("option",null,"October"),m.a.createElement("option",null,"November"),m.a.createElement("option",null,"December"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Year"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",{value:"1942"},"1942"),m.a.createElement("option",{value:"1943"},"1943"),m.a.createElement("option",{value:"1944"},"1944"),m.a.createElement("option",{value:"1945"},"1945"),m.a.createElement("option",{value:"1946"},"1946"),m.a.createElement("option",{value:"1947"},"1947"),m.a.createElement("option",{value:"1948"},"1948"),m.a.createElement("option",{value:"1949"},"1949"),m.a.createElement("option",{value:"1950"},"1950"),m.a.createElement("option",{value:"1951"},"1951"),m.a.createElement("option",{value:"1952"},"1952"),m.a.createElement("option",{value:"1953"},"1953"),m.a.createElement("option",{value:"1954"},"1954"),m.a.createElement("option",{value:"1955"},"1955"),m.a.createElement("option",{value:"1956"},"1956"),m.a.createElement("option",{value:"1957"},"1957"),m.a.createElement("option",{value:"1958"},"1958"),m.a.createElement("option",{value:"1959"},"1959"),m.a.createElement("option",{value:"1960"},"1960"),m.a.createElement("option",{value:"1961"},"1961"),m.a.createElement("option",{value:"1962"},"1962"),m.a.createElement("option",{value:"1963"},"1963"),m.a.createElement("option",{value:"1964"},"1964"),m.a.createElement("option",{value:"1965"},"1965"),m.a.createElement("option",{value:"1966"},"1966"),m.a.createElement("option",{value:"1967"},"1967"),m.a.createElement("option",{value:"1968"},"1968"),m.a.createElement("option",{value:"1969"},"1969"),m.a.createElement("option",{value:"1970"},"1970"),m.a.createElement("option",{value:"1971"},"1971"),m.a.createElement("option",{value:"1972"},"1972"),m.a.createElement("option",{value:"1973"},"1973"),m.a.createElement("option",{value:"1974"},"1974"),m.a.createElement("option",{value:"1975"},"1975"),m.a.createElement("option",{value:"1976"},"1976"),m.a.createElement("option",{value:"1977"},"1977"),m.a.createElement("option",{value:"1978"},"1978"),m.a.createElement("option",{value:"1979"},"1979"),m.a.createElement("option",{value:"1980"},"1980"),m.a.createElement("option",{value:"1981"},"1981"),m.a.createElement("option",{value:"1982"},"1982"),m.a.createElement("option",{value:"1983"},"1983"),m.a.createElement("option",{value:"1984"},"1984"),m.a.createElement("option",{value:"1985"},"1985"),m.a.createElement("option",{value:"1986"},"1986"),m.a.createElement("option",{value:"1987"},"1987"),m.a.createElement("option",{value:"1988"},"1988"),m.a.createElement("option",{value:"1989"},"1989"),m.a.createElement("option",{value:"1990"},"1990"),m.a.createElement("option",{value:"1991"},"1991"),m.a.createElement("option",{value:"1992"},"1992"),m.a.createElement("option",{value:"1993"},"1993"),m.a.createElement("option",{value:"1994"},"1994"),m.a.createElement("option",{value:"1995"},"1995"),m.a.createElement("option",{value:"1996"},"1996"),m.a.createElement("option",{value:"1997"},"1997"),m.a.createElement("option",{value:"1998"},"1998"),m.a.createElement("option",{value:"1999"},"1999"),m.a.createElement("option",{value:"2000"},"2000"),m.a.createElement("option",{value:"2001"},"2001"),m.a.createElement("option",{value:"2002"},"2002"),m.a.createElement("option",{value:"2003"},"2003"),m.a.createElement("option",{value:"2004"},"2004"),m.a.createElement("option",{value:"2005"},"2005"),m.a.createElement("option",{value:"2006"},"2006"),m.a.createElement("option",{value:"2007"},"2007"),m.a.createElement("option",{value:"2008"},"2008"),m.a.createElement("option",{value:"2009"},"2009"),m.a.createElement("option",{value:"2010"},"2010"),m.a.createElement("option",{value:"2011"},"2011"),m.a.createElement("option",{value:"2011"},"2012"),m.a.createElement("option",{value:"2011"},"2013"),m.a.createElement("option",{value:"2011"},"2014"),m.a.createElement("option",{value:"2011"},"2015"),m.a.createElement("option",{value:"2011"},"2016"),m.a.createElement("option",{value:"2011"},"2017"),m.a.createElement("option",{value:"2011"},"2018"),m.a.createElement("option",{value:"2011"},"2019"),m.a.createElement("option",{value:"2011"},"2020"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2022"),m.a.createElement("option",{value:"2011"},"2023"),m.a.createElement("option",{value:"2011"},"2024"),m.a.createElement("option",{value:"2011"},"2025"),m.a.createElement("option",{value:"2011"},"2026"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2027"),m.a.createElement("option",{value:"2011"},"2028"),m.a.createElement("option",{value:"2011"},"2029"),m.a.createElement("option",{value:"2011"},"2030"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Hour"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Minute"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59")," ",m.a.createElement("option",null,"60"))),m.a.createElement(p.a,{md:"4"},m.a.createElement("label",null,"Birth Second"),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59")," ",m.a.createElement("option",null,"60"))),m.a.createElement(p.a,{md:"12"},m.a.createElement("label",null,"Birth Place"),m.a.createElement("input",{type:"text",name:"",placeholder:"Enter Birth Place "}))))),m.a.createElement(p.a,{md:"12"},m.a.createElement(i.b,{to:"/kundalimatchlist"},m.a.createElement(v.a,{className:"mt-25 btn btn-secondary"},"Match Horoscope"))))),m.a.createElement(p.a,{md:"4"},m.a.createElement("h3",null,"Saved Matches"),m.a.createElement("div",{className:"form-m"},m.a.createElement(E.a,null,m.a.createElement(p.a,null,m.a.createElement(h.default,null),m.a.createElement("h4",{className:"mt-3"},"Recent Views"),m.a.createElement("hr",null),m.a.createElement("div",{className:"mtkun-box"},m.a.createElement(i.b,null,m.a.createElement("div",{className:"k-bx"},m.a.createElement("p",null,"R")),m.a.createElement("div",{className:"k-bxx"},m.a.createElement("h5",null,"lorem"),m.a.createElement("p",null,"21/09/2022"),m.a.createElement("p",null,"Indore")),m.a.createElement("div",{className:"k-dlt"},m.a.createElement(i.b,{className:"Tansdel"},m.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))),m.a.createElement("div",{className:"mtkun-box"},m.a.createElement(i.b,null,m.a.createElement("div",{className:"k-bx"},m.a.createElement("p",null,"S")),m.a.createElement("div",{className:"k-bxx"},m.a.createElement("h5",null,"lorem"),m.a.createElement("p",null,"21/09/2022"),m.a.createElement("p",null,"Indore")),m.a.createElement("div",{className:"k-dlt"},m.a.createElement(i.b,{className:"Tansdel"},m.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"})))))))))))))))))}}]),l}(m.a.Component);t.default=b}}]);
//# sourceMappingURL=51.c243fda3.chunk.js.map