exports.ids = [3];
exports.modules = {

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b92d91c", content, true, context)
};

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Data_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "._4h62Z{margin:24px auto;max-width:264px;text-align:center}.\\+BKgW{margin-top:8px}.mmB8S{border:2px dashed rgb(var(--graylight));padding:8px 12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_4h62Z",
	"root__fields": "+BKgW",
	"root__fields__field": "mmB8S"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./components/Factura/Data.vue?vue&type=template&id=0d5366f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('Heading',{attrs:{"color":"white","level":"4"}},[_vm._v(_vm._s(_vm.getDoc.bill.clientName || 'Jhon Doe'))]),_vm._ssrNode(" "),_c('P',{attrs:{"color":"white","margin":"8"}},[_vm._v("Estos son los datos de tu factura")]),_vm._ssrNode(" "),_vm._ssrNode("<div justify-content=\"center\""+(_vm._ssrClass(null,_vm.$style.root__fields))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.root__fields__field))+">","</div>",[_c('Label',{attrs:{"color":"white"}},[_vm._v("N° Factura")]),_vm._ssrNode(" "),_c('P',{attrs:{"color":"accent"}},[_c('b',[_vm._v(_vm._s(_vm.getDoc.bill.billNumber))])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.root__fields__field))+">","</div>",[_c('Label',{attrs:{"color":"white"}},[_vm._v("Fecha emisión")]),_vm._ssrNode(" "),_c('P',{attrs:{"color":"accent"}},[_vm._v(_vm._s(_vm.getDoc.bill.date)+" "+_vm._s(_vm.getDoc.bill.hour))])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Factura/Data.vue?vue&type=template&id=0d5366f8&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./components/Factura/Data.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var Datavue_type_script_lang_js_ = ({
  name: 'ComponentFacturaData',

  setup() {
    // inject
    const getDoc = Object(runtime["e" /* inject */])('getDoc');
    return {
      getDoc
    };
  }

});
// CONCATENATED MODULE: ./components/Factura/Data.vue?vue&type=script&lang=js&
 /* harmony default export */ var Factura_Datavue_type_script_lang_js_ = (Datavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Factura/Data.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Factura_Datavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9bdb03e0"
  
)

/* harmony default export */ var Data = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Heading: __webpack_require__(55).default,P: __webpack_require__(27).default,Label: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=factura-data.js.map