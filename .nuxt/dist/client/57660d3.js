(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{419:function(t,r,e){var content=e(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("4696732f",content,!0,{sourceMap:!1})},428:function(t,r,e){"use strict";var o=e(419),n=e.n(o);e.d(r,"default",(function(){return n.a}))},429:function(t,r,e){var o=e(12)(!1);o.push([t.i,".qkbv3{max-height:40px;padding:2px 16px;transition:background border .3s .3s}",""]),o.locals={li:"qkbv3"},t.exports=o},436:function(t,r,e){"use strict";e.r(r);e(72);var o=e(15),n=e(0),l={props:{alignSelf:{type:String},bg:{type:String},bgHover:{type:String,default:"accent"},brColor:{type:String},brRadius:{type:[String,Number,Boolean],default:"4"},color:{type:String,default:"black"},disabled:{type:Boolean},href:{type:String},icon:{type:String},justifySelf:{type:String},label:{type:Object},margin:{type:String},marginBottom:{type:String},marginLeft:{type:String},marginRight:{type:String},marginTop:{type:String},target:{type:String},to:{type:String}},setup:function(t){return{CSS:Object(o.a)((function(){var r={},li={};return t.alignSelf&&(r[n.a["self_"+t.alignSelf]]=!0),t.justifySelf&&(r[n.i["self_"+t.justifySelf]]=!0),t.bg&&(li[n.c["bgColor_"+t.bg]]=!0),!t.disabled&&t.bgHover&&(li[n.c["bgHoverColor_"+t.bgHover]]=!0),t.brColor&&(li[n.c["brColor_"+t.brColor]]=!0),t.color&&(li[n.c["color_"+t.color]]=!0),t.margin&&(li[n.j["all_"+t.margin]]=!0),!t.margin&&t.marginBottom&&(li[n.j["bottom_"+t.marginBottom]]=!0),!t.margin&&t.marginLeft&&(li[n.j["left_"+t.marginLeft]]=!0),!t.margin&&t.marginRight&&(li[n.j["right_"+t.marginRight]]=!0),!t.margin&&t.marginTop&&(li[n.j["top_"+t.marginTop]]=!0),t.disabled&&(li[n.d.disabled]=!0),t.brRadius&&(li[n.n["all_"+t.brRadius]]=!0),{root:r,li:li}}))}}},c=e(428),d=e(8);var component=Object(d.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:[t.CSS.root]},[e(t.$props.disabled?"li":t.$props.href?"a":t.$props.to?"nuxt-link":"li",{tag:"Component",class:[t.$style.li,t.CSS.li],attrs:{href:t.$props.href,rel:!!t.$props.href&&"noreferrer noopener",target:!!t.$props.href&&(t.$props.target||"_blank"),to:t.$props.to},on:{click:function(r){t.$props.disabled||t.$emit("click")}}},[e(t.$props.icon?"Grid":"div",{tag:"Component",attrs:{"align-items":"center",columns:"max_1fr",gap:"16"}},[t.$props.icon?e("icons-uil-"+t.$props.icon,{tag:"Component",attrs:{size:"16"}}):t._e(),t._v(" "),e("Grid",{attrs:{"align-items":"center",columns:"1fr_max"}},[e("P",{attrs:{color:t.$props.color,"is-small":"","padding-bottom":"8","padding-top":"8"}},[t._t("default")],2),t._v(" "),t.$props.label?e("Label",{staticStyle:{opacity:".72"},attrs:{bg:t.$props.label.bg,"br-radius":"4",color:t.$props.label.color,"is-small":"","padding-left":"8","padding-right":"8"}},[t._v(t._s(t.$props.label.text))]):t._e()],1)],1)],1)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);r.default=component.exports;installComponents(component,{P:e(188).default,Label:e(187).default,Grid:e(267).default})}}]);