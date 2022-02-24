exports.ids = [2];
exports.modules = {

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Flex.vue?vue&type=template&id=a4308092&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.$props.tag,_vm._b({tag:"Component",class:_vm.CSS.root},'Component',_vm.$attrs,false),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Flex.vue?vue&type=template&id=a4308092&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./modules/nuxt-uibox/useCSS.js
var useCSS = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Flex.vue?vue&type=script&lang=js&


/* harmony default export */ var Flexvue_type_script_lang_js_ = ({
  props: {
    alignSelf: {
      type: String
    },
    alignItems: {
      type: String
    },
    center: {
      type: Boolean
    },
    columns: {
      type: String
    },
    end: {
      type: Boolean
    },
    gap: {
      type: String
    },
    justifySelf: {
      type: String
    },
    spaceBetween: {
      type: Boolean
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props) {
    const CSS = Object(runtime["a" /* computed */])(() => {
      return {
        root: {
          [useCSS["a" /* CSSAlign */]['self_' + props.alignSelf]]: !!props.alignSelf,
          [useCSS["e" /* CSSFlex */]['root']]: true,
          [useCSS["e" /* CSSFlex */]['alignItems_' + props.alignItems]]: props.alignItems,
          [useCSS["e" /* CSSFlex */]['center']]: !!props.center,
          [useCSS["e" /* CSSFlex */]['columns_' + props.columns]]: !props.autoFill ? props.columns : false,
          [useCSS["e" /* CSSFlex */]['end']]: props.end,
          [useCSS["e" /* CSSFlex */]['gap_' + props.gap]]: props.gap,
          [useCSS["e" /* CSSFlex */]['spaceBetween']]: props.spaceBetween,
          [useCSS["i" /* CSSJustify */]['self_' + props.justifySelf]]: !!props.justifySelf
        }
      };
    });
    return {
      CSS
    };
  }

});
// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Flex.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Flexvue_type_script_lang_js_ = (Flexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Flex.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Flexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "060e1074"
  
)

/* harmony default export */ var Flex = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=flex.js.map