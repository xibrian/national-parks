(this["webpackJsonpnational-parks"]=this["webpackJsonpnational-parks"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(5),a=n.n(r),o=(n(10),n(11),n(2),n(0)),s=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:"National Parks Activity Planner"})})},u=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("p",{children:"Built with love by Brian"})})},l=n(4),d=function(e){return Object(o.jsxs)("div",{className:"parkListing",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.url}),Object(o.jsxs)("p",{children:[e.designation," in ",e.state]}),Object(o.jsx)("button",{className:"imageButton",onClick:function(){return function(e){console.log(e);var t="https://developer.nps.gov/api/v1/webcams?parkCode="+e.parkCode+"&api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc";console.log(t),fetch(t).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}(e)},children:Object(o.jsx)("p",{children:"Click to view park images"})})]})};var j=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([{states:"",parkCode:"",designation:"",fullName:"",url:""}]),a=Object(l.a)(r,2),s=a[0],u=a[1];Object(i.useEffect)((function(){fetch("https://developer.nps.gov/api/v1/activities?api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc").then((function(e){return e.json()})).then((function(e){return c(e.data)}))}),[]),console.log(n);var j=function(e){var t=e.input,n=e.id;return Object(o.jsx)("button",{className:"button",onClick:function(){return function(e,t){var n="https://developer.nps.gov/api/v1/activities/parks?id="+t+",&api_key=9EgzNdOHHgIrzuN7bPg4S4gHOdBQN55oqN2i6RAc";console.log(n),fetch(n).then((function(e){return e.json()})).then((function(e){return u(e.data[0].parks)})),console.log(s)}(0,n)},children:Object(o.jsx)("p",{"text-align":"center",children:t})})};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"activities",children:n.map((function(e){return Object(o.jsx)(j,{input:e.name,id:e.id},e.name)}))}),Object(o.jsx)("div",{children:s.map((function(e){return Object(o.jsx)(d,{name:e.fullName,url:e.url,designation:e.designation,state:e.states,parkCode:e.parkCode},e.name)}))})]})};var b=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(j,{}),Object(o.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};n(13);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()},2:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.55a2185c.chunk.js.map