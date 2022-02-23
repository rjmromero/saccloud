exports.ids = [106];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4696732f", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Li_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qkbv3{max-height:40px;padding:2px 16px;transition:background border .3s .3s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"li": "qkbv3"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Li.vue?vue&type=template&id=1fdaffd6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.CSS.root]},[_c(_vm.$props.disabled ? 'li' : _vm.$props.href ? 'a' : _vm.$props.to ? 'nuxt-link' : 'li',{tag:"Component",class:[_vm.$style.li, _vm.CSS.li],attrs:{"href":_vm.$props.href,"rel":_vm.$props.href ? 'noreferrer noopener' : false,"target":_vm.$props.href ? (_vm.$props.target || '_blank') : false,"to":_vm.$props.to},on:{"click":function($event){_vm.$props.disabled ? function (){} : _vm.$emit('click')}}},[_c(_vm.$props.icon ? 'Grid' : 'div',{tag:"Component",attrs:{"align-items":"center","columns":"max_1fr","gap":"16"}},[(_vm.$props.icon)?_c('icons-uil-' + _vm.$props.icon,{tag:"Component",attrs:{"size":"16"}}):_vm._e(),_vm._v(" "),_c('Grid',{attrs:{"align-items":"center","columns":"1fr_max"}},[_c('P',{attrs:{"color":_vm.$props.color,"is-small":"","padding-bottom":"8","padding-top":"8"}},[_vm._t("default")],2),_vm._v(" "),(_vm.$props.label)?_c('Label',{staticStyle:{"opacity":".72"},attrs:{"bg":_vm.$props.label.bg,"br-radius":"4","color":_vm.$props.label.color,"is-small":"","padding-left":"8","padding-right":"8"}},[_vm._v(_vm._s(_vm.$props.label.text))]):_vm._e()],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Li.vue?vue&type=template&id=1fdaffd6&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./modules/nuxt-uibox/useCSS.js
var useCSS = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Li.vue?vue&type=script&lang=js&


/* harmony default export */ var Livue_type_script_lang_js_ = ({
  props: {
    alignSelf: {
      type: String
    },
    bg: {
      type: String
    },
    bgHover: {
      type: String,
      default: 'accent'
    },
    brColor: {
      type: String
    },
    brRadius: {
      type: [String, Number, Boolean],
      default: '4'
    },
    color: {
      type: String,
      default: 'black'
    },
    disabled: {
      type: Boolean
    },
    href: {
      type: String
    },
    icon: {
      type: String
    },
    justifySelf: {
      type: String
    },
    label: {
      type: Object
    },
    margin: {
      type: String
    },
    marginBottom: {
      type: String
    },
    marginLeft: {
      type: String
    },
    marginRight: {
      type: String
    },
    marginTop: {
      type: String
    },
    target: {
      type: String
    },
    to: {
      type: String
    }
  },

  setup(props) {
    const CSS = Object(runtime["a" /* computed */])(() => {
      const root = {};
      const li = {};
      if (!!props.alignSelf) root[useCSS["a" /* CSSAlign */]['self_' + props.alignSelf]] = true;
      if (!!props.justifySelf) root[useCSS["i" /* CSSJustify */]['self_' + props.justifySelf]] = true;
      if (!!props.bg) li[useCSS["c" /* CSSColor */]['bgColor_' + props.bg]] = true;
      if (!props.disabled && !!props.bgHover) li[useCSS["c" /* CSSColor */]['bgHoverColor_' + props.bgHover]] = true;
      if (!!props.brColor) li[useCSS["c" /* CSSColor */]['brColor_' + props.brColor]] = true;
      if (!!props.color) li[useCSS["c" /* CSSColor */]['color_' + props.color]] = true;
      if (!!props.margin) li[useCSS["j" /* CSSMargin */]['all_' + props.margin]] = true;
      if (!props.margin && !!props.marginBottom) li[useCSS["j" /* CSSMargin */]['bottom_' + props.marginBottom]] = true;
      if (!props.margin && !!props.marginLeft) li[useCSS["j" /* CSSMargin */]['left_' + props.marginLeft]] = true;
      if (!props.margin && !!props.marginRight) li[useCSS["j" /* CSSMargin */]['right_' + props.marginRight]] = true;
      if (!props.margin && !!props.marginTop) li[useCSS["j" /* CSSMargin */]['top_' + props.marginTop]] = true;
      if (props.disabled) li[useCSS["d" /* CSSDisabled */].disabled] = true;
      if (!!props.brRadius) li[useCSS["n" /* CSSRound */]['all_' + props.brRadius]] = true;
      return {
        root,
        li
      };
    });
    return {
      CSS
    };
  }

});
// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Li.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Livue_type_script_lang_js_ = (Livue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Li.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Livue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f2b20e90"
  
)

/* harmony default export */ var Li = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {P: __webpack_require__(27).default,Label: __webpack_require__(26).default,Grid: __webpack_require__(53).default})


/***/ })

};;
//# sourceMappingURL=li.js.map