(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(8),c=n.n(s),a=n(6),i=n(12),o=n(31),l=n.n(o),u=n.p+"static/media/logo.e4a3598f.svg",j=n(10),d=n(15),b=n(3),O="SET_IS_MOBILE",f="SET_SCROLL_TO",h="toAboutBlock",p="toContactBlock",v="toTrainersBlock",x="toServicesBlock",m="toNewsBlock",g={isMobile:null,scrollTo:""},_=function(e){return{type:O,isMobile:e}},S=function(e){return{type:f,scrollTo:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{isMobile:t.isMobile});case f:return Object(b.a)(Object(b.a)({},e),{},{scrollTo:t.scrollTo});default:return e}},N=n(27),I=n.n(N),y=n(1),E=Object(a.b)((function(e){return{isMobile:e.navbar.isMobile,isTrainersLoading:e.trainers.loading,isPostsLoading:e.posts.loading,isServicesLoading:e.services.loading}}),(function(e){return{setScrollTo:function(t){return e(function(e){return function(t){t(S(e)),setTimeout((function(){t(S(null))}),500)}}(t))}}}))((function(e){var t=e.isMobile,n=e.setScrollTo,s=e.isTrainersLoading,c=e.isPostsLoading,a=e.isServicesLoading,i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(r.useState)(""),O=Object(j.a)(b,2),f=O[0],g=O[1],_=Object(r.useRef)(null),S=Object(r.useRef)(null),T=function(){return u(!l)};Object(r.useEffect)((function(){t?l?(_.current.style.display="block",S.current.style.display="flex"):(_.current.style.display="none",S.current.style.display="none"):(_.current.style.display="none",S.current.style.display="flex",u(!1))}),[l,t]);var N=function(e){setTimeout((function(){g(e)}),100),u(!1)};return Object(r.useEffect)((function(){s||c||a||n(f)}),[f,s,c,a]),Object(y.jsxs)("div",{className:I.a.Navbar,children:[Object(y.jsxs)("div",{ref:S,className:I.a.Tabs,children:[Object(y.jsx)(d.b,{onClick:function(){return N(h)},to:"/",children:"About us"}),Object(y.jsx)(d.b,{onClick:function(){return N(p)},to:"/",children:"Contact"}),Object(y.jsx)(d.b,{onClick:function(){return N(v)},to:"/",children:"Trainers"}),Object(y.jsx)(d.b,{onClick:function(){return N(x)},to:"/",children:"Services"}),Object(y.jsx)(d.b,{onClick:function(){return N(m)},to:"/",children:"News"}),Object(y.jsx)(d.b,{onClick:function(){return u(!1)},to:"/profile",children:"Account"})]}),Object(y.jsx)("div",{ref:_,onClick:T,className:I.a.Layout}),Object(y.jsx)("div",{className:I.a.Burger,children:Object(y.jsx)("i",{onClick:T,className:"material-icons",style:{fontSize:"30px"},children:l?"close":"dehaze"})})]})})),P=function(e){return Object(y.jsx)("div",{className:l.a.Header,children:Object(y.jsxs)("div",{className:l.a.HeaderInner,children:[Object(y.jsx)("div",{className:l.a.Logo,children:Object(y.jsx)(i.a,{src:u})}),Object(y.jsx)(E,{})]})})},w=n(5),A=n(32),k=n.n(A),C=n(25),R=n.n(C),H=n.p+"static/media/twitter_icon.00edc5ca.svg",M=n.p+"static/media/insta_icon.9982c8da.svg",L=n.p+"static/media/face_icon.9e1acef7.svg",B=n.p+"static/media/linkedin_icon.cfa9ada5.svg",D=function(e){var t=new Date(e),n=new Date(t.getTime()-6e4*t.getTimezoneOffset()).toString().split(" ");return"".concat(n[2]," ").concat(n[1],", ").concat(n[3])},U=function(e){var t=e.post,n=(t.category,t.title),r=t.image,s=t.content,c=t.published,a=D(c);return Object(y.jsxs)("div",{className:R.a.Post,children:[Object(y.jsxs)("div",{className:R.a.Data,children:[Object(y.jsx)("h3",{children:n}),Object(y.jsx)("h5",{children:a}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:s}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:R.a.Image,children:Object(y.jsx)("img",{src:r,alt:""})}),Object(y.jsx)("div",{className:R.a.Buttons,children:Object(y.jsxs)("div",{className:R.a.ButtonsInner,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:L}),Object(y.jsx)(i.a,{src:B})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"comment"}),Object(y.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"favorite_border"})]})]})})]})},F=n(17),J=n(58),z="https://sport-club-dev.herokuapp.com/api",W=n.n(J).a.create({baseUrl:z,responseType:"json",headers:{"Content-Type":"application/json"}}),V="SET_POSTS_SUCCESS",q="SET_POSTS_FAILURE",G="SET_POSTS_STARTED",Y={posts:[],loading:!1,error:null},Q=function(e){return{type:V,posts:e}},X=function(){return{type:G}},K=function(e){return{type:q,payload:{error:e}}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case V:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,posts:Object(F.a)(t.posts)});case q:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},$=function(e){var t=document.querySelector("#".concat(Kt));t.scrollTo({top:e-t.getBoundingClientRect().top,behavior:"smooth",block:"center"})},ee=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.posts.loading,posts:e.posts.posts}}),(function(e){return{setPosts:function(){e((function(e){e(X()),W.get("".concat(z,"/posts/")).then((function(t){var n=t.data;e(Q(n))})).catch((function(t){e(K(t.message))}))}))}}}))((function(e){var t=e.scrollTo,n=e.setPosts,s=e.loading,c=e.posts,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){t===m&&$(a.current.offsetTop)}),[t]),Object(r.useEffect)((function(){n()}),[]),Object(y.jsxs)("div",{ref:a,className:k.a.Blog,children:[Object(y.jsxs)("div",{className:k.a.Header,children:[Object(y.jsx)("h2",{children:"Our Blog"}),Object(y.jsx)("p",{children:"Welcome to our blog. Here we will post news and updates"})]}),Object(y.jsx)("div",{className:k.a.Cards,children:s?Object(y.jsx)("div",{}):c.map((function(e){return Object(y.jsx)(U,{post:e},e.id)}))})]})})),te=n(28),ne=n.n(te),re=n.p+"static/media/intro.7e7cb310.png",se=function(){return Object(y.jsx)("div",{className:ne.a.Intro,children:Object(y.jsxs)("div",{className:ne.a.IntroInner,children:[Object(y.jsx)("div",{className:ne.a.Image,children:Object(y.jsx)("img",{src:re,alt:""})}),Object(y.jsxs)("div",{className:ne.a.Text,children:[Object(y.jsx)("p",{children:'"We had a great collaboration. Really easy to work with and greate style."'}),Object(y.jsx)("p",{children:"Larry Sheet, CEO of Hasta la Vista"})]})]})})},ce=n(23),ae=n.n(ce),ie=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo}}))((function(e){var t=e.scrollTo,n=Object(r.useRef)(null),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){t===h?$(n.current.offsetTop):t===p&&$(s.current.offsetTop)}),[t]),Object(y.jsxs)("div",{className:ae.a.MoreInfo,children:[Object(y.jsx)("div",{ref:n,className:ae.a.Info,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"BEST GYM ON MARS"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"Gustavslung 99"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"167-51 BROMMA"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"Tel: +48 589 654 123"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"info@bgom.com"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:ae.a.Icons,children:[Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:L}),Object(y.jsx)(i.a,{src:B})]})]})}),Object(y.jsx)("div",{ref:s,className:ae.a.Question,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Have a question?"}),Object(y.jsxs)("div",{className:ae.a.Inputs,children:[Object(y.jsx)("input",{placeholder:"Your name"}),Object(y.jsx)("input",{placeholder:"Your mail"}),Object(y.jsx)("input",{placeholder:"Your question"})]}),Object(y.jsx)("div",{className:ae.a.Submit,children:Object(y.jsx)("span",{children:"Send"})})]})})]})})),oe=n(33),le=n.n(oe),ue=n(29),je=n.n(ue),de=function(e){var t=e.pass,n=e.buyPass,r=t.name,s=t.title,c=t.image,a=(t.descripion,t.pricePerMonth),i=t.visitsCount;return Object(y.jsxs)("div",{className:je.a.Service,children:[Object(y.jsx)("div",{className:je.a.Image,children:Object(y.jsx)("img",{src:c,alt:""})}),Object(y.jsxs)("div",{className:je.a.Data,children:[Object(y.jsx)("h4",{children:r}),Object(y.jsx)("h5",{children:s}),Object(y.jsx)("br",{}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Price per month: "})," ",a]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Visits count: "})," ",i]}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:je.a.Button,onClick:function(){return n(r)},children:"BUY"})]})},be="SET_SUBSCRIPTION_SUCCESS",Oe="SET_SUBSCRIPTION_FAILURE",fe="SET_SUBSCRIPTION_STARTED",he={subscription:null,loading:!1,error:null},pe=function(e){return{type:be,subscription:e}},ve=function(){return{type:fe}},xe=function(e){return{type:Oe,error:e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case be:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,subscription:t.subscription});case Oe:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},ge="SET_PASSES_SUCCESS",_e="SET_PASSES_FAILURE",Se="SET_PASSES_STARTED",Te="SET_BUYING_STARTED",Ne="SET_BUYING_SUCCESS",Ie="SET_REDIRECT_TO",ye={passes:[],loading:!1,isBuying:!1,error:null,redirectTo:null},Ee=function(e){return{type:ge,passes:e}},Pe=function(e){return{type:Ie,redirectTo:e}},we=function(){return{type:Se}},Ae=function(){return{type:Te}},ke=function(){return{type:Ne}},Ce=function(e){return{type:_e,payload:{error:e}}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case Te:return Object(b.a)(Object(b.a)({},e),{},{isBuying:!0});case Ne:return Object(b.a)(Object(b.a)({},e),{},{isBuying:!1});case ge:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,passes:Object(F.a)(t.passes)});case _e:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});case Ie:return Object(b.a)(Object(b.a)({},e),{},{redirectTo:t.redirectTo});default:return e}},He=(n(98),function(){return Object(y.jsx)("div",{className:"spinner",children:Object(y.jsxs)("div",{className:"spinner__inner",children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]})})}),Me=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.services.loading,isBuying:e.services.isBuying,passes:e.services.passes,redirectTo:e.services.redirectTo}}),(function(e){return{setPassesHandler:function(){e((function(e){e(we()),W.get("".concat(z,"/passes/")).then((function(t){var n=t.data;e(Ee(n))})).catch((function(t){e(Ce(t.message))}))}))},buyPassHandler:function(t){e(function(e){return function(t){t(Ae()),W.post("".concat(z,"/users/me/subscription/"),JSON.stringify({card:e}),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(){W.get("".concat(z,"/users/me/subscription/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(e){var n=e.data;t(pe(n)),t(ke()),t(Pe("/profile/subscriptions")),setTimeout((function(){t(Pe(null))}),100)}))})).catch((function(e){t(Ce(e.message)),t(ke()),t(Pe("/profile/subscriptions")),setTimeout((function(){t(Pe(null))}),100)}))}}(t))}}}))((function(e){var t=Object(w.f)(),n=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.scrollTo===x&&$(n.current.offsetTop)}),[e.scrollTo]),Object(r.useEffect)((function(){e.setPassesHandler()}),[]),Object(r.useEffect)((function(){e.redirectTo&&t.push(e.redirectTo)}),[e.redirectTo]),Object(y.jsxs)("div",{ref:n,className:le.a.Services,children:[e.showHeader&&Object(y.jsxs)("div",{className:le.a.Header,children:[Object(y.jsx)("h2",{children:"Services"}),Object(y.jsx)("p",{children:"Meet our Services of happy creatives. We love what we do and we would love to work with you."})]}),Object(y.jsx)("div",{className:le.a.Cards,children:e.loading?Object(y.jsx)("div",{}):Object(y.jsxs)(y.Fragment,{children:[e.isBuying&&Object(y.jsx)(He,{}),e.passes.map((function(t){return Object(y.jsx)(de,{pass:t,buyPass:e.buyPassHandler},t.id)}))]})})]})})),Le=n(34),Be=n.n(Le);var De=function(e){return new Promise((function(t,n){if("string"===typeof e)c(e).then((function(e){return t(e)}));else{e.length||t(e);for(var r=function(n){c(e[n].picture).then((function(r){e[n].params=r,n+1===e.length&&t(e)}))},s=0;s<e.length;++s)r(s)}function c(e){var t=document.createElement("img");return t.src=e,new Promise((function(e){t.onload=function(){e(t.width>=t.height?{height:"100%",minWidth:"100%",width:"none",minHeight:"none"}:{height:"none",minWidth:"none",width:"100%",minHeight:"100%"})}}))}}))},Ue=n(35),Fe=n.n(Ue),Je=function(e){var t=e.trainer,n=t.firstName,s=t.lastName,c=t.rank,a=t.avatar,i=Object(r.useState)(null),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(r.useEffect)((function(){De(a).then((function(e){return u(e)}))}),[]),Object(y.jsxs)("div",{className:Fe.a.Trainer,children:[Object(y.jsx)("div",{className:Fe.a.Image,children:Object(y.jsx)("img",{style:l,src:a,alt:""})}),Object(y.jsxs)("div",{className:Fe.a.Data,children:[Object(y.jsxs)("h5",{children:[n," ",s]}),Object(y.jsx)("h6",{children:c})]})]})},ze="SET_TRAINERS_SUCCESS",We="SET_TRAINERS_FAILURE",Ve="SET_TRAINERS_STARTED",qe={trainers:[],loading:!1,error:null},Ge=function(e){return{type:ze,trainers:e}},Ye=function(){return{type:Ve}},Qe=function(e){return{type:We,payload:{error:e}}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case ze:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,trainers:Object(F.a)(t.trainers)});case We:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},Ke=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.trainers.loading,trainers:e.trainers.trainers}}),(function(e){return{setTrainers:function(){return e((function(e){e(Ye()),W.get("".concat(z,"/trainers/")).then((function(t){var n=t.data;e(Ge(n))})).catch((function(t){e(Qe(t.message))}))}))}}}))((function(e){var t=e.scrollTo,n=e.loading,s=e.trainers,c=e.setTrainers,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){t===v&&$(a.current.offsetTop)}),[t]),Object(r.useEffect)((function(){c()}),[]),Object(y.jsxs)("div",{ref:a,className:Be.a.Team,children:[Object(y.jsxs)("div",{className:Be.a.Header,children:[Object(y.jsx)("h2",{children:"Team"}),Object(y.jsx)("p",{children:"Meet our team of happy creatives. We love what we do and we would love to work with you."})]}),Object(y.jsx)("div",{className:Be.a.Trainers,children:n?Object(y.jsx)("div",{}):s.map((function(e){return Object(y.jsx)(Je,{trainer:e},e.id)}))})]})})),Ze=n(42),$e=n.n(Ze),et=Object(a.b)((function(e){return{isTrainersLoading:e.trainers.loading,isPostsLoading:e.posts.loading,isServicesLoading:e.services.loading}}))((function(e){var t=e.isTrainersLoading,n=e.isPostsLoading,r=e.isServicesLoading;return Object(y.jsx)("div",{className:$e.a.HomePage,children:Object(y.jsxs)("div",{className:$e.a.HomePageInner,children:[(t||n||r)&&Object(y.jsx)(He,{}),Object(y.jsx)(ie,{}),Object(y.jsx)(se,{}),Object(y.jsx)(Ke,{}),Object(y.jsx)(Me,{showHeader:!0}),Object(y.jsx)(ee,{})]})})})),tt=n(59),nt=n.n(tt),rt="LOGIN_SUCCESS",st="LOGIN_FAILURE",ct="LOGIN_STARTED",at={token:null,refresh:null,loading:!1,error:null},it=function(){return function(e){e(jt())}},ot=function(e,t){return{type:rt,token:e,refresh:t}},lt=function(){return{type:ct}},ut=function(e){return{type:st,error:e}},jt=function(){return{type:"LOGOUT"}},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case rt:return localStorage.setItem("token",JSON.stringify({token:t.token,refresh:t.refresh})),Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,token:t.token,refresh:t.refresh});case st:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},bt=n(43),Ot=n.n(bt),ft=Object(a.b)((function(e){return{subscription:e.subscriptions.subscription,loading:e.subscriptions.loading,error:e.subscriptions.error}}),(function(e){return{setSubscriptionHandler:function(){e((function(e){e(ve()),W.get("".concat(z,"/users/me/subscription/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;e(pe(n))})).catch((function(t){e(xe(t))}))}))}}}))((function(e){var t=e.setSubscriptionHandler,n=e.error,s=e.loading,c=e.subscription;return Object(r.useEffect)((function(){t()}),[]),Object(y.jsx)("div",{className:Ot.a.Subscriptions,children:s?Object(y.jsx)(He,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{children:"Your subscription"}),Object(y.jsx)("div",{className:Ot.a.Subscription,children:c?Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:c.card}),Object(y.jsx)("div",{children:c.visits_count}),Object(y.jsx)("div",{children:c.purchased}),Object(y.jsx)("div",{children:c.expires})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{children:null===n||void 0===n?void 0:n.response.data.detail}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"But you also can buy it"}),Object(y.jsx)(Me,{showHeader:!1})]})]})})]})})})),ht="SET_RESERVATIONS_SUCCESS",pt="SET_RESERVATIONS_FAILURE",vt="SET_RESERVATIONS_STARTED",xt={reservations:[],loading:!1,error:null},mt=function(e){e(_t()),W.get("".concat(z,"/users/me/reservations/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;e(gt(n))})).catch((function(t){e(St(t.response.data))}))},gt=function(e){return{type:ht,reservations:e}},_t=function(){return{type:vt}},St=function(e){return{type:pt,error:e}},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case ht:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,reservations:t.reservations});case pt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},Nt=n(24),It=n.n(Nt),yt=n(130),Et=function(e){return new Date(Date.parse(e)-6e4*new Date(e).getTimezoneOffset()).toISOString()},Pt=Object(a.b)((function(e){return{reservations:e.reservations.reservations,loading:e.reservations.loading,error:e.reservations.error}}),(function(e){return{setReservationsHandler:function(){e((function(e){mt(e)}))},orderReservationHandler:function(t){e(function(e){return function(t){t(_t()),W.post("".concat(z,"/users/me/reservations/"),JSON.stringify({reservedStart:e[0],reservedEnd:e[1]}),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(){mt(t)})).catch((function(e){t(St(e.response.data))}))}}(t))}}}))((function(e){var t=e.setReservationsHandler,n=e.error,s=e.loading,c=e.reservations,a=e.orderReservationHandler,i=Object(r.useState)(Et(new Date(Date.now()+864e5)).replace(/\:..\..*$/,"")),o=Object(j.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(Et(new Date(Date.now()+9006e4)).replace(/\:..\..*$/,"")),b=Object(j.a)(d,2),O=b[0],f=b[1],h=Object(r.useState)([Et(l),Et(O)]),p=Object(j.a)(h,2),v=p[0],x=p[1];return Object(r.useEffect)((function(){t()}),[]),Object(r.useEffect)((function(){x([Et(l),Et(O)])}),[l,O]),Object(y.jsx)("div",{className:It.a.Subscriptions,children:s?Object(y.jsx)(He,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{children:"Your reservations"}),n&&Object(y.jsx)("div",{style:{color:"red"},children:n.subscription||n.reservedRange}),Object(y.jsxs)("form",{className:It.a.container,noValidate:!0,children:[n&&Object(y.jsx)("div",{style:{color:"red"},children:n.reservedStart}),Object(y.jsx)(yt.a,{id:"datetime-local",label:"Reservation start",type:"datetime-local",defaultValue:l,className:It.a.textField,onChange:function(e){return u(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(y.jsxs)("form",{className:It.a.container,noValidate:!0,children:[n&&Object(y.jsx)("div",{style:{color:"red"},children:n.reservedEnd}),Object(y.jsx)(yt.a,{id:"datetime-local",label:"Reservation end",type:"datetime-local",defaultValue:O,className:It.a.textField,onChange:function(e){return f(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(y.jsx)("button",{onClick:function(){return a(v)},children:"Order"}),Object(y.jsx)("div",{className:It.a.Subscription,children:c.length?c.map((function(e){return Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsxs)("div",{children:[e.trainer," |\xa0"]}),Object(y.jsxs)("div",{children:[e.status," |\xa0"]}),Object(y.jsxs)("div",{children:[e.reservedStart," |\xa0"]}),Object(y.jsxs)("div",{children:[e.reservedEnd," |\xa0"]}),Object(y.jsx)("div",{children:e.updated})]},e.id)})):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{children:null===n||void 0===n?void 0:n.detail})})})]})})})),wt="SET_PROFILE_DATA_SUCCESS",At="SET_PROFILE_DATA_FAILURE",kt="SET_PROFILE_DATA_STARTED",Ct={profileData:{},loading:!1,error:null},Rt=function(e){return{type:wt,profileData:e}},Ht=function(){return{type:kt}},Mt=function(e){return{type:At,error:e}},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case kt:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case wt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,profileData:t.profileData});case At:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},Bt=n(19),Dt=n.n(Bt),Ut="subscriptions",Ft="reservations",Jt=function(){var e=Object(w.g)().topicId;return e===Ut?Object(y.jsx)(ft,{}):e===Ft?Object(y.jsx)(Pt,{}):Object(y.jsx)("div",{})},zt=Object(a.b)((function(e){return{profileData:e.myProfile.profileData,loading:e.myProfile.loading,error:e.myProfile.error}}),(function(e){return{logoutHandler:function(){e(it())},setProfileDataHandler:function(){e((function(e){e(Ht()),W.get("".concat(z,"/users/me/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;De(n.avatar).then((function(t){n.imageParams=t,e(Rt(n))}))})).catch((function(t){if(401===t.response.status){var n=JSON.parse(localStorage.getItem("token")).refresh;W.post("".concat(z,"/users/login/refresh/"),{refresh:n}).then((function(t){var r=t.data;e(ot(r.access,n))})).catch((function(e){it()}))}else e(Mt(t))}))}))}}}))((function(e){var t=e.logoutHandler,n=e.setProfileDataHandler,s=e.loading,c=e.profileData,a=(e.error,Object(w.f)()),i=a.location.pathname,o=Object(w.h)(),l=o.path,u=o.url;Object(r.useEffect)((function(){n()}),[]);return Object(y.jsxs)("div",{className:Dt.a.ProfileAccount,children:[Object(y.jsx)("div",{className:Dt.a.Navbar,children:Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:i===u?Dt.a.Active:void 0,to:u,children:"My\xa0profile"})})," /\xa0",Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:i==="".concat(u,"/").concat(Ut)?Dt.a.Active:void 0,to:"".concat(u,"/").concat(Ut),children:"Subscriptions"})})," /\xa0",Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:i==="".concat(u,"/").concat(Ft)?Dt.a.Active:void 0,to:"".concat(u,"/").concat(Ft),children:"Reservations"})})," /\xa0",Object(y.jsx)("span",{onClick:function(){t(),a.push("/profile")},children:"Log\xa0out"})]})}),Object(y.jsx)("div",{className:Dt.a.Main,children:Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:l,children:s?Object(y.jsx)(He,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:Dt.a.Avatar,children:Object(y.jsx)("div",{className:Dt.a.AvatarInner,children:Object(y.jsx)("img",{style:c.imageParams,src:c.avatar,alt:""})})}),Object(y.jsx)("div",{className:Dt.a.Menu,children:Object(y.jsx)("div",{className:Dt.a.MenuInner,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"First name"}),Object(y.jsx)("input",{value:c.firstName}),Object(y.jsx)("span",{children:"Last name"}),Object(y.jsx)("input",{value:c.lastName}),Object(y.jsx)("span",{children:"Email"}),Object(y.jsx)("input",{value:c.email}),Object(y.jsx)("span",{children:"Phone"}),Object(y.jsx)("input",{value:c.phone}),Object(y.jsx)("div",{className:Dt.a.SaveData,children:Object(y.jsx)("span",{children:"Save"})})]})})})]})}),Object(y.jsx)(w.a,{path:"".concat(l,"/:topicId"),component:Jt})]})})]})})),Wt=n(20),Vt=n(13),qt=n.n(Vt),Gt=Object(a.b)((function(e){return{loading:e.auth.loading,error:e.auth.error}}),(function(e){return{loginHandler:function(t){e(function(e){return function(t){t(lt()),W.post("".concat(z,"/users/login/"),JSON.stringify({email:e.email,password:e.password})).then((function(e){var n=e.data;t(ot(n.access,n.refresh))})).catch((function(e){return t(ut(e))}))}}(t))},registerHandler:function(t){e(function(e){return function(t){t(lt()),W.post("".concat(z,"/users/register/"),JSON.stringify({email:e.email,firstName:e.firstName,lastName:e.lastName,phone:e.phone,password:e.password,password2:e.password2})).then((function(){W.post("".concat(z,"/users/login/"),JSON.stringify({email:e.email,password:e.password})).then((function(e){var n=e.data;t(ot(n.access,n.refresh))})).catch((function(e){return t(ut(e))}))})).catch((function(e){return t(ut(e))}))}}(t))}}}))((function(e){var t=e.loginHandler,n=e.registerHandler,s=e.loading,c=e.error,a=Object(r.useState)(!0),o=Object(j.a)(a,2),l=o[0],u=o[1],d=Object(r.useState)({email:"",firstName:"",password:"",password2:"",lastName:"",phone:""}),O=Object(j.a)(d,2),f=O[0],h=O[1],p=function(e){return h(Object(b.a)(Object(b.a)({},f),{},Object(Wt.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("div",{className:qt.a.ProfileAuth,children:[s&&Object(y.jsx)(He,{}),Object(y.jsxs)("h1",{children:["Sign ",l?"in":"up"]}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.detail}),Object(y.jsxs)("div",{className:qt.a.Inputs,children:[!l&&Object(y.jsxs)(y.Fragment,{children:[c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.firstName}),Object(y.jsx)("input",{onChange:p,name:"firstName",placeholder:"First name"}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.lastName}),Object(y.jsx)("input",{onChange:p,name:"lastName",placeholder:"Last name"}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.phone}),Object(y.jsx)("input",{onChange:p,name:"phone",placeholder:"Phone number"})]}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.email}),Object(y.jsx)("input",{onChange:p,name:"email",placeholder:"Email"}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.password}),Object(y.jsx)("input",{onChange:p,name:"password",type:"password",placeholder:"Password"}),c&&Object(y.jsx)("div",{className:qt.a.ErrorMessage,children:c.response.data.password2}),!l&&Object(y.jsx)("input",{onChange:p,type:"password",name:"password2",placeholder:"Repeat password"})]}),Object(y.jsx)("div",{onClick:function(){return l?t(f):n(f)},className:qt.a.Submit,children:"Submit"}),Object(y.jsxs)("div",{children:["Don't have an account? ",Object(y.jsxs)("span",{className:qt.a.SignUpLink,onClick:function(){return u(!l)},children:["Sign ",l?"up":"in"]})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:qt.a.MoreInfo,children:[Object(y.jsx)("span",{children:"Gustavslung 99"}),Object(y.jsx)("span",{children:"167-51 BROMMA"}),Object(y.jsx)("span",{children:"Tel: +48 589 654 123"}),Object(y.jsx)("span",{children:"info@bgom.com"}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:qt.a.Icons,children:[Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:L}),Object(y.jsx)(i.a,{src:B})]})]})]})})),Yt=Object(a.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.token;return Object(y.jsx)("div",{className:nt.a.ProfilePage,children:t?Object(y.jsx)(zt,{}):Object(y.jsx)(Gt,{})})})),Qt=n(60),Xt=n.n(Qt),Kt="BlockWithScroll",Zt=function(){var e=Object(r.useRef)(null);return Object(y.jsx)("div",{ref:e,className:Xt.a.Content,id:Kt,children:Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:"/",component:et}),Object(y.jsx)(w.a,{path:"/profile",component:Yt})]})})};n(100);var $t=Object(a.b)((function(e){return{isMobile:e.navbar.isMobile}}),(function(e){return{setIsMobile:function(t,n){e(function(e,t){return function(n){!1===e?t<=500&&n(_(!0)):!0===e?t>500&&n(_(!1)):n(_(t<=500))}}(t,n))},login:function(t,n){e(ot(t,n))}}}))((function(e){var t=JSON.parse(localStorage.getItem("token"));return t&&t.token&&t.refresh&&e.login(t.token,t.refresh),Object(r.useEffect)((function(){e.setIsMobile(e.isMobile,window.innerWidth),window.addEventListener("resize",(function(){return e.setIsMobile(e.isMobile,window.innerWidth)}))}),[]),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(P,{}),Object(y.jsx)(Zt,{})]})})),en=n(36),tn=n(61),nn=Object(en.b)({auth:dt,navbar:T,posts:Z,services:Re,trainers:Xe,myProfile:Lt,subscriptions:me,reservations:Tt}),rn=Object(en.c)((function(e,t){if("LOGOUT"===t.type){var n=e;e={navbar:n.navbar,posts:n.posts,services:n.services,trainers:n.trainers}}return nn(e,t)}),Object(en.a)(tn.a)),sn=(n(101),.01*window.innerHeight);document.documentElement.style.setProperty("--vh","".concat(sn,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),c.a.render(Object(y.jsx)(a.a,{store:rn,children:Object(y.jsx)(d.a,{children:Object(y.jsx)($t,{})})}),document.getElementById("root"))},13:function(e,t,n){e.exports={ProfileAuth:"ProfileAuth_ProfileAuth__2se0j",Inputs:"ProfileAuth_Inputs__kqwh6",Submit:"ProfileAuth_Submit__2n8CS",MoreInfo:"ProfileAuth_MoreInfo__1KfgS",Icons:"ProfileAuth_Icons__2fPx_",SignUpLink:"ProfileAuth_SignUpLink__3PHiJ",ErrorMessage:"ProfileAuth_ErrorMessage__2tPVF"}},19:function(e,t,n){e.exports={ProfileAccount:"ProfileAccount_ProfileAccount__1Fvow",Navbar:"ProfileAccount_Navbar__15ilB",Active:"ProfileAccount_Active__XUkGw",Main:"ProfileAccount_Main__1oShz",Avatar:"ProfileAccount_Avatar__3lyDr",Menu:"ProfileAccount_Menu__OAXTk",AvatarInner:"ProfileAccount_AvatarInner__2frLB",MenuInner:"ProfileAccount_MenuInner__5ZRws",SaveData:"ProfileAccount_SaveData__MlRy3"}},23:function(e,t,n){e.exports={MoreInfo:"MoreInfo_MoreInfo__358P0",Info:"MoreInfo_Info__Ed8FY",Question:"MoreInfo_Question__1pb6N",Inputs:"MoreInfo_Inputs__32TmR",Submit:"MoreInfo_Submit__16P4e",Icons:"MoreInfo_Icons__1lmL5"}},24:function(e,t,n){},25:function(e,t,n){e.exports={Post:"Post_Post__2t009",Data:"Post_Data__7r4AL",Image:"Post_Image__3I_v1",Buttons:"Post_Buttons__2Q9De",ButtonsInner:"Post_ButtonsInner__2f4pa"}},27:function(e,t,n){e.exports={Navbar:"Navbar_Navbar___kUbe",Tabs:"Navbar_Tabs__2qntK",Burger:"Navbar_Burger__Dtwv-",Layout:"Navbar_Layout__1HgXw"}},28:function(e,t,n){e.exports={Intro:"Intro_Intro__2vWWr",IntroInner:"Intro_IntroInner__zL9uS",Image:"Intro_Image__2T4aV",Text:"Intro_Text__2Lwi7"}},29:function(e,t,n){e.exports={Service:"Service_Service__37eW1",Image:"Service_Image__22E3H",Button:"Service_Button__inDSH"}},31:function(e,t,n){e.exports={Header:"Header_Header__1tkCI",HeaderInner:"Header_HeaderInner__1FhZh",Logo:"Header_Logo__1Tbom"}},32:function(e,t,n){e.exports={Blog:"Blog_Blog__2jXWN",Header:"Blog_Header__RzH7c",Cards:"Blog_Cards__23adM"}},33:function(e,t,n){e.exports={Services:"Services_Services__26yJL",Header:"Services_Header__1iwen",Cards:"Services_Cards__2yEKQ"}},34:function(e,t,n){e.exports={Team:"Team_Team__2rb9F",Header:"Team_Header__3thJc",Trainers:"Team_Trainers__3_4cL"}},35:function(e,t,n){e.exports={Trainer:"Trainer_Trainer__309eo",Image:"Trainer_Image__3M9Ba",Data:"Trainer_Data__3ZzrN"}},42:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__1sCBq",HomePageInner:"HomePage_HomePageInner__1AMyt"}},43:function(e,t,n){},59:function(e,t,n){e.exports={ProfilePage:"ProfilePage_ProfilePage__3mNrw"}},60:function(e,t,n){e.exports={Content:"Content_Content__diwnT"}},98:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.a92e5fed.chunk.js.map