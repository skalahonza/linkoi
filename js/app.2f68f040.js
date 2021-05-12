(function(e){function t(t){for(var s,o,c=t[0],u=t[1],d=t[2],l=0,m=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);i&&i(t);while(m.length)m.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2395:function(e,t,a){},"7c55":function(e,t,a){"use strict";var s=a("2395"),r=a.n(s);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("5f5b"),n=a("b1e0"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/first/winter"}},[e._v("First year: Winter")]),e._v(" | "),a("router-link",{attrs:{to:"/first/summer"}},[e._v("First year: Summer")]),e._v(" | "),a("router-link",{attrs:{to:"/second/winter"}},[e._v("Second year: Winter")]),e._v(" | "),a("a",{attrs:{target:"_blank",href:"https://github.com/skalahonza/linkoi"}},[e._v("GitHub")])],1),a("h1",[e._v("LinkOI")]),a("p",[e._v("Waypoint for school subjects of CTU in Prague OI masters.")]),a("b-button-group",[a("b-button",{attrs:{target:"_blank",variant:"danger",href:"https://office365.cvut.cz"}},[e._v("Office 365")]),a("b-button",{attrs:{target:"_blank",variant:"info",href:"https://teams.microsoft.com/"}},[e._v("Teams")]),a("b-button",{attrs:{target:"_blank",variant:"secondary",href:"https://web.microsoftstream.com/browse?view=group"}},[e._v("Lectures/Labs recordings")]),a("b-button",{attrs:{target:"_blank",variant:"primary",href:"https://moodle.fel.cvut.cz/"}},[e._v("Moodle")]),a("b-button",{attrs:{target:"_blank",variant:"dark",href:"https://cw.felk.cvut.cz/brute/student/"}},[e._v("Brute")])],1),a("hr"),a("router-view")],1)],1)},c=[],u=(a("7c55"),a("2877")),d={},i=Object(u["a"])(d,o,c,!1,null,null,null),l=i.exports,m=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("div",{key:t.code,staticStyle:{border:"none"}},[a("h4",[e._v(e._s(t.name))]),a("h6",[e._v(e._s(t.code))]),a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1),a("hr")],1)})),0)},b=[],p=s["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":case"Google":return"danger";case"Brute":case"GitHub":return"dark";case"Forum":return"warning";default:return"secondary"}}},data:function(){return{subjects:[{name:"Pokročilé algoritmy (Advanced Algorithms)",code:"B4M33PAL",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b201/courses/b4m33pal/start"}]},{name:"Database Systems 2",code:"B4M36DS2",links:[{name:"Other",address:"https://www.ksi.mff.cuni.cz/~svoboda/courses/201-B4M36DS2/"}]}]}}}),h=p,v=Object(u["a"])(h,f,b,!1,null,null,null),w=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("div",{key:t.code,staticStyle:{border:"none"}},[a("h4",[e._v(e._s(t.name))]),a("h6",[e._v(e._s(t.code))]),a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1),a("hr")],1)})),0)},k=[],y=s["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":return"danger";case"Brute":return"dark";case"Forum":return"warning";default:return"secondary"}}},data:function(){return{subjects:[{name:"Combinatorial Optimization",code:"B4M35KO",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/ko/start"},{name:"Stream",address:"https://youtu.be/VFLm7cgzYQ4"},{name:"Forum",address:"https://cw.felk.cvut.cz/forum/forum-1623-page-1.html"},{name:"YouTube - Lectures",address:"https://www.youtube.com/playlist?list=PLQL6z4JeTTQlKMedf1yTuoVyDzYYfOQMX"},{name:"YouTube - Lab videos",address:"https://www.youtube.com/playlist?list=PLhMDoPPJXZWQr3a4IOw0FYVWEMq9w3t0J"}]},{name:"Theory of Algorithms",code:"B4M01TAL",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4542"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3af8fd8b77cc7d4ca7a16608c1aa640305%40thread.tacv2/conversations?groupId=95b91ba2-53fc-4346-be06-7cfdae54d142&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Software Architectures",code:"B4M36SWA",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4982"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Effective Software",code:"B4M36ESW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5aad055a96f94e8abba8ad6fdffc0584%40thread.tacv2/conversations?groupId=5df990ab-0cb2-4268-acf9-53d5d14b4a78&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Planning for Artificial Intelligence",code:"B4M36PUI/BE4M36PUI",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"},{name:"Youtube - Lectures",address:"https://www.youtube.com/playlist?list=PLV1VrPDl1-1_IiRuuoyFZ7GQOfrv1hZIp"}]},{name:"Symbolic Machine Learning",code:"B4M46SMU/BE4M46SMU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/smu/start"},{name:"Forum",address:"https://cw.felk.cvut.cz/forum/forum-1633.html"},{name:"Lecture recordings",address:"https://web.microsoftstream.com/group/d75ffc87-2e08-4fa5-903c-2fd4cbe820ea"}]},{name:"Visualization",code:"B4M39VIZ",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Spatial Design",code:"B4M39PTV",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Mathematical Cryptography",code:"B4M01MKR",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/gollova/mkr.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4953"}]}]}}}),_=y,M=Object(u["a"])(_,g,k,!1,null,null,null),z=M.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},e._l(e.subjects,(function(t){return a("div",{key:t.code,staticStyle:{border:"none"}},[a("h4",[e._v(e._s(t.name))]),a("h6",[e._v(e._s(t.code))]),a("b-button-group",e._l(t.links,(function(t){return a("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1),a("hr")],1)})),0)},S=[],O=s["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":case"YouTube":case"Google":return"danger";case"Brute":case"GitHub":return"dark";case"Forum":return"warning";default:return"secondary"}}},data:function(){return{subjects:[{name:"System security (Bezpečnost systémů)",code:"B4M36BSY",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=5412"},{name:"Google",address:"https://sites.google.com/aic.fel.cvut.cz/b4m36bsy/"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3aa1df7fe34d914313b08406b1404f86fa%40thread.tacv2/conversations?groupId=7e14d4e5-7d9b-40bd-92c7-226bfcd8a1c3&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"},{name:"Mailing List",address:"https://list.feld.cvut.cz/cgi-bin/mailman/listinfo/b4m36bsy"},{name:"Lecture Stream",address:"https://studuj.net/b/jos-fxy-k18-f9s"}]},{name:"Parallel Algorithms",code:"BE4M35PAG",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/pag/start"},{name:"Lecture stream (Zoom)",address:"https://zoom.us/j/4385398414?pwd=ek1RaCtxc2xXVURzenFDWmFNODZsZz09"},{name:"Teams",address:"https://teams.microsoft.com/l/channel/19%3a2b18107c58c4420981843d8c216480a6%40thread.tacv2/General?groupId=f11be53f-9eb4-496f-a17f-b694440d33ac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"},{name:"Recordings",address:"https://web.microsoftstream.com/group/f11be53f-9eb4-496f-a17f-b694440d33ac"}]},{name:"Ontologies and Semantic Web",code:"B4M36OSW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/osw/start"}]},{name:"Statistical Machine Learning",code:"BE4M33SSU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/be4m33ssu/start"}]},{name:"Evoluční optimalizační algoritmy",code:"A0M33EOA",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/a0m33eoa/start"}]},{name:"Big Data Technologies",code:"B0M33BDT",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b0m33bdt/start?animal=wiki"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3abbb3a17988dd429a85e5bb75e55976c3%40thread.tacv2/conversations?groupId=59f14ebe-3633-4c79-be8f-616535737b43&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"},{name:"GitHub",address:"https://github.com/stameser/BDT"},{name:"Metacentrum",address:"https://wiki.metacentrum.cz/wiki/Hadoop"}]},{name:"Internet Applications Development (Vývoj internetových aplikací)",code:"A4M33VIA",links:[{name:"Google",address:"https://sites.google.com/a/via.felk.cvut.cz/via/"},{name:"Teams",address:"https://teams.microsoft.com/"},{name:"Stream",address:"https://meet.google.com/wrh-qmqx-vap"}]},{name:"Matlab",code:"BE0B17MTB",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/be0b17mtb/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5599e3b45df6460692a4d4985bb70d2c%40thread.tacv2/conversations?groupId=9ac0a2f1-ad5a-4920-bb79-a25f303730b5&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"},{name:"Topic reservations",address:"https://docs.google.com/spreadsheets/d/1NqSQpL2tGGXPfISO7ueviEu27eYugsbQsgVTyMxbu5k/edit#gid=0"}]}]}}}),B=O,I=Object(u["a"])(B,T,S,!1,null,null,null),j=I.exports;s["default"].use(m["a"]);var P=[{path:"/",redirect:"/second/winter"},{path:"/first/winter",name:"First Winter",component:w},{path:"/first/summer",name:"First Summer",component:z},{path:"/second/winter",name:"Second Winter",component:j}],L=new m["a"]({routes:P}),C=L,x=a("2f62");s["default"].use(x["a"]);var E=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(r["a"]),s["default"].use(n["a"]),new s["default"]({router:C,store:E,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.2f68f040.js.map