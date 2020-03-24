(function(e){function t(t){for(var r,o,c=t[0],u=t[1],d=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var u=a[c];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2395:function(e,t,a){},"7c55":function(e,t,a){"use strict";var r=a("2395"),n=a.n(r);n.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("5f5b"),s=a("b1e0"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Subjects")]),e._v(" | "),a("a",{attrs:{target:"_blank",href:"https://github.com/skalahonza/linkoi"}},[e._v("GitHub")])],1),a("router-view")],1)},c=[],u=(a("7c55"),a("2877")),d={},i=Object(u["a"])(d,o,c,!1,null,null,null),l=i.exports,f=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("b-card",{key:t.code,attrs:{title:t.name,"sub-title":t.code}},[a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1)],1)})),1)},m=[],b=r["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":return"danger";case"Brute":return"dark";default:return"secondary"}}},data:function(){return{subjects:[{name:"Useful Links",code:"",links:[{name:"Office 365",address:"https://office365.cvut.cz"},{name:"Lectures/Labs recordings",address:"https://web.microsoftstream.com/browse?view=group"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/"},{name:"Brute",address:"https://cw.felk.cvut.cz/brute/student/"}]},{name:"Combinatorial Optimization",code:"B4M35KO",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/ko/start"},{name:"Stream",address:"https://youtu.be/apQFijP8xr8"},{name:"YouTube - Lectures",address:"https://www.youtube.com/playlist?list=PLQL6z4JeTTQlKMedf1yTuoVyDzYYfOQMX"},{name:"YouTube - Lab videos",address:"https://www.youtube.com/playlist?list=PLhMDoPPJXZWQr3a4IOw0FYVWEMq9w3t0J"}]},{name:"Theory of Algorithms",code:"B4M01TAL",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4542"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3af8fd8b77cc7d4ca7a16608c1aa640305%40thread.tacv2/conversations?groupId=95b91ba2-53fc-4346-be06-7cfdae54d142&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Software Architectures",code:"B4M36SWA",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4982"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Effective Software",code:"B4M36ESW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5aad055a96f94e8abba8ad6fdffc0584%40thread.tacv2/conversations?groupId=5df990ab-0cb2-4268-acf9-53d5d14b4a78&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Planning for Artificial Intelligence",code:"B4M36PUI/BE4M36PUI",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"}]},{name:"Symbolic Machine Learning",code:"B4M46SMU/BE4M46SMU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/smu/start"}]},{name:"Visualization",code:"B4M39VIZ",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Spatial Design",code:"B4M39PTV",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Mathematical Cryptography",code:"B4M01MKR",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/gollova/mkr.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4953"}]}]}}}),h=b,v=Object(u["a"])(h,p,m,!1,null,null,null),w=v.exports;r["default"].use(f["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/github",beforeEnter:function(){location.href="https://github.com/skalahonza/linkoi"}}],k=new f["a"]({routes:y}),M=k,g=a("2f62");r["default"].use(g["a"]);var z=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("f9e3"),a("2dd8");r["default"].config.productionTip=!1,r["default"].use(n["a"]),r["default"].use(s["a"]),new r["default"]({router:M,store:z,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.69ca2cac.js.map