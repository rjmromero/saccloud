exports.ids = [4];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6cd6c9bc", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Header_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "._6Q7eN{text-align:center}.wz529{border-radius:8px;max-width:144px}.eNeNE{max-height:144px}.e3MJn{display:flex;flex-wrap:wrap;grid-gap:8px;gap:8px;justify-content:center;margin-top:4px}.BYEDB:nth-child(2){border-left:1px solid rgb(var(--graylight));padding-left:8px}@media screen and (min-width:416px){.BYEDB:nth-child(3){border-left:1px solid rgb(var(--graylight));padding-left:8px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_6Q7eN",
	"root__logo": "wz529",
	"root__iconBuilding": "eNeNE",
	"root__moviles": "e3MJn",
	"root__moviles__movil": "BYEDB"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./components/Factura/Header.vue?vue&type=template&id=4511c903&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[(_vm.getDoc.logo)?_vm._ssrNode("<img height=\"144\" width=\"144\""+(_vm._ssrAttr("src",_vm.getDoc.logo))+(_vm._ssrClass(null,_vm.$style.root__logo))+">","</img>"):_c('Icon',{attrs:{"color":"gray","name":"building","size":"56"}}),_vm._ssrNode(" "),_c('Heading',{attrs:{"color":"white"}},[_vm._v(_vm._s(_vm.getDoc.business.name))]),_vm._ssrNode(" "),_c('P',{attrs:{"color":"white"}},[_vm._v(_vm._s(_vm.getDoc.business.slogan))]),_vm._ssrNode(" "),_vm._ssrNode("<section"+(_vm._ssrClass(null,_vm.$style.root__moviles))+">","</section>",_vm._l((_vm.getDoc.business.moviles),function($,i){return _c('nuxt-link',{key:i,class:_vm.$style.root__moviles__movil,attrs:{"to":$.to}},[_c('Label',{attrs:{"color":"white"}},[_vm._v(_vm._s($.text))])],1)}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Factura/Header.vue?vue&type=template&id=4511c903&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./components/Factura/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'ComponentFacturaHeader',

  setup() {
    // inject
    const getDoc = Object(runtime["e" /* inject */])('getDoc');
    return {
      getDoc
    };
  }

});
// CONCATENATED MODULE: ./components/Factura/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Factura_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Factura/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Factura_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3fbd681a"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Img: __webpack_require__(11).default,Icon: __webpack_require__(54).default,Heading: __webpack_require__(55).default,P: __webpack_require__(27).default,Label: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=factura-header.js.map