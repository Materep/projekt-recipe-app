(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__1gi88",slika:"recipe_slika__2n1Us",recept:"recipe_recept__1af54"}},,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(11),a(1)),o=a.n(s),l=a(2),u=(a(13),a(3)),m=a.n(u),p=function(e){var t=e.title,a=(e.calories,e.image),n=e.ingredients;return c.a.createElement("div",{className:m.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("img",{className:m.a.slika,src:a,alt:""}),c.a.createElement("ol",null,n.map(function(e){return c.a.createElement("li",null,e.text)})))},f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)("chicken"),d=Object(l.a)(f,2),h=d[0],b=d[1];Object(n.useEffect)(function(){v()},[h]);var v=function(){var e,t;return o.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("60a2d0f0","&app_key=").concat("2160bfdee0b54d20757da7873e1556c4")));case 2:return e=a.sent,a.next=5,o.a.awrap(e.json());case 5:t=a.sent,r(t.hits),console.log(t.hits);case 8:case"end":return a.stop()}})};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"naslov"},"fine recipes..."),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(u),m("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){m(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recepti"},a.map(function(e){return c.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.1e55b8f7.chunk.js.map