<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSCenter, CSSColor, CSSDisabled, CSSJustify, CSSMargin, CSSPadding, CSSRound } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String },
    bgHover: { type: String },
    bsHover: { type: String },
    bsFocus: { type: String },
    brColor: { type: String },
    brColorHover: { type: String },
    brColorFocus: { type: String },
    brRadius: { type: String },
    disabled: { type: Boolean },
    floating: { type: Boolean },
    isHiden: { type: Boolean },
    justifySelf: { type: String },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    padding: { type: String },
    paddingBottom: { type: String, default: '8' },
    paddingLeft: { type: String, default: '8' },
    paddingRight: { type: String, default: '8' },
    paddingTop: { type: String, default: '8' }
  },
  setup(props) {
    const CSS = computed(() => {
      const root = {}
      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (props.center) root[CSSCenter.text] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
      if (!props.disabled && !!props.bg) root[CSSColor['bgColor_' + props.bg]] = true
      if (!props.disabled && !!props.brColor) root[CSSColor['brColor_' + props.brColor]] = true
      if (!props.disabled && !!props.bgHover) root[CSSColor['bgHoverColor_' + props.bgHover]] = true
      if (!props.disabled && (!!props.brColorHover || !!props.hover)) root[CSSColor['brHoverColor_' + (props.brColorHover || props.hover)]] = true
      if (!props.disabled && !!props.brColorFocus) root[CSSColor['brFocusColor_' + props.brColorFocus]] = true
      if (!props.disabled && (!!props.bsHover || !!props.hover)) root[CSSColor['bsHoverColor_' + (props.bsHover || props.hover)]] = true
      if (!props.disabled && !!props.bsFocus) root[CSSColor['bsFocusColor_' + props.bsFocus]] = true
      if (!!props.margin) root[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) root[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) root[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) root[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) root[CSSMargin['top_' + props.marginTop]] = true
      if (!!props.padding) root[CSSPadding['all_' + props.padding]] = true
      if (!props.padding && !!props.paddingBottom) root[CSSPadding['bottom_' + props.paddingBottom]] = true
      if (!props.padding && !!props.paddingLeft) root[CSSPadding['left_' + props.paddingLeft]] = true
      if (!props.padding && !!props.paddingRight) root[CSSPadding['right_' + props.paddingRight]] = true
      if (!props.padding && !!props.paddingTop) root[CSSPadding['top_' + props.paddingTop]] = true
      if (!!props.brRadius) root[CSSRound['all_' + props.brRadius]] = true
      if (props.disabled) root[CSSDisabled.disabled] = true
      return { root }
    })

    return {
      CSS
    }
  }
}

</script>

<template>
  <ul :class="[$style.root, CSS.root, { [$style.border]: !!$props.brColor, [$style['border--hf']]: !!$props.brColorHover || !!$props.brColorFocus, [$style['root--floating']]: $props.floating, [$style['root--is-hiden']]: $props.isHiden }]" tabindex="0">
    <slot/>
  </ul>
</template>


<style module>
.root {
  border-radius: 3px;
  margin: 0;
  max-height: 240px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px 0;
  transition: background .3s, border .3s, box-shadow .3s ease-in, opacity .3s, margin .3s;
} .root--floating {
  margin-top: 8px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 4;
} .root--is-hiden {
  /* floating */
  margin-top: -8px;
  /* --- */
  opacity: 0;
  pointer-events: none;
}

.border, .border--hf {
  border-style: solid;
  border-width: 1px;
}
.border--hf {
  border-color: transparent;
}
</style>
