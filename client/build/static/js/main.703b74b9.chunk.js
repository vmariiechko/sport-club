(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){e.exports={MoreInfo:"MoreInfo_MoreInfo__358P0",Info:"MoreInfo_Info__Ed8FY",Question:"MoreInfo_Question__1pb6N",Inputs:"MoreInfo_Inputs__32TmR",Submit:"MoreInfo_Submit__16P4e",Icons:"MoreInfo_Icons__1lmL5"}},15:function(e,t,n){e.exports={ProfilePage:"ProfilePage_ProfilePage__3mNrw",ProfilePageInner:"ProfilePage_ProfilePageInner__3rOWW",Avatar:"ProfilePage_Avatar__3b4gQ",Menu:"ProfilePage_Menu__1caNV",AvatarInner:"ProfilePage_AvatarInner__2bkP5",MenuInner:"ProfilePage_MenuInner__3uotb"}},17:function(e,t,n){e.exports={Post:"Post_Post__2t009",Data:"Post_Data__7r4AL",Image:"Post_Image__3I_v1",Buttons:"Post_Buttons__2Q9De",ButtonsInner:"Post_ButtonsInner__2f4pa"}},20:function(e,t,n){e.exports={Navbar:"Navbar_Navbar___kUbe",Tabs:"Navbar_Tabs__2qntK",Burger:"Navbar_Burger__Dtwv-",Layout:"Navbar_Layout__1HgXw"}},21:function(e,t,n){e.exports={Intro:"Intro_Intro__2vWWr",IntroInner:"Intro_IntroInner__zL9uS",Image:"Intro_Image__2T4aV",Text:"Intro_Text__2Lwi7"}},22:function(e,t,n){e.exports={Service:"Service_Service__37eW1",Image:"Service_Image__22E3H",Button:"Service_Button__inDSH"}},26:function(e,t,n){e.exports={Header:"Header_Header__1tkCI",HeaderInner:"Header_HeaderInner__1FhZh",Logo:"Header_Logo__1Tbom"}},27:function(e,t,n){e.exports={Blog:"Blog_Blog__2jXWN",Header:"Blog_Header__RzH7c",Cards:"Blog_Cards__23adM"}},28:function(e,t,n){e.exports={Services:"Services_Services__26yJL",Header:"Services_Header__1iwen",Cards:"Services_Cards__2yEKQ"}},29:function(e,t,n){e.exports={Team:"Team_Team__2rb9F",Header:"Team_Header__3thJc",Trainers:"Team_Trainers__3_4cL"}},30:function(e,t,n){e.exports={Trainer:"Trainer_Trainer__309eo",Image:"Trainer_Image__3M9Ba"}},36:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__1sCBq",HomePageInner:"HomePage_HomePageInner__1AMyt"}},50:function(e,t,n){e.exports={Content:"Content_Content__diwnT"}},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(23),r=n.n(s),a=n(6),i=n(11),o=n(26),l=n.n(o),j=n.p+"static/media/logo.e4a3598f.svg",u=n(16),d=n(13),b=n(5),O="SET_IS_MOBILE",f="SET_SCROLL_TO",h="toAboutBlock",p="toContactBlock",m="toTrainersBlock",x="toServicesBlock",_="toNewsBlock",v={isMobile:null,scrollTo:""},g=function(e){return{type:O,isMobile:e}},T=function(e){return{type:f,scrollTo:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{isMobile:t.isMobile});case f:return Object(b.a)(Object(b.a)({},e),{},{scrollTo:t.scrollTo});default:return e}},S=n(20),N=n.n(S),P=n(0),y=Object(a.b)((function(e){return{isMobile:e.navbar.isMobile}}),(function(e){return{setScrollTo:function(t){return e(function(e){return function(t){t(T(e)),setTimeout((function(){t(T(null))}),500)}}(t))}}}))((function(e){var t=e.isMobile,n=e.setScrollTo,s=Object(c.useState)(!1),r=Object(u.a)(s,2),a=r[0],i=r[1],o=Object(c.useRef)(null),l=Object(c.useRef)(null),j=function(){return i(!a)};Object(c.useEffect)((function(){t?a?(o.current.style.display="block",l.current.style.display="flex"):(o.current.style.display="none",l.current.style.display="none"):(o.current.style.display="none",l.current.style.display="flex",i(!1))}),[a,t]);var b=function(e){n(e),i(!1)};return Object(P.jsxs)("div",{className:N.a.Navbar,children:[Object(P.jsxs)("div",{ref:l,className:N.a.Tabs,children:[Object(P.jsx)(d.b,{onClick:function(){return b(h)},to:"/",children:"About us"}),Object(P.jsx)(d.b,{onClick:function(){return b(p)},to:"/",children:"Contact"}),Object(P.jsx)(d.b,{onClick:function(){return b(m)},to:"/",children:"Trainers"}),Object(P.jsx)(d.b,{onClick:function(){return b(x)},to:"/",children:"Services"}),Object(P.jsx)(d.b,{onClick:function(){return b(_)},to:"/",children:"News"}),Object(P.jsx)(d.b,{onClick:function(){return i(!1)},to:"/profile",children:"Account"})]}),Object(P.jsx)("div",{ref:o,onClick:j,className:N.a.Layout}),Object(P.jsx)("div",{className:N.a.Burger,children:Object(P.jsx)("i",{onClick:j,className:"material-icons",style:{fontSize:"30px"},children:a?"close":"dehaze"})})]})})),w=function(e){return Object(P.jsx)("div",{className:l.a.Header,children:Object(P.jsxs)("div",{className:l.a.HeaderInner,children:[Object(P.jsx)("div",{className:l.a.Logo,children:Object(P.jsx)(i.a,{src:j})}),Object(P.jsx)(y,{})]})})},E=n(3),M=n(27),H=n.n(M),B=n(17),C=n.n(B),k=n.p+"static/media/twitter_icon.00edc5ca.svg",A=n.p+"static/media/insta_icon.9982c8da.svg",R=n.p+"static/media/face_icon.9e1acef7.svg",L=n.p+"static/media/linkedin_icon.cfa9ada5.svg",W=function(e){var t=new Date(e),n=new Date(t.getTime()-6e4*t.getTimezoneOffset()).toString().split(" ");return"".concat(n[2]," ").concat(n[1],", ").concat(n[3])},D=function(e){var t=e.post,n=(t.category,t.title),c=t.image,s=t.content,r=t.published,a=W(r);return Object(P.jsxs)("div",{className:C.a.Post,children:[Object(P.jsxs)("div",{className:C.a.Data,children:[Object(P.jsx)("h3",{children:n}),Object(P.jsx)("h5",{children:a}),Object(P.jsx)("br",{}),Object(P.jsx)("p",{children:s}),Object(P.jsx)("br",{})]}),Object(P.jsx)("div",{className:C.a.Image,children:Object(P.jsx)("img",{src:c,alt:""})}),Object(P.jsx)("div",{className:C.a.Buttons,children:Object(P.jsxs)("div",{className:C.a.ButtonsInner,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(i.a,{src:k}),Object(P.jsx)(i.a,{src:A}),Object(P.jsx)(i.a,{src:R}),Object(P.jsx)(i.a,{src:L})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"comment"}),Object(P.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"favorite_border"})]})]})})]})},q=n(25),U=n(49),z=n.n(U),F="https://sport-club-dev.herokuapp.com/api",Q=(localStorage.getItem("token"),z.a.create({baseUrl:F,responseType:"json",headers:{"Content-Type":"application/json"}})),Y="SET_POSTS_SUCCESS",J="SET_POSTS_FAILURE",V="SET_POSTS_STARTED",G={posts:[],loading:!1,error:null},K=function(e){return{type:Y,posts:e}},X=function(){return{type:V}},Z=function(e){return{type:J,payload:{error:e}}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case Y:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,posts:Object(q.a)(t.posts)});case J:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},ee=function(e){var t=document.querySelector("#".concat(Fe));t.scrollTo({top:e-t.getBoundingClientRect().top,behavior:"smooth",block:"center"})},te=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.posts.loading,posts:e.posts.posts}}),(function(e){return{setPosts:function(){e((function(e){e(X()),Q.get("".concat(F,"/posts")).then((function(t){var n=t.data;e(K(n))})).catch((function(t){e(Z(t.message))}))}))}}}))((function(e){var t=e.scrollTo,n=e.setPosts,s=e.loading,r=e.posts,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){t===_&&ee(a.current.offsetTop)}),[t]),Object(c.useEffect)((function(){n()}),[]),Object(P.jsxs)("div",{ref:a,className:H.a.Blog,children:[Object(P.jsxs)("div",{className:H.a.Header,children:[Object(P.jsx)("h2",{children:"Our Blog"}),Object(P.jsx)("p",{children:"Welcome to our blog. Here we will post news and updates"})]}),Object(P.jsx)("div",{className:H.a.Cards,children:s?Object(P.jsx)("div",{}):r.map((function(e){return Object(P.jsx)(D,{post:e},e.id)}))})]})})),ne=n(21),ce=n.n(ne),se=n.p+"static/media/intro.7e7cb310.png",re=function(){return Object(P.jsx)("div",{className:ce.a.Intro,children:Object(P.jsxs)("div",{className:ce.a.IntroInner,children:[Object(P.jsx)("div",{className:ce.a.Image,children:Object(P.jsx)("img",{src:se,alt:""})}),Object(P.jsxs)("div",{className:ce.a.Text,children:[Object(P.jsx)("p",{children:'"We had a great collaboration. Really easy to work with and greate style."'}),Object(P.jsx)("p",{children:"Larry Sheet, CEO of Hasta la Vista"})]})]})})},ae=n(14),ie=n.n(ae),oe=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo}}))((function(e){var t=e.scrollTo,n=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(c.useEffect)((function(){t===h?ee(n.current.offsetTop):t===p&&ee(s.current.offsetTop)}),[t]),Object(P.jsxs)("div",{className:ie.a.MoreInfo,children:[Object(P.jsx)("div",{ref:n,className:ie.a.Info,children:Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"BEST GYM ON MARS"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus"}),Object(P.jsx)("br",{}),Object(P.jsx)("span",{children:"Gustavslung 99"}),Object(P.jsx)("br",{}),Object(P.jsx)("span",{children:"167-51 BROMMA"}),Object(P.jsx)("br",{}),Object(P.jsx)("span",{children:"Tel: +48 589 654 123"}),Object(P.jsx)("br",{}),Object(P.jsx)("span",{children:"info@bgom.com"}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsxs)("div",{className:ie.a.Icons,children:[Object(P.jsx)(i.a,{src:k}),Object(P.jsx)(i.a,{src:A}),Object(P.jsx)(i.a,{src:R}),Object(P.jsx)(i.a,{src:L})]})]})}),Object(P.jsx)("div",{ref:s,className:ie.a.Question,children:Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Have a question?"}),Object(P.jsxs)("div",{className:ie.a.Inputs,children:[Object(P.jsx)("input",{placeholder:"Your name"}),Object(P.jsx)("input",{placeholder:"Your mail"}),Object(P.jsx)("input",{placeholder:"Your question"})]}),Object(P.jsx)("div",{className:ie.a.Submit,children:"Send"})]})})]})})),le=n(28),je=n.n(le),ue=n(22),de=n.n(ue),be=function(e){var t=e.pass,n=t.name,c=t.title,s=t.image,r=t.descripion;t.pricePerMonth;return Object(P.jsxs)("div",{className:de.a.Service,children:[Object(P.jsx)("div",{className:de.a.Image,children:Object(P.jsx)("img",{src:s,alt:""})}),Object(P.jsxs)("div",{className:de.a.Data,children:[Object(P.jsx)("h4",{children:n}),Object(P.jsx)("h5",{children:c}),Object(P.jsx)("br",{}),Object(P.jsx)("p",{children:r}),Object(P.jsx)("br",{})]}),Object(P.jsx)("div",{className:de.a.Button,children:"BUY"})]})},Oe="SET_PASSES_SUCCESS",fe="SET_PASSES_FAILURE",he="SET_PASSES_STARTED",pe={passes:[],loading:!1,error:null},me=function(e){return{type:Oe,passes:e}},xe=function(){return{type:he}},_e=function(e){return{type:fe,payload:{error:e}}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case Oe:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,passes:Object(q.a)(t.passes)});case fe:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},ge=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.services.loading,passes:e.services.passes}}),(function(e){return{setPasses:function(){e((function(e){e(xe()),Q.get("".concat(F,"/passes")).then((function(t){var n=t.data;n.sort((function(e,t){return e.id-t.id})),e(me(n))})).catch((function(t){e(_e(t.message))}))}))}}}))((function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.scrollTo===x&&ee(t.current.offsetTop)}),[e.scrollTo]),Object(c.useEffect)((function(){e.setPasses()}),[]),Object(P.jsxs)("div",{ref:t,className:je.a.Services,children:[Object(P.jsxs)("div",{className:je.a.Header,children:[Object(P.jsx)("h2",{children:"Services"}),Object(P.jsx)("p",{children:"Meet our Services of happy creatives. We love what we do and we would love to work with you."})]}),Object(P.jsx)("div",{className:je.a.Cards,children:e.loading?Object(P.jsx)("div",{}):e.passes.map((function(e){return Object(P.jsx)(be,{pass:e},e.id)}))})]})})),Te=n(29),Ie=n.n(Te),Se=n.p+"static/media/3.7a3596d0.png",Ne=n.p+"static/media/1.0b31e215.jpg",Pe=n.p+"static/media/2.a4041c4c.jpg",ye=n.p+"static/media/4.30a61186.jpg",we=n.p+"static/media/3.aa7a1c5a.jpg";var Ee=function(e){return new Promise((function(t,n){if("string"===typeof e)r(e).then((function(e){return t(e)}));else{e.length||t(e);for(var c=function(n){r(e[n].picture).then((function(c){e[n].params=c,n+1===e.length&&t(e)}))},s=0;s<e.length;++s)c(s)}function r(e){var t=document.createElement("img");return t.src=e,new Promise((function(e){t.onload=function(){e(t.width>=t.height?{height:"100%",minWidth:"100%",width:"none",minHeight:"none"}:{height:"none",minWidth:"none",width:"100%",minHeight:"100%"})}}))}}))},Me=n(30),He=n.n(Me),Be=function(e){var t=e.image,n=Object(c.useState)(null),s=Object(u.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){Ee(t).then((function(e){return a(e)}))}),[]),Object(P.jsxs)("div",{className:He.a.Trainer,children:[Object(P.jsx)("div",{className:He.a.Image,children:Object(P.jsx)("img",{style:r,src:t,alt:""})}),Object(P.jsxs)("div",{className:He.a.Data,children:[Object(P.jsx)("h5",{children:"blaldvv"}),Object(P.jsx)("h6",{children:"blaldvv"})]})]})},Ce=Object(a.b)((function(e){return{scrollTo:e.navbar.scrollTo}}))((function(e){var t=e.scrollTo,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){t===m&&ee(n.current.offsetTop)}),[t]),Object(P.jsxs)("div",{ref:n,className:Ie.a.Team,children:[Object(P.jsxs)("div",{className:Ie.a.Header,children:[Object(P.jsx)("h2",{children:"Team"}),Object(P.jsx)("p",{children:"Meet our team of happy creatives. We love what we do and we would love to work with you."})]}),Object(P.jsxs)("div",{className:Ie.a.Trainers,children:[Object(P.jsx)(Be,{image:Se}),Object(P.jsx)(Be,{image:Ne}),Object(P.jsx)(Be,{image:Pe}),Object(P.jsx)(Be,{image:ye}),Object(P.jsx)(Be,{image:we})]})]})})),ke=n(36),Ae=n.n(ke),Re=function(){return Object(P.jsx)("div",{className:Ae.a.HomePage,children:Object(P.jsxs)("div",{className:Ae.a.HomePageInner,children:[Object(P.jsx)(oe,{}),Object(P.jsx)(re,{}),Object(P.jsx)(Ce,{}),Object(P.jsx)(ge,{}),Object(P.jsx)(te,{callback:function(){console.log("Child component was mounted!")}})]})})},Le=n(15),We=n.n(Le),De=n.p+"static/media/profileImage.7eb26d28.png",qe=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){Ee(De).then((function(e){return s(e)}))}),[]),Object(P.jsx)("div",{className:We.a.ProfilePage,children:Object(P.jsxs)("div",{className:We.a.ProfilePageInner,children:[Object(P.jsx)("div",{className:We.a.Avatar,children:Object(P.jsx)("div",{className:We.a.AvatarInner,children:Object(P.jsx)("img",{style:n,src:De,alt:""})})}),Object(P.jsx)("div",{className:We.a.Menu,children:Object(P.jsx)("div",{className:We.a.MenuInner,children:Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{children:"INFO ABOUT PROGRAMS"})," /",Object(P.jsx)("span",{children:" CALENDAR"})," /",Object(P.jsx)("span",{children:" NUMBER OF WORKOUTS"})]})})})]})})},Ue=n(50),ze=n.n(Ue),Fe="BlockWithScroll",Qe=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.current.addEventListener("scroll",(function(){return console.log(!0)}))}),[]),Object(P.jsx)("div",{ref:e,className:ze.a.Content,id:Fe,children:Object(P.jsxs)(E.c,{children:[Object(P.jsx)(E.a,{exact:!0,path:"/",component:Re}),Object(P.jsx)(E.a,{exact:!0,path:"/profile",component:qe})]})})};n(85);var Ye=Object(a.b)((function(e){return{isMobile:e.navbar.isMobile}}),(function(e){return{setIsMobile:function(t,n){e(function(e,t){return function(n){!1===e?t<=500&&n(g(!0)):!0===e?t>500&&n(g(!1)):n(g(t<=500))}}(t,n))}}}))((function(e){return Object(c.useEffect)((function(){e.setIsMobile(e.isMobile,window.innerWidth),window.addEventListener("resize",(function(){return e.setIsMobile(e.isMobile,window.innerWidth)}))}),[]),Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(w,{}),Object(P.jsx)(Qe,{})]})})),Je=n(31),Ve={token:null},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return e},Ke=n(51),Xe=Object(Je.b)({auth:Ge,navbar:I,posts:$,services:ve}),Ze=Object(Je.c)(Xe,Object(Je.a)(Ke.a)),$e=(n(86),.01*window.innerHeight);document.documentElement.style.setProperty("--vh","".concat($e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),r.a.render(Object(P.jsx)(a.a,{store:Ze,children:Object(P.jsx)(d.a,{children:Object(P.jsx)(Ye,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.703b74b9.chunk.js.map