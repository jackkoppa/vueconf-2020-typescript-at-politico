(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movies"],{"1dc8":function(e,t,r){},"45f4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"movie"},[r("div",{staticClass:"movie__search-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"movie__search",attrs:{type:"text",placeholder:"Enter movie or review title..."},domProps:{value:e.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch(t)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),r("button",{staticClass:"movie__search-button",class:{"movie__search-button--loading":e.isLoading},attrs:{disabled:e.isLoading}},[e._v(" Search ")])]),r("transition-group",{staticClass:"movie-list",attrs:{name:"movie-list",tag:"ul"}},e._l(e.movies,(function(t){return r("li",{key:t.headline,staticClass:"movie__card movie-list__item"},[r(e.link(t)?"a":"div",{tag:"component",attrs:{href:e.link(t)}},[r("h2",{staticClass:"movie__header"},[e._v(" "+e._s(t.display_title)+" ")]),r("p",{staticClass:"movie__byline"},[e._v(e._s(t.byline))]),r("p",{staticClass:"movie__summary"},[e._v(e._s(t.summary_short))])])],1)})),0)],1)},i=[],a=(r("9911"),r("96cf"),r("1da1")),s=r("2b0e"),o=r("79f6"),c=s["a"].extend({name:"Movies",data:function(){return{isLoading:!1,movies:[],keyword:""}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.performSearch();case 2:case"end":return t.stop()}}),t)})))()},methods:{link:function(e){return e.link&&e.link.url},performSearch:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,o["b"].reviewsSearchJsonGet(e.keyword);case 4:i=t.sent,e.movies=null!==(r=null===(n=i.data)||void 0===n?void 0:n.results)&&void 0!==r?r:[];case 6:return t.prev=6,e.isLoading=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[0,,6,9]])})))()}}}),u=c,l=(r("ff6a"),r("2877")),v=Object(l["a"])(u,n,i,!1,null,"416a1138",null);t["default"]=v.exports},"857a":function(e,t,r){var n=r("1d80"),i=/"/g;e.exports=function(e,t,r,a){var s=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),o+">"+s+"</"+t+">"}},9911:function(e,t,r){"use strict";var n=r("23e7"),i=r("857a"),a=r("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(e){return i(this,"a","href",e)}})},af03:function(e,t,r){var n=r("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},ff6a:function(e,t,r){"use strict";var n=r("1dc8"),i=r.n(n);i.a}}]);
//# sourceMappingURL=movies.653681da.js.map