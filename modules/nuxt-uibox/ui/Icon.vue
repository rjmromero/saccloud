<script>
// OK
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSCenter, CSSColor, CSSDisabled, CSSJustify, CSSMargin, CSSPadding, CSSRound } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String },
    bgHover: { type: String },
    bsHover: { type: String },
    brColor: { type: String },
    brColorHover: { type: String },
    brRadius: { type: [String, Number] },
    center: { type: Boolean },
    color: { type: String, default: 'black' },
    disabled: { type: Boolean },
    hover: { type: String },
    href: { type: String },
    isRound: { type: Boolean },
    justifySelf: { type: String },
    name: { type: String, default: 'times' },
    margin: { type: [String, Number, Boolean] },
    marginBottom: { type: [String, Number, Boolean] },
    marginLeft: { type: [String, Number, Boolean] },
    marginRight: { type: [String, Number, Boolean] },
    marginTop: { type: [String, Number, Boolean] },
    padding: { type: [String, Number, Boolean] },
    paddingBottom: { type: [String, Number, Boolean], default: '8' },
    paddingLeft: { type: [String, Number, Boolean], default: '8' },
    paddingRight: { type: [String, Number, Boolean], default: '8' },
    paddingTop: { type: [String, Number, Boolean], default: '8' },
    size: { type: [String, Number], default: '24' },
    target: { type: String, default: '_blank' },
    to: { type: String }
  },

  setup(props) {
    const CSS = computed(() => {
      const root = {}
      const svg = {}
      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (props.center) root[CSSCenter.text] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
      if (!props.disabled && !!props.bg) svg[CSSColor['bgColor_' + props.bg]] = true
      if (!props.disabled && !!props.brColor) svg[CSSColor['brColor_' + props.brColor]] = true
      if (!props.disabled && !!props.bgHover) svg[CSSColor['bgHoverColor_' + props.bgHover]] = true
      if (!props.disabled && (!!props.brColorHover || !!props.hover)) svg[CSSColor['brHoverColor_' + (props.brColorHover || props.hover)]] = true
      if (!props.disabled && (!!props.bsHover || !!props.hover)) svg[CSSColor['bsHoverColor_' + (props.bsHover || props.hover)]] = true
      if (!!props.color) svg[CSSColor['color_' + props.color]] = true
      if (!!props.margin) svg[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) svg[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) svg[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) svg[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) svg[CSSMargin['top_' + props.marginTop]] = true
      if (!!props.padding) svg[CSSPadding['all_' + props.padding]] = true
      if (!props.padding && !!props.paddingBottom) svg[CSSPadding['bottom_' + props.paddingBottom]] = true
      if (!props.padding && !!props.paddingLeft) svg[CSSPadding['left_' + props.paddingLeft]] = true
      if (!props.padding && !!props.paddingRight) svg[CSSPadding['right_' + props.paddingRight]] = true
      if (!props.padding && !!props.paddingTop) svg[CSSPadding['top_' + props.paddingTop]] = true
      if (props.isRound) svg[CSSRound.total] = true
      if (!!props.brRadius) svg[CSSRound['all_' + props.brRadius]] = true
      if (props.disabled) svg[CSSDisabled.disabled] = true
      return { root, svg }
    })

    return {
      CSS
    }
  }
}
</script>

<template>
  <div :class="CSS.root">
    <Component :class="[$style.svg, CSS.svg, { [$style.border]: !!$props.brColor }]" @click="$props.disabled ? ()=>{} : $emit('click')" :is="$props.href ? 'a' : $props.to ? 'nuxt-link' : 'div'" :href="$props.href" :rel="$props.href ? 'noreferrer noopener' : false" :target="$props.href ? $props.target : false" :to="$props.to">
      <Component :is="'Icons-uil-' + $props.name" :size="String($props.size)"/>
    </Component>
  </div>
</template>

<style module>
.svg {
  box-sizing: content-box;
  display: inline-block;
  font-size: 0;
  position: relative;
  transition: background .3s, box-shadow .3s, border .3s;
  z-index: 1;
}

.border {
  border-style: solid;
  border-width: 1px;
}
</style>
