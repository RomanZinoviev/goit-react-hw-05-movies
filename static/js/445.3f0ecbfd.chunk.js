"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{9445:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(8152),o=a(2791),c=a(3504),l=a(6871),s=a(4569),r=a.n(s),u={searchbar:"MoviesPage_searchbar__NU7l3",form:"MoviesPage_form__Hzb4A",button:"MoviesPage_button__HN2QC",buttonLabel:"MoviesPage_buttonLabel__RVZ1T",input:"MoviesPage_input__h5lTQ",but:"MoviesPage_but__nERCq",link:"MoviesPage_link__Kqtq6"},i=a(184),f=function(){var e=(0,o.useState)(null),t=(0,n.Z)(e,2),a=t[0],s=t[1],f=(0,o.useState)(""),m=(0,n.Z)(f,2),h=m[0],_=m[1],b=(0,o.useState)(localStorage.getItem("film")),p=(0,n.Z)(b,2),g=p[0],d=p[1],v=(0,l.s0)(),k=(0,l.TH)(),x=function(e){r().get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("04e9412e8b51c89a88481cdeb7f8adec","&query=").concat(e)).then((function(e){var t=e.data.results;if(0===t.length)return d(""),console.log(g),alert("not found ".concat(h));localStorage.setItem("film",g),s(t)})).catch((function(e){return console.log(e)}))};(0,o.useEffect)((function(){""!==g&&null!==g&&x(g)}),[x,g]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:function(){v("/")},className:u.but,children:"Go back"}),(0,i.jsxs)("form",{className:u.form,children:[(0,i.jsx)("button",{type:"submit",className:u.button,onClick:function(e){if(e.preventDefault(),""===h)return alert("Write somthing");d(h),_("")},children:(0,i.jsx)("span",{className:u.buttonLabel,children:"Search"})}),(0,i.jsx)("input",{className:u.input,type:"text",value:h,onChange:function(e){_(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search films"})]}),(0,i.jsx)("ul",{className:u.list,children:a&&a.map((function(e){var t=e.id,a=e.title;return(0,i.jsx)("li",{className:u.link,children:(0,i.jsx)(c.rU,{to:"/movie/".concat(t),state:k.pathname,children:a})},t)}))})]})}}}]);
//# sourceMappingURL=445.3f0ecbfd.chunk.js.map