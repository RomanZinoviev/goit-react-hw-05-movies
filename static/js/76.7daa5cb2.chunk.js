"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{8076:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var c=a(8152),n=a(2791),i=a(4569),s=a.n(i),l=a(6871),o={list:"Cast_list__GlWio",link:"Cast_link__VaL-5"},r=a(184),u=function(){var t=(0,n.useState)(null),e=(0,c.Z)(t,2),a=e[0],i=e[1],u=(0,l.UO)().movieId;if((0,n.useEffect)((function(){u&&function(t){s().get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat("04e9412e8b51c89a88481cdeb7f8adec")).then((function(t){i(t.data.cast)})).catch((function(t){return console.log(t)}))}(u)}),[u]),a)return(0,r.jsx)("ul",{className:o.list,children:a.map((function(t){return(0,r.jsxs)("li",{className:o.link,children:[(0,r.jsxs)("h3",{className:o.title,children:["Actor name: ",t.original_name]}),(0,r.jsxs)("p",{className:o.text,children:["Role: ",t.character]}),(0,r.jsx)("img",{className:o.img,src:t.profile_path?"".concat("https://image.tmdb.org/t/p/w138_and_h175_face").concat(t.profile_path):"https://ipbmafia.ru/uploads/monthly_2018_07/895242-200.png.e10304d04e80f56d3ebaa863b4ccdd41.png",alt:t.name})]},t.id)}))})}}}]);
//# sourceMappingURL=76.7daa5cb2.chunk.js.map