(function(e){function t(t){for(var o,r,a=t[0],u=t[1],i=t[2],d=0,s=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(s.length)s.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},l=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-46ce9756":"8053919d","chunk-8cbe02b0":"b91ca7de","chunk-e16e038e":"46a38d64"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-46ce9756":1,"chunk-8cbe02b0":1,"chunk-e16e038e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-46ce9756":"4cd1ba38","chunk-8cbe02b0":"cfb9fe05","chunk-e16e038e":"35366254"}[e]+".css",c=u.p+o,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var i=l[a],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===o||d===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],d=i.getAttribute("data-href");if(d===o||d===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||c,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete r[e],p.parentNode.removeChild(p),n(l)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=l);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=a(e);var s=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=d;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"cover"}}),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"content-head"}},[e._v("添加待办项")]),n("label",{attrs:{for:"title"}}),n("input",{attrs:{type:"text",value:"标题",id:"title",onfocus:"if(value ==='标题'){value =''}",onblur:"if(value ===''){value='标题'}"}}),n("label",{attrs:{for:"con"}}),n("input",{attrs:{type:"text",value:"内容",id:"con",onfocus:"if(value ==='内容'){value =''}",onblur:"if(value ===''){value='内容'}"}}),n("input",{attrs:{id:"submit",value:"添加",type:"submit"},on:{click:function(t){return e.submit()}}}),n("input",{attrs:{id:"cancel",value:"取消",type:"submit"},on:{click:function(t){return e.canclee()}}})]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/all"}},[e._v("All")]),n("router-link",{attrs:{to:"/undone"}},[e._v("Undone")]),n("router-link",{attrs:{to:"/done"}},[e._v("Done")])],1),n("router-view",{attrs:{alltodolists:e.alltodolists,markCheck:e.markTodoCheck}}),n("div",{staticClass:"delete"},[n("input",{attrs:{type:"button",value:"删除"},on:{click:e.deleteTodo}})]),n("div",{attrs:{id:"d0"},on:{click:e.addTodo}},[n("div",{attrs:{id:"d1"}}),n("div",{attrs:{id:"d2"}})])],1)},c=[],l={name:"App",data:function(){return{name:"秦叶岭",alltodolists:[{title:"做饭",cont:"做饭饭饭饭饭饭饭饭饭",completed:!0,check:!1},{title:"刷碗",cont:"刷碗碗碗碗碗碗碗碗碗",completed:!1,check:!1},{title:"睡觉",cont:"睡觉觉觉觉觉觉觉觉觉",completed:!1,check:!1}]}},methods:{deleteTodo:function(){for(var e=[],t=0;t<this.alltodolists.length;t++)this.alltodolists[t].check||e.push(this.alltodolists[t]);this.alltodolists=e},addTodo:function(){console.log("添加Todo"),document.getElementById("cover").style.display="block",document.getElementById("content").style.display="block"},markTodoCheck:function(e){console.log("markTodoCheck"),e.check||(e.check=!0),console.log(this.alltodolists)},submit:function(){var e={};document.getElementById("cover").style.display="none",document.getElementById("content").style.display="none",e.title=document.getElementById("title").value,e.cont=document.getElementById("con").value,e.completed=!1,e.check=!1,console.log(e.title),console.log(e.cont),this.alltodolists.push(e),document.getElementById("title").value="标题",document.getElementById("con").value="内容"},canclee:function(){document.getElementById("cover").style.display="none",document.getElementById("content").style.display="none"}},computed:{}},a=l,u=(n("034f"),n("2877")),i=Object(u["a"])(a,r,c,!1,null,null,null),d=i.exports,s=(n("b0c0"),n("d3b7"),n("8c4f")),p=function(){return n.e("chunk-8cbe02b0").then(n.bind(null,"94dc"))},f=function(){return n.e("chunk-e16e038e").then(n.bind(null,"2c90"))},h=function(){return n.e("chunk-46ce9756").then(n.bind(null,"c48c"))};o["a"].use(s["a"]);var m=[{path:"/",redirect:"/undone"},{path:"/all",name:"All",component:p,props:{default:!0,sidebar:!1}},{path:"/undone",name:"Undone",component:f},{path:"/done",name:"Done",component:h}],v=new s["a"]({routes:m,mode:"history"});v.beforeEach((function(e,t,n){console.log("----"),document.title=e.matched[0].name,n()})),v.afterEach((function(e,t){console.log("++++")}));var y=v;o["a"].config.productionTip=!1,new o["a"]({router:y,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.ab54957c.js.map