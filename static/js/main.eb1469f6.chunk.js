(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{26:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(20),r=s.n(a),j=(s(26),s(8)),i=s(11),o=s(3),b=s(13),l=s(2);var u=function(e){var t=e.Login,s=e.error,c=Object(n.useState)({username:"",password:""}),a=Object(j.a)(c,2),r=a[0],i=a[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:Object(l.jsxs)("div",{className:"form-inner",children:[Object(l.jsx)("h2",{children:"Login"}),""!=s?Object(l.jsx)("div",{className:"error",children:s}):"",Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(l.jsx)("input",{type:"text",name:"username",id:"username",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{username:e.target.value}))},value:r.username})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return i(Object(b.a)(Object(b.a)({},r),{},{password:e.target.value}))},value:r.password})]}),Object(l.jsx)("input",{type:"submit",value:"Login",name:"",id:""})]})})},d=s(16),m=s(10),O=[{title:"Dashboard",path:"/",icon:Object(l.jsx)(m.c,{}),cname:"nav-text"},{title:"Reports",path:"/Reports",icon:Object(l.jsx)(m.a,{}),cname:"nav-text"},{title:"Customer",path:"/Customer",icon:Object(l.jsx)(m.b,{}),cname:"nav-text"}];s(28);var h=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1],a=function(){return c(!s)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)(i.b,{to:"#",className:"menu-bar",children:Object(l.jsx)(d.a,{onClick:a})})}),Object(l.jsx)("nav",{className:s?"nav-menu active":"nav-menu",children:Object(l.jsxs)("ul",{className:"nav-menu-items",onClick:a,children:[Object(l.jsx)("li",{className:"navbar-toggle",children:Object(l.jsx)(i.b,{to:"#",className:"menu-bar",children:Object(l.jsx)(m.d,{})})}),O.map((function(e,t){return Object(l.jsx)("li",{className:e.cname,children:Object(l.jsxs)(i.b,{to:e.path,children:[e.icon,Object(l.jsx)("span",{children:e.title})]})},t)}))]})})]})};var x=function(){return Object(l.jsx)("div",{className:"customer",children:Object(l.jsx)("h2",{children:"Customers"})})};var p=function(){return Object(l.jsx)("div",{className:"dashboard",children:Object(l.jsx)("h2",{children:"Dashboard"})})};var v=function(){return Object(l.jsx)("div",{className:"reports",children:Object(l.jsx)("h2",{children:"Reports"})})};var f=function(){var e="admin",t="admin123",s=Object(n.useState)({username:"",password:""}),c=Object(j.a)(s,2),a=c[0],r=c[1],b=Object(n.useState)(""),d=Object(j.a)(b,2),m=d[0],O=d[1];return Object(l.jsx)("div",{className:"App",children:""!==a.username?Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"welcome",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("h2",{children:["Welcome ,",Object(l.jsx)("span",{children:a.username}),Object(l.jsx)("button",{onClick:function(){r({username:"",password:""})},children:"Logout"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(o.a,{path:"/reports",component:v}),Object(l.jsx)(o.a,{path:"/customer",component:x})]})]})}):Object(l.jsx)(u,{Login:function(s){s.username==e&&s.password==t?(console.log("Logged in"),r({username:s.username,password:s.password})):O("Details not match")},error:m})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.eb1469f6.chunk.js.map