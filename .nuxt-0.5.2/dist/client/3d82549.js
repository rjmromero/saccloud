(window.webpackJsonp=window.webpackJsonp||[]).push([[118,104,107,110],{416:function(t,e,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4696732f",content,!0,{sourceMap:!1})},417:function(t,e,o){var content=o(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("1ee6113a",content,!0,{sourceMap:!1})},419:function(t,e,o){var content=o(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("d52df1a6",content,!0,{sourceMap:!1})},421:function(t,e,o){"use strict";o.r(e);var r=o(15),n=o(0),l={props:{alignSelf:{type:String},bg:{type:String},bgHover:{type:String},bsHover:{type:String},bsFocus:{type:String},brColor:{type:String},brColorHover:{type:String},brColorFocus:{type:String},brRadius:{type:String},disabled:{type:Boolean},floating:{type:Boolean},isHiden:{type:Boolean},justifySelf:{type:String},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},padding:{type:String},paddingBottom:{type:String,default:"8"},paddingLeft:{type:String,default:"8"},paddingRight:{type:String,default:"8"},paddingTop:{type:String,default:"8"}},setup:function(t){return{CSS:Object(r.a)((function(){var e={};return t.alignSelf&&(e[n.a["self_"+t.alignSelf]]=!0),t.center&&(e[n.b.text]=!0),t.justifySelf&&(e[n.i["self_"+t.justifySelf]]=!0),!t.disabled&&t.bg&&(e[n.c["bgColor_"+t.bg]]=!0),!t.disabled&&t.brColor&&(e[n.c["brColor_"+t.brColor]]=!0),!t.disabled&&t.bgHover&&(e[n.c["bgHoverColor_"+t.bgHover]]=!0),t.disabled||!t.brColorHover&&!t.hover||(e[n.c["brHoverColor_"+(t.brColorHover||t.hover)]]=!0),!t.disabled&&t.brColorFocus&&(e[n.c["brFocusColor_"+t.brColorFocus]]=!0),t.disabled||!t.bsHover&&!t.hover||(e[n.c["bsHoverColor_"+(t.bsHover||t.hover)]]=!0),!t.disabled&&t.bsFocus&&(e[n.c["bsFocusColor_"+t.bsFocus]]=!0),t.margin&&(e[n.j["all_"+t.margin]]=!0),!t.margin&&t.marginBottom&&(e[n.j["bottom_"+t.marginBottom]]=!0),!t.margin&&t.marginLeft&&(e[n.j["left_"+t.marginLeft]]=!0),!t.margin&&t.marginRight&&(e[n.j["right_"+t.marginRight]]=!0),!t.margin&&t.marginTop&&(e[n.j["top_"+t.marginTop]]=!0),t.padding&&(e[n.m["all_"+t.padding]]=!0),!t.padding&&t.paddingBottom&&(e[n.m["bottom_"+t.paddingBottom]]=!0),!t.padding&&t.paddingLeft&&(e[n.m["left_"+t.paddingLeft]]=!0),!t.padding&&t.paddingRight&&(e[n.m["right_"+t.paddingRight]]=!0),!t.padding&&t.paddingTop&&(e[n.m["top_"+t.paddingTop]]=!0),t.brRadius&&(e[n.n["all_"+t.brRadius]]=!0),t.disabled&&(e[n.d.disabled]=!0),{root:e}}))}}},d=o(425),c=o(8);var component=Object(c.a)(l,(function(){var t,e=this,o=e.$createElement;return(e._self._c||o)("ul",{class:[e.$style.root,e.CSS.root,(t={},t[e.$style.border]=!!e.$props.brColor,t[e.$style["border--hf"]]=!!e.$props.brColorHover||!!e.$props.brColorFocus,t[e.$style["root--floating"]]=e.$props.floating,t[e.$style["root--is-hiden"]]=e.$props.isHiden,t)],attrs:{tabindex:"0"}},[e._t("default")],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{Ul:o(421).default})},423:function(t,e,o){"use strict";var r=o(416),n=o.n(r);o.d(e,"default",(function(){return n.a}))},424:function(t,e,o){var r=o(13)(!1);r.push([t.i,".qkbv3{max-height:40px;padding:2px 16px;transition:background border .3s .3s}",""]),r.locals={li:"qkbv3"},t.exports=r},425:function(t,e,o){"use strict";var r=o(417),n=o.n(r);o.d(e,"default",(function(){return n.a}))},426:function(t,e,o){var r=o(13)(!1);r.push([t.i,"._63Eu2{border-radius:3px;margin:0;max-height:240px;outline:none;overflow-x:hidden;overflow-y:auto;padding:8px 0;transition:background .3s,border .3s,box-shadow .3s ease-in,opacity .3s,margin .3s}.aaSpm{margin-top:8px;position:absolute;top:100%;width:100%;z-index:4}.HZlYk{margin-top:-8px;opacity:0;pointer-events:none}.j0FEG,.C8ExZ{border-style:solid;border-width:1px}.C8ExZ{border-color:transparent}",""]),r.locals={root:"_63Eu2","root--floating":"aaSpm","root--is-hiden":"HZlYk",border:"j0FEG","border--hf":"C8ExZ"},t.exports=r},429:function(t,e,o){"use strict";o.r(e);o(72);var r=o(15),n=o(0),l={props:{alignSelf:{type:String},bg:{type:String},bgHover:{type:String,default:"accent"},brColor:{type:String},brRadius:{type:[String,Number,Boolean],default:"4"},color:{type:String,default:"black"},disabled:{type:Boolean},href:{type:String},icon:{type:String},justifySelf:{type:String},label:{type:Object},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},target:{type:String},to:{type:String}},setup:function(t){return{CSS:Object(r.a)((function(){var e={},li={};return t.alignSelf&&(e[n.a["self_"+t.alignSelf]]=!0),t.justifySelf&&(e[n.i["self_"+t.justifySelf]]=!0),t.bg&&(li[n.c["bgColor_"+t.bg]]=!0),!t.disabled&&t.bgHover&&(li[n.c["bgHoverColor_"+t.bgHover]]=!0),t.brColor&&(li[n.c["brColor_"+t.brColor]]=!0),t.color&&(li[n.c["color_"+t.color]]=!0),t.margin&&(li[n.j["all_"+t.margin]]=!0),!t.margin&&t.marginBottom&&(li[n.j["bottom_"+t.marginBottom]]=!0),!t.margin&&t.marginLeft&&(li[n.j["left_"+t.marginLeft]]=!0),!t.margin&&t.marginRight&&(li[n.j["right_"+t.marginRight]]=!0),!t.margin&&t.marginTop&&(li[n.j["top_"+t.marginTop]]=!0),t.disabled&&(li[n.d.disabled]=!0),t.brRadius&&(li[n.n["all_"+t.brRadius]]=!0),{root:e,li:li}}))}}},d=o(423),c=o(8);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.CSS.root]},[o(t.$props.disabled?"li":t.$props.href?"a":t.$props.to?"nuxt-link":"li",{tag:"Component",class:[t.$style.li,t.CSS.li],attrs:{href:t.$props.href,rel:!!t.$props.href&&"noreferrer noopener",target:!!t.$props.href&&(t.$props.target||"_blank"),to:t.$props.to},on:{click:function(e){t.$props.disabled||t.$emit("click")}}},[o(t.$props.icon?"Grid":"div",{tag:"Component",attrs:{"align-items":"center",columns:"max_1fr",gap:"16"}},[t.$props.icon?o("icons-uil-"+t.$props.icon,{tag:"Component",attrs:{size:"16"}}):t._e(),t._v(" "),o("Grid",{attrs:{"align-items":"center",columns:"1fr_max"}},[o("P",{attrs:{color:t.$props.color,"is-small":"","padding-bottom":"8","padding-top":"8"}},[t._t("default")],2),t._v(" "),t.$props.label?o("Label",{staticStyle:{opacity:".72"},attrs:{bg:t.$props.label.bg,"br-radius":"4",color:t.$props.label.color,"is-small":"","padding-left":"8","padding-right":"8"}},[t._v(t._s(t.$props.label.text))]):t._e()],1)],1)],1)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{P:o(186).default,Label:o(185).default,Grid:o(265).default})},431:function(t,e,o){"use strict";var r=o(419),n=o.n(r);o.d(e,"default",(function(){return n.a}))},432:function(t,e,o){var r=o(13)(!1);r.push([t.i,".afuw0{position:relative}.gHbSe{cursor:pointer}.acglF{bottom:3px;left:4px;position:absolute;z-index:1}.acglF~._3pLmp{padding-left:40px}._3pLmp{border-radius:3px;border-style:solid;border-width:1px;box-sizing:border-box;font-size:14px;height:40px;outline:none;padding:0 16px;transition:border .3s,box-shadow .3s ease-in;width:100%}.sM\\+wY,.zCy0g{bottom:4px;font-size:0;height:32px;position:absolute;right:4px;z-index:1}.kY6ME{border-radius:3px;border-style:solid;border-width:1px;box-sizing:border-box;font-size:14px;padding:8px 16px;transition:box-shadow .3s,border .3s;width:100%}",""]),r.locals={root:"afuw0","root--enabled":"gHbSe",icon:"acglF",input:"_3pLmp",iconAngleDown:"sM+wY",iconClear:"zCy0g",inputFilter:"kY6ME"},t.exports=r},439:function(t,e,o){"use strict";o.r(e);o(72),o(73);var r=o(15),n=o(0),l={props:{alignSelf:{type:String},bg:{type:String,default:"white"},brColor:{type:String,default:"graylight"},brColorFocus:{type:String,default:"primary"},bsColorFocus:{type:String,default:"primary"},clear:{type:Boolean},color:{type:String},disabled:{type:Boolean},holder:{type:String},justifySelf:{type:String},label:{type:String},list:{type:Array,default:function(){return[]}},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},prefix:{type:String,default:String()},required:{type:[Boolean,String]},value:{type:[String,Number]}},setup:function(t,e){var o=e.emit,l=Object(r.f)(null),d=Object(r.f)(!1),c=Object(r.f)(!1),filter=Object(r.f)("");function f(b){t.disabled||(b&&!d.value?(d.value=!0,setTimeout((function(){l.value.$el.focus()}),100)):!b&&d.value&&setTimeout((function(){c.value||(d.value=!1,l.value.$el.blur(),setTimeout((function(){filter.value=""}),300))}),300))}return{CSS:Object(r.a)((function(){var e={},o={},input={};return t.alignSelf&&(o[n.a["self_"+t.alignSelf]]=!0),t.justifySelf&&(o[n.i["self_"+t.justifySelf]]=!0),t.disabled&&(e[n.d.disabled]=!0),t.margin&&(e[n.j["all_"+t.margin]]=!0),!t.margin&&t.marginBottom&&(e[n.j["bottom_"+t.marginBottom]]=!0),!t.margin&&t.marginLeft&&(e[n.j["left_"+t.marginLeft]]=!0),!t.margin&&t.marginRight&&(e[n.j["right_"+t.marginRight]]=!0),!t.margin&&t.marginTop&&(e[n.j["top_"+t.marginTop]]=!0),!t.disabled&&t.bg&&(input[n.c["bgColor_"+t.bg]]=!0),!t.disabled&&t.brColor&&(input[n.c["brColor_"+t.brColor]]=!0),!t.disabled&&t.brColorFocus&&(input[n.c["brFocusColor_"+t.brColorFocus]]=!0),!t.disabled&&t.bsColorFocus&&(input[n.c["bsFocusColor_"+t.bsColorFocus]]=!0),t.color&&(input[n.c["color_"+t.color]]=!0),{margin:e,root:o,input:input}})),elUL:l,filterFocus:c,filter:filter,selectItem:function(e){t.disabled||(o("input",e.text),o("change",e),f(!1))},showList:f,visibleList:d}}},d=o(431),c=o(8);var component=Object(c.a)(l,(function(){var t,e=this,o=e.$createElement,r=e._self._c||o;return r("div",{class:e.CSS.margin},[r("div",{class:[e.$style.root,(t={},t[e.$style["root--enabled"]]=!e.$props.disabled,t),e.CSS.root],on:{click:function(t){return e.showList(!e.visibleList)}}},[e.$props.label?r("Label",{attrs:{color:e.$props.color}},[e._v(e._s(e.$props.label))]):e._e(),e._v(" "),r("input",{class:[e.$style.input,e.CSS.input],attrs:{placeholder:e.$props.holder,readonly:"",type:"text"},domProps:{value:e.$props.value},on:{input:function(t){e.usingCleave||e.$emit("input",t.target.value)}}}),e._v(" "),!e.$props.disabled&&e.$props.value&&e.$props.clear?r("div",{class:e.$style.iconClear,on:{click:function(t){return t.stopPropagation(),e.$emit("input","")}}},[r("Icon",{attrs:{"bg-hover":e.$props.brColorFocus,"br-radius":"4",color:e.$props.color,name:"times",size:"16"}})],1):e.$props.disabled?e._e():r("div",{class:e.$style.iconAngleDown},[r("Icon",{attrs:{color:e.$props.color,name:"angle-down",size:"16"}})],1),e._v(" "),e.$props.disabled?e._e():r("Ul",{ref:"elUL",attrs:{bg:e.$props.bg,"br-color":e.$props.brColor,"bs-focus":e.$props.bsColorFocus,"br-radius":"4","is-hiden":!e.visibleList,floating:""},nativeOn:{blur:function(t){return e.showList(!1)},focus:function(t){e.visibleList||e.showList(!0)}}},[e.$props.list&&e.$props.list.length>16?r("Padding",{attrs:{bottom:"16",left:"16",right:"16",top:"8"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],class:[e.$style.inputFilter,e.CSS.input],attrs:{placeholder:"Filter"},domProps:{value:e.filter},on:{focus:function(t){e.filterFocus=!0},blur:function(t){e.showList(!1),e.filterFocus=!1},input:function(t){t.target.composing||(e.filter=t.target.value)}}})]):e._e(),e._v(" "),e._l(e.$props.list,(function(t,i){return r("div",{key:i},[r("Li",{directives:[{name:"show",rawName:"v-show",value:!e.filter||t.text.toLowerCase().indexOf(e.filter.toLowerCase())>=0,expression:"!filter || $.text.toLowerCase().indexOf(filter.toLowerCase()) >= 0"}],attrs:{"bg-hover":e.$props.color,color:e.$props.color,disabled:t.disabled,label:t.label},on:{click:function(o){t.disabled||e.selectItem(t)}}},[e._v(e._s(t.prefix||e.$props.prefix)+e._s(t.text))])],1)}))],2)],1),e._v(" "),e.$props.disabled||!e.$props.required||e.$props.value?e._e():r("Label",{attrs:{color:"red","is-small":"","is-upper":""}},[e._v(e._s("boolean"==typeof e.$props.required?"REQUIRED":e.$props.required))])],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{Label:o(185).default,Input:o(422).default,Icon:o(266).default,Padding:o(270).default,Li:o(429).default,Ul:o(421).default})},460:function(t,e,o){"use strict";o.r(e);var r=o(15),title="Mi Factura | SAC Cloud",n="Solicita tu factura con SAC Cloud",l="https://www.saccloud.co/ogImage/index.png",d="https://www.saccloud.co/mi-factura",c={head:{title:title,meta:[{hid:"description",name:"description",content:n},{hid:"keywords",name:"keywords",content:"Plataforma, utilidades, SAC, Cloud"},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:image",name:"twitter:image",content:l},{hid:"twitter:description",name:"twitter:description",content:n},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:n},{hid:"og:site_name",name:"og:site_name",content:title},{hid:"og:image",property:"og:image",content:l},{hid:"og:url",property:"og:url",content:d},{hid:"og:image:width",property:"og:image:width",content:"1200"},{hid:"og:image:height ",property:"og:image:height ",content:"630"}],link:[{hid:"canonical",rel:"canonical",href:d}]},setup:function(t,e){return{dataSend:Object(r.e)({numeroRecibo:null,tipoPersona:{},tipoIdentificacion:{},NI:null,nombre:null,segundoNombre:null,apellido:null,segundoApellido:null,razonSocial:null,departamento:{},ciudad:{}}),lists:{tiposPersonas:[{text:"Natural"},{text:"Juridica"}],tiposIdentificacion:[{text:"CC"},{text:"NIT"}],departamentos:[],ciudades:[]}}}},f=c,m=o(8),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Content",{attrs:{"max-width":"624",padding:"24"}},[o("Heading",{attrs:{center:"",color:"white"}},[t._v("Solicitar factura electrónica")]),t._v(" "),o("P",{attrs:{center:"",color:"white","margin-bottom":"24"}},[t._v("Por favor ingrese los datos de su recibo o factura de venta para poder hacer la solicitud")]),t._v(" "),o("Grid",{attrs:{"align-items":"end","auto-fill":"272",gap:"24"}},[o("Input",{attrs:{bg:"black",color:"white",label:"Número del recibo"},model:{value:t.dataSend.numeroRecibo,callback:function(e){t.$set(t.dataSend,"numeroRecibo",e)},expression:"dataSend.numeroRecibo"}}),t._v(" "),o("Select",{attrs:{bg:"black",color:"white",holder:"Seleccionar",label:"Tipo de persona",list:t.lists.tiposPersonas,value:t.dataSend.tipoPersona.text},on:{change:function(e){t.dataSend.tipoPersona=e}}}),t._v(" "),o("Select",{attrs:{bg:"black",color:"white",holder:"Seleccionar",label:"Tipo de identificación",list:t.lists.tiposIdentificacion,value:t.dataSend.tipoIdentificacion.text},on:{change:function(e){t.dataSend.tipoIdentificacion=e}}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Identificación/NIT/CC"},model:{value:t.dataSend.NI,callback:function(e){t.$set(t.dataSend,"NI",e)},expression:"dataSend.NI"}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Primer nombre"},model:{value:t.dataSend.nombre,callback:function(e){t.$set(t.dataSend,"nombre",e)},expression:"dataSend.nombre"}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Segundo nombre"},model:{value:t.dataSend.segundoNombre,callback:function(e){t.$set(t.dataSend,"segundoNombre",e)},expression:"dataSend.segundoNombre"}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Primer apellido"},model:{value:t.dataSend.apellido,callback:function(e){t.$set(t.dataSend,"apellido",e)},expression:"dataSend.apellido"}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Segundo apellido"},model:{value:t.dataSend.segundoApellido,callback:function(e){t.$set(t.dataSend,"segundoApellido",e)},expression:"dataSend.segundoApellido"}}),t._v(" "),o("Input",{attrs:{bg:"black",color:"white",label:"Razón social"},model:{value:t.dataSend.razonSocial,callback:function(e){t.$set(t.dataSend,"razonSocial",e)},expression:"dataSend.razonSocial"}}),t._v(" "),o("Select",{attrs:{bg:"black",color:"white",holder:"Seleccionar",label:"Departamento",list:t.lists.departamentos,value:t.dataSend.departamento.text},on:{change:function(e){t.dataSend.departamento=e}}}),t._v(" "),o("Select",{attrs:{bg:"black",color:"white",holder:"Seleccionar",label:"Ciudad",list:t.lists.ciudades,value:t.dataSend.ciudad.text},on:{change:function(e){t.dataSend.ciudad=e}}}),t._v(" "),o("Button",{attrs:{"is-fill":""}},[t._v("Solicitar")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:o(268).default,P:o(186).default,Input:o(422).default,Select:o(439).default,Button:o(187).default,Grid:o(265).default,Content:o(267).default})}}]);