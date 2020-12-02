(this["webpackJsonpreact-seo-friendly-spa-template"]=this["webpackJsonpreact-seo-friendly-spa-template"]||[]).push([[0],{53:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(1),c=s.n(n),a=s(37),r=(s(53),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"content",children:"insert CSE and HCDE logo"})})}),o=s(12),l=Object.freeze({Home:{path:"/",exact:!0,displayName:"Home",activeClassName:"is-active",icon:"home",metaInfo:{title:"HCI Community Analytics",description:"Home page description - limit of 160 characters (try for 150-155)."}},About:{path:"/about",exact:!0,displayName:"About",activeClassName:"is-active",icon:"info",metaInfo:{title:"About | HCI Community Analytics",description:"About page description - limit of 160 characters (try for 150-155)."}}}),m=function(){return Object(i.jsx)("nav",{role:"navigation",className:"navbar","aria-label":"main navigation",children:Object(i.jsxs)("div",{className:"navbar-wrapper",children:[Object(i.jsx)("div",{className:"brand-wrapper",children:"Insert Logo Here"}),Object(i.jsxs)("div",{className:"navbar-routes",children:[Object(i.jsx)(o.b,{className:"navbar-item",to:l.Home.path,exact:l.Home.exact,activeClassName:l.Home.activeClassName,children:Object(i.jsx)("span",{children:l.Home.displayName})}),Object(i.jsx)(o.b,{className:"navbar-item",to:l.About.path,exact:l.About.exact,activeClassName:l.About.activeClassName,children:Object(i.jsx)("span",{children:l.About.displayName})})]})]})})},d=s(38),u=c.a.memo((function(e){var t=e.title,s=e.description;return Object(i.jsxs)(d.a,{children:[Object(i.jsx)("title",{children:t}),Object(i.jsx)("meta",{name:"og:title",content:t}),Object(i.jsx)("meta",{name:"description",content:s}),Object(i.jsx)("meta",{name:"og:description",content:s})]})}));u.displayName="MetaInfo";var j=u,b=s(20),p=function(){var e;Object(n.useEffect)((function(){"/404"!==window.location.pathname&&(window.location.href="/404")}),[]);var t="notification tile is-child is-danger ".concat("/404"===(null===(e=window)||void 0===e?void 0:e.location.pathname)?"rubberBand-animation":"hide");return Object(i.jsx)("section",{className:"container view-wrapper",children:Object(i.jsx)("div",{className:"tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile",children:Object(i.jsxs)("div",{className:t,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{icon:"exclamation-circle",size:"2x"}),Object(i.jsx)("span",{className:"title",children:"404 Not Found"})]}),Object(i.jsx)("p",{className:"subtitle",children:"The requested page could not be found."})]})})})},h=s(45),x=s(30),O=s(31),v=s(41);function f(){var e=Object(x.a)(["\n  display: block;\n  color: #61dafb;\n  font-size: 1.75em;\n  padding-left: 0.1rem;\n  margin: 0.75rem auto auto auto;\n"]);return f=function(){return e},e}function g(){var e=Object(x.a)(["\n  width: 3.5rem;\n  z-index: 9999;\n  display: block;\n  height: 3.5rem;\n  right: 1.25rem;\n  cursor: pointer;\n  position: fixed;\n  user-select: none;\n  border-radius: 50%;\n  -webkit-touch-callout: none;\n  background: rgb(37, 40, 47);\n  -webkit-tap-highlight-color: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;\n  transition: opacity 0.4s ease, bottom 0.4s ease;\n  bottom: ",";\n  opacity: ",";\n"]);return g=function(){return e},e}var N={delay:5,duration:500,smooth:"easeInOutCubic"},w=O.a.a(g(),(function(e){return e.$show?"1.25rem":"-3.5rem"}),(function(e){return e.$show?1:0})),y=Object(O.a)(b.a)(f()),A=function(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!1),s=Object(h.a)(t,2),c=s[0],a=s[1];return Object(n.useEffect)((function(){var t=function(){var t=window.scrollY||window.pageYOffset;!e.current&&t>100?(e.current=!0,a(e.current)):0===t&&(e.current=!1,a(e.current))};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),Object(i.jsx)(w,{$show:c,role:"button","aria-label":"BackToTop",onClick:function(){return v.animateScroll.scrollToTop(N)},children:Object(i.jsx)(y,{icon:"angle-double-up"})})},C=function(e){var t=e.children;return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(m,{}),t,Object(i.jsx)(A,{}),Object(i.jsx)(r,{})]})},I=s(8),k={typescript:{description:"TypeScript + TSX"},css:{description:"UI styled with Bulma CSS + SASS + Font Awesome 5 (svg-core)"},pwa:{description:"Configured as a (PWA) Progressive Web App"},reacthelmet:{description:"Meta tags dynamically handled per route using",packageName:"react-helmet"},reactga:{description:"Google Analytics ready to go and easily configurable using",packageName:"react-ga"},prerender:{description:"Configured to serve prerendered html using",packageName:"react-snapshot"}},H=function(){Object(n.useMemo)((function(){return Object.keys(k).map((function(e){return k[e]}))}),[]);return Object(i.jsxs)("div",{className:"view-wrapper",children:[Object(i.jsx)(j,Object(I.a)({},l.Home.metaInfo)),Object(i.jsxs)("section",{className:"container dashboard-content",children:[Object(i.jsxs)("div",{className:"columns",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"title",children:"Lorem Ipsum"}),Object(i.jsx)("div",{className:"content",children:"Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex."})]}),Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("img",{src:"https://miro.medium.com/max/2978/1*rmq7bd3GFjcwfXtkrBQaPQ.png"})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"columns",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Community Followers"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("p",{children:["Insert Waffle Chart and info here",Object(i.jsx)("img",{src:"https://i.imgur.com/ZWMG58P.png"})]})})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Average Followers"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("p",{children:["Insert Waffle Chart and info here",Object(i.jsx)("img",{src:"https://i.imgur.com/W7ABxos.png"})]})})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Average Downstream Audience"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("p",{children:["Insert Waffle Chart and info here",Object(i.jsx)("img",{src:"https://i.imgur.com/VWjwhus.png"})]})})]})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"columns",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Follower Breakdowns"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("div",{className:"columns",children:[Object(i.jsxs)("div",{className:"column",children:["My Followers",Object(i.jsx)("img",{src:"https://i.imgur.com/UuBv2ob.png"})]}),Object(i.jsxs)("div",{className:"column",children:["My Downstream Audience",Object(i.jsx)("img",{src:"https://i.imgur.com/QJ04ATd.png"})]})]})})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Tweet Engagement"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("p",{children:["Insert Waffle Chart and info here",Object(i.jsx)("img",{src:"https://i.imgur.com/tzr4R8C.png"})]})})]})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"columns",children:Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"My Tweets"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("p",{children:"Insert Waffle Chart and info here"})})]})}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"columns",children:Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"My Followers"}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("p",{children:"Insert Waffle Chart and info here"})})]})}),Object(i.jsx)("hr",{})]})]})},W=function(){return Object(i.jsx)("div",{className:"container view-wrapper",children:Object(i.jsxs)("section",{className:"container dashboard-content",children:[Object(i.jsx)(j,Object(I.a)({},l.About.metaInfo)),Object(i.jsx)("div",{className:"columns",children:Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"title",children:"About the Project"}),Object(i.jsx)("div",{className:"content",children:"Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix. Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex."})]})}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"columns",children:Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("p",{className:"title",children:"About the Team"})})}),Object(i.jsxs)("div",{className:"columns",children:[Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Spencer Williams"}),Object(i.jsxs)("div",{className:"content",children:["PhD Student ",Object(i.jsx)("br",{}),"UW Human Centered Design and Engineering"]})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Gary Hsieh"}),Object(i.jsxs)("div",{className:"content",children:["Associate Professor ",Object(i.jsx)("br",{}),"UW Human Centered Design and Engineering"]})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Katharina Reinecke"}),Object(i.jsxs)("div",{className:"content",children:["Associate Professor ",Object(i.jsx)("br",{}),"UW Computer Science and Engineering"]})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Keri Mallari"}),Object(i.jsxs)("div",{className:"content",children:["PhD Student ",Object(i.jsx)("br",{}),"UW Human Centered Design and Engineering"]})]}),Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"subtitle",children:"Carol Lei"}),Object(i.jsxs)("div",{className:"content",children:["Undergraduate Student ",Object(i.jsx)("br",{}),"UW Human Centered Design and Engineering"]})]})]})]})})},E=s(21);E.a.initialize("UA-0000000-0",{gaOptions:{cookieFlags:"max-age=7200;secure;samesite=none"}});var S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=function(e){E.a.set(Object(I.a)({page:e},t)),E.a.pageview(e)};return function(t){var c=t.location.pathname;return Object(n.useEffect)((function(){s(c)}),[c]),Object(i.jsx)(e,Object(I.a)({},t))}},q=s(3),P=function(){return Object(i.jsx)(C,{children:Object(i.jsxs)(q.c,{children:[Object(i.jsx)(q.a,{path:l.Home.path,component:S(H),exact:l.Home.exact}),Object(i.jsx)(q.a,{path:l.About.path,component:S(W),exact:l.About.exact}),Object(i.jsx)(q.a,{component:p})]})})},D=s(16),M=s(13),T=s(17);D.b.add(M.b,T.c,T.a,T.b,T.d,M.e,M.a,M.d,M.c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(a.render)(Object(i.jsx)(o.a,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.059e55a5.chunk.js.map