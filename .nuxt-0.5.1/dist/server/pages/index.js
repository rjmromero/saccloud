exports.ids = [114,2,102];
exports.modules = {

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1ee3c33e", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Input.vue?vue&type=template&id=831c11dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.CSS.margin},[_c('Grid',{attrs:{"columns":"max_auto","align-items":"center","space-between":""}},[(_vm.$props.label)?_c('Label',{attrs:{"color":_vm.$props.color}},[_vm._v(_vm._s(_vm.$props.label))]):_vm._e(),_vm._v(" "),(_vm.notValid && _vm.$props.requiresMin && typeof _vm.$props.value === 'string')?_c('Label',{attrs:{"color":"red","is-small":""}},[_vm._v(_vm._s(_vm.$props.value.length)+"/"+_vm._s(_vm.$props.requiresMin))]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,[_vm.$style.root, _vm.CSS.root]))+">","</div>",[(_vm.$props.icon || _vm.$props.isEmail || _vm.allowSeePass)?_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.icon))+">","</div>",[(_vm.$props.isEmail)?_c('Icon',{attrs:{"color":_vm.notValid ? 'red' : 'gray',"name":_vm.notValid ? 'envelope-times' : 'envelope-alt',"size":"16"}}):(_vm.allowSeePass)?_c('Icon',{attrs:{"hover":"black","name":_vm.type === 'text' ? 'eye-slash' : 'eye',"size":"16"},nativeOn:{"click":function($event){return _vm.exposePass()}}}):(_vm.$props.icon)?_c('Icon',{attrs:{"color":_vm.$props.color,"name":_vm.$props.icon,"size":"16"}}):_vm._e()],1):_vm._e(),_vm._ssrNode(" <input"+(_vm._ssrAttr("load",_vm.load()))+(_vm._ssrAttr("placeholder",_vm.$props.holder || (_vm.$props.isDate ? 'DD-MM-YYYY' : null)))+(_vm._ssrAttr("readonly",_vm.$props.readonly || _vm.$props.disabled))+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("value",_vm.$props.value))+(_vm._ssrClass(null,[_vm.$style.input, _vm.CSS.input]))+"> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.iconClear))+(_vm._ssrStyle(null,null, { display: (!_vm.$props.disabled && _vm.$props.value) ? '' : 'none' }))+">","</div>",[_c('Icon',{attrs:{"bg-hover":_vm.$props.brColorFocus,"br-radius":"4","color":_vm.$props.color,"name":"times","size":"16"}})],1)],2),_vm._ssrNode(" "),(!_vm.$props.disabled && _vm.$props.required && !_vm.$props.value)?_c('Label',{attrs:{"color":"red","is-small":"","is-upper":""}},[_vm._v(_vm._s(typeof _vm.$props.required === 'boolean' ? 'REQUIRED': _vm.$props.required))]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Input.vue?vue&type=template&id=831c11dc&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./modules/nuxt-uibox/useCSS.js
var useCSS = __webpack_require__(0);

// CONCATENATED MODULE: ./modules/nuxt-uibox/js/cleave/index.js
var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    t = function (e, i, r, n, a, s, l, o, c, u) {
  this.numeralDecimalMark = e || ".", this.numeralIntegerScale = i > 0 ? i : 0, this.numeralDecimalScale = r >= 0 ? r : 2, this.numeralThousandsGroupStyle = n || t.groupStyle.thousand, this.numeralPositiveOnly = !!a, this.stripLeadingZeroes = !1 !== s, this.prefix = l || "" === l ? l : "", this.signBeforePrefix = !!o, this.tailPrefix = !!c, this.delimiter = u || "" === u ? u : ",", this.delimiterRE = u ? new RegExp("\\" + u, "g") : "";
};

t.groupStyle = {
  thousand: "thousand",
  lakh: "lakh",
  wan: "wan",
  none: "none"
}, t.prototype = {
  getRawValue: function (e) {
    return e.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".");
  },
  format: function (e) {
    var i,
        r,
        n,
        a,
        s = "";

    switch (e = e.replace(/[A-Za-z]/g, "").replace(this.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", this.numeralPositiveOnly ? "" : "-").replace("M", this.numeralDecimalMark), this.stripLeadingZeroes && (e = e.replace(/^(-)?0+(?=\d)/, "$1")), r = "-" === e.slice(0, 1) ? "-" : "", n = void 0 !== this.prefix ? this.signBeforePrefix ? r + this.prefix : this.prefix + r : r, a = e, e.indexOf(this.numeralDecimalMark) >= 0 && (a = (i = e.split(this.numeralDecimalMark))[0], s = this.numeralDecimalMark + i[1].slice(0, this.numeralDecimalScale)), "-" === r && (a = a.slice(1)), this.numeralIntegerScale > 0 && (a = a.slice(0, this.numeralIntegerScale)), this.numeralThousandsGroupStyle) {
      case t.groupStyle.lakh:
        a = a.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + this.delimiter);
        break;

      case t.groupStyle.wan:
        a = a.replace(/(\d)(?=(\d{4})+$)/g, "$1" + this.delimiter);
        break;

      case t.groupStyle.thousand:
        a = a.replace(/(\d)(?=(\d{3})+$)/g, "$1" + this.delimiter);
    }

    return this.tailPrefix ? r + a.toString() + (this.numeralDecimalScale > 0 ? s.toString() : "") + this.prefix : n + a.toString() + (this.numeralDecimalScale > 0 ? s.toString() : "");
  }
};

var i = t,
    r = function (e, t, i) {
  this.date = [], this.blocks = [], this.datePattern = e, this.dateMin = t.split("-").reverse().map(function (e) {
    return parseInt(e, 10);
  }), 2 === this.dateMin.length && this.dateMin.unshift(0), this.dateMax = i.split("-").reverse().map(function (e) {
    return parseInt(e, 10);
  }), 2 === this.dateMax.length && this.dateMax.unshift(0), this.initBlocks();
};

r.prototype = {
  initBlocks: function () {
    var e = this;
    e.datePattern.forEach(function (t) {
      "Y" === t ? e.blocks.push(4) : e.blocks.push(2);
    });
  },
  getISOFormatDate: function () {
    var e = this.date;
    return e[2] ? e[2] + "-" + this.addLeadingZero(e[1]) + "-" + this.addLeadingZero(e[0]) : "";
  },
  getBlocks: function () {
    return this.blocks;
  },
  getValidatedDate: function (e) {
    var t = this,
        i = "";
    return e = e.replace(/[^\d]/g, ""), t.blocks.forEach(function (r, n) {
      if (e.length > 0) {
        var a = e.slice(0, r),
            s = a.slice(0, 1),
            l = e.slice(r);

        switch (t.datePattern[n]) {
          case "d":
            "00" === a ? a = "01" : parseInt(s, 10) > 3 ? a = "0" + s : parseInt(a, 10) > 31 && (a = "31");
            break;

          case "m":
            "00" === a ? a = "01" : parseInt(s, 10) > 1 ? a = "0" + s : parseInt(a, 10) > 12 && (a = "12");
        }

        i += a, e = l;
      }
    }), this.getFixedDateString(i);
  },
  getFixedDateString: function (e) {
    var t,
        i,
        r,
        n = this,
        a = n.datePattern,
        s = [],
        l = 0,
        o = 0,
        c = 0,
        u = 0,
        d = 0,
        h = 0,
        m = !1;
    return 4 === e.length && "y" !== a[0].toLowerCase() && "y" !== a[1].toLowerCase() && (d = 2 - (u = "d" === a[0] ? 0 : 2), t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), s = this.getFixedDate(t, i, 0)), 8 === e.length && (a.forEach(function (e, t) {
      switch (e) {
        case "d":
          l = t;
          break;

        case "m":
          o = t;
          break;

        default:
          c = t;
      }
    }), h = 2 * c, u = l <= c ? 2 * l : 2 * l + 2, d = o <= c ? 2 * o : 2 * o + 2, t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 4), 10), m = 4 === e.slice(h, h + 4).length, s = this.getFixedDate(t, i, r)), 4 !== e.length || "y" !== a[0] && "y" !== a[1] || (h = 2 - (d = "m" === a[0] ? 0 : 2), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), m = 2 === e.slice(h, h + 2).length, s = [0, i, r]), 6 !== e.length || "Y" !== a[0] && "Y" !== a[1] || (h = 2 - .5 * (d = "m" === a[0] ? 0 : 4), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 4), 10), m = 4 === e.slice(h, h + 4).length, s = [0, i, r]), s = n.getRangeFixedDate(s), n.date = s, 0 === s.length ? e : a.reduce(function (e, t) {
      switch (t) {
        case "d":
          return e + (0 === s[0] ? "" : n.addLeadingZero(s[0]));

        case "m":
          return e + (0 === s[1] ? "" : n.addLeadingZero(s[1]));

        case "y":
          return e + (m ? n.addLeadingZeroForYear(s[2], !1) : "");

        case "Y":
          return e + (m ? n.addLeadingZeroForYear(s[2], !0) : "");
      }
    }, "");
  },
  getRangeFixedDate: function (e) {
    var t = this.datePattern,
        i = this.dateMin || [],
        r = this.dateMax || [];
    return !e.length || i.length < 3 && r.length < 3 ? e : t.find(function (e) {
      return "y" === e.toLowerCase();
    }) && 0 === e[2] ? e : r.length && (r[2] < e[2] || r[2] === e[2] && (r[1] < e[1] || r[1] === e[1] && r[0] < e[0])) ? r : i.length && (i[2] > e[2] || i[2] === e[2] && (i[1] > e[1] || i[1] === e[1] && i[0] > e[0])) ? i : e;
  },
  getFixedDate: function (e, t, i) {
    return e = Math.min(e, 31), t = Math.min(t, 12), i = parseInt(i || 0, 10), (t < 7 && t % 2 == 0 || t > 8 && t % 2 == 1) && (e = Math.min(e, 2 === t ? this.isLeapYear(i) ? 29 : 28 : 30)), [e, t, i];
  },
  isLeapYear: function (e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  addLeadingZero: function (e) {
    return (e < 10 ? "0" : "") + e;
  },
  addLeadingZeroForYear: function (e, t) {
    return t ? (e < 10 ? "000" : e < 100 ? "00" : e < 1e3 ? "0" : "") + e : (e < 10 ? "0" : "") + e;
  }
};

var n = r,
    a = function (e, t) {
  this.time = [], this.blocks = [], this.timePattern = e, this.timeFormat = t, this.initBlocks();
};

a.prototype = {
  initBlocks: function () {
    var e = this;
    e.timePattern.forEach(function () {
      e.blocks.push(2);
    });
  },
  getISOFormatTime: function () {
    var e = this.time;
    return e[2] ? this.addLeadingZero(e[0]) + ":" + this.addLeadingZero(e[1]) + ":" + this.addLeadingZero(e[2]) : "";
  },
  getBlocks: function () {
    return this.blocks;
  },
  getTimeFormatOptions: function () {
    return "12" === String(this.timeFormat) ? {
      maxHourFirstDigit: 1,
      maxHours: 12,
      maxMinutesFirstDigit: 5,
      maxMinutes: 60
    } : {
      maxHourFirstDigit: 2,
      maxHours: 23,
      maxMinutesFirstDigit: 5,
      maxMinutes: 60
    };
  },
  getValidatedTime: function (e) {
    var t = this,
        i = "";
    e = e.replace(/[^\d]/g, "");
    var r = t.getTimeFormatOptions();
    return t.blocks.forEach(function (n, a) {
      if (e.length > 0) {
        var s = e.slice(0, n),
            l = s.slice(0, 1),
            o = e.slice(n);

        switch (t.timePattern[a]) {
          case "h":
            parseInt(l, 10) > r.maxHourFirstDigit ? s = "0" + l : parseInt(s, 10) > r.maxHours && (s = r.maxHours + "");
            break;

          case "m":
          case "s":
            parseInt(l, 10) > r.maxMinutesFirstDigit ? s = "0" + l : parseInt(s, 10) > r.maxMinutes && (s = r.maxMinutes + "");
        }

        i += s, e = o;
      }
    }), this.getFixedTimeString(i);
  },
  getFixedTimeString: function (e) {
    var t,
        i,
        r,
        n = this,
        a = n.timePattern,
        s = [],
        l = 0,
        o = 0,
        c = 0,
        u = 0,
        d = 0,
        h = 0;
    return 6 === e.length && (a.forEach(function (e, t) {
      switch (e) {
        case "s":
          l = 2 * t;
          break;

        case "m":
          o = 2 * t;
          break;

        case "h":
          c = 2 * t;
      }
    }), h = c, d = o, u = l, t = parseInt(e.slice(u, u + 2), 10), i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), s = this.getFixedTime(r, i, t)), 4 === e.length && n.timePattern.indexOf("s") < 0 && (a.forEach(function (e, t) {
      switch (e) {
        case "m":
          o = 2 * t;
          break;

        case "h":
          c = 2 * t;
      }
    }), h = c, d = o, t = 0, i = parseInt(e.slice(d, d + 2), 10), r = parseInt(e.slice(h, h + 2), 10), s = this.getFixedTime(r, i, t)), n.time = s, 0 === s.length ? e : a.reduce(function (e, t) {
      switch (t) {
        case "s":
          return e + n.addLeadingZero(s[2]);

        case "m":
          return e + n.addLeadingZero(s[1]);

        case "h":
          return e + n.addLeadingZero(s[0]);
      }
    }, "");
  },
  getFixedTime: function (e, t, i) {
    return i = Math.min(parseInt(i || 0, 10), 60), t = Math.min(t, 60), [e = Math.min(e, 60), t, i];
  },
  addLeadingZero: function (e) {
    return (e < 10 ? "0" : "") + e;
  }
};

var s = a,
    l = function (e, t) {
  this.delimiter = t || "" === t ? t : " ", this.delimiterRE = t ? new RegExp("\\" + t, "g") : "", this.formatter = e;
};

l.prototype = {
  setFormatter: function (e) {
    this.formatter = e;
  },
  format: function (e) {
    this.formatter.clear();

    for (var t, i = "", r = !1, n = 0, a = (e = (e = (e = e.replace(/[^\d+]/g, "")).replace(/^\+/, "B").replace(/\+/g, "").replace("B", "+")).replace(this.delimiterRE, "")).length; n < a; n++) t = this.formatter.inputDigit(e.charAt(n)), /[\s()-]/g.test(t) ? (i = t, r = !0) : r || (i = t);

    return i = (i = i.replace(/[()]/g, "")).replace(/[\s-]/g, this.delimiter);
  }
};

var o = l,
    c = {
  blocks: {
    uatp: [4, 5, 6],
    amex: [4, 6, 5],
    diners: [4, 6, 4],
    discover: [4, 4, 4, 4],
    mastercard: [4, 4, 4, 4],
    dankort: [4, 4, 4, 4],
    instapayment: [4, 4, 4, 4],
    jcb15: [4, 6, 5],
    jcb: [4, 4, 4, 4],
    maestro: [4, 4, 4, 4],
    visa: [4, 4, 4, 4],
    mir: [4, 4, 4, 4],
    unionPay: [4, 4, 4, 4],
    general: [4, 4, 4, 4]
  },
  re: {
    uatp: /^(?!1800)1\d{0,14}/,
    amex: /^3[47]\d{0,13}/,
    discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
    mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
    dankort: /^(5019|4175|4571)\d{0,12}/,
    instapayment: /^63[7-9]\d{0,13}/,
    jcb15: /^(?:2131|1800)\d{0,11}/,
    jcb: /^(?:35\d{0,2})\d{0,12}/,
    maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
    mir: /^220[0-4]\d{0,12}/,
    visa: /^4\d{0,15}/,
    unionPay: /^(62|81)\d{0,14}/
  },
  getStrictBlocks: function (e) {
    var t = e.reduce(function (e, t) {
      return e + t;
    }, 0);
    return e.concat(19 - t);
  },
  getInfo: function (e, t) {
    var i = c.blocks,
        r = c.re;

    for (var n in t = !!t, r) if (r[n].test(e)) {
      var a = i[n];
      return {
        type: n,
        blocks: t ? this.getStrictBlocks(a) : a
      };
    }

    return {
      type: "unknown",
      blocks: t ? this.getStrictBlocks(i.general) : i.general
    };
  }
},
    u = c,
    d = {
  noop: function () {},
  strip: function (e, t) {
    return e.replace(t, "");
  },
  getPostDelimiter: function (e, t, i) {
    if (0 === i.length) return e.slice(-t.length) === t ? t : "";
    var r = "";
    return i.forEach(function (t) {
      e.slice(-t.length) === t && (r = t);
    }), r;
  },
  getDelimiterREByDelimiter: function (e) {
    return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
  },
  getNextCursorPosition: function (e, t, i, r, n) {
    return t.length === e ? i.length : e + this.getPositionOffset(e, t, i, r, n);
  },
  getPositionOffset: function (e, t, i, r, n) {
    var a, s, l;
    return a = this.stripDelimiters(t.slice(0, e), r, n), s = this.stripDelimiters(i.slice(0, e), r, n), 0 !== (l = a.length - s.length) ? l / Math.abs(l) : 0;
  },
  stripDelimiters: function (e, t, i) {
    var r = this;

    if (0 === i.length) {
      var n = t ? r.getDelimiterREByDelimiter(t) : "";
      return e.replace(n, "");
    }

    return i.forEach(function (t) {
      t.split("").forEach(function (t) {
        e = e.replace(r.getDelimiterREByDelimiter(t), "");
      });
    }), e;
  },
  headStr: function (e, t) {
    return e.slice(0, t);
  },
  getMaxLength: function (e) {
    return e.reduce(function (e, t) {
      return e + t;
    }, 0);
  },
  getPrefixStrippedValue: function (e, t, i, r, n, a, s, l, o) {
    if (0 === i) return e;
    if (e === t && "" !== e) return "";

    if (o && "-" == e.slice(0, 1)) {
      var c = "-" == r.slice(0, 1) ? r.slice(1) : r;
      return "-" + this.getPrefixStrippedValue(e.slice(1), t, i, c, n, a, s, l, o);
    }

    if (r.slice(0, i) !== t && !l) return s && !r && e ? e : "";
    if (r.slice(-i) !== t && l) return s && !r && e ? e : "";
    var u = this.stripDelimiters(r, n, a);
    return e.slice(0, i) === t || l ? e.slice(-i) !== t && l ? u.slice(0, -i - 1) : l ? e.slice(0, -i) : e.slice(i) : u.slice(i);
  },
  getFirstDiffIndex: function (e, t) {
    for (var i = 0; e.charAt(i) === t.charAt(i);) if ("" === e.charAt(i++)) return -1;

    return i;
  },
  getFormattedValue: function (e, t, i, r, n, a) {
    var s = "",
        l = n.length > 0,
        o = "";
    return 0 === i ? e : (t.forEach(function (t, c) {
      if (e.length > 0) {
        var u = e.slice(0, t),
            d = e.slice(t);
        o = l ? n[a ? c - 1 : c] || o : r, a ? (c > 0 && (s += o), s += u) : (s += u, u.length === t && c < i - 1 && (s += o)), e = d;
      }
    }), s);
  },
  fixPrefixCursor: function (e, t, i, r) {
    if (e) {
      var n = e.value,
          a = i || r[0] || " ";

      if (e.setSelectionRange && t && !(t.length + a.length <= n.length)) {
        var s = 2 * n.length;
        setTimeout(function () {
          e.setSelectionRange(s, s);
        }, 1);
      }
    }
  },
  checkFullSelection: function (e) {
    try {
      return (window.getSelection() || document.getSelection() || {}).toString().length === e.length;
    } catch (e) {}

    return !1;
  },
  setSelection: function (e, t, i) {
    if (e === this.getActiveElement(i) && !(e && e.value.length <= t)) if (e.createTextRange) {
      var r = e.createTextRange();
      r.move("character", t), r.select();
    } else try {
      e.setSelectionRange(t, t);
    } catch (e) {
      console.warn("The input element type does not support selection");
    }
  },
  getActiveElement: function (e) {
    var t = e.activeElement;
    return t && t.shadowRoot ? this.getActiveElement(t.shadowRoot) : t;
  },
  isAndroid: function () {
    return navigator && /android/i.test(navigator.userAgent);
  },
  isAndroidBackspaceKeydown: function (e, t) {
    return !!(this.isAndroid() && e && t) && t === e.slice(0, -1);
  }
},
    h = {
  assign: function (t, i) {
    return i = i || {}, (t = t || {}).creditCard = !!i.creditCard, t.creditCardStrictMode = !!i.creditCardStrictMode, t.creditCardType = "", t.onCreditCardTypeChanged = i.onCreditCardTypeChanged || function () {}, t.phone = !!i.phone, t.phoneRegionCode = i.phoneRegionCode || "AU", t.phoneFormatter = {}, t.time = !!i.time, t.timePattern = i.timePattern || ["h", "m", "s"], t.timeFormat = i.timeFormat || "24", t.timeFormatter = {}, t.date = !!i.date, t.datePattern = i.datePattern || ["d", "m", "Y"], t.dateMin = i.dateMin || "", t.dateMax = i.dateMax || "", t.dateFormatter = {}, t.numeral = !!i.numeral, t.numeralIntegerScale = i.numeralIntegerScale > 0 ? i.numeralIntegerScale : 0, t.numeralDecimalScale = i.numeralDecimalScale >= 0 ? i.numeralDecimalScale : 2, t.numeralDecimalMark = i.numeralDecimalMark || ".", t.numeralThousandsGroupStyle = i.numeralThousandsGroupStyle || "thousand", t.numeralPositiveOnly = !!i.numeralPositiveOnly, t.stripLeadingZeroes = !1 !== i.stripLeadingZeroes, t.signBeforePrefix = !!i.signBeforePrefix, t.tailPrefix = !!i.tailPrefix, t.swapHiddenInput = !!i.swapHiddenInput, t.numericOnly = t.creditCard || t.date || !!i.numericOnly, t.uppercase = !!i.uppercase, t.lowercase = !!i.lowercase, t.prefix = t.creditCard || t.date ? "" : i.prefix || "", t.noImmediatePrefix = !!i.noImmediatePrefix, t.prefixLength = t.prefix.length, t.rawValueTrimPrefix = !!i.rawValueTrimPrefix, t.copyDelimiter = !!i.copyDelimiter, t.initValue = void 0 !== i.initValue && null !== i.initValue ? i.initValue.toString() : "", t.delimiter = i.delimiter || "" === i.delimiter ? i.delimiter : i.date ? "/" : i.time ? ":" : i.numeral ? "," : (i.phone, " "), t.delimiterLength = t.delimiter.length, t.delimiterLazyShow = !!i.delimiterLazyShow, t.delimiters = i.delimiters || [], t.blocks = i.blocks || [], t.blocksLength = t.blocks.length, t.root = "object" == typeof e && e ? e : window, t.document = i.document || t.root.document, t.maxLength = 0, t.backspace = !1, t.result = "", t.onValueChanged = i.onValueChanged || function () {}, t;
  }
},
    m = function (e, t) {
  var i = !1;
  if ("string" == typeof e ? (this.element = document.querySelector(e), i = document.querySelectorAll(e).length > 1) : void 0 !== e.length && e.length > 0 ? (this.element = e[0], i = e.length > 1) : this.element = e, !this.element) throw new Error("[cleave.js] Please check the element");
  if (i) try {
    console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.");
  } catch (e) {}
  t.initValue = this.element.value, this.properties = m.DefaultProperties.assign({}, t), this.init();
};

m.prototype = {
  init: function () {
    var e = this.properties;
    e.numeral || e.phone || e.creditCard || e.time || e.date || 0 !== e.blocksLength || e.prefix ? (e.maxLength = m.Util.getMaxLength(e.blocks), this.isAndroid = m.Util.isAndroid(), this.lastInputValue = "", this.isBackward = "", this.onChangeListener = this.onChange.bind(this), this.onKeyDownListener = this.onKeyDown.bind(this), this.onFocusListener = this.onFocus.bind(this), this.onCutListener = this.onCut.bind(this), this.onCopyListener = this.onCopy.bind(this), this.initSwapHiddenInput(), this.element.addEventListener("input", this.onChangeListener), this.element.addEventListener("keydown", this.onKeyDownListener), this.element.addEventListener("focus", this.onFocusListener), this.element.addEventListener("cut", this.onCutListener), this.element.addEventListener("copy", this.onCopyListener), this.initPhoneFormatter(), this.initDateFormatter(), this.initTimeFormatter(), this.initNumeralFormatter(), (e.initValue || e.prefix && !e.noImmediatePrefix) && this.onInput(e.initValue)) : this.onInput(e.initValue);
  },
  initSwapHiddenInput: function () {
    if (this.properties.swapHiddenInput) {
      var e = this.element.cloneNode(!0);
      this.element.parentNode.insertBefore(e, this.element), this.elementSwapHidden = this.element, this.elementSwapHidden.type = "hidden", this.element = e, this.element.id = "";
    }
  },
  initNumeralFormatter: function () {
    var e = this.properties;
    e.numeral && (e.numeralFormatter = new m.NumeralFormatter(e.numeralDecimalMark, e.numeralIntegerScale, e.numeralDecimalScale, e.numeralThousandsGroupStyle, e.numeralPositiveOnly, e.stripLeadingZeroes, e.prefix, e.signBeforePrefix, e.tailPrefix, e.delimiter));
  },
  initTimeFormatter: function () {
    var e = this.properties;
    e.time && (e.timeFormatter = new m.TimeFormatter(e.timePattern, e.timeFormat), e.blocks = e.timeFormatter.getBlocks(), e.blocksLength = e.blocks.length, e.maxLength = m.Util.getMaxLength(e.blocks));
  },
  initDateFormatter: function () {
    var e = this.properties;
    e.date && (e.dateFormatter = new m.DateFormatter(e.datePattern, e.dateMin, e.dateMax), e.blocks = e.dateFormatter.getBlocks(), e.blocksLength = e.blocks.length, e.maxLength = m.Util.getMaxLength(e.blocks));
  },
  initPhoneFormatter: function () {
    var e = this.properties;
    if (e.phone) try {
      e.phoneFormatter = new m.PhoneFormatter(new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode), e.delimiter);
    } catch (e) {
      throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib");
    }
  },
  onKeyDown: function (e) {
    var t = e.which || e.keyCode;
    this.lastInputValue = this.element.value, this.isBackward = 8 === t;
  },
  onChange: function (e) {
    var t = this.properties,
        i = m.Util;
    this.isBackward = this.isBackward || "deleteContentBackward" === e.inputType;
    var r = i.getPostDelimiter(this.lastInputValue, t.delimiter, t.delimiters);
    this.isBackward && r ? t.postDelimiterBackspace = r : t.postDelimiterBackspace = !1, this.onInput(this.element.value);
  },
  onFocus: function () {
    var e = this.properties;
    this.lastInputValue = this.element.value, e.prefix && e.noImmediatePrefix && !this.element.value && this.onInput(e.prefix), m.Util.fixPrefixCursor(this.element, e.prefix, e.delimiter, e.delimiters);
  },
  onCut: function (e) {
    m.Util.checkFullSelection(this.element.value) && (this.copyClipboardData(e), this.onInput(""));
  },
  onCopy: function (e) {
    m.Util.checkFullSelection(this.element.value) && this.copyClipboardData(e);
  },
  copyClipboardData: function (e) {
    var t = this.properties,
        i = m.Util,
        r = this.element.value,
        n = "";
    n = t.copyDelimiter ? r : i.stripDelimiters(r, t.delimiter, t.delimiters);

    try {
      e.clipboardData ? e.clipboardData.setData("Text", n) : window.clipboardData.setData("Text", n), e.preventDefault();
    } catch (e) {}
  },
  onInput: function (e) {
    var t = this.properties,
        i = m.Util,
        r = i.getPostDelimiter(e, t.delimiter, t.delimiters);
    return t.numeral || !t.postDelimiterBackspace || r || (e = i.headStr(e, e.length - t.postDelimiterBackspace.length)), t.phone ? (!t.prefix || t.noImmediatePrefix && !e.length ? t.result = t.phoneFormatter.format(e) : t.result = t.prefix + t.phoneFormatter.format(e).slice(t.prefix.length), void this.updateValueState()) : t.numeral ? (t.prefix && t.noImmediatePrefix && 0 === e.length ? t.result = "" : t.result = t.numeralFormatter.format(e), void this.updateValueState()) : (t.date && (e = t.dateFormatter.getValidatedDate(e)), t.time && (e = t.timeFormatter.getValidatedTime(e)), e = i.stripDelimiters(e, t.delimiter, t.delimiters), e = i.getPrefixStrippedValue(e, t.prefix, t.prefixLength, t.result, t.delimiter, t.delimiters, t.noImmediatePrefix, t.tailPrefix, t.signBeforePrefix), e = t.numericOnly ? i.strip(e, /[^\d]/g) : e, e = t.uppercase ? e.toUpperCase() : e, e = t.lowercase ? e.toLowerCase() : e, t.prefix && (t.tailPrefix ? e += t.prefix : e = t.prefix + e, 0 === t.blocksLength) ? (t.result = e, void this.updateValueState()) : (t.creditCard && this.updateCreditCardPropsByValue(e), e = i.headStr(e, t.maxLength), t.result = i.getFormattedValue(e, t.blocks, t.blocksLength, t.delimiter, t.delimiters, t.delimiterLazyShow), void this.updateValueState()));
  },
  updateCreditCardPropsByValue: function (e) {
    var t,
        i = this.properties,
        r = m.Util;
    r.headStr(i.result, 4) !== r.headStr(e, 4) && (t = m.CreditCardDetector.getInfo(e, i.creditCardStrictMode), i.blocks = t.blocks, i.blocksLength = i.blocks.length, i.maxLength = r.getMaxLength(i.blocks), i.creditCardType !== t.type && (i.creditCardType = t.type, i.onCreditCardTypeChanged.call(this, i.creditCardType)));
  },
  updateValueState: function () {
    var e = this,
        t = m.Util,
        i = e.properties;

    if (e.element) {
      var r = e.element.selectionEnd,
          n = e.element.value,
          a = i.result;
      r = t.getNextCursorPosition(r, n, a, i.delimiter, i.delimiters), e.isAndroid ? window.setTimeout(function () {
        e.element.value = a, t.setSelection(e.element, r, i.document, !1), e.callOnValueChanged();
      }, 1) : (e.element.value = a, i.swapHiddenInput && (e.elementSwapHidden.value = e.getRawValue()), t.setSelection(e.element, r, i.document, !1), e.callOnValueChanged());
    }
  },
  callOnValueChanged: function () {
    var e = this.properties;
    e.onValueChanged.call(this, {
      target: {
        name: this.element.name,
        value: e.result,
        rawValue: this.getRawValue()
      }
    });
  },
  setPhoneRegionCode: function (e) {
    this.properties.phoneRegionCode = e, this.initPhoneFormatter(), this.onChange();
  },
  setRawValue: function (e) {
    var t = this.properties;
    e = null != e ? e.toString() : "", t.numeral && (e = e.replace(".", t.numeralDecimalMark)), t.postDelimiterBackspace = !1, this.element.value = e, this.onInput(e);
  },
  getRawValue: function () {
    var e = this.properties,
        t = m.Util,
        i = this.element.value;
    return e.rawValueTrimPrefix && (i = t.getPrefixStrippedValue(i, e.prefix, e.prefixLength, e.result, e.delimiter, e.delimiters, e.noImmediatePrefix, e.tailPrefix, e.signBeforePrefix)), i = e.numeral ? e.numeralFormatter.getRawValue(i) : t.stripDelimiters(i, e.delimiter, e.delimiters);
  },
  getISOFormatDate: function () {
    var e = this.properties;
    return e.date ? e.dateFormatter.getISOFormatDate() : "";
  },
  getISOFormatTime: function () {
    var e = this.properties;
    return e.time ? e.timeFormatter.getISOFormatTime() : "";
  },
  getFormattedValue: function () {
    return this.element.value;
  },
  destroy: function () {
    this.element.removeEventListener("input", this.onChangeListener), this.element.removeEventListener("keydown", this.onKeyDownListener), this.element.removeEventListener("focus", this.onFocusListener), this.element.removeEventListener("cut", this.onCutListener), this.element.removeEventListener("copy", this.onCopyListener);
  },
  toString: function () {
    return "[Cleave Object]";
  }
}, m.NumeralFormatter = i, m.DateFormatter = n, m.TimeFormatter = s, m.PhoneFormatter = o, m.CreditCardDetector = u, m.Util = d, m.DefaultProperties = h, ("object" == typeof e && e ? e : window).Cleave = m;
/* harmony default export */ var cleave = (m);
// EXTERNAL MODULE: ./modules/nuxt-uibox/js/cleave/addons/cleave-phone.co.js
var cleave_phone_co = __webpack_require__(151);

// EXTERNAL MODULE: ./modules/nuxt-uibox/js/cleave/addons/cleave-phone.us.js
var cleave_phone_us = __webpack_require__(152);

// CONCATENATED MODULE: ./modules/nuxt-uibox/useCleave.js




function optionsIsCard() {
  return {
    creditCard: true
  };
}

function optionsIsDate(isDate) {
  let o = {
    date: true,
    delimiter: '-'
  };
  if (typeof isDate === 'object') o.datePattern = isDate;
  return o;
}

function optionsIsNumber(isNumber) {
  let o = {
    numericOnly: true,
    blocks: [32]
  };
  if (typeof isNumber === 'object') o.blocks = isNumber;
  return o;
}

function optionsIsPhone(isPhone) {
  return {
    phone: true,
    phoneRegionCode: typeof isPhone === 'boolean' ? 'co' : isPhone
  };
}

const useCleave = (props, el, emit) => {
  let options = {};
  if (props.isCard) options = optionsIsCard();else if (props.isDate) options = optionsIsDate(props.isDate);else if (props.isNumber) options = optionsIsNumber(props.isNumber);else if (props.isPhone) options = optionsIsPhone(props.isPhone);
  new cleave(el, { ...options,
    onValueChanged: ({
      target
    }) => {
      emit('input', target.value);
    }
  });
  return false;
};
/* harmony default export */ var nuxt_uibox_useCleave = (useCleave);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./modules/nuxt-uibox/ui/Input.vue?vue&type=script&lang=js&



/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  props: {
    alignSelf: {
      type: String
    },
    bg: {
      type: String,
      default: 'white'
    },
    brColor: {
      type: String,
      default: 'graylight'
    },
    brColorFocus: {
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
    icon: {
      type: String
    },
    isCard: {
      type: Boolean
    },
    isDate: {
      type: [Boolean, Array]
    },
    isEmail: {
      type: Boolean
    },
    isNumber: {
      type: [Boolean, Array]
    },
    isPass: {
      type: Boolean
    },
    isPhone: {
      type: [Boolean, String]
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
    readonly: {
      type: Boolean
    },
    required: {
      type: [Boolean, String]
    },
    requiresMin: {
      type: [String, Number]
    },
    seePass: {
      type: Boolean
    },
    value: {
      type: [String, Number]
    }
  },

  setup(props, {
    emit
  }) {
    const el = Object(runtime["f" /* ref */])(null);
    const typePass = Object(runtime["f" /* ref */])({
      id: 0,
      label: 'password'
    });
    const isValid = Object(runtime["f" /* ref */])(true);
    const usingCleave = Object(runtime["a" /* computed */])(() => {
      return props.isCard || props.isDate || props.isNumber || props.isPhone;
    });
    const notValid = Object(runtime["a" /* computed */])(() => {
      if (props.isEmail) {
        var _props$value;

        if (((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) > 4) {
          isValid.value = props.value.indexOf('@') > 0 && props.value.indexOf('.') > 2 && /.+\@.+\..+/.test(props.value);
        } else {
          isValid.value = false;
        }
      } else if (props.isPhone) {
        var _props$value2;

        isValid.value = ((_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.length) >= 7;
      } else if (props.requiresMin) {
        var _props$value3;

        isValid.value = ((_props$value3 = props.value) === null || _props$value3 === void 0 ? void 0 : _props$value3.length) >= Number(props.requiresMin);
      }

      emit('isvalid', isValid.value);
      return !isValid.value;
    });
    const allowSeePass = Object(runtime["a" /* computed */])(() => {
      return props.isPass && props.seePass && props.value;
    });
    const type = Object(runtime["a" /* computed */])(() => {
      return props.isPass ? typePass.value.label : 'text';
    });

    function exposePass() {
      if (typePass.value.label === 'text') {
        typePass.value.label = 'password';
      } else {
        typePass.value.label = 'text';
      }

      clearTimeout(typePass.value.id);
      typePass.value.id = setTimeout(() => {
        typePass.value.label = 'password';
      }, 3e3);
    }

    function load() {
      Object(runtime["d" /* onMounted */])(() => {
        if (usingCleave.value) {
          setTimeout(() => {
            nuxt_uibox_useCleave(props, el.value, emit);
          }, 300);
        }
      });
    }

    function clear() {
      emit('input', '');
      emit('clear');
    }

    const CSS = Object(runtime["a" /* computed */])(() => {
      let margin = {};
      let root = {};
      let input = {};
      if (!!props.alignSelf) root[useCSS["a" /* CSSAlign */]['self_' + props.alignSelf]] = true;
      if (!!props.justifySelf) root[useCSS["i" /* CSSJustify */]['self_' + props.justifySelf]] = true;
      if (props.disabled) margin[useCSS["d" /* CSSDisabled */].disabled] = true;
      if (!!props.margin) margin[useCSS["j" /* CSSMargin */]['all_' + props.margin]] = true;
      if (!props.margin && !!props.marginBottom) margin[useCSS["j" /* CSSMargin */]['bottom_' + props.marginBottom]] = true;
      if (!props.margin && !!props.marginLeft) margin[useCSS["j" /* CSSMargin */]['left_' + props.marginLeft]] = true;
      if (!props.margin && !!props.marginRight) margin[useCSS["j" /* CSSMargin */]['right_' + props.marginRight]] = true;
      if (!props.margin && !!props.marginTop) margin[useCSS["j" /* CSSMargin */]['top_' + props.marginTop]] = true;
      if (!props.disabled && !!props.bg) input[useCSS["c" /* CSSColor */]['bgColor_' + props.bg]] = true;
      if (!props.disabled && !!props.brColor) input[useCSS["c" /* CSSColor */]['brColor_' + props.brColor]] = true;
      if (!props.disabled && !!props.brColorFocus) input[useCSS["c" /* CSSColor */]['brFocusColor_' + props.brColorFocus]] = true;
      if (!props.disabled && !!props.bsColorFocus) input[useCSS["c" /* CSSColor */]['bsFocusColor_' + props.bsColorFocus]] = true;
      if (!!props.color) input[useCSS["c" /* CSSColor */]['color_' + props.color]] = true;
      return {
        margin,
        root,
        input
      };
    });
    return {
      allowSeePass,
      clear,
      CSS,
      el,
      exposePass,
      load,
      notValid,
      type,
      usingCleave
    };
  }

});
// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./modules/nuxt-uibox/ui/Input.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e6794142"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Label: __webpack_require__(25).default,Grid: __webpack_require__(52).default,Icon: __webpack_require__(53).default,Input: __webpack_require__(145).default})


/***/ }),

/***/ 151:
/***/ (function(module, exports) {

!function () {
  function n(n, t) {
    var e = n.split("."),
        l = T;
    e[0] in l || !l.execScript || l.execScript("var " + e[0]);

    for (var r; e.length && (r = e.shift());) e.length || void 0 === t ? l = l[r] ? l[r] : l[r] = {} : l[r] = t;
  }

  function t(n, t) {
    function e() {}

    e.prototype = t.prototype, n.M = t.prototype, n.prototype = new e(), n.prototype.constructor = n, n.N = function (n, e, l) {
      for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];

      return t.prototype[e].apply(n, r);
    };
  }

  function e(n, t) {
    null != n && this.a.apply(this, arguments);
  }

  function l(n) {
    n.b = "";
  }

  function r(n, t) {
    n.sort(t || i);
  }

  function i(n, t) {
    return n > t ? 1 : n < t ? -1 : 0;
  }

  function u(n) {
    var t,
        e = [],
        l = 0;

    for (t in n) e[l++] = n[t];

    return e;
  }

  function a(n, t) {
    this.b = n, this.a = {};

    for (var e = 0; e < t.length; e++) {
      var l = t[e];
      this.a[l.b] = l;
    }
  }

  function o(n) {
    return n = u(n.a), r(n, function (n, t) {
      return n.b - t.b;
    }), n;
  }

  function s(n, t) {
    switch (this.b = n, this.g = !!t.v, this.a = t.c, this.i = t.type, this.h = !1, this.a) {
      case k:
      case J:
      case K:
      case L:
      case Z:
      case Y:
      case U:
        this.h = !0;
    }

    this.f = t.defaultValue;
  }

  function f() {
    this.a = {}, this.f = this.j().a, this.b = this.g = null;
  }

  function p(n, t) {
    for (var e = o(n.j()), l = 0; l < e.length; l++) {
      var r = e[l],
          i = r.b;

      if (null != t.a[i]) {
        n.b && delete n.b[r.b];
        var u = 11 == r.a || 10 == r.a;
        if (r.g) for (var r = c(t, i) || [], a = 0; a < r.length; a++) {
          var s = n,
              f = i,
              h = u ? r[a].clone() : r[a];
          s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
        } else r = c(t, i), u ? (u = c(n, i)) ? p(u, r) : b(n, i, r.clone()) : b(n, i, r);
      }
    }
  }

  function c(n, t) {
    var e = n.a[t];
    if (null == e) return null;

    if (n.g) {
      if (!(t in n.b)) {
        var l = n.g,
            r = n.f[t];
        if (null != e) if (r.g) {
          for (var i = [], u = 0; u < e.length; u++) i[u] = l.b(r, e[u]);

          e = i;
        } else e = l.b(r, e);
        return n.b[t] = e;
      }

      return n.b[t];
    }

    return e;
  }

  function h(n, t, e) {
    var l = c(n, t);
    return n.f[t].g ? l[e || 0] : l;
  }

  function g(n, t) {
    var e;
    if (null != n.a[t]) e = h(n, t, void 0);else n: {
      if (e = n.f[t], void 0 === e.f) {
        var l = e.i;
        if (l === Boolean) e.f = !1;else if (l === Number) e.f = 0;else {
          if (l !== String) {
            e = new l();
            break n;
          }

          e.f = e.h ? "0" : "";
        }
      }

      e = e.f;
    }
    return e;
  }

  function m(n, t) {
    return n.f[t].g ? null != n.a[t] ? n.a[t].length : 0 : null != n.a[t] ? 1 : 0;
  }

  function b(n, t, e) {
    n.a[t] = e, n.b && (n.b[t] = e);
  }

  function y(n, t) {
    var e,
        l = [];

    for (e in t) 0 != e && l.push(new s(e, t[e]));

    return new a(n, l);
  }
  /*
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function v() {
    f.call(this);
  }

  function d() {
    f.call(this);
  }

  function _() {
    f.call(this);
  }

  function S() {}

  function w() {}

  function $() {}
  /*
  Copyright (C) 2010 The Libphonenumber Authors.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function x() {
    this.a = {};
  }

  function C(n) {
    return 0 == n.length || un.test(n);
  }

  function A(n, t) {
    if (null == t) return null;
    t = t.toUpperCase();
    var e = n.a[t];

    if (null == e) {
      if (e = tn[t], null == e) return null;
      e = new $().a(_.j(), e), n.a[t] = e;
    }

    return e;
  }

  function N(n) {
    return n = nn[n], null == n ? "ZZ" : n[0];
  }

  function j(n) {
    this.H = RegExp(" "), this.C = "", this.m = new e(), this.w = "", this.i = new e(), this.u = new e(), this.l = !0, this.A = this.o = this.F = !1, this.G = x.b(), this.s = 0, this.b = new e(), this.B = !1, this.h = "", this.a = new e(), this.f = [], this.D = n, this.J = this.g = E(this, this.D);
  }

  function E(n, t) {
    var e;

    if (null != t && isNaN(t) && t.toUpperCase() in tn) {
      if (e = A(n.G, t), null == e) throw Error("Invalid region code: " + t);
      e = g(e, 10);
    } else e = 0;

    return e = A(n.G, N(e)), null != e ? e : an;
  }

  function B(n) {
    for (var t = n.f.length, e = 0; e < t; ++e) {
      var r = n.f[e],
          i = g(r, 1);
      if (n.w == i) return !1;
      var u;
      u = n;
      var a = r,
          o = g(a, 1);
      if (-1 != o.indexOf("|")) u = !1;else {
        o = o.replace(on, "\\d"), o = o.replace(sn, "\\d"), l(u.m);
        var s;
        s = u;
        var a = g(a, 2),
            f = "999999999999999".match(o)[0];
        f.length < s.a.b.length ? s = "" : (s = f.replace(new RegExp(o, "g"), a), s = s.replace(RegExp("9", "g"), " ")), 0 < s.length ? (u.m.a(s), u = !0) : u = !1;
      }
      if (u) return n.w = i, n.B = pn.test(h(r, 4)), n.s = 0, !0;
    }

    return n.l = !1;
  }

  function R(n, t) {
    for (var e = [], l = t.length - 3, r = n.f.length, i = 0; i < r; ++i) {
      var u = n.f[i];
      0 == m(u, 3) ? e.push(n.f[i]) : (u = h(u, 3, Math.min(l, m(u, 3) - 1)), 0 == t.search(u) && e.push(n.f[i]));
    }

    n.f = e;
  }

  function F(n, t) {
    n.i.a(t);
    var e = t;

    if (rn.test(e) || 1 == n.i.b.length && ln.test(e)) {
      var r,
          e = t;
      "+" == e ? (r = e, n.u.a(e)) : (r = en[e], n.u.a(r), n.a.a(r)), t = r;
    } else n.l = !1, n.F = !0;

    if (!n.l) {
      if (!n.F) if (H(n)) {
        if (P(n)) return I(n);
      } else if (0 < n.h.length && (e = n.a.toString(), l(n.a), n.a.a(n.h), n.a.a(e), e = n.b.toString(), r = e.lastIndexOf(n.h), l(n.b), n.b.a(e.substring(0, r))), n.h != G(n)) return n.b.a(" "), I(n);
      return n.i.toString();
    }

    switch (n.u.b.length) {
      case 0:
      case 1:
      case 2:
        return n.i.toString();

      case 3:
        if (!H(n)) return n.h = G(n), O(n);
        n.A = !0;

      default:
        return n.A ? (P(n) && (n.A = !1), n.b.toString() + n.a.toString()) : 0 < n.f.length ? (e = q(n, t), r = D(n), 0 < r.length ? r : (R(n, n.a.toString()), B(n) ? V(n) : n.l ? M(n, e) : n.i.toString())) : O(n);
    }
  }

  function I(n) {
    return n.l = !0, n.A = !1, n.f = [], n.s = 0, l(n.m), n.w = "", O(n);
  }

  function D(n) {
    for (var t = n.a.toString(), e = n.f.length, l = 0; l < e; ++l) {
      var r = n.f[l],
          i = g(r, 1);
      if (new RegExp("^(?:" + i + ")$").test(t)) return n.B = pn.test(h(r, 4)), t = t.replace(new RegExp(i, "g"), h(r, 2)), M(n, t);
    }

    return "";
  }

  function M(n, t) {
    var e = n.b.b.length;
    return n.B && 0 < e && " " != n.b.toString().charAt(e - 1) ? n.b + " " + t : n.b + t;
  }

  function O(n) {
    var t = n.a.toString();

    if (3 <= t.length) {
      for (var e = n.o && 0 == n.h.length && 0 < m(n.g, 20) ? c(n.g, 20) || [] : c(n.g, 19) || [], l = e.length, r = 0; r < l; ++r) {
        var i = e[r];
        0 < n.h.length && C(g(i, 4)) && !h(i, 6) && null == i.a[5] || (0 != n.h.length || n.o || C(g(i, 4)) || h(i, 6)) && fn.test(g(i, 2)) && n.f.push(i);
      }

      return R(n, t), t = D(n), 0 < t.length ? t : B(n) ? V(n) : n.i.toString();
    }

    return M(n, t);
  }

  function V(n) {
    var t = n.a.toString(),
        e = t.length;

    if (0 < e) {
      for (var l = "", r = 0; r < e; r++) l = q(n, t.charAt(r));

      return n.l ? M(n, l) : n.i.toString();
    }

    return n.b.toString();
  }

  function G(n) {
    var t,
        e = n.a.toString(),
        r = 0;
    return 1 != h(n.g, 10) ? t = !1 : (t = n.a.toString(), t = "1" == t.charAt(0) && "0" != t.charAt(1) && "1" != t.charAt(1)), t ? (r = 1, n.b.a("1").a(" "), n.o = !0) : null != n.g.a[15] && (t = new RegExp("^(?:" + h(n.g, 15) + ")"), t = e.match(t), null != t && null != t[0] && 0 < t[0].length && (n.o = !0, r = t[0].length, n.b.a(e.substring(0, r)))), l(n.a), n.a.a(e.substring(r)), e.substring(0, r);
  }

  function H(n) {
    var t = n.u.toString(),
        e = new RegExp("^(?:\\+|" + h(n.g, 11) + ")"),
        e = t.match(e);
    return null != e && null != e[0] && 0 < e[0].length && (n.o = !0, e = e[0].length, l(n.a), n.a.a(t.substring(e)), l(n.b), n.b.a(t.substring(0, e)), "+" != t.charAt(0) && n.b.a(" "), !0);
  }

  function P(n) {
    if (0 == n.a.b.length) return !1;
    var t,
        r = new e();

    n: {
      if (t = n.a.toString(), 0 != t.length && "0" != t.charAt(0)) for (var i, u = t.length, a = 1; 3 >= a && a <= u; ++a) if (i = parseInt(t.substring(0, a), 10), i in nn) {
        r.a(t.substring(a)), t = i;
        break n;
      }
      t = 0;
    }

    return 0 != t && (l(n.a), n.a.a(r.toString()), r = N(t), "001" == r ? n.g = A(n.G, "" + t) : r != n.D && (n.g = E(n, r)), n.b.a("" + t).a(" "), n.h = "", !0);
  }

  function q(n, t) {
    var e = n.m.toString();

    if (0 <= e.substring(n.s).search(n.H)) {
      var r = e.search(n.H),
          e = e.replace(n.H, t);
      return l(n.m), n.m.a(e), n.s = r, e.substring(0, n.s + 1);
    }

    return 1 == n.f.length && (n.l = !1), n.w = "", n.i.toString();
  }

  var T = this;
  e.prototype.b = "", e.prototype.set = function (n) {
    this.b = "" + n;
  }, e.prototype.a = function (n, t, e) {
    if (this.b += String(n), null != t) for (var l = 1; l < arguments.length; l++) this.b += arguments[l];
    return this;
  }, e.prototype.toString = function () {
    return this.b;
  };
  var U = 1,
      Y = 2,
      k = 3,
      J = 4,
      K = 6,
      L = 16,
      Z = 18;
  f.prototype.set = function (n, t) {
    b(this, n.b, t);
  }, f.prototype.clone = function () {
    var n = new this.constructor();
    return n != this && (n.a = {}, n.b && (n.b = {}), p(n, this)), n;
  }, t(v, f);
  var z = null;
  t(d, f);
  var Q = null;
  t(_, f);
  var W = null;
  v.prototype.j = function () {
    var n = z;
    return n || (z = n = y(v, {
      0: {
        name: "NumberFormat",
        I: "i18n.phonenumbers.NumberFormat"
      },
      1: {
        name: "pattern",
        required: !0,
        c: 9,
        type: String
      },
      2: {
        name: "format",
        required: !0,
        c: 9,
        type: String
      },
      3: {
        name: "leading_digits_pattern",
        v: !0,
        c: 9,
        type: String
      },
      4: {
        name: "national_prefix_formatting_rule",
        c: 9,
        type: String
      },
      6: {
        name: "national_prefix_optional_when_formatting",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      5: {
        name: "domestic_carrier_code_formatting_rule",
        c: 9,
        type: String
      }
    })), n;
  }, v.j = v.prototype.j, d.prototype.j = function () {
    var n = Q;
    return n || (Q = n = y(d, {
      0: {
        name: "PhoneNumberDesc",
        I: "i18n.phonenumbers.PhoneNumberDesc"
      },
      2: {
        name: "national_number_pattern",
        c: 9,
        type: String
      },
      9: {
        name: "possible_length",
        v: !0,
        c: 5,
        type: Number
      },
      10: {
        name: "possible_length_local_only",
        v: !0,
        c: 5,
        type: Number
      },
      6: {
        name: "example_number",
        c: 9,
        type: String
      }
    })), n;
  }, d.j = d.prototype.j, _.prototype.j = function () {
    var n = W;
    return n || (W = n = y(_, {
      0: {
        name: "PhoneMetadata",
        I: "i18n.phonenumbers.PhoneMetadata"
      },
      1: {
        name: "general_desc",
        c: 11,
        type: d
      },
      2: {
        name: "fixed_line",
        c: 11,
        type: d
      },
      3: {
        name: "mobile",
        c: 11,
        type: d
      },
      4: {
        name: "toll_free",
        c: 11,
        type: d
      },
      5: {
        name: "premium_rate",
        c: 11,
        type: d
      },
      6: {
        name: "shared_cost",
        c: 11,
        type: d
      },
      7: {
        name: "personal_number",
        c: 11,
        type: d
      },
      8: {
        name: "voip",
        c: 11,
        type: d
      },
      21: {
        name: "pager",
        c: 11,
        type: d
      },
      25: {
        name: "uan",
        c: 11,
        type: d
      },
      27: {
        name: "emergency",
        c: 11,
        type: d
      },
      28: {
        name: "voicemail",
        c: 11,
        type: d
      },
      29: {
        name: "short_code",
        c: 11,
        type: d
      },
      30: {
        name: "standard_rate",
        c: 11,
        type: d
      },
      31: {
        name: "carrier_specific",
        c: 11,
        type: d
      },
      33: {
        name: "sms_services",
        c: 11,
        type: d
      },
      24: {
        name: "no_international_dialling",
        c: 11,
        type: d
      },
      9: {
        name: "id",
        required: !0,
        c: 9,
        type: String
      },
      10: {
        name: "country_code",
        c: 5,
        type: Number
      },
      11: {
        name: "international_prefix",
        c: 9,
        type: String
      },
      17: {
        name: "preferred_international_prefix",
        c: 9,
        type: String
      },
      12: {
        name: "national_prefix",
        c: 9,
        type: String
      },
      13: {
        name: "preferred_extn_prefix",
        c: 9,
        type: String
      },
      15: {
        name: "national_prefix_for_parsing",
        c: 9,
        type: String
      },
      16: {
        name: "national_prefix_transform_rule",
        c: 9,
        type: String
      },
      18: {
        name: "same_mobile_and_fixed_line_pattern",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      19: {
        name: "number_format",
        v: !0,
        c: 11,
        type: v
      },
      20: {
        name: "intl_number_format",
        v: !0,
        c: 11,
        type: v
      },
      22: {
        name: "main_country_for_code",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      23: {
        name: "leading_digits",
        c: 9,
        type: String
      },
      26: {
        name: "leading_zero_possible",
        c: 8,
        defaultValue: !1,
        type: Boolean
      }
    })), n;
  }, _.j = _.prototype.j, S.prototype.a = function (n) {
    throw new n.b(), Error("Unimplemented");
  }, S.prototype.b = function (n, t) {
    if (11 == n.a || 10 == n.a) return t instanceof f ? t : this.a(n.i.prototype.j(), t);

    if (14 == n.a) {
      if ("string" == typeof t && X.test(t)) {
        var e = Number(t);
        if (0 < e) return e;
      }

      return t;
    }

    if (!n.h) return t;

    if (e = n.i, e === String) {
      if ("number" == typeof t) return String(t);
    } else if (e === Number && "string" == typeof t && ("Infinity" === t || "-Infinity" === t || "NaN" === t || X.test(t))) return Number(t);

    return t;
  };
  var X = /^-?[0-9]+$/;
  t(w, S), w.prototype.a = function (n, t) {
    var e = new n.b();
    return e.g = this, e.a = t, e.b = {}, e;
  }, t($, w), $.prototype.b = function (n, t) {
    return 8 == n.a ? !!t : S.prototype.b.apply(this, arguments);
  }, $.prototype.a = function (n, t) {
    return $.M.a.call(this, n, t);
  };
  /*
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var nn = {
    57: ["CO"]
  },
      tn = {
    CO: [null, [null, null, "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", null, null, null, null, null, null, [8, 10, 11], [7]], [null, null, "[124-8][2-9]\\d{6}", null, null, null, "12345678", null, null, [8], [7]], [null, null, "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", null, null, null, "3211234567", null, null, [10]], [null, null, "1800\\d{7}", null, null, null, "18001234567", null, null, [11]], [null, null, "19(?:0[01]|4[78])\\d{7}", null, null, null, "19001234567", null, null, [11]], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", null, null, "0([3579]|4(?:[14]4|56))?", null, null, null, [[null, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[24-8]"], "($1)", "0$CC $1"], [null, "(\\d{3})(\\d{7})", "$1 $2", ["3"], null, "0$CC $1"], [null, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1"]], [[null, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[24-8]"], "($1)", "0$CC $1"], [null, "(\\d{3})(\\d{7})", "$1 $2", ["3"], null, "0$CC $1"], [null, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9)", "1(?:800|9)"]]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]]
  };

  x.b = function () {
    return x.a ? x.a : x.a = new x();
  };

  var en = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
  },
      ln = RegExp("[+＋]+"),
      rn = RegExp("([0-9０-９٠-٩۰-۹])"),
      un = /^\(?\$1\)?$/,
      an = new _();
  b(an, 11, "NA");
  var on = /\[([^\[\]])*\]/g,
      sn = /\d(?=[^,}][^,}])/g,
      fn = RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),
      pn = /[- ]/;
  j.prototype.K = function () {
    this.C = "", l(this.i), l(this.u), l(this.m), this.s = 0, this.w = "", l(this.b), this.h = "", l(this.a), this.l = !0, this.A = this.o = this.F = !1, this.f = [], this.B = !1, this.g != this.J && (this.g = E(this, this.D));
  }, j.prototype.L = function (n) {
    return this.C = F(this, n);
  }, n("Cleave.AsYouTypeFormatter", j), n("Cleave.AsYouTypeFormatter.prototype.inputDigit", j.prototype.L), n("Cleave.AsYouTypeFormatter.prototype.clear", j.prototype.K);
}.call("object" == typeof global && global ? global : window);

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

!function () {
  function l(l, n) {
    var u = l.split("."),
        t = Y;
    u[0] in t || !t.execScript || t.execScript("var " + u[0]);

    for (var e; u.length && (e = u.shift());) u.length || void 0 === n ? t = t[e] ? t[e] : t[e] = {} : t[e] = n;
  }

  function n(l, n) {
    function u() {}

    u.prototype = n.prototype, l.M = n.prototype, l.prototype = new u(), l.prototype.constructor = l, l.N = function (l, u, t) {
      for (var e = Array(arguments.length - 2), r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];

      return n.prototype[u].apply(l, e);
    };
  }

  function u(l, n) {
    null != l && this.a.apply(this, arguments);
  }

  function t(l) {
    l.b = "";
  }

  function e(l, n) {
    l.sort(n || r);
  }

  function r(l, n) {
    return l > n ? 1 : l < n ? -1 : 0;
  }

  function i(l) {
    var n,
        u = [],
        t = 0;

    for (n in l) u[t++] = l[n];

    return u;
  }

  function a(l, n) {
    this.b = l, this.a = {};

    for (var u = 0; u < n.length; u++) {
      var t = n[u];
      this.a[t.b] = t;
    }
  }

  function d(l) {
    return l = i(l.a), e(l, function (l, n) {
      return l.b - n.b;
    }), l;
  }

  function o(l, n) {
    switch (this.b = l, this.g = !!n.v, this.a = n.c, this.i = n.type, this.h = !1, this.a) {
      case O:
      case H:
      case q:
      case X:
      case k:
      case L:
      case J:
        this.h = !0;
    }

    this.f = n.defaultValue;
  }

  function s() {
    this.a = {}, this.f = this.j().a, this.b = this.g = null;
  }

  function f(l, n) {
    for (var u = d(l.j()), t = 0; t < u.length; t++) {
      var e = u[t],
          r = e.b;

      if (null != n.a[r]) {
        l.b && delete l.b[e.b];
        var i = 11 == e.a || 10 == e.a;
        if (e.g) for (var e = p(n, r) || [], a = 0; a < e.length; a++) {
          var o = l,
              s = r,
              c = i ? e[a].clone() : e[a];
          o.a[s] || (o.a[s] = []), o.a[s].push(c), o.b && delete o.b[s];
        } else e = p(n, r), i ? (i = p(l, r)) ? f(i, e) : m(l, r, e.clone()) : m(l, r, e);
      }
    }
  }

  function p(l, n) {
    var u = l.a[n];
    if (null == u) return null;

    if (l.g) {
      if (!(n in l.b)) {
        var t = l.g,
            e = l.f[n];
        if (null != u) if (e.g) {
          for (var r = [], i = 0; i < u.length; i++) r[i] = t.b(e, u[i]);

          u = r;
        } else u = t.b(e, u);
        return l.b[n] = u;
      }

      return l.b[n];
    }

    return u;
  }

  function c(l, n, u) {
    var t = p(l, n);
    return l.f[n].g ? t[u || 0] : t;
  }

  function h(l, n) {
    var u;
    if (null != l.a[n]) u = c(l, n, void 0);else l: {
      if (u = l.f[n], void 0 === u.f) {
        var t = u.i;
        if (t === Boolean) u.f = !1;else if (t === Number) u.f = 0;else {
          if (t !== String) {
            u = new t();
            break l;
          }

          u.f = u.h ? "0" : "";
        }
      }

      u = u.f;
    }
    return u;
  }

  function g(l, n) {
    return l.f[n].g ? null != l.a[n] ? l.a[n].length : 0 : null != l.a[n] ? 1 : 0;
  }

  function m(l, n, u) {
    l.a[n] = u, l.b && (l.b[n] = u);
  }

  function b(l, n) {
    var u,
        t = [];

    for (u in n) 0 != u && t.push(new o(u, n[u]));

    return new a(l, t);
  }
  /*
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function y() {
    s.call(this);
  }

  function v() {
    s.call(this);
  }

  function S() {
    s.call(this);
  }

  function _() {}

  function w() {}

  function A() {}
  /*
  Copyright (C) 2010 The Libphonenumber Authors.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function x() {
    this.a = {};
  }

  function B(l) {
    return 0 == l.length || rl.test(l);
  }

  function C(l, n) {
    if (null == n) return null;
    n = n.toUpperCase();
    var u = l.a[n];

    if (null == u) {
      if (u = nl[n], null == u) return null;
      u = new A().a(S.j(), u), l.a[n] = u;
    }

    return u;
  }

  function M(l) {
    return l = ll[l], null == l ? "ZZ" : l[0];
  }

  function N(l) {
    this.H = RegExp(" "), this.C = "", this.m = new u(), this.w = "", this.i = new u(), this.u = new u(), this.l = !0, this.A = this.o = this.F = !1, this.G = x.b(), this.s = 0, this.b = new u(), this.B = !1, this.h = "", this.a = new u(), this.f = [], this.D = l, this.J = this.g = D(this, this.D);
  }

  function D(l, n) {
    var u;

    if (null != n && isNaN(n) && n.toUpperCase() in nl) {
      if (u = C(l.G, n), null == u) throw Error("Invalid region code: " + n);
      u = h(u, 10);
    } else u = 0;

    return u = C(l.G, M(u)), null != u ? u : il;
  }

  function G(l) {
    for (var n = l.f.length, u = 0; u < n; ++u) {
      var e = l.f[u],
          r = h(e, 1);
      if (l.w == r) return !1;
      var i;
      i = l;
      var a = e,
          d = h(a, 1);
      if (-1 != d.indexOf("|")) i = !1;else {
        d = d.replace(al, "\\d"), d = d.replace(dl, "\\d"), t(i.m);
        var o;
        o = i;
        var a = h(a, 2),
            s = "999999999999999".match(d)[0];
        s.length < o.a.b.length ? o = "" : (o = s.replace(new RegExp(d, "g"), a), o = o.replace(RegExp("9", "g"), " ")), 0 < o.length ? (i.m.a(o), i = !0) : i = !1;
      }
      if (i) return l.w = r, l.B = sl.test(c(e, 4)), l.s = 0, !0;
    }

    return l.l = !1;
  }

  function j(l, n) {
    for (var u = [], t = n.length - 3, e = l.f.length, r = 0; r < e; ++r) {
      var i = l.f[r];
      0 == g(i, 3) ? u.push(l.f[r]) : (i = c(i, 3, Math.min(t, g(i, 3) - 1)), 0 == n.search(i) && u.push(l.f[r]));
    }

    l.f = u;
  }

  function I(l, n) {
    l.i.a(n);
    var u = n;

    if (el.test(u) || 1 == l.i.b.length && tl.test(u)) {
      var e,
          u = n;
      "+" == u ? (e = u, l.u.a(u)) : (e = ul[u], l.u.a(e), l.a.a(e)), n = e;
    } else l.l = !1, l.F = !0;

    if (!l.l) {
      if (!l.F) if (F(l)) {
        if (U(l)) return V(l);
      } else if (0 < l.h.length && (u = l.a.toString(), t(l.a), l.a.a(l.h), l.a.a(u), u = l.b.toString(), e = u.lastIndexOf(l.h), t(l.b), l.b.a(u.substring(0, e))), l.h != P(l)) return l.b.a(" "), V(l);
      return l.i.toString();
    }

    switch (l.u.b.length) {
      case 0:
      case 1:
      case 2:
        return l.i.toString();

      case 3:
        if (!F(l)) return l.h = P(l), E(l);
        l.A = !0;

      default:
        return l.A ? (U(l) && (l.A = !1), l.b.toString() + l.a.toString()) : 0 < l.f.length ? (u = K(l, n), e = $(l), 0 < e.length ? e : (j(l, l.a.toString()), G(l) ? T(l) : l.l ? R(l, u) : l.i.toString())) : E(l);
    }
  }

  function V(l) {
    return l.l = !0, l.A = !1, l.f = [], l.s = 0, t(l.m), l.w = "", E(l);
  }

  function $(l) {
    for (var n = l.a.toString(), u = l.f.length, t = 0; t < u; ++t) {
      var e = l.f[t],
          r = h(e, 1);
      if (new RegExp("^(?:" + r + ")$").test(n)) return l.B = sl.test(c(e, 4)), n = n.replace(new RegExp(r, "g"), c(e, 2)), R(l, n);
    }

    return "";
  }

  function R(l, n) {
    var u = l.b.b.length;
    return l.B && 0 < u && " " != l.b.toString().charAt(u - 1) ? l.b + " " + n : l.b + n;
  }

  function E(l) {
    var n = l.a.toString();

    if (3 <= n.length) {
      for (var u = l.o && 0 == l.h.length && 0 < g(l.g, 20) ? p(l.g, 20) || [] : p(l.g, 19) || [], t = u.length, e = 0; e < t; ++e) {
        var r = u[e];
        0 < l.h.length && B(h(r, 4)) && !c(r, 6) && null == r.a[5] || (0 != l.h.length || l.o || B(h(r, 4)) || c(r, 6)) && ol.test(h(r, 2)) && l.f.push(r);
      }

      return j(l, n), n = $(l), 0 < n.length ? n : G(l) ? T(l) : l.i.toString();
    }

    return R(l, n);
  }

  function T(l) {
    var n = l.a.toString(),
        u = n.length;

    if (0 < u) {
      for (var t = "", e = 0; e < u; e++) t = K(l, n.charAt(e));

      return l.l ? R(l, t) : l.i.toString();
    }

    return l.b.toString();
  }

  function P(l) {
    var n,
        u = l.a.toString(),
        e = 0;
    return 1 != c(l.g, 10) ? n = !1 : (n = l.a.toString(), n = "1" == n.charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1)), n ? (e = 1, l.b.a("1").a(" "), l.o = !0) : null != l.g.a[15] && (n = new RegExp("^(?:" + c(l.g, 15) + ")"), n = u.match(n), null != n && null != n[0] && 0 < n[0].length && (l.o = !0, e = n[0].length, l.b.a(u.substring(0, e)))), t(l.a), l.a.a(u.substring(e)), u.substring(0, e);
  }

  function F(l) {
    var n = l.u.toString(),
        u = new RegExp("^(?:\\+|" + c(l.g, 11) + ")"),
        u = n.match(u);
    return null != u && null != u[0] && 0 < u[0].length && (l.o = !0, u = u[0].length, t(l.a), l.a.a(n.substring(u)), t(l.b), l.b.a(n.substring(0, u)), "+" != n.charAt(0) && l.b.a(" "), !0);
  }

  function U(l) {
    if (0 == l.a.b.length) return !1;
    var n,
        e = new u();

    l: {
      if (n = l.a.toString(), 0 != n.length && "0" != n.charAt(0)) for (var r, i = n.length, a = 1; 3 >= a && a <= i; ++a) if (r = parseInt(n.substring(0, a), 10), r in ll) {
        e.a(n.substring(a)), n = r;
        break l;
      }
      n = 0;
    }

    return 0 != n && (t(l.a), l.a.a(e.toString()), e = M(n), "001" == e ? l.g = C(l.G, "" + n) : e != l.D && (l.g = D(l, e)), l.b.a("" + n).a(" "), l.h = "", !0);
  }

  function K(l, n) {
    var u = l.m.toString();

    if (0 <= u.substring(l.s).search(l.H)) {
      var e = u.search(l.H),
          u = u.replace(l.H, n);
      return t(l.m), l.m.a(u), l.s = e, u.substring(0, l.s + 1);
    }

    return 1 == l.f.length && (l.l = !1), l.w = "", l.i.toString();
  }

  var Y = this;
  u.prototype.b = "", u.prototype.set = function (l) {
    this.b = "" + l;
  }, u.prototype.a = function (l, n, u) {
    if (this.b += String(l), null != n) for (var t = 1; t < arguments.length; t++) this.b += arguments[t];
    return this;
  }, u.prototype.toString = function () {
    return this.b;
  };
  var J = 1,
      L = 2,
      O = 3,
      H = 4,
      q = 6,
      X = 16,
      k = 18;
  s.prototype.set = function (l, n) {
    m(this, l.b, n);
  }, s.prototype.clone = function () {
    var l = new this.constructor();
    return l != this && (l.a = {}, l.b && (l.b = {}), f(l, this)), l;
  }, n(y, s);
  var Z = null;
  n(v, s);
  var z = null;
  n(S, s);
  var Q = null;
  y.prototype.j = function () {
    var l = Z;
    return l || (Z = l = b(y, {
      0: {
        name: "NumberFormat",
        I: "i18n.phonenumbers.NumberFormat"
      },
      1: {
        name: "pattern",
        required: !0,
        c: 9,
        type: String
      },
      2: {
        name: "format",
        required: !0,
        c: 9,
        type: String
      },
      3: {
        name: "leading_digits_pattern",
        v: !0,
        c: 9,
        type: String
      },
      4: {
        name: "national_prefix_formatting_rule",
        c: 9,
        type: String
      },
      6: {
        name: "national_prefix_optional_when_formatting",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      5: {
        name: "domestic_carrier_code_formatting_rule",
        c: 9,
        type: String
      }
    })), l;
  }, y.j = y.prototype.j, v.prototype.j = function () {
    var l = z;
    return l || (z = l = b(v, {
      0: {
        name: "PhoneNumberDesc",
        I: "i18n.phonenumbers.PhoneNumberDesc"
      },
      2: {
        name: "national_number_pattern",
        c: 9,
        type: String
      },
      9: {
        name: "possible_length",
        v: !0,
        c: 5,
        type: Number
      },
      10: {
        name: "possible_length_local_only",
        v: !0,
        c: 5,
        type: Number
      },
      6: {
        name: "example_number",
        c: 9,
        type: String
      }
    })), l;
  }, v.j = v.prototype.j, S.prototype.j = function () {
    var l = Q;
    return l || (Q = l = b(S, {
      0: {
        name: "PhoneMetadata",
        I: "i18n.phonenumbers.PhoneMetadata"
      },
      1: {
        name: "general_desc",
        c: 11,
        type: v
      },
      2: {
        name: "fixed_line",
        c: 11,
        type: v
      },
      3: {
        name: "mobile",
        c: 11,
        type: v
      },
      4: {
        name: "toll_free",
        c: 11,
        type: v
      },
      5: {
        name: "premium_rate",
        c: 11,
        type: v
      },
      6: {
        name: "shared_cost",
        c: 11,
        type: v
      },
      7: {
        name: "personal_number",
        c: 11,
        type: v
      },
      8: {
        name: "voip",
        c: 11,
        type: v
      },
      21: {
        name: "pager",
        c: 11,
        type: v
      },
      25: {
        name: "uan",
        c: 11,
        type: v
      },
      27: {
        name: "emergency",
        c: 11,
        type: v
      },
      28: {
        name: "voicemail",
        c: 11,
        type: v
      },
      29: {
        name: "short_code",
        c: 11,
        type: v
      },
      30: {
        name: "standard_rate",
        c: 11,
        type: v
      },
      31: {
        name: "carrier_specific",
        c: 11,
        type: v
      },
      33: {
        name: "sms_services",
        c: 11,
        type: v
      },
      24: {
        name: "no_international_dialling",
        c: 11,
        type: v
      },
      9: {
        name: "id",
        required: !0,
        c: 9,
        type: String
      },
      10: {
        name: "country_code",
        c: 5,
        type: Number
      },
      11: {
        name: "international_prefix",
        c: 9,
        type: String
      },
      17: {
        name: "preferred_international_prefix",
        c: 9,
        type: String
      },
      12: {
        name: "national_prefix",
        c: 9,
        type: String
      },
      13: {
        name: "preferred_extn_prefix",
        c: 9,
        type: String
      },
      15: {
        name: "national_prefix_for_parsing",
        c: 9,
        type: String
      },
      16: {
        name: "national_prefix_transform_rule",
        c: 9,
        type: String
      },
      18: {
        name: "same_mobile_and_fixed_line_pattern",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      19: {
        name: "number_format",
        v: !0,
        c: 11,
        type: y
      },
      20: {
        name: "intl_number_format",
        v: !0,
        c: 11,
        type: y
      },
      22: {
        name: "main_country_for_code",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      23: {
        name: "leading_digits",
        c: 9,
        type: String
      },
      26: {
        name: "leading_zero_possible",
        c: 8,
        defaultValue: !1,
        type: Boolean
      }
    })), l;
  }, S.j = S.prototype.j, _.prototype.a = function (l) {
    throw new l.b(), Error("Unimplemented");
  }, _.prototype.b = function (l, n) {
    if (11 == l.a || 10 == l.a) return n instanceof s ? n : this.a(l.i.prototype.j(), n);

    if (14 == l.a) {
      if ("string" == typeof n && W.test(n)) {
        var u = Number(n);
        if (0 < u) return u;
      }

      return n;
    }

    if (!l.h) return n;

    if (u = l.i, u === String) {
      if ("number" == typeof n) return String(n);
    } else if (u === Number && "string" == typeof n && ("Infinity" === n || "-Infinity" === n || "NaN" === n || W.test(n))) return Number(n);

    return n;
  };
  var W = /^-?[0-9]+$/;
  n(w, _), w.prototype.a = function (l, n) {
    var u = new l.b();
    return u.g = this, u.a = n, u.b = {}, u;
  }, n(A, w), A.prototype.b = function (l, n) {
    return 8 == l.a ? !!n : _.prototype.b.apply(this, arguments);
  }, A.prototype.a = function (l, n) {
    return A.M.a.call(this, l, n);
  };
  /*
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var ll = {
    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" ")
  },
      nl = {
    AG: [null, [null, null, "(?:268|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", null, null, null, "2684601234", null, null, null, [7]], [null, null, "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", null, null, null, "2684641234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, "26848[01]\\d{4}", null, null, null, "2684801234", null, null, null, [7]], "AG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "26840[69]\\d{4}", null, null, null, "2684061234", null, null, null, [7]], null, "268", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    AI: [null, [null, null, "(?:264|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "2644(?:6[12]|9[78])\\d{4}", null, null, null, "2644612345", null, null, null, [7]], [null, null, "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", null, null, null, "2642351234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "AI", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "264", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    AS: [null, [null, null, "(?:[58]\\d\\d|684|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "6846(?:22|33|44|55|77|88|9[19])\\d{4}", null, null, null, "6846221234", null, null, null, [7]], [null, null, "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", null, null, null, "6847331234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "AS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "684", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    BB: [null, [null, null, "(?:246|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", null, null, null, "2464123456", null, null, null, [7]], [null, null, "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", null, null, null, "2462501234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "(?:246976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002123456", null, null, null, [7]], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, "24631\\d{5}", null, null, null, "2463101234", null, null, null, [7]], "BB", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "246", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", null, null, null, "2464301234", null, null, null, [7]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    BM: [null, [null, null, "(?:441|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", null, null, null, "4412345678", null, null, null, [7]], [null, null, "441(?:[37]\\d|5[0-39])\\d{5}", null, null, null, "4413701234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "BM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "441", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    BS: [null, [null, null, "(?:242|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", null, null, null, "2423456789", null, null, null, [7]], [null, null, "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", null, null, null, "2423591234", null, null, null, [7]], [null, null, "(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}", null, null, null, "8002123456", null, null, null, [7]], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "BS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "242", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "242225[0-46-9]\\d{3}", null, null, null, "2422250123"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    CA: [null, [null, null, "(?:[2-8]\\d|90)\\d{8}", null, null, null, null, null, null, [10], [7]], [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]], [null, null, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, null, null, "5062345678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, "600[2-9]\\d{6}", null, null, null, "6002012345"], "CA", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    DM: [null, [null, null, "(?:[58]\\d\\d|767|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", null, null, null, "7674201234", null, null, null, [7]], [null, null, "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", null, null, null, "7672251234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "DM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "767", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    DO: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", null, null, null, "8092345678", null, null, null, [7]], [null, null, "8[024]9[2-9]\\d{6}", null, null, null, "8092345678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "DO", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "8[024]9", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    GD: [null, [null, null, "(?:473|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", null, null, null, "4732691234", null, null, null, [7]], [null, null, "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", null, null, null, "4734031234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "GD", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "473", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    GU: [null, [null, null, "(?:[58]\\d\\d|671|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]], [null, null, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", null, null, null, "6713001234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "GU", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "671", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    JM: [null, [null, null, "(?:[58]\\d\\d|658|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", null, null, null, "8765230123", null, null, null, [7]], [null, null, "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", null, null, null, "8762101234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "JM", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "658|876", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    KN: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", null, null, null, "8692361234", null, null, null, [7]], [null, null, "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", null, null, null, "8697652917", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "KN", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "869", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    KY: [null, [null, null, "(?:345|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", null, null, null, "3452221234", null, null, null, [7]], [null, null, "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", null, null, null, "3453231234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "(?:345976|900[2-9]\\d\\d)\\d{4}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "KY", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, "345849\\d{4}", null, null, null, "3458491234"], null, "345", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    LC: [null, [null, null, "(?:[58]\\d\\d|758|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", null, null, null, "7584305678", null, null, null, [7]], [null, null, "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", null, null, null, "7582845678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "LC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "758", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    MP: [null, [null, null, "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]], [null, null, "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", null, null, null, "6702345678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "MP", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "670", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    MS: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", null, null, null, null, null, null, [10], [7]], [null, null, "664491\\d{4}", null, null, null, "6644912345", null, null, null, [7]], [null, null, "66449[2-6]\\d{4}", null, null, null, "6644923456", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "MS", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "664", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    PR: [null, [null, null, "(?:[589]\\d\\d|787)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]], [null, null, "(?:787|939)[2-9]\\d{6}", null, null, null, "7872345678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "PR", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "787|939", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    SX: [null, [null, null, "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", null, null, null, null, null, null, [10], [7]], [null, null, "7215(?:4[2-8]|8[239]|9[056])\\d{4}", null, null, null, "7215425678", null, null, null, [7]], [null, null, "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", null, null, null, "7215205678", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002123456"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002123456"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "SX", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "721", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    TC: [null, [null, null, "(?:[58]\\d\\d|649|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "649(?:712|9(?:4\\d|50))\\d{4}", null, null, null, "6497121234", null, null, null, [7]], [null, null, "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", null, null, null, "6492311234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, "64971[01]\\d{4}", null, null, null, "6497101234", null, null, null, [7]], "TC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "649", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    TT: [null, [null, null, "(?:[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", null, null, null, "8682211234", null, null, null, [7]], [null, null, "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", null, null, null, "8682911234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "TT", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "868", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, "868619\\d{4}", null, null, null, "8686191234", null, null, null, [7]]],
    US: [null, [null, null, "[2-9]\\d{9}", null, null, null, null, null, null, [10], [7]], [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]], [null, null, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", null, null, null, "2015550123", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "US", 1, "011", "1", null, null, "1", null, null, 1, [[null, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]], [null, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], null, null, 1]], [[null, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]], [null, null, null, null, null, null, null, null, null, [-1]], 1, null, [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "710[2-9]\\d{6}", null, null, null, "7102123456"], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    VC: [null, [null, null, "(?:[58]\\d\\d|784|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", null, null, null, "7842661234", null, null, null, [7]], [null, null, "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", null, null, null, "7844301234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "VC", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "784", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    VG: [null, [null, null, "(?:284|[58]\\d\\d|900)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}", null, null, null, "2842291234", null, null, null, [7]], [null, null, "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}", null, null, null, "2843001234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "VG", 1, "011", "1", null, null, "1", null, null, null, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "284", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]],
    VI: [null, [null, null, "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", null, null, null, null, null, null, [10], [7]], [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]], [null, null, "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", null, null, null, "3406421234", null, null, null, [7]], [null, null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", null, null, null, "8002345678"], [null, null, "900[2-9]\\d{6}", null, null, null, "9002345678"], [null, null, null, null, null, null, null, null, null, [-1]], [null, null, "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", null, null, null, "5002345678"], [null, null, null, null, null, null, null, null, null, [-1]], "VI", 1, "011", "1", null, null, "1", null, null, 1, null, null, [null, null, null, null, null, null, null, null, null, [-1]], null, "340", [null, null, null, null, null, null, null, null, null, [-1]], [null, null, null, null, null, null, null, null, null, [-1]], null, null, [null, null, null, null, null, null, null, null, null, [-1]]]
  };

  x.b = function () {
    return x.a ? x.a : x.a = new x();
  };

  var ul = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
  },
      tl = RegExp("[+＋]+"),
      el = RegExp("([0-9０-９٠-٩۰-۹])"),
      rl = /^\(?\$1\)?$/,
      il = new S();
  m(il, 11, "NA");
  var al = /\[([^\[\]])*\]/g,
      dl = /\d(?=[^,}][^,}])/g,
      ol = RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),
      sl = /[- ]/;
  N.prototype.K = function () {
    this.C = "", t(this.i), t(this.u), t(this.m), this.s = 0, this.w = "", t(this.b), this.h = "", t(this.a), this.l = !0, this.A = this.o = this.F = !1, this.f = [], this.B = !1, this.g != this.J && (this.g = D(this, this.D));
  }, N.prototype.L = function (l) {
    return this.C = I(this, l);
  }, l("Cleave.AsYouTypeFormatter", N), l("Cleave.AsYouTypeFormatter.prototype.inputDigit", N.prototype.L), l("Cleave.AsYouTypeFormatter.prototype.clear", N.prototype.K);
}.call("object" == typeof global && global ? global : window);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_0_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_0_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_12_0_Input_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".uWior{position:relative}._0WNxQ{bottom:4px;left:4px;position:absolute;z-index:1}._0WNxQ~.Jrn0p{padding-left:40px}.Jrn0p{border-radius:3px;border-style:solid;border-width:1px;box-sizing:border-box;font-size:14px;height:40px;outline:none;padding:0 16px;transition:border .3s,box-shadow .3s ease-in;width:100%}.Jrn0p[type=password]{font-size:16px;letter-spacing:4px}.Jrn0p:focus{cursor:text}.Jrn0p:focus+.XFzeD{visibility:visible}.XFzeD{font-size:0;height:32px;position:absolute;right:4px;top:4px;transition:visibility 0s .7s;visibility:hidden;z-index:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "uWior",
	"icon": "_0WNxQ",
	"input": "Jrn0p",
	"iconClear": "XFzeD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./pages/index.vue?vue&type=template&id=14e3fb38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Content',{attrs:{"max-width":"624","padding-left":"24","padding-right":"24"}},[_c('Input',{attrs:{"bg":"black","color":"white","holder":"Buscar","icon":"search","margin-bottom":"16","margin-top":"24"}}),_vm._v(" "),_c('Flex',{attrs:{"gap":"24","space-between":""}},_vm._l((_vm.apps),function($,i){return _c('a',{key:i,attrs:{"href":$.to,"target":"_self"}},[_c('Grid',[_c('Img',{attrs:{"center":"","fit-css":"cover","is-round":"","margin-bottom":"8","src":$.icon,"title":$.name,"height":"64","width":"64"}}),_vm._v(" "),_c('Label',{attrs:{"center":"","color":"white"}},[_vm._v(_vm._s($.name))])],1)],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=14e3fb38&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--12-0!./pages/index.vue?vue&type=script&lang=js&
//
//

const title = 'SAC Cloud';
const description = 'Plataforma de utilidades SAC Cloud';
const ogImage = 'https://www.saccloud.co/ogImage/index.png';
const keywords = 'Plataforma, utilidades, SAC, Cloud';
const canonical = `https://www.saccloud.co`;
const __sfc_main = {
  head: {
    title,
    meta: [{
      hid: 'description',
      name: 'description',
      content: description
    }, {
      hid: 'keywords',
      name: 'keywords',
      content: keywords
    }, {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title
    }, {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: ogImage
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    }, {
      hid: 'og:title',
      name: 'og:title',
      content: title
    }, {
      hid: 'og:description',
      name: 'og:description',
      content: description
    }, {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: title
    }, {
      hid: 'og:image',
      property: 'og:image',
      content: ogImage
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: canonical
    }, {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: '1200'
    }, {
      hid: 'og:image:height ',
      property: 'og:image:height ',
      content: '630'
    }],
    link: [{
      hid: 'canonical',
      rel: 'canonical',
      href: canonical
    }]
  }
};

__sfc_main.setup = (__props, __ctx) => {
  const {
    $axios
  } = Object(runtime["i" /* useContext */])();
  const apps = Object(runtime["f" /* ref */])(); // fetch

  Object(runtime["j" /* useFetch */])(async () => {
    try {
      apps.value = await $axios.$get('/@/apps/index/v1');
    } catch (e) {
      console.log(e);
    }
  });
  return {
    apps
  };
};

/* harmony default export */ var transform_ref_12_0_pagesvue_type_script_lang_js_ = (__sfc_main);
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (transform_ref_12_0_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ffeee46"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(145).default,Img: __webpack_require__(11).default,Label: __webpack_require__(25).default,Grid: __webpack_require__(52).default,Flex: __webpack_require__(173).default,Content: __webpack_require__(54).default})


/***/ })

};;
//# sourceMappingURL=index.js.map