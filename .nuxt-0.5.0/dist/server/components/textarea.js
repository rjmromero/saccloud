exports.ids = [112];
exports.modules = {

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("98c09fae", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Textarea_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".KOpsm,.arzXX{position:relative}.sgEVi{border-radius:3px;border-style:solid;border-width:1px;box-sizing:border-box;font-size:14px;outline:none;padding:12px 16px;transition:border .3s,box-shadow .3s ease-in;width:100%}.sgEVi:focus{cursor:text}.sgEVi:focus+.cbHZm{visibility:visible}.cbHZm{font-size:0;height:34px;position:absolute;right:3px;top:3px;transition:visibility 0s .7s;visibility:hidden;z-index:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "KOpsm",
	"wrap": "arzXX",
	"textarea": "sgEVi",
	"iconClear": "cbHZm"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Textarea.vue?vue&type=template&id=798ed6f5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.$style.root, _vm.CSS.root]))+">","</div>",[_c('Grid',{attrs:{"columns":"max_auto","align-items":"center","space-between":""}},[(_vm.$props.label)?_c('Label',[_vm._v(_vm._s(_vm.$props.label))]):_vm._e(),_vm._v(" "),(_vm.notValid && _vm.$props.requiresMin && typeof _vm.$props.value === 'string')?_c('Label',{attrs:{"color":"red","is-small":""}},[_vm._v(_vm._s(_vm.$props.value.length)+"/"+_vm._s(_vm.$props.requiresMin))]):_vm._e(),_vm._v(" "),(_vm.$props.requiresMax && typeof _vm.$props.value === 'string')?_c('Label',{attrs:{"color":_vm.$props.value.length > _vm.$props.requiresMax ? 'red' : 'green',"is-small":""}},[_vm._v(_vm._s(_vm.$props.value.length)+"/"+_vm._s(_vm.$props.requiresMax))]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.wrap))+">","</div>",[_c('textarea-autosize',{ref:"el",class:[_vm.$style.textarea, _vm.CSS.textarea],attrs:{"min-height":80,"max-height":Number(_vm.$props.maxHeight),"placeholder":_vm.$props.holder,"readonly":_vm.$props.readonly || _vm.$props.disabled,"spellcheck":"","type":"text","value":_vm.$props.value},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.iconClear))+(_vm._ssrStyle(null,null, { display: (!_vm.$props.disabled && _vm.$props.value) ? '' : 'none' }))+">","</div>",[_c('Icon',{attrs:{"bg-hover":_vm.$props.borderColorFocus,"br-radius":"4","color":_vm.$props.color,"name":"times","size":"16"}})],1)],2)],2),_vm._ssrNode(" "),(!_vm.$props.disabled && _vm.$props.required && !_vm.$props.value)?_c('Label',{attrs:{"color":"red","is-small":"","is-upper":""}},[_vm._v(_vm._s(typeof _vm.$props.required === 'boolean' ? 'REQUIRED': _vm.$props.required))]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Textarea.vue?vue&type=template&id=798ed6f5&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./modules/nuxt-uibox/useCSS.js
var useCSS = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Textarea.vue?vue&type=script&lang=js&


/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  props: {
    alignSelf: {
      type: String
    },
    bg: {
      type: String,
      default: 'white'
    },
    borderColor: {
      type: String,
      default: 'graylight'
    },
    borderColorFocus: {
      type: String,
      default: 'primary'
    },
    bsColorFocus: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: 'black'
    },
    disabled: {
      type: Boolean
    },
    holder: {
      type: String
    },
    justifySelf: {
      type: String
    },
    label: {
      type: String
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
    maxHeight: {
      type: [String, Number],
      default: '576'
    },
    readonly: {
      type: Boolean
    },
    required: {
      type: [Boolean, String]
    },
    requiresMin: {
      type: [String, Number]
    },
    requiresMax: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    }
  },

  setup(props, {
    emit
  }) {
    const isValid = Object(runtime["i" /* ref */])(true);
    const notValid = Object(runtime["a" /* computed */])(() => {
      if (props.requiresMin) {
        var _props$value;

        isValid.value = ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) >= Number(props.requiresMin);
      } else if (props.requiresMax) {
        var _props$value2;

        isValid.value = ((_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.length) <= Number(props.requiresMax);
      }

      emit('isvalid', isValid.value);
      return !isValid.value;
    });
    const CSS = Object(runtime["a" /* computed */])(() => {
      return {
        root: {
          [useCSS["a" /* CSSAlign */]['self_' + props.alignSelf]]: !!props.alignSelf,
          [useCSS["i" /* CSSJustify */]['self_' + props.justifySelf]]: !!props.justifySelf,
          [useCSS["j" /* CSSMargin */]['all_' + (props.margin || '8')]]: !!props.margin,
          [useCSS["j" /* CSSMargin */]['bottom_' + props.marginBottom]]: !props.margin,
          [useCSS["j" /* CSSMargin */]['left_' + props.marginLeft]]: !props.margin,
          [useCSS["j" /* CSSMargin */]['right_' + props.marginRight]]: !props.margin,
          [useCSS["j" /* CSSMargin */]['top_' + props.marginTop]]: !props.margin
        },
        textarea: {
          [useCSS["c" /* CSSColor */]['bgColor_' + props.bg]]: !props.disabled && !!props.bg,
          [useCSS["c" /* CSSColor */]['brColor_' + props.borderColor]]: !props.disabled && !!props.borderColor,
          [useCSS["c" /* CSSColor */]['brFocusColor_' + props.borderColorFocus]]: !props.disabled && !!props.borderColorFocus,
          [useCSS["c" /* CSSColor */]['bsFocusColor_' + props.bsColorFocus]]: !props.disabled && !!props.bsColorFocus,
          [useCSS["c" /* CSSColor */]['color_' + props.color]]: !!props.color,
          [useCSS["d" /* CSSDisabled */].disabled]: props.disabled
        }
      };
    });
    return {
      CSS,
      notValid
    };
  }

});
// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Textarea.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "239455b5"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Label: __webpack_require__(26).default,Grid: __webpack_require__(53).default,Icon: __webpack_require__(54).default})


/***/ })

};;
//# sourceMappingURL=textarea.js.map