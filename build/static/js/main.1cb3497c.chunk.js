(this["webpackJsonpproject-36-pokeapi"]=this["webpackJsonpproject-36-pokeapi"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(17),o=c.n(s),i=c(8),j=c(2),l=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("h1",{className:"header__text",children:"PokeAPI w/ React Router"})})},u=c(9),b=c.n(u),p=c(11),f=c(7),d=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},h=function(){return Object(n.jsx)("p",{className:"loading",children:"Loading..."})},O=function(e){var t=e.pokemon,c=Object(r.useState)(""),a=Object(f.a)(c,2),s=a[0],o=a[1],j=Object(r.useState)(""),l=Object(f.a)(j,2),u=l[0],O=l[1],m=Object(r.useState)(!1),x=Object(f.a)(m,2),_=x[0],g=x[1];return Object(r.useEffect)((function(){var e=new AbortController;return function(){var e=Object(p.a)(b.a.mark((function e(){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,o(n.sprites.front_default),O(n.sprites.back_default),g(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()(),function(){return e.abort()}}),[t.name]),_?Object(n.jsxs)("li",{className:"card",children:[Object(n.jsxs)("div",{className:"card__sprite-row",children:[Object(n.jsx)("img",{className:"card__sprite",src:s,alt:"front facing sprite for ".concat(t.name)}),Object(n.jsx)("img",{className:"card__sprite",src:u,alt:"back facing sprite for ".concat(t.name)})]}),Object(n.jsx)("h2",{className:"card__heading",children:d(t.name)}),Object(n.jsx)(i.b,{className:"card__button",to:"/pokemon/".concat(t.name),children:"View Details"})]}):Object(n.jsx)("li",{className:"card",children:Object(n.jsx)(h,{})})},m=function(e){var t=e.direction,c=e.pageChange;return Object(n.jsx)("i",{className:"pagination__icon pagination__icon--".concat(t," fas fa-chevron-").concat(t),onClick:c})},x=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!1),o=Object(f.a)(s,2),i=o[0],j=o[1],l=Object(r.useState)("https://pokeapi.co/api/v2/pokemon"),u=Object(f.a)(l,2),d=u[0],x=u[1],_=Object(r.useState)(""),g=Object(f.a)(_,2),k=g[0],v=g[1],N=Object(r.useState)(""),w=Object(f.a)(N,2),S=w[0],C=w[1];Object(r.useEffect)((function(){var e=new AbortController;return j(!1),function(){var e=Object(p.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c.next),C(c.previous),a(c.results),j(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),function(){return e.abort()}}),[d]);return i?Object(n.jsxs)("div",{className:"pokemon",children:[Object(n.jsx)("ul",{className:"pokemon__list",children:c.map((function(e){return Object(n.jsx)(O,{pokemon:e},e.name)}))}),S&&Object(n.jsx)(m,{direction:"left",pageChange:S?function(){return x(S)}:null}),k&&Object(n.jsx)(m,{direction:"right",pageChange:k?function(){return x(k)}:null})]}):Object(n.jsx)(h,{})},_=function(e){return console.log(e),Object(n.jsxs)("div",{children:[Object(n.jsx)(i.b,{to:"/",children:"Go back"}),Object(n.jsxs)("p",{children:["Welcome to PokemonDetails page for ",d(e.match.params.name),"!"]})]})},g=function(){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," all rights reserved. designed and built and andrew shearer"]}),Object(n.jsxs)("div",{className:"footer__icon-row",children:[Object(n.jsx)("a",{href:"https://github.com/andrews1022/pokeapi-react-router",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("i",{className:"footer__icon fab fa-github"})}),Object(n.jsx)("a",{href:"https://twitter.com/andrew_devsrc",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("i",{className:"footer__icon fab fa-twitter"})})]})]})},k=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(n.jsx)(j.a,{path:"/pokemon/:name",component:_})]}),Object(n.jsx)(g,{})]})},v=(c(30),function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(k,{})})});o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1cb3497c.chunk.js.map