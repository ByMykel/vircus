(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vircus/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"14a8":function(t,e,a){"use strict";a("d8e6")},"1e83":function(t,e,a){"use strict";a("2bd3")},"2bd3":function(t,e,a){},"2bfc":function(t,e,a){"use strict";a("bcfa")},"56d7":function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"namespaced",(function(){return ft})),a.d(r,"state",(function(){return ht})),a.d(r,"getters",(function(){return vt})),a.d(r,"mutations",(function(){return gt})),a.d(r,"actions",(function(){return wt}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Home")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{class:{"container-middle":t.centerContent},staticStyle:{transition:"0.5s"}},[r("img",{staticClass:"logo-spotify",attrs:{src:a("e3ab"),alt:"logo-spotify"}}),r("search-bar",{attrs:{selected:t.selected},on:{"search-artist":function(e){t.query=e},selected:function(e){return t.changeSelected(e)}}})],1),t.items.total?r("div",{staticStyle:{color:"#b3b3b3"}},[t._v(" Found at least "),r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.items.total))]),t._v(" matches ")]):t._e(),1===t.selected?r("div",[r("transition-group",{attrs:{name:"list-items"}},t._l(t.items.items,(function(t){return r("card-artist",{key:t.id,attrs:{artist:t}})})),1)],1):2===t.selected?r("div",[r("transition-group",{attrs:{name:"list-items"}},t._l(t.items.items,(function(t){return r("card-track",{key:t.id,attrs:{track:t}})})),1)],1):3===t.selected?r("div",[r("transition-group",{attrs:{name:"list-items"}},t._l(t.items.items,(function(t){return r("card-album",{key:t.id,attrs:{album:t}})})),1)],1):4===t.selected?r("div",[r("transition-group",{attrs:{name:"list-items"}},t._l(t.items.items,(function(t){return r("card-track",{key:t.id,attrs:{track:t}})})),1)],1):t._e()])},c=[],l=a("2909"),u=a("5530"),d=a("1da1"),m=(a("99af"),a("96cf"),a("b85c")),p=(a("4de4"),a("caad"),a("2532"),a("b0c0"),a("fb6a"),a("bc3a")),f=a.n(p),h="bb7a469a8d6e40599d3c8338fb524058",v="e9d709d66541476dac536c9d929efac6";function g(){return w.apply(this,arguments)}function w(){return w=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=0+localStorage.getItem("pa_expires","0"),!((new Date).getTime()>e)){t.next=10;break}return t.next=4,f()({baseURL:"https://accounts.spotify.com/api/token",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(h+":"+v)},data:"grant_type=client_credentials"});case 4:return a=t.sent,r=a.data,n=r.access_token,localStorage.setItem("pa_token",n),localStorage.setItem("pa_expires",(new Date).getTime()+1e3*r.expires_in),t.abrupt("return",n);case 10:return t.abrupt("return",localStorage.getItem("pa_token",""));case 11:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function b(t,e){var a=localStorage.getItem("favorites");if(null!==a){var r=JSON.parse(a).favorites.reverse().filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.slice(20*(e-1),20*e)}return[]}var k={getAlbums:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/search",method:"GET",headers:{Authorization:"Bearer "+a},params:{q:t,type:"album"}});case 5:return r=e.sent,e.next=8,r.data.albums;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getArtists:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/search",method:"GET",headers:{Authorization:"Bearer "+a},params:{q:t,type:"artist"}});case 5:return r=e.sent,e.next=8,r.data.artists;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getTracks:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/search",method:"GET",headers:{Authorization:"Bearer "+a},params:{q:t,type:"track"}});case 5:return r=e.sent,e.next=8,r.data.tracks;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getTrackById:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/tracks/"+t,method:"GET",headers:{Authorization:"Bearer "+a}});case 5:return r=e.sent,e.next=8,r.data;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getArtistsTopTracks:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/artists/"+t+"/top-tracks",method:"GET",headers:{Authorization:"Bearer "+a},params:{market:"US"}});case 5:return r=e.sent,e.next=8,r.data.tracks;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getAlbum:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:"https://api.spotify.com/v1/albums/"+t,method:"GET",headers:{Authorization:"Bearer "+a},params:{market:"US"}});case 5:return r=e.sent,e.next=8,r.data.tracks;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getMoreData:function(t){return Object(d["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,e.next=5,f()({baseURL:t,method:"GET",headers:{Authorization:"Bearer "+a}});case 5:return r=e.sent,e.next=8,r.data;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))()},getFavorites:function(t){var e=arguments,a=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,s,i,o,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.length>1&&void 0!==e[1]?e[1]:1,s=b(t,n),s.length){r.next=4;break}return r.abrupt("return",{items:[],next:null});case 4:i=[],o=Object(m["a"])(s),r.prev=6,o.s();case 8:if((c=o.n()).done){r.next=17;break}return l=c.value,r.t0=i,r.next=13,a.getTrackById(l.id);case 13:r.t1=r.sent,r.t0.push.call(r.t0,r.t1);case 15:r.next=8;break;case 17:r.next=22;break;case 19:r.prev=19,r.t2=r["catch"](6),o.e(r.t2);case 22:return r.prev=22,o.f(),r.finish(22);case 25:return r.abrupt("return",{items:i,next:n+1});case 26:case"end":return r.stop()}}),r,null,[[6,19,22,25]])})))()}},x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"search-bar",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.text},on:{keyup:function(e){return t.$emit("search-artist",t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("search-options",{attrs:{selected:t.selected}}),a("svg",{staticClass:"search-icon",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])],1)},C=[],y=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-buttons"},[a("button",{staticClass:"button-icon",class:{"button-selected":1===t.selected},on:{click:function(e){return t.$parent.$emit("selected",1)}}},[a("svg",{staticClass:"icon",class:{"icon-selected":1===t.selected},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"}})])]),a("button",{staticClass:"button-icon",class:{"button-selected":2===t.selected},on:{click:function(e){return t.$parent.$emit("selected",2)}}},[a("svg",{staticClass:"icon",class:{"icon-selected":2===t.selected},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{d:"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}})])]),a("button",{staticClass:"button-icon",class:{"button-selected":3===t.selected},on:{click:function(e){return t.$parent.$emit("selected",3)}}},[a("svg",{staticClass:"icon",class:{"icon-selected":3===t.selected},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"}})])]),a("button",{staticClass:"button-icon",class:{"button-selected":4===t.selected},on:{click:function(e){return t.$parent.$emit("selected",4)}}},[a("svg",{staticClass:"icon",class:{"icon-selected":4===t.selected},attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"}})])])])}),_=[],O={name:"SearchOptions",props:{selected:Number}},j=O,M=(a("1e83"),a("2877")),S=Object(M["a"])(j,y,_,!1,null,"825492be",null),T=S.exports,z={name:"SearchBar",components:{SearchOptions:T},props:{selected:Number},data:function(){return{text:"",focus:!1}},computed:{placeholder:function(){return"Search "+{1:"artists",2:"tracks",3:"albums",4:"favorites"}[this.selected]}}},A=z,R=(a("2bfc"),Object(M["a"])(A,x,C,!1,null,"fb9879c6",null)),B=R.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"artist-container"},[a("div",{staticClass:"artist-container-header"},[a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.image&&t.showSkeletonImage,expression:"image && showSkeletonImage"}],staticClass:"artist-image-skeleton"}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.image&&!t.showSkeletonImage,expression:"image && !showSkeletonImage"}],staticClass:"artist-image",attrs:{src:t.image,alt:t.artist.name},on:{load:function(e){t.showSkeletonImage=!1}}}),t.image?t._e():a("div",{staticClass:"artist-image-default"},[a("svg",{staticClass:"icon-user",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}})])])]),a("div",{staticClass:"artist-details"},[a("div",[a("div",[a("a",{staticClass:"artist-name",attrs:{href:t.artist.external_urls.spotify,target:"_blank"},domProps:{textContent:t._s(t.artist.name)}}),a("span",{staticClass:"popularity-circle",class:t.circleColor,attrs:{title:t.popularityCircle}})]),a("div",{staticClass:"artist-followers",domProps:{textContent:t._s(t.totalFollowers)}})]),a("div",{staticClass:"icon-arrow-container"},[t.loading?a("div",{staticClass:"lds-circle"},[a("div")]):a("div",{staticClass:"icon-arrow-background",on:{click:function(e){return t.loadArtistData()}}},[a("svg",{staticClass:"icon-arrow",class:[t.show?"icon-arrow-down":"icon-arrow-up"],attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])])])]),a("transition",{on:{"before-enter":t.setHeightToCero,enter:t.setHeightToMax,"after-enter":t.setHeightToMax,"before-leave":t.setHeightToMax,leave:t.setHeightToCero}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"artist-container-body"},[t.noDataMessage?a("div",{staticClass:"message"},[t._v("No data")]):t._e(),t._l(t.tracks,(function(t){return a("card-track",{key:t.id,attrs:{track:t,small:""}})}))],2)])],1)},D=[],H=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"track-container",class:{"track-container-small":t.small}},[t.track.explicit?a("span",{attrs:{title:"Explicit content"}},[a("svg",{staticClass:"icon-explicit",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]):t._e(),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSkeletonImage,expression:"showSkeletonImage"}],class:[t.small?"track-image-small-skeleton":"track-image-skeleton"]}),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.showSkeletonImage,expression:"!showSkeletonImage"}],staticClass:"track-image",class:{"track-image-small":t.small},attrs:{src:t.image(),alt:t.track.name},on:{load:function(e){t.showSkeletonImage=!1}}})]),a("div",{staticClass:"track-details"},[a("div",[a("div",[a("a",{staticClass:"track-name",class:{"track-name-small":t.small},attrs:{href:t.track.external_urls.spotify,target:"_blank"},domProps:{textContent:t._s(t.track.name)}})]),a("div",{staticClass:"track-artists",class:{"track-artists-small":t.small},domProps:{textContent:t._s(t.artists)}})]),a("div",{staticClass:"track-actions"},[t.track.preview_url?a("div",[t.playing?a("span",{on:{click:function(e){return t.stop()}}},[a("svg",{staticClass:"icon icon-red",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clip-rule":"evenodd"}})])]):a("span",{on:{click:function(e){return t.play()}}},[a("svg",{staticClass:"icon icon-green",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})])])]):a("div",[a("span",{staticClass:"icon-container"},[a("svg",{staticClass:"icon-disable",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})])])]),a("div",{on:{click:function(e){return t.toggleFavorite(t.track)}}},[t.has(t.track.id)?a("span",{staticClass:"icon-container"},[a("svg",{staticClass:"icon-heart icon-green",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"}})])]):a("span",{staticClass:"icon-container"},[a("svg",{staticClass:"icon-heart icon-gray",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})])])])])])])}),E=[],N=(a("a15b"),a("d81d"),a("2f62")),P={name:"CardTrack",props:{track:Object,small:Boolean},data:function(){return{audio:new Audio(this.track.preview_url),playing:!1,showSkeletonImage:!0}},computed:Object(u["a"])(Object(u["a"])({},Object(N["c"])("favorites",["has"])),{},{artists:function(){return this.track.artists.map((function(t){return t.name})).join(" · ")}}),methods:Object(u["a"])(Object(u["a"])({},Object(N["b"])("favorites",["toggle"])),{},{play:function(){var t=this;this.playing=!0,this.audio.volume=.1,this.audio.play(),this.audio.addEventListener("ended",(function(){t.playing=!1}))},stop:function(){this.playing=!1,this.audio.pause()},image:function(){return this.track.album.images.length>0?this.track.album.images[0].url:" "},toggleFavorite:function(t){this.toggle({id:t.id,name:t.name})}})},L=P,$=(a("9b10"),Object(M["a"])(L,H,E,!1,null,"10015b5b",null)),F=$.exports,q={name:"ArtistCard",components:{CardTrack:F},props:{artist:Object},data:function(){return{show:!1,fetchedData:!1,tracks:[],loading:!1,showSkeletonImage:!0}},computed:{popularityCircle:function(){return"Popularity "+this.artist.popularity},circleColor:function(){return this.artist.popularity>=70?"popularity-circle-green":this.artist.popularity>=40?"popularity-circle-orange":"popularity-circle-red"},totalFollowers:function(){return this.artist.followers.total+" followers"},noDataMessage:function(){return!this.loading&&this.fetchedData&&0===this.tracks.length},image:function(){return this.artist.images.length>0?this.artist.images[0].url:""}},methods:{loadArtistData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.fetchedData){e.next=4;break}return t.loading=!0,e.next=4,k.getArtistsTopTracks(t.artist.id).then((function(e){t.tracks=e})).finally((function(){t.fetchedData=!0,t.loading=!1}));case 4:t.show=!t.show;case 5:case"end":return e.stop()}}),e)})))()},setHeightToCero:function(t){t.style.height="0"},setHeightToMax:function(t){t.style.height=t.scrollHeight+"px"}}},U=q,G=(a("b04b"),Object(M["a"])(U,I,D,!1,null,"c030072c",null)),V=G.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album-container"},[a("div",{staticClass:"album-container-header"},[a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSkeletonImage,expression:"showSkeletonImage"}],staticClass:"album-image-skeleton"}),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.showSkeletonImage,expression:"!showSkeletonImage"}],staticClass:"album-image",attrs:{src:t.image(),alt:t.album.name},on:{load:function(e){t.showSkeletonImage=!1}}})]),a("div",{staticClass:"album-details"},[a("div",[a("div",[a("a",{staticClass:"album-name",attrs:{href:t.album.external_urls.spotify,target:"_blank"},domProps:{textContent:t._s(t.album.name)}})]),a("span",{staticClass:"album-info",domProps:{textContent:t._s(t.albumArtists)}}),a("span",{staticClass:"album-info",domProps:{textContent:t._s(t.albumInfo)}})]),a("div",{staticClass:"icon-arrow-container"},[t.loading?a("div",{staticClass:"lds-circle"},[a("div")]):a("div",{staticClass:"icon-arrow-background",on:{click:function(e){return t.loadAlbumData()}}},[a("svg",{staticClass:"icon-arrow",class:[t.show?"icon-arrow-down":"icon-arrow-up"],attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])])])]),a("transition",{on:{"before-enter":t.setHeightToCero,enter:t.setHeightToMax,"after-enter":t.setHeightToMax,"before-leave":t.setHeightToMax,leave:t.setHeightToCero}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"album-container-body"},[t.noDataMessage?a("div",{staticClass:"message"},[t._v("No data")]):t._e(),t._l(t.tracks.items,(function(t){return a("card-track-small",{key:t.id,attrs:{track:t}})}))],2)])],1)},W=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"track-container",class:{"new-disc":1===t.track.track_number&&1!==t.track.disc_number}},[t.track.explicit?a("span",{attrs:{title:"Explicit content"}},[a("svg",{staticClass:"icon-explicit",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])]):t._e(),a("div",{staticClass:"track-details"},[a("div",{staticClass:"track-number",domProps:{textContent:t._s(t.track.track_number)}}),a("div",[t.track.preview_url?a("div",[t.playing?a("span",{staticClass:"icon-container",on:{click:function(e){return t.stop()}}},[a("svg",{staticClass:"icon icon-red",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clip-rule":"evenodd"}})])]):a("span",{staticClass:"icon-container",on:{click:function(e){return t.play()}}},[a("svg",{staticClass:"icon icon-green",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})])])]):a("div",[a("span",{staticClass:"icon-container"},[a("svg",{staticClass:"icon-disable",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})])])])]),a("div",[a("div",[a("a",{staticClass:"track-name",attrs:{href:t.track.external_urls.spotify,target:"_blank"},domProps:{textContent:t._s(t.track.name)}})]),a("div",{staticClass:"track-artists",domProps:{textContent:t._s(t.artists)}})])])])},Q=[],X={name:"TrackCard",props:{track:Object},data:function(){return{audio:new Audio(this.track.preview_url),playing:!1}},computed:{artists:function(){return this.track.artists.map((function(t){return t.name})).join(" · ")}},methods:{play:function(){var t=this;this.playing=!0,this.audio.volume=.1,this.audio.play(),this.audio.addEventListener("ended",(function(){t.playing=!1}))},stop:function(){this.playing=!1,this.audio.pause()}}},Y=X,Z=(a("14a8"),Object(M["a"])(Y,K,Q,!1,null,"1e9481ca",null)),tt=Z.exports,et={name:"AlbumCard",components:{CardTrackSmall:tt},props:{album:Object},data:function(){return{show:!1,fetchedData:!1,tracks:[],loading:!1,showSkeletonImage:!0}},computed:{albumArtists:function(){return this.album.artists.map((function(t){return t.name})).join(" · ")},albumInfo:function(){return" · "+this.album.release_date+" · "+this.album.total_tracks+" total tracks"},noDataMessage:function(){return!this.loading&&this.fetchedData&&0===this.tracks.length}},methods:{loadAlbumData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.fetchedData){e.next=4;break}return t.loading=!0,e.next=4,k.getAlbum(t.album.id).then((function(e){t.tracks=e})).finally((function(){t.fetchedData=!0,t.loading=!1}));case 4:t.show=!t.show;case 5:case"end":return e.stop()}}),e)})))()},image:function(){return this.album.images.length>0?this.album.images[0].url:" "},setHeightToCero:function(t){t.style.height="0"},setHeightToMax:function(t){t.style.height=t.scrollHeight+"px"}}},at=et,rt=(a("e0d3"),Object(M["a"])(at,J,W,!1,null,"430c74aa",null)),nt=rt.exports,st={name:"Home",components:{SearchBar:B,CardArtist:V,CardTrack:F,CardAlbum:nt},data:function(){return{items:[],selected:1,query:""}},computed:{centerContent:function(){return this.items instanceof Array?!this.items.length:!this.items.items.length}},watch:{query:"fetchData"},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop+window.innerHeight>document.documentElement.offsetHeight-1;if(e){if(4===t.selected)return void t.getMoreData(null);t.getMoreData(t.items.next)}}))},methods:{changeSelected:function(t){this.selected!==t&&(this.selected=t,this.items=[],this.fetchData(this.query))},fetchData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.query||4===t.selected){e.next=3;break}return t.items=[],e.abrupt("return");case 3:a=[],e.t0=t.selected,e.next=1===e.t0?7:2===e.t0?11:3===e.t0?15:4===e.t0?19:23;break;case 7:return e.next=9,k.getArtists(t.query);case 9:return a=e.sent,e.abrupt("break",23);case 11:return e.next=13,k.getTracks(t.query);case 13:return a=e.sent,e.abrupt("break",23);case 15:return e.next=17,k.getAlbums(t.query);case 17:return a=e.sent,e.abrupt("break",23);case 19:return e.next=21,k.getFavorites(t.query);case 21:return a=e.sent,e.abrupt("break",23);case 23:t.items=a;case 24:case"end":return e.stop()}}),e)})))()},getMoreData:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(null!==e.items.next){a.next=2;break}return a.abrupt("return");case 2:r=[],a.t0=e.selected,a.next=1===a.t0?6:2===a.t0?10:3===a.t0?14:4===a.t0?18:22;break;case 6:return a.next=8,k.getMoreData(t);case 8:return r=a.sent.artists,a.abrupt("break",22);case 10:return a.next=12,k.getMoreData(t);case 12:return r=a.sent.tracks,a.abrupt("break",22);case 14:return a.next=16,k.getMoreData(t);case 16:return r=a.sent.albums,a.abrupt("break",22);case 18:return a.next=20,k.getFavorites(e.query,e.items.next);case 20:return r=a.sent,a.abrupt("break",22);case 22:e.items=Object(u["a"])(Object(u["a"])({},r),{},{items:[].concat(Object(l["a"])(e.items.items),Object(l["a"])(r.items))});case 23:case"end":return a.stop()}}),a)})))()}}},it=st,ot=(a("6015"),Object(M["a"])(it,o,c,!1,null,"24596db6",null)),ct=ot.exports,lt={name:"App",components:{Home:ct}},ut=lt,dt=(a("034f"),Object(M["a"])(ut,s,i,!1,null,null,null)),mt=dt.exports;a("2ca0");function pt(t){var e=t.moduleName,a=t.localStorageName;return function(t){var r=localStorage.getItem(a);if(null!==r){var n=JSON.parse(r);t.dispatch("favorites/setFavorites",n.favorites)}t.subscribe((function(r){r.type.startsWith(e)&&localStorage.setItem(a,JSON.stringify(t.state[e]))}))}}a("7db0");var ft=!0,ht={favorites:[]},vt={all:function(t){return t.favorites},has:function(t){return function(e){return void 0!==t.favorites.find((function(t){return t.id==e}))}},filter:function(t){return function(e){return t.favorites.filter((function(t){return t.id===e}))}}},gt={addFavorite:function(t,e){t.favorites.push(e)},setFavorites:function(t,e){t.favorites=e}},wt={toggle:function(t,e){var a=t.commit,r=t.dispatch,n=t.getters;return n.has(e.id)?(r("remove",e),!1):(a("addFavorite",e),!0)},remove:function(t,e){var a=t.getters,r=t.commit;r("setFavorites",a.all.filter((function(t){return t.id!==e.id})))},setFavorites:function(t,e){var a=t.commit;a("setFavorites",e)}};n["a"].use(N["a"]);var bt=new N["a"].Store({strict:!0,modules:{favorites:r},plugins:[pt({moduleName:"favorites",localStorageName:"favorites"})]});n["a"].config.productionTip=!1,new n["a"]({store:bt,render:function(t){return t(mt)}}).$mount("#app")},6015:function(t,e,a){"use strict";a("8ac0")},"6b60":function(t,e,a){},"85ec":function(t,e,a){},"8ac0":function(t,e,a){},"9b10":function(t,e,a){"use strict";a("6b60")},b04b:function(t,e,a){"use strict";a("f8c1")},bcfa:function(t,e,a){},d8e6:function(t,e,a){},e0d3:function(t,e,a){"use strict";a("e25a")},e25a:function(t,e,a){},e3ab:function(t,e,a){t.exports=a.p+"img/Spotify_logo_with_text.8499c8e5.svg"},f8c1:function(t,e,a){}});
//# sourceMappingURL=app.9f99edd4.js.map