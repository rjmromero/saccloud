(window.webpackJsonp=window.webpackJsonp||[]).push([[4,108],{421:function(t,n,e){var content=e(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("aac8a5be",content,!0,{sourceMap:!1})},426:function(t,n,e){var content=e(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("66f39ae8",content,!0,{sourceMap:!1})},432:function(t,n,e){"use strict";var r=e(421),o=e.n(r);e.d(n,"default",(function(){return o.a}))},433:function(t,n,e){var r=e(12)(!1);r.push([t.i,"._6D6wK{-webkit-animation:var(--nuib-loading-animation);animation:var(--nuib-loading-animation)}",""]),r.locals={root:"_6D6wK"},t.exports=r},435:function(t,n,e){"use strict";e.r(n);var r={props:{alignSelf:{type:String},borderRadius:{type:String},isRound:{type:Boolean},justifySelf:{type:String},left:{type:Boolean},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},padding:{type:String},paddingBottom:{type:String},paddingLeft:{type:String},paddingRight:{type:String},paddingTop:{type:String}}},o=e(432),l=e(8);var component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("Img",t._b({class:t.$style.root,attrs:{center:!t.$props.left,"max-width":"40","no-lazy":"",src:"/images/loading.png"}},"Img",t.$props,!1))}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);n.default=component.exports;installComponents(component,{Img:e(100).default})},449:function(t,n,e){"use strict";var r=e(426),o=e.n(r);e.d(n,"default",(function(){return o.a}))},450:function(t,n,e){var r=e(12)(!1);r.push([t.i,"._6U1UB{margin:24px auto;max-width:264px}@media screen and (min-width:432px){.Hyepe{grid-auto-flow:column}}",""]),r.locals={root:"_6U1UB",root__buttons:"Hyepe"},t.exports=r},456:function(t,n,e){"use strict";e.r(n);e(34),e(73);var r=e(15),o=(e(192),{name:"ComponentFacturaActions",setup:function(){Object(r.l)().$api,Object(r.o)();var t=Object(r.e)("getDoc");return{action:function(n){var e=t.value.actions,r=e.askForNIT,o=(e.email,e.id,"Por favor ingrese el $r$ para "+("reclamar_puntos"===n?"reclamar sus puntos":"convertir a factura electrónica"));o=r?o.replace("$r$","<b>código de validación</b> y su <b>identificación</b>"):o.replace("$r$","<b>código de validación</b>")},isLoading:Object(r.i)(!1)}}}),l=e(449),c=e(8);var component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$style.root},[t.isLoading?e("Loading"):e("Grid",{attrs:{gap:"24"}},[e("Button",{attrs:{bg:"black","is-fill":""},on:{click:function(n){return t.action("reclamar_puntos")}}},[t._v("Reclamar tus puntos")]),t._v(" "),e("Button",{attrs:{"is-fill":""},on:{click:function(n){return t.action("convertir_factura")}}},[t._v("Convertir a factura electrónica")])],1)],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);n.default=component.exports;installComponents(component,{Loading:e(435).default,Button:e(189).default,Grid:e(267).default})}}]);