(function(a){function e(e){for(var t,s,i=e[0],l=e[1],c=e[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(a[t]=l[t]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var a,e=0;e<r.length;e++){for(var o=r[e],t=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(t=!1)}t&&(r.splice(e--,1),a=s(s.s=o[0]))}return a}var t={},n={app:0},r=[];function s(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return a[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=a,s.c=t,s.d=function(a,e,o){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:o})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)s.d(o,t,function(e){return a[e]}.bind(null,t));return o},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;r.push([0,"chunk-vendors"]),o()})({0:function(a,e,o){a.exports=o("56d7")},1:function(a,e){},2:function(a,e){},"56d7":function(a,e,o){"use strict";o.r(e);var t=o("2b0e"),n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",[t("v-container",[t("v-layout",{attrs:{"text-center":"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),t("v-flex",{staticClass:"d-flex justify-space-between mb-5",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("h1",{staticClass:"headline"},[a._v("Serviços Corporativos")])]),a.cCorporate.sum>0?t("v-flex",{staticClass:"d-flex justify-space-between",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("v-progress-linear",{attrs:{indeterminate:""}})],1):a._e(),t("v-flex",{staticClass:"d-flex justify-space-between mb-10",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("v-expansion-panels",a._l(a.sCorporate,(function(e,o){return t("v-expansion-panel",{key:o},[t("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:a._u([{key:"actions",fn:function(){return[t("v-chip",{directives:[{name:"show",rawName:"v-show",value:void 0===e.status,expression:"item.status === undefined"}],staticClass:"py-0",attrs:{color:"yellow darken-3",label:"","text-color":"white"}},[a._v("\n                  Verificando...\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("hourglass_empty")])],1),t("v-chip",{directives:[{name:"show",rawName:"v-show",value:!0===e.status,expression:"item.status === true"}],staticClass:"py-0",attrs:{color:"green",label:"","text-color":"white"}},[a._v("\n                  Operacional!\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("done")])],1),t("v-chip",{directives:[{name:"show",rawName:"v-show",value:!1===e.status,expression:"item.status === false"}],staticClass:"py-0",attrs:{color:"red",label:"","text-color":"white"}},[a._v("\n                  Inacessível!\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("error")])],1)]},proxy:!0}],null,!0)},[a._v("\n              "+a._s(e.name)+"\n              ")]),t("v-expansion-panel-content",{staticClass:"font-weight-light text-start"},[t("a",{attrs:{href:e.url,target:"_blank"}},[a._v(a._s(e.url))])])],1)})),1)],1),t("v-flex",{staticClass:"d-flex justify-space-between mb-5",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("h1",{staticClass:"headline"},[a._v("Unidade Descentralizada")])]),t("v-flex",{staticClass:"d-flex justify-center mb-3",attrs:{xs12:"",md6:"","offset-md-3":"",xl4:"","offset-xl-4":""}},[t("v-select",{attrs:{label:"Selecione a unidade...",solo:"",items:a.unities,"item-text":"name",hint:"Em "+a.unity.local,"persistent-hint":"","append-outer-icon":"location_city","return-object":""},on:{change:function(e){return a.changeUnity()}},model:{value:a.unity,callback:function(e){a.unity=e},expression:"unity"}})],1),a.cLocal.sum>0?t("v-flex",{staticClass:"d-flex justify-space-between",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("v-progress-linear",{attrs:{indeterminate:""}})],1):a._e(),a.unity?t("v-flex",{staticClass:"d-flex justify-space-between mb-10",attrs:{xs12:"",md10:"","offset-md-1":"",xl6:"","offset-xl-3":""}},[t("v-expansion-panels",a._l(a.sLocal[a.unity.domain],(function(e,o){return t("v-expansion-panel",{key:o},[t("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:a._u([{key:"actions",fn:function(){return[t("v-chip",{directives:[{name:"show",rawName:"v-show",value:void 0===e.status,expression:"item.status === undefined"}],staticClass:"py-0",attrs:{color:"yellow darken-3",label:"","text-color":"white"}},[a._v("\n                  Verificando...\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("hourglass_empty")])],1),t("v-chip",{directives:[{name:"show",rawName:"v-show",value:!0===e.status,expression:"item.status === true"}],staticClass:"py-0",attrs:{color:"green",label:"","text-color":"white"}},[a._v("\n                  Operacional!\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("done")])],1),t("v-chip",{directives:[{name:"show",rawName:"v-show",value:!1===e.status,expression:"item.status === false"}],staticClass:"py-0",attrs:{color:"red",label:"","text-color":"white"}},[a._v("\n                  Inacessível!\n                  "),t("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("error")])],1)]},proxy:!0}],null,!0)},[a._v("\n              "+a._s(e.name)+"\n              ")]),t("v-expansion-panel-content",{staticClass:"font-weight-light text-start"},[t("a",{attrs:{href:e.url,target:"_blank"}},[a._v(a._s(e.url))])])],1)})),1)],1):a._e()],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t("v-card",[t("v-card-text",[t("p",{staticClass:"text-center pt-4"},[t("v-icon",{attrs:{large:"",color:"red"}},[a._v("cloud_off")])],1),a._v("\n          Você está sem conexão com a internet! Ela é necessária para utilizar este serviço. Por favor, verifique sua rede de dados.\n        ")]),t("v-card-actions",[t("div",{staticClass:"flex-grow-1"}),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return a.reload()}}},[a._v("Tentar Novamente")])],1)],1)],1)],1)],1)},r=[],s=o("bc3a"),i=o.n(s),l=o("24f8"),c=o.n(l),p=o("edd4"),m=o("c336"),d=o("7d2e"),u=o("9e81"),f={data:()=>({online:!1,dialog:!1,unity:null,unities:p,sExternal:m,sCorporate:d,sLocal:u,cCorporate:{sum:0},cLocal:{sum:0}}),beforeMount(){this.unity=p[0],"undefined"===typeof window.navigator.onLine?this.online=!0:this.online=window.navigator.onLine},mounted(){this.online?(this.sCorporate.forEach(a=>{this.cCorporate.sum++,console.log("Checking "+a.url),this.check(a,this.cCorporate)}),this.checkUnitiesServices()):this.dialog=!0},methods:{check(a,e){const o=new c.a.Agent({rejectUnauthorized:!1});let t={httpsAgent:o,crossdomain:!0,mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}};i.a.head(a.url,t).then(e=>{console.log("Ok to "+a.url+"!"),a.status=!0}).catch(e=>{console.log("Failed to "+a.url+" - "+e),a.status=!1}).finally(()=>{e.sum--,console.log("counter: "+e.sum),this.$forceUpdate()})},reload(){location.reload()},changeUnity(){this.$forceUpdate(),this.checkUnitiesServices()},checkUnitiesServices(){void 0!==this.sLocal[this.unity.domain]&&this.sLocal[this.unity.domain].forEach(a=>{this.cLocal.sum++,console.log("Checking "+a.url),this.check(a,this.cLocal)})}}},v=f,h=o("2877"),b=o("6544"),g=o.n(b),x=o("7496"),w=o("8336"),y=o("b0af"),C=o("99d9"),E=o("cc20"),S=o("a523"),_=o("169a"),A=o("cd55"),P=o("49e2"),k=o("c865"),O=o("0393"),j=o("0e8f"),V=o("132d"),M=o("adda"),R=o("a722"),L=o("8e36"),F=o("b974"),N=Object(h["a"])(v,n,r,!1,null,null,null),B=N.exports;g()(N,{VApp:x["a"],VBtn:w["a"],VCard:y["a"],VCardActions:C["a"],VCardText:C["b"],VChip:E["a"],VContainer:S["a"],VDialog:_["a"],VExpansionPanel:A["a"],VExpansionPanelContent:P["a"],VExpansionPanelHeader:k["a"],VExpansionPanels:O["a"],VFlex:j["a"],VIcon:V["a"],VImg:M["a"],VLayout:R["a"],VProgressLinear:L["a"],VSelect:F["a"]});var T=o("9483");Object(T["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(a){console.error("Error during service worker registration:",a)}});o("d1e7");var J=o("f309"),G=o("eea9"),U=o.n(G);t["a"].use(J["a"]);var z=new J["a"]({lang:{locales:{pt:U.a},current:"pt"},icons:{iconfont:"md"}});o("d5e8"),o("5363");(function(){console.log("CORS Anywhere enabled!");var a="cors-anywhere.herokuapp.com",e="https://"+a+"/",o=[].slice,t=window.location.protocol+"//"+window.location.host,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){var r=o.call(arguments),s=/^https?:\/\/([^\/]+)/i.exec(r[1]);return s&&s[0].toLowerCase()!==t&&s[1]!==a&&(r[1]=e+r[1]),n.apply(this,r)}})(),t["a"].config.productionTip=!1,new t["a"]({vuetify:z,render:a=>a(B)}).$mount("#app")},"7d2e":function(a){a.exports=JSON.parse('[{"name":"Portal","url":"https://www.embrapa.br"},{"name":"Intranet","url":"https://intranet.embrapa.br"},{"name":"Correio Eletrônico","url":"https://correio.embrapa.br"}]')},"9b19":function(a,e,o){a.exports=o.p+"img/logo.a7bae2e5.svg"},"9e81":function(a){a.exports=JSON.parse('{"cnpgc":[{"name":"Pandora","url":"https://pandora.cnpgc.embrapa.br"},{"name":"SAGU","url":"https://sagu.cnpgc.embrapa.br"},{"name":"Reserva de Salas","url":"https://rs.cnpgc.embrapa.br"}]}')},c336:function(a){a.exports=JSON.parse('[{"name":"Google","url":"https://www.google.com"}]')},edd4:function(a){a.exports=JSON.parse('[{"domain":"cnpgc","name":"Embrapa Gado de Corte","local":"Campo Grande - MS"},{"domain":"cpaa","name":"Embrapa Amazonia Ocidental","local":"Manaus - AM"},{"domain":"cpaf-acre","name":"Embrapa Acre","local":"Rio Branco - AC"},{"domain":"cppsul","name":"Embrapa Pecuária Sul","local":"Bage - RS"},{"domain":"cnpgl","name":"Embrapa Gado de Leite","local":"Juiz de Fora - MG"},{"domain":"cnpmf","name":"Embrapa Mandioca e Fruticultura","local":"Cruz das Almas - BA"},{"domain":"cnpso","name":"Embrapa Soja","local":"Londrina - PR"},{"domain":"sgte","name":"Embrapa Territorial","local":"Campinas - SP"},{"domain":"cnpa","name":"Embrapa Algodao","local":"Campina Grande - PB"},{"domain":"cnpuv","name":"Embrapa Uva e Vinho","local":"Bento Goncalves - RS"},{"domain":"ctaa","name":"Embrapa Agroindústria de Alimentos","local":"Rio de Janeiro - RJ"},{"domain":"cpap","name":"Embrapa Pantanal","local":"Corumba - MS"},{"domain":"cpatsa","name":"Embrapa Semi-Árido","local":"Petrolina - PE"},{"domain":"cnpaf","name":"Embrapa Arroz e Feijão","local":"Santo Antonio de Goias - GO"},{"domain":"cnpf","name":"Embrapa Florestas","local":"Colombo - PR"},{"domain":"cnph","name":"Embrapa Hortaliças","local":"Brasília - DF"},{"domain":"cnpms","name":"Embrapa Milho e Sorgo","local":null},{"domain":"cpamn","name":"Embrapa Meio-Norte","local":"Teresina - PI"},{"domain":"cnpc","name":"Embrapa Caprinos e Ovinos","local":"Sobral - CE"},{"domain":"cnpat","name":"Embrapa Agroindustria Tropical","local":"Fortaleza - CE"},{"domain":"cpacp","name":"Embrapa Cocais","local":"Sao Luis - MA"},{"domain":"cpaf-roraima","name":"Embrapa Roraima","local":"Boa Vista - RR"},{"domain":"cenargen","name":"Embrapa Recursos Genéticos","local":"Brasília - DF"},{"domain":"cnpm","name":"Embrapa Monitoramento por Satélite","local":"Campinas - SP"},{"domain":"cpao","name":"Embrapa Agropecuária Oeste","local":"Dourados - MS"},{"domain":"cpac","name":"Embrapa Cerrados","local":"Brasília - DF"},{"domain":"cpatc","name":"Embrapa Tabuleiros Costeiros","local":"Aracaju - SE"},{"domain":"cppse","name":"Embrapa Pecuária do Sudeste","local":"Sao Carlos - SP"},{"domain":"cnpt","name":"Embrapa Trigo","local":"Passo Fundo - RS"},{"domain":"cnpdia","name":"Embrapa Instrumentação","local":"Sao Carlos - SP"},{"domain":"cnpma","name":"Embrapa Meio Ambiente","local":"Jaguariuna - SP"},{"domain":"cnps","name":"Embrapa Solos","local":"Rio de Janeiro - RJ"},{"domain":"cpatu","name":"Embrapa Amazonia Oriental","local":"Belem - PA"},{"domain":"cpaf-rondonia","name":"Embrapa Rondônia","local":"Porto Velho - RO"},{"domain":"cpact","name":"Embrapa Clima Temperado","local":"Pelotas - RS"},{"domain":"cpamt","name":"Embrapa Agrossilvipastoril","local":"Sinop - MT"},{"domain":"cnpae","name":"Embrapa Agroenergia","local":"Brasília - DF"},{"domain":"cnpasa","name":"Embrapa Pesca e Aquicultura","local":"Palmas - TO"},{"domain":"cnptia","name":"Embrapa Informática Agropecuária","local":"Campinas - SP"},{"domain":"cpaf-amapa","name":"Embrapa Amapá","local":"Macapa - AP"},{"domain":"cnpca","name":"Embrapa Café","local":"Brasília - DF"},{"domain":"cnpsa","name":"Embrapa Suínos e Aves","local":"Concordia - SC"},{"domain":"cnat","name":"Embrapa Alimentos e Territórios","local":"Maceio - AL"},{"domain":"cnpab","name":"Embrapa Agrobiologia","local":"Seropedica - RJ"}]')}});
//# sourceMappingURL=app.ba34b3df.js.map