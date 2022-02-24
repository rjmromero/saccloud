exports.ids = [105];
exports.modules = {

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Margin.vue?vue&type=template&id=3737a6e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.$props.tag,_vm._b({tag:"Component",class:_vm.CSS.root},'Component',_vm.$attrs,false),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Margin.vue?vue&type=template&id=3737a6e8&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./modules/nuxt-uibox/useCSS.js
var useCSS = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Margin.vue?vue&type=script&lang=js&
// OK


/* harmony default export */ var Marginvue_type_script_lang_js_ = ({
  props: {
    all: {
      type: [String, Number]
    },
    bg: {
      type: String
    },
    bottom: {
      type: [String, Number, Boolean],
      default: '24'
    },
    left: {
      type: [String, Number, Boolean],
      default: '24'
    },
    right: {
      type: [String, Number, Boolean],
      default: '24'
    },
    tag: {
      type: String,
      default: 'div'
    },
    top: {
      type: [String, Number, Boolean],
      default: '24'
    }
  },

  setup(props) {
    const CSS = Object(runtime["a" /* computed */])(() => {
      const root = {};
      if (!!props.all) root[useCSS["j" /* CSSMargin */]['all_' + props.all]] = props.all;
      if (!!props.bg) root[useCSS["c" /* CSSColor */]['bgColor_' + props.bg]] = props.bg;
      if (!props.all && !!props.bottom) root[useCSS["j" /* CSSMargin */]['bottom_' + props.bottom]] = props.bottom;
      if (!props.all && !!props.left) root[useCSS["j" /* CSSMargin */]['left_' + props.left]] = props.left;
      if (!props.all && !!props.right) root[useCSS["j" /* CSSMargin */]['right_' + props.right]] = props.right;
      if (!props.all && !!props.top) root[useCSS["j" /* CSSMargin */]['top_' + props.top]] = props.top;
      return {
        root
      };
    });
    return {
      CSS
    };
  }

});
// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Margin.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Marginvue_type_script_lang_js_ = (Marginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Margin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Marginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "311fa6e9"
  
)

/* harmony default export */ var Margin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=margin.js.map