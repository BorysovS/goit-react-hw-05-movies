"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(691),p=n(184);e.default=function(){var t=(0,o.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),c=n[0],f=n[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.SM)(t);case 3:n=e.sent,f(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]),(0,p.jsxs)(p.Fragment,{children:[c.length<1&&(0,p.jsx)("div",{children:"We dont have any reviews for this movie..."}),c.map((function(t){return(0,p.jsxs)("li",{ket:t.id,children:[(0,p.jsxs)("h1",{children:["Author: ",t.author]}),(0,p.jsx)("p",{children:t.content})]})}))]})}},691:function(t,e,n){n.d(e,{Eb:function(){return f},SM:function(){return v},gH:function(){return p},nc:function(){return o},ts:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="7a32caca7156537126d1246055d1764e";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.c2b1c43f.chunk.js.map