(function(a){function e(e){for(var r,i,s=e[0],l=e[1],p=e[2],m=0,u=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(a[r]=l[r]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,p||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var l=t[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=r,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var r in a)i.d(t,r,function(e){return a[e]}.bind(null,r));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var c=l;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"56d7":function(a,e,t){"use strict";t.r(e);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("v-app",[r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:t("9b19"),contain:"",height:"200"}})],1),r("v-flex",{staticClass:"d-flex justify-center mb-10",attrs:{md6:"","offset-md-3":"","offset-xl-4":"",xl4:"",xs12:""}},[r("v-btn",{staticClass:"ma-2 white--text",attrs:{disabled:a.loading(),loading:a.loading(),color:"blue-grey darken-1",dark:"","x-large":""},on:{click:function(e){return a.refresh()}}},[a._v(" Atualizar "),r("v-icon",{attrs:{dark:"",right:""}},[a._v("refresh")])],1)],1),r("v-flex",{staticClass:"d-flex justify-space-between mb-5",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("h1",{staticClass:"headline"},[a._v("Serviços Corporativos")])]),a.cCorporate.sum>0?r("v-flex",{staticClass:"d-flex justify-space-between",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("v-progress-linear",{attrs:{indeterminate:""}})],1):a._e(),r("v-flex",{staticClass:"d-flex justify-space-between mb-10",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("v-expansion-panels",a._l(a.sCorporate,(function(e,t){return r("v-expansion-panel",{key:t},[r("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:a._u([{key:"actions",fn:function(){return[void 0===e.status||null===e.status?r("v-chip",{staticClass:"py-0",attrs:{color:"blue darken-1",label:"","text-color":"white"}},[a._v(" Verificando... "),r("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("hourglass_empty")])],1):r("v-chip",{staticClass:"py-0",attrs:{color:e.status.color,label:"","text-color":"white"}},[a._v(" "+a._s(e.status.label)+" "),r("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v(a._s(e.status.icon))])],1)]},proxy:!0}],null,!0)},[a._v(" "+a._s(e.name)+" ")]),r("v-expansion-panel-content",{staticClass:"font-weight-light text-start"},[r("a",{attrs:{href:e.url,target:"_blank"}},[a._v(a._s(e.url))])])],1)})),1)],1),r("v-flex",{staticClass:"d-flex justify-space-between mb-5",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("h1",{staticClass:"headline"},[a._v("Unidade Descentralizada")])]),r("v-flex",{staticClass:"d-flex justify-center mb-3",attrs:{md6:"","offset-md-3":"","offset-xl-4":"",xl4:"",xs12:""}},[r("v-select",{attrs:{disabled:a.cLocal.sum>0,hint:"Em "+a.unity.local,items:a.unities,"append-outer-icon":"location_city","item-text":"name",label:"Selecione a unidade...","persistent-hint":"","return-object":"",solo:""},on:{change:function(e){return a.changeUnity()}},model:{value:a.unity,callback:function(e){a.unity=e},expression:"unity"}})],1),a.cLocal.sum>0?r("v-flex",{staticClass:"d-flex justify-space-between",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("v-progress-linear",{attrs:{indeterminate:""}})],1):a._e(),a.unity?r("v-flex",{staticClass:"d-flex justify-space-between mb-12",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("v-expansion-panels",a._l(a.sLocal[a.unity.domain],(function(e,t){return r("v-expansion-panel",{key:t},[r("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:a._u([{key:"actions",fn:function(){return[void 0===e.status||null===e.status?r("v-chip",{staticClass:"py-0",attrs:{color:"blue darken-1",label:"","text-color":"white"}},[a._v(" Verificando... "),r("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v("hourglass_empty")])],1):r("v-chip",{staticClass:"py-0",attrs:{color:e.status.color,label:"","text-color":"white"}},[a._v(" "+a._s(e.status.label)+" "),r("v-icon",{staticStyle:{color:"#fff"},attrs:{right:""}},[a._v(a._s(e.status.icon))])],1)]},proxy:!0}],null,!0)},[a._v(" "+a._s(e.name)+" ")]),r("v-expansion-panel-content",{staticClass:"font-weight-light text-start"},[r("a",{attrs:{href:e.url,target:"_blank"}},[a._v(a._s(e.url))])])],1)})),1)],1):a._e(),void 0===a.sLocal[a.unity.domain]?r("v-flex",{staticClass:"d-flex justify-center mb-12",attrs:{md10:"","offset-md-1":"","offset-xl-3":"",xl6:"",xs12:""}},[r("v-alert",{attrs:{type:"error"}},[a._v("Não há serviços digitais locais cadastrados para a "+a._s(a.unity.name)+".")])],1):a._e()],1),r("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-text",[r("p",{staticClass:"text-center pt-4"},[r("v-icon",{attrs:{color:"red",large:""}},[a._v("cloud_off")])],1),a._v("Você está sem conexão com a internet! Ela é necessária para utilizar este serviço. Por favor, verifique sua rede de dados. ")]),r("v-card-actions",[r("div",{staticClass:"flex-grow-1"}),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return a.refresh()}}},[a._v("Tentar Novamente")])],1)],1)],1),r("v-footer",{staticClass:"font-weight-light",attrs:{absolute:"",color:"blue-grey darken-1",dark:"",padless:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a._v(" ©"+a._s((new Date).getFullYear())+" • "),r("a",{staticStyle:{color:"#FFF","text-decoration":"none"},attrs:{href:"https://www.embrapa.br/gado-de-corte",target:"_blank"}},[r("strong",[a._v("Embrapa Gado de Corte")])]),r("v-chip",{staticClass:"ml-2 px-1",attrs:{color:"white",label:"",light:"",small:""}},[r("v-avatar",{staticClass:"mr-2"},[r("v-icon",[a._v("update")])],1),r("b",[a._v("v"+a._s(a.version))])],1)],1)],1)],1)],1)},o=[],i=(t("4160"),t("d3b7"),t("159b"),t("2ef0")),s=t.n(i),l=t("edd4"),p=t("c336"),c=t("7d2e"),m=t("9e81"),u=t("9224"),b={data:function(){return{dialog:!1,unity:null,unities:[],sExternal:p,sCorporate:c,sLocal:m,cCorporate:{sum:0},cLocal:{sum:0},version:u.version,status:{OK:{label:"Operacional",color:"green",icon:"done"},DOWN:{label:"Inacessível",color:"red",icon:"error"},TIMEOUT:{label:"Timeout",color:"orange",icon:"timer_off"},SLOW:{label:"Lentidão",color:"brown",icon:"access_time"}}}},localStorage:{unity:{type:Object,default:{domain:"cnpgc",name:"Embrapa Gado de Corte",local:"Campo Grande - MS"}}},beforeMount:function(){this.unity=this.$localStorage.get("unity"),this.unities=s.a.orderBy(l,["name"],["asc"])},mounted:function(){this.refresh()},methods:{online:function(){return"undefined"===typeof window.navigator.onLine||window.navigator.onLine},refresh:function(){var a=this;this.online()?(this.dialog=!1,this.sCorporate.forEach((function(e){a.cCorporate.sum++,e.status=null,console.log("Checking "+e.url),a.check(e,a.cCorporate)})),this.checkUnitiesServices()):this.dialog=!0},check:function(a,e){var t=this,r=(new Date).getTime();this.timeout(1e4,fetch(a.url,{method:"HEAD",mode:"no-cors"})).then((function(e){var n=(new Date).getTime()-r;console.log("Ok to "+a.url+" in "+n+" seconds!"),a.status=n<5e3?t.status.OK:t.status.SLOW})).catch((function(e){var n=(new Date).getTime()-r;console.log("Failed to "+a.url+" in "+n+" seconds! - "+JSON.stringify(e)),a.status=n<1e4?t.status.DOWN:t.status.TIMEOUT})).finally((function(){e.sum--,t.$forceUpdate()}))},timeout:function(a,e){return new Promise((function(t,r){var n=setTimeout((function(){r(new Error("TIMEOUT"))}),a);e.then((function(a){clearTimeout(n),t(a)}),(function(a){clearTimeout(n),r(a)}))}))},reload:function(){location.reload()},changeUnity:function(){this.$localStorage.set("unity",JSON.parse(JSON.stringify(this.unity))),this.$forceUpdate(),this.checkUnitiesServices()},checkUnitiesServices:function(){var a=this;void 0!==this.sLocal[this.unity.domain]&&this.sLocal[this.unity.domain].forEach((function(e){a.cLocal.sum++,e.status=null,console.log("Checking "+e.url),a.check(e,a.cLocal)}))},loading:function(){return this.cCorporate>0||this.cLocal>0}}},d=b,w=t("2877"),f=t("6544"),h=t.n(f),g=t("0798"),v=t("7496"),S=t("8212"),x=t("8336"),A=t("b0af"),E=t("99d9"),y=t("cc20"),C=t("62ad"),P=t("a523"),_=t("169a"),k=t("cd55"),B=t("49e2"),O=t("c865"),I=t("0393"),G=t("0e8f"),T=t("553a"),M=t("132d"),L=t("adda"),j=t("a722"),R=t("8e36"),D=t("b974"),V=Object(w["a"])(d,n,o,!1,null,null,null),N=V.exports;h()(V,{VAlert:g["a"],VApp:v["a"],VAvatar:S["a"],VBtn:x["a"],VCard:A["a"],VCardActions:E["a"],VCardText:E["b"],VChip:y["a"],VCol:C["a"],VContainer:P["a"],VDialog:_["a"],VExpansionPanel:k["a"],VExpansionPanelContent:B["a"],VExpansionPanelHeader:O["a"],VExpansionPanels:I["a"],VFlex:G["a"],VFooter:T["a"],VIcon:M["a"],VImg:L["a"],VLayout:j["a"],VProgressLinear:R["a"],VSelect:D["a"]});var F=t("9483");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),document.dispatchEvent(new Event("hasUpdate"))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});t("d1e78");var J=t("f309"),U=t("eea9"),z=t.n(U);r["a"].use(J["a"]);var H=new J["a"]({lang:{locales:{pt:z.a},current:"pt"},icons:{iconfont:"md"}}),W=(t("d5e8"),t("5363"),t("ead5")),q=t.n(W);r["a"].config.productionTip=!1,r["a"].use(q.a),r["a"].use(q.a,{name:"ls",bind:!0}),new r["a"]({vuetify:H,render:function(a){return a(N)}}).$mount("#app")},"7d2e":function(a){a.exports=JSON.parse('[{"name":"Portal","url":"https://www.embrapa.br"},{"name":"Central de TI","url":"https://centralti.embrapa.br"},{"name":"Correio Eletrônico","url":"https://correio.embrapa.br"},{"name":"VWPonto","url":"https://vwponto.sede.embrapa.br"},{"name":"Banco Multimídia da Embrapa (BME)","url":"https://bme.sede.embrapa.br"},{"name":"Balanço Social","url":"https://bs.sede.embrapa.br"},{"name":"Mantis","url":"https://mantis.sede.embrapa.br"},{"name":"Kanban","url":"https://kanban.sede.embrapa.br"},{"name":"Sistema Eletrônico de Editoração de Revistas","url":"https://seer.sede.embrapa.br"}]')},9224:function(a){a.exports=JSON.parse('{"name":"embrapa-status","version":"1.20.04-1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --no-clean --dest ../dist","lint":"vue-cli-service lint","preinstall":"npx npm-force-resolutions"},"dependencies":{"@mdi/font":"^3.6.95","core-js":"^3.6.5","lodash":"^4.17.20","material-design-icons-iconfont":"^5.0.1","register-service-worker":"^1.7.1","roboto-fontface":"*","vue":"^2.6.12","vue-localstorage":"^0.6.2","vuetify":"^2.3.15"},"devDependencies":{"@vue/cli-plugin-babel":"~4.2.3","@vue/cli-plugin-eslint":"~4.2.3","@vue/cli-plugin-pwa":"~4.2.3","@vue/cli-service":"~4.2.3","@vue/eslint-config-standard":"^5.1.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-import":"^2.22.1","eslint-plugin-node":"^11.0.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.2","eslint-plugin-vue":"^6.1.2","minimist":"^1.2.5","sass":"^1.27.0","sass-loader":"^7.1.0","vue-cli-plugin-vuetify":"^2.0.7","vue-template-compiler":"^2.6.12","vuetify-loader":"^1.6.0"},"resolutions":{"minimist":"^1.2.5"}}')},"9b19":function(a,e,t){a.exports=t.p+"img/logo.a7bae2e5.svg"},"9e81":function(a){a.exports=JSON.parse('{"cnpgc":[{"name":"Pandora","url":"https://pandora.cnpgc.embrapa.br"},{"name":"SAGU","url":"https://sagu.cnpgc.embrapa.br"},{"name":"Reserva de Salas","url":"https://rs.cnpgc.embrapa.br"},{"name":"Servidor de Produção","url":"https://production.cnpgc.embrapa.br"},{"name":"API Backend","url":"https://backend.cnpgc.embrapa.br"},{"name":"PWAs","url":"https://pwa.cnpgc.embrapa.br"},{"name":"Hotsites","url":"https://cloud.cnpgc.embrapa.br"},{"name":"Servidor de Homologação","url":"https://test.cnpgc.embrapa.br"},{"name":"API Sandbox","url":"https://sandbox.cnpgc.embrapa.br"},{"name":"Filestash","url":"https://box.cnpgc.embrapa.br"},{"name":"Projetos de Bioinformática","url":"https://bio.cnpgc.embrapa.br"},{"name":"GitLab","url":"https://git.cnpgc.embrapa.br"},{"name":"Subversion","url":"https://svn.cnpgc.embrapa.br"},{"name":"Engeman","url":"https://engeman.cnpgc.embrapa.br"},{"name":"OpenVPN","url":"https://openvpn.cnpgc.embrapa.br:9443"},{"name":"Home Assistant","url":"https://hass.cnpgc.embrapa.br"}],"cnpgl":[{"name":"Gisleite","url":"https://gisleite.cnpgl.embrapa.br"}],"cnpmf":[{"name":"SAGU","url":"https://sagu.cnpmf.embrapa.br"}],"cnpaf":[{"name":"SAGU","url":"https://sagu.cnpaf.embrapa.br"}],"cnpf":[{"name":"Página do Gerson Oaida","url":"https://alamo.cnpf.embrapa.br"},{"name":"Email Marketing","url":"https://ceibo.cnpf.embrapa.br"}],"cpamn":[{"name":"Rocket.Chat","url":"https://limao2.cpamn.embrapa.br"},{"name":"Sistemas da Embrapa Meio-Norte","url":"https://sistemas.cpamn.embrapa.br"},{"name":"SAGU","url":"https://sagu.cpamn.embrapa.br"}],"cenargen":[{"name":"AleloWiki","url":"https://alelowiki.cenargen.embrapa.br"},{"name":"AleloTutor","url":"https://alelotutor.cenargen.embrapa.br"}],"cnpm":[{"name":"LimeSurvey","url":"https://survey.cnpm.embrapa.br"},{"name":"GitLab","url":"https://gitlab.cnpm.embrapa.br"}],"cnpt":[{"name":"EECTOnline","url":"https://eectonline.cnpt.embrapa.br"},{"name":"Laboratório de Solos","url":"https://rolas.cnpt.embrapa.br"},{"name":"LimeSurvey","url":"https://piwik.cnpt.embrapa.br"}],"cnpae":[{"name":"Documentação e afins","url":"https://doc.cnpae.embrapa.br"},{"name":"Embrapa Agroenergia","url":"https://cloud1.cnpae.embrapa.br"},{"name":"A Bioinformática e o LBB","url":"https://lbb.cnpae.embrapa.br"},{"name":"GitLab","url":"https://gitlab.cnpae.embrapa.br"},{"name":"OTRS","url":"https://centralservicos.cnpae.embrapa.br"},{"name":"Comitê Local de Publicações","url":"https://jilo.cnpae.embrapa.br"},{"name":"Taiga","url":"https://taiga.cnpae.embrapa.br"}],"cnptia":[{"name":"System Dynamics Simulator User Interface","url":"https://www.sdsim.cnptia.embrapa.br"},{"name":"GPDS - Gerenciador de Projetos de Desenvolvimento de Software","url":"https://www.gpds.cnptia.embrapa.br"},{"name":"7º GeoPantanal - Simpósio de Geotecnologias no Pantanal","url":"https://www.geopantanal.cnptia.embrapa.br"},{"name":"Repositório Saltus","url":"https://www.saltus-rep.cnptia.embrapa.br"},{"name":"Modelagem Agroambiental","url":"https://www.lma.cnptia.embrapa.br"},{"name":"PS3V","url":"https://www.ps3dv.cbi.cnptia.embrapa.br"},{"name":"SoilGrid","url":"https://www.soilgrid-agmip.cnptia.embrapa.br"},{"name":"BDPA [Homologação] - Bases de Dados da Pesquisa Agropecuária","url":"https://www.bdpa-h.cnptia.embrapa.br"},{"name":"SIExp - Sistema de Informação de Experimentos da Embrapa","url":"https://www.siexp.cnptia.embrapa.br"},{"name":"Matomo","url":"https://www.webstats.cnptia.embrapa.br"},{"name":"Projeto Agrohidro","url":"https://www.agrohidro-rep.cnptia.embrapa.br"},{"name":"Subversion","url":"https://www.svnserver.cnptia.embrapa.br"},{"name":"SIExp [Pré] - Sistema de Informação de Experimentos da Embrapa","url":"https://www.siexp-pre.cnptia.embrapa.br"},{"name":"GeoCloud - Catalogo","url":"https://www.geocloud-pre.cnptia.embrapa.br"},{"name":"Kamukaia","url":"https://www.kamukaia-h.cnptia.embrapa.br"},{"name":"ISMB 2006: Fortaleza, Brazil, August 6-10","url":"https://ismb2006.cbi.cnptia.embrapa.br"},{"name":"Infoteca-e [Homologação]","url":"https://www.infoteca-h.cnptia.embrapa.br"},{"name":"9º Congresso Interinstitucional de Iniciação Científica – CIIC 2015","url":"https://www.ciic.cnptia.embrapa.br"},{"name":"SIExp [Homologação] - Sistema de Informação de Experimentos da Embrapa","url":"https://www.siexp-h.cnptia.embrapa.br"},{"name":"SIAGEO Amazônia","url":"https://www.amazonia.cnptia.embrapa.br"},{"name":"Sistema de Informação de Solos Brasileiros","url":"https://www.bdsolos.cnptia.embrapa.br"},{"name":"Alice [Homologação]","url":"https://www.alice-h.cnptia.embrapa.br"},{"name":"Acompanhamento de Tarefas","url":"https://www.tarefas.cnptia.embrapa.br"},{"name":"NextCloud","url":"https://www.cloud.cnptia.embrapa.br"},{"name":"Ainfo - Sistema de Gestão de Bibliotecas","url":"https://ainfo.cnptia.embrapa.br"},{"name":"Agropedia Brasilis","url":"https://www.ainfo.cnptia.embrapa.br"},{"name":"Alice","url":"https://www.alice.cnptia.embrapa.br"},{"name":"SABIIA - Sistema Aberto e Integrado de Informação em Agricultura","url":"https://www.sabiia.cnptia.embrapa.br"},{"name":"Infoteca-e","url":"https://www.infoteca.cnptia.embrapa.br"},{"name":"BDPA - Bases de Dados da Pesquisa Agropecuária","url":"https://www.prodemb.cnptia.embrapa.br"},{"name":"Rede de Bibliotecas da Área de Engenharia e Arquitetura","url":"https://www.rebae.cnptia.embrapa.br"},{"name":"SIMAFF-Café","url":"https://www.simaff-cafe.cnptia.embrapa.br"},{"name":"Diagnose","url":"https://www.diagnose.cnptia.embrapa.br"},{"name":"Rede Pecus - Repositório de Dados","url":"https://www.pecus.cnptia.embrapa.br"},{"name":"Sistemas de Produção","url":"https://www.spo.cnptia.embrapa.br"},{"name":"Agência Embrapa de Informação Tecnológica - Ageitec","url":"https://www.agencia.cnptia.embrapa.br"},{"name":"Vellozia","url":"https://www.vellozia.cnptia.embrapa.br"},{"name":"Repositório IPAGRIDADOS","url":"https://www.dados.cnptia.embrapa.br"},{"name":"Agência Embrapa de Informação Tecnológica","url":"https://www.pubpgc20.cnptia.embrapa.br"},{"name":"TerraClass","url":"https://www.terraclass.cnptia.embrapa.br"},{"name":"AgroAPI [Homologação] - Plataforma de APIs da Embrapa","url":"https://www.agroapi-h.cnptia.embrapa.br"},{"name":"GeoNode","url":"https://www.agrotaggeo.cnptia.embrapa.br"},{"name":"Bioinformatics Laboratory","url":"https://www.lbc.cnptia.embrapa.br"},{"name":"WikiPragas","url":"https://www.wikipragas.cnptia.embrapa.br"},{"name":"Bioinformatics Laboratory","url":"https://www.cbi.cnptia.embrapa.br"},{"name":"GeoNode","url":"https://geoinfo.cnptia.embrapa.br"},{"name":"Agropedia Brasilis","url":"https://www.lmb.cnptia.embrapa.br"},{"name":"EMBnet Brazil","url":"https://embnet-br.cbi.cnptia.embrapa.br"},{"name":"PS3A","url":"https://www.ps3a.cbi.cnptia.embrapa.br"},{"name":"Agropedia Brasilis","url":"https://www.agropediabrasilis.cnptia.embrapa.br"},{"name":"RedeAP","url":"https://www.redeap.cnptia.embrapa.br"},{"name":"Agropedia Brasilis","url":"https://www.agropedia-brasilis.cnptia.embrapa.br"},{"name":"Repositório Digipathos","url":"https://www.digipathos-rep.cnptia.embrapa.br"},{"name":"Sistemas de Produção","url":"https://sistemasdeproducao.cnptia.embrapa.br"},{"name":"Piwik","url":"https://www.logsweb.cnptia.embrapa.br"},{"name":"Bioinformatics Laboratory","url":"https://www.sting.cnptia.embrapa.br"},{"name":"Plataforma Agrotag [Homologação]","url":"https://www.agrotag-h.cnptia.embrapa.br"},{"name":"PLANEJA - Sistema de Suporte ao Planejamento Agricola Municipal","url":"https://www.planeja.cnptia.embrapa.br"},{"name":"GeoNode","url":"https://www.paisagenslidar.cnptia.embrapa.br"},{"name":"e-Termos - Ambiente Colaborativo Web de Gestão Terminológica","url":"https://www.etermos.cnptia.embrapa.br"},{"name":"Rede Agro Nano","url":"https://www.redeagronano.cnptia.embrapa.br"},{"name":"Sistema de Informação de Solos Brasileiros","url":"https://www.sisolos.cnptia.embrapa.br"},{"name":"NTI","url":"https://www.nti.cnptia.embrapa.br"},{"name":"WebagritecJS [Homologação]","url":"https://www.agritec-h.cnptia.embrapa.br"},{"name":"Dendro","url":"https://dendro.cnptia.embrapa.br"},{"name":"WebagritecJS","url":"https://www.agritec.cnptia.embrapa.br"},{"name":"Invernada","url":"https://www.invernada.cnptia.embrapa.br"},{"name":"Repositório Solovivo","url":"https://www.solovivo-rep.cnptia.embrapa.br"},{"name":"BDPA - Bases de Dados da Pesquisa Agropecuária","url":"https://www.bdpa.cnptia.embrapa.br"},{"name":"Repositório Agrocomputing.net","url":"https://www.agrocomp-rep.cnptia.embrapa.br"},{"name":"Agroseguro","url":"https://www.agroseguro.cnptia.embrapa.br"},{"name":"GitLab","url":"https://www.gitlab.cnptia.embrapa.br"},{"name":"GenClima [Homologação]","url":"https://www.genclima-h.cnptia.embrapa.br"},{"name":"Ainfo [Homologação] - Sistema de Gestão de Bibliotecas","url":"https://www.ainfo-h.cnptia.embrapa.br"},{"name":"UMiP GenClima","url":"https://www.genclima.cnptia.embrapa.br"},{"name":"AgroAPI - Plataforma de APIs da Embrapa","url":"https://www.agroapi.cnptia.embrapa.br"},{"name":"Serviço de Senha","url":"https://www.senhas.cnptia.embrapa.br"}]}')},c336:function(a){a.exports=JSON.parse('[{"name":"Google","url":"https://www.google.com"}]')},edd4:function(a){a.exports=JSON.parse('[{"domain":"cnpgc","name":"Embrapa Gado de Corte","local":"Campo Grande - MS"},{"domain":"cpaa","name":"Embrapa Amazonia Ocidental","local":"Manaus - AM"},{"domain":"cpaf-acre","name":"Embrapa Acre","local":"Rio Branco - AC"},{"domain":"cppsul","name":"Embrapa Pecuária Sul","local":"Bage - RS"},{"domain":"cnpgl","name":"Embrapa Gado de Leite","local":"Juiz de Fora - MG"},{"domain":"cnpmf","name":"Embrapa Mandioca e Fruticultura","local":"Cruz das Almas - BA"},{"domain":"cnpso","name":"Embrapa Soja","local":"Londrina - PR"},{"domain":"sgte","name":"Embrapa Territorial","local":"Campinas - SP"},{"domain":"cnpa","name":"Embrapa Algodao","local":"Campina Grande - PB"},{"domain":"cnpuv","name":"Embrapa Uva e Vinho","local":"Bento Goncalves - RS"},{"domain":"ctaa","name":"Embrapa Agroindústria de Alimentos","local":"Rio de Janeiro - RJ"},{"domain":"cpap","name":"Embrapa Pantanal","local":"Corumba - MS"},{"domain":"cpatsa","name":"Embrapa Semi-Árido","local":"Petrolina - PE"},{"domain":"cnpaf","name":"Embrapa Arroz e Feijão","local":"Santo Antonio de Goias - GO"},{"domain":"cnpf","name":"Embrapa Florestas","local":"Colombo - PR"},{"domain":"cnph","name":"Embrapa Hortaliças","local":"Brasília - DF"},{"domain":"cnpms","name":"Embrapa Milho e Sorgo","local":null},{"domain":"cpamn","name":"Embrapa Meio-Norte","local":"Teresina - PI"},{"domain":"cnpc","name":"Embrapa Caprinos e Ovinos","local":"Sobral - CE"},{"domain":"cnpat","name":"Embrapa Agroindustria Tropical","local":"Fortaleza - CE"},{"domain":"cpacp","name":"Embrapa Cocais","local":"Sao Luis - MA"},{"domain":"cpaf-roraima","name":"Embrapa Roraima","local":"Boa Vista - RR"},{"domain":"cenargen","name":"Embrapa Recursos Genéticos","local":"Brasília - DF"},{"domain":"cnpm","name":"Embrapa Monitoramento por Satélite","local":"Campinas - SP"},{"domain":"cpao","name":"Embrapa Agropecuária Oeste","local":"Dourados - MS"},{"domain":"cpac","name":"Embrapa Cerrados","local":"Brasília - DF"},{"domain":"cpatc","name":"Embrapa Tabuleiros Costeiros","local":"Aracaju - SE"},{"domain":"cppse","name":"Embrapa Pecuária do Sudeste","local":"Sao Carlos - SP"},{"domain":"cnpt","name":"Embrapa Trigo","local":"Passo Fundo - RS"},{"domain":"cnpdia","name":"Embrapa Instrumentação","local":"Sao Carlos - SP"},{"domain":"cnpma","name":"Embrapa Meio Ambiente","local":"Jaguariuna - SP"},{"domain":"cnps","name":"Embrapa Solos","local":"Rio de Janeiro - RJ"},{"domain":"cpatu","name":"Embrapa Amazonia Oriental","local":"Belem - PA"},{"domain":"cpaf-rondonia","name":"Embrapa Rondônia","local":"Porto Velho - RO"},{"domain":"cpact","name":"Embrapa Clima Temperado","local":"Pelotas - RS"},{"domain":"cpamt","name":"Embrapa Agrossilvipastoril","local":"Sinop - MT"},{"domain":"cnpae","name":"Embrapa Agroenergia","local":"Brasília - DF"},{"domain":"cnpasa","name":"Embrapa Pesca e Aquicultura","local":"Palmas - TO"},{"domain":"cnptia","name":"Embrapa Informática Agropecuária","local":"Campinas - SP"},{"domain":"cpaf-amapa","name":"Embrapa Amapá","local":"Macapa - AP"},{"domain":"cnpca","name":"Embrapa Café","local":"Brasília - DF"},{"domain":"cnpsa","name":"Embrapa Suínos e Aves","local":"Concordia - SC"},{"domain":"cnat","name":"Embrapa Alimentos e Territórios","local":"Maceio - AL"},{"domain":"cnpab","name":"Embrapa Agrobiologia","local":"Seropedica - RJ"}]')}});
//# sourceMappingURL=app.07d7d9bb.js.map