(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),s=n.n(a),r=n("eVuF"),c=n.n(r);function o(e,t,n,a,s,r,o){try{var i=e[r](o),l=i.value}catch(u){return void n(u)}i.done?t(l):c.a.resolve(l).then(a,s)}function i(e){return function(){var t=this,n=arguments;return new c.a(function(a,s){var r=e.apply(t,n);function c(e){o(r,a,s,c,i,"next",e)}function i(e){o(r,a,s,c,i,"throw",e)}c(void 0)})}}var l=n("q1tI"),u=n.n(l),d=n("zgjP"),m=n.n(d),p=n("pJ0N"),v=u.a.createElement,f=function(e){var t=e.precio,n=t.price,a=t.percent_change_1h,s=t.percent_change_7d,r=t.percent_change_24h;return v("div",{className:"card text-white bg-success mb-3"},v("div",{className:"card-header"},"Precio Bitcoin"),v("div",{className:"card-body"},v("h4",{className:"card-title"},"Precio Actual: $ ",n),v("div",{className:"d-md-flex justify-content-between"},v("p",{className:"card-text"},v("span",{className:"font-weight-bold"},"Ultima Hora: ")," ",a," %"),v("p",{className:"card-text"},v("span",{className:"font-weight-bold"},"Ultimas 24 Horas: ")," ",r," %"),v("p",{className:"card-text"},v("span",{className:"font-weight-bold"},"Ultimos 7 Dias: ")," ",s," %"))))},h=u.a.createElement,N=function(e){var t,n=e.noticia,a=n.urlToImage,s=n.url,r=n.title,c=n.description,o=n.source;return t=""!==a?h("img",{src:a,alt:r,className:"card-img-top"}):h("p",{className:"text-center my-5"},"Imagen no Disponible"),h("div",{className:"col-md-6 col-12 mb-4"},h("div",{className:"card"},h("div",{className:"card-image"},t),h("div",{className:"card-body"},h("h3",{className:"card-title"},r),h("p",{className:"card-text"},c),h("p",{className:"card-text"},o.name),h("a",{href:s,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},w=u.a.createElement,b=function(e){var t=e.noticias;return w("div",{className:"row"},t.map(function(e,t){return w(N,{key:t,noticia:e})}))},g=n("pLtp"),x=n.n(g),y=u.a.createElement,_=function(e){var t=e.info,n=t.name,a=t.url,s=t.description,r=n.text;r.length>150&&(r=r.substr(0,100)+"...");var c=s.text;return c&&(c=c.substr(0,250)+"..."),y("a",{href:a,target:"_blank",className:"list-group-item active text-light mb-1"},y("h3",{className:"mb-3"},r),y("p",{className:"mb-1"},c))},k=u.a.createElement,P=function(e){var t=e.eventos,n=x()(t);return k("div",{className:"list-group"},n.map(function(e){return k(_,{key:e,info:t[e]})}))},E=u.a.createElement,L=function(e){return E(p.a,null,E("div",{className:"row"},E("div",{className:"col-12"},E("h2",null,"Precio del bitcoin"),E(f,{precio:e.precioBitcoin})),E("div",{className:"col-md-8"},E("h2",{className:"my-4"},"Noticias Sobre Bitcoin"),E(b,{noticias:e.noticias})),E("div",{className:"col-md-4"},E("h2",{className:"my-4"},"Proximos Eventos Bitcoin"),E(P,{eventos:e.eventos}))))};L.getInitialProps=i(s.a.mark(function e(){var t,n,a,r,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://api.coinmarketcap.com/v2/ticker/1/");case 2:return t=e.sent,e.next=5,m()("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=010aa0ac4d1843b588bd5cc7ad2ed8c5&language=es");case 5:return n=e.sent,e.next=8,m()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=XNHILOUATC3VLM76OYVA");case 8:return a=e.sent,e.next=11,t.json();case 11:return r=e.sent,e.next=14,n.json();case 14:return c=e.sent,e.next=17,a.json();case 17:return o=e.sent,e.abrupt("return",{precioBitcoin:r.data.quotes.USD,noticias:c.articles,eventos:o.events});case 19:case"end":return e.stop()}},e)}));t.default=L},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,a){var s=new XMLHttpRequest,r=[],c=[],o={},i=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:i,headers:{keys:function(){return r},entries:function(){return c},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}};for(var l in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){r.push(t=t.toLowerCase()),c.push([t,n]),o[t]=o[t]?o[t]+","+n:n}),n(i())},s.onerror=a,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(l,t.headers[l]);s.send(t.body||null)})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD",1,0]]]);