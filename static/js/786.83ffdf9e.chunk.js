"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[786],{786:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var c=e(885),r=e(791),i=e(871),o=e(672),a=e(184),u=function(n){var t=n.cast;return(0,a.jsx)("ul",{children:t.slice(0,10).map((function(n){var t=n.id,e=n.name,c=n.character,r=n.profile_path;return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(r),alt:e,width:"100"}),(0,a.jsx)("p",{children:e}),(0,a.jsxs)("p",{children:["Character: ",c]})]},t)}))})},h=function(){var n=(0,r.useState)(null),t=(0,c.Z)(n,2),e=t[0],h=t[1],s=(0,i.UO)().id;return(0,r.useEffect)((function(){s&&(0,o.dp)(s).then((function(n){h(n.cast)})).catch((function(n){return console.log(n)}))}),[s]),(0,a.jsx)("div",{children:e&&(0,a.jsx)(u,{cast:e})})}},672:function(n,t,e){e.d(t,{I7:function(){return o},RW:function(){return u},Zh:function(){return i},dp:function(){return a},z4:function(){return r}});var c="1e3bd345eb5d29ac0f4521d096bb0e9d";function r(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c,"&page=1")).then((function(n){return n.json()}))}function i(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n,"&page=1")).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=786.83ffdf9e.chunk.js.map