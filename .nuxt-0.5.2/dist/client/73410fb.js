(window.webpackJsonp=window.webpackJsonp||[]).push([[112,105],{418:function(e,t,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("aac8a5be",content,!0,{sourceMap:!1})},427:function(e,t,n){"use strict";var r=n(418),o=n.n(r);n.d(t,"default",(function(){return o.a}))},428:function(e,t,n){var r=n(13)(!1);r.push([e.i,"._6D6wK{-webkit-animation:var(--nuib-loading-animation);animation:var(--nuib-loading-animation)}",""]),r.locals={root:"_6D6wK"},e.exports=r},430:function(e,t,n){"use strict";n.r(t);var r={props:{alignSelf:{type:String},borderRadius:{type:String},isRound:{type:Boolean},justifySelf:{type:String},left:{type:Boolean},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},padding:{type:String},paddingBottom:{type:String},paddingLeft:{type:String},paddingRight:{type:String},paddingTop:{type:String}}},o=n(427),c=n(8);var component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Img",e._b({class:e.$style.root,attrs:{center:!e.$props.left,"max-width":"40","no-lazy":"",src:"/images/loading.png"}},"Img",e.$props,!1))}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{Img:n(100).default})},463:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(73),n(62),n(46),n(15)),c=n(190),l={setup:function(e,t){var n=Object(o.i)(),l=n.$axios,d=n.params,f=n.redirect,v=Object(o.e)({id:null,codigo_validacion:null,accion:"reclamar_puntos",nit:null,correo:null}),m=Object(o.f)("CARGANDO..."),h=Object(o.f)(!1),_=Object(o.f)(!1);Object(o.j)(Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.$post("/iccloud/v1/login/ver-documento-codigo",{codigo:d.value.id});case 3:t=e.sent,m.value=t.negocio.n_comercial,v.id=t.factura.id,v.correo=t.receptor.email,h.value="222222222222"===t.receptor.ident,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))));var y=Object(o.a)((function(){var e,t;return(null===(e=v.codigo_validacion)||void 0===e?void 0:e.length)>3&&(null===(t=v.nit)||void 0===t?void 0:t.length)>5}));function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,_.value=!0,console.log(v),c.a.show({message:"Documento convertido a factura electrónica con éxito.",isToast:"success"}),_.value=!1,setTimeout((function(){return f("301","/")}),300),e.next=30;break;case 8:e.prev=8,e.t0=e.catch(0),r="Lamentamos esta situación, estamos solucionando.",e.t1=null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t?void 0:t.status,e.next=401===e.t1?14:403===e.t1?16:405===e.t1?18:406===e.t1?20:408===e.t1?22:409===e.t1?24:411===e.t1?26:28;break;case 14:return r="Código de validación incorrecto. Verifique e intente de nuevo",e.abrupt("break",28);case 16:return r="La identificación/NIT/CC (".concat(v.nit,") que introdujo no es válida para este documento. Verifique e intente de nuevo"),e.abrupt("break",28);case 18:return r="No hemos encontrado la identificación/NIT/CC (".concat(v.nit,"). Por favor verifique que los datos estén correctamente ingresados"),e.abrupt("break",28);case 20:return r="La acción que intenta realizar no es posible, debido que este documento no permite hacer modificaciones",e.abrupt("break",28);case 22:return r="La acción de convertir a factura electrónica no es posible, debido que este documento no permite hacer modificaciones",e.abrupt("break",28);case 24:return r="Error inesperado a la hora de convertir este documento a factura electrónica. Por favor intente más tarde",e.abrupt("break",28);case 26:return r="La acción de convertir a factura electrónica no es posible, debido que este documento ha superado las 72 horas desde su generación",e.abrupt("break",28);case 28:c.a.show({title:"Error",message:"".concat(r," (").concat((null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)||-1,")"),delay:300}),_.value=!1;case 30:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return{dataSend:v,bussiness:m,askForNIT:h,isLoading:_,isValid:y,fetchPost:function(){return k.apply(this,arguments)}}}},d=l,f=n(8),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Content",{attrs:{"max-width":"624",padding:"24"}},[n("Heading",{attrs:{center:"",color:"white"}},[e._v("Convertir a factura electrónica")]),e._v(" "),n("Label",{attrs:{center:"",color:"white","is-upper":"","margin-bottom":"24"}},[e._v(e._s(e.bussiness))]),e._v(" "),n("P",{attrs:{center:"",color:"graylight","margin-bottom":"24"}},[e._v("Por favor ingrese el código de validación"+e._s(e.askForNIT?" y su identificación ":" ")+"para convertir a factura electrónica")]),e._v(" "),e.isLoading?n("Loading"):n("Grid",{attrs:{"align-items":"end","auto-fill":e.askForNIT?"168":"272",gap:"16"}},[n("Input",{attrs:{bg:"black",color:"white",holder:"Código de validación"},model:{value:e.dataSend.codigo_validacion,callback:function(t){e.$set(e.dataSend,"codigo_validacion",t)},expression:"dataSend.codigo_validacion"}}),e._v(" "),e.askForNIT?n("Input",{attrs:{bg:"black",color:"white",holder:"Identificación/NIT/CC"},model:{value:e.dataSend.nit,callback:function(t){e.$set(e.dataSend,"nit",t)},expression:"dataSend.nit"}}):e._e(),e._v(" "),n("Button",{attrs:{disabled:!e.isValid,"is-fill":""},on:{click:function(t){return e.fetchPost()}}},[e._v("Reclamar")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Heading:n(268).default,Label:n(185).default,P:n(186).default,Loading:n(430).default,Input:n(422).default,Button:n(187).default,Grid:n(265).default,Content:n(267).default})}}]);