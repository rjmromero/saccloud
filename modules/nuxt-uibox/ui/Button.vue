<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSCenter, CSSColor, CSSDisabled, CSSJustify, CSSMargin, CSSPadding, CSSRound, CSSTransform } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String, default: 'primary' },
    brColor: { type: String, default: 'primary' },
    brStyle: { type: String, default: 'solid' },
    bsHover: { type: String, default: 'primary' },
    center: { type: Boolean },
    color: { type: String, default: 'white' },
    disabled: { type: Boolean },
    href: { type: String },
    isCompact: { type: Boolean },
    isFill: { type: Boolean },
    isRound: { type: Boolean },
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
    paddingTop: { type: String, default: '8' },
    target: { type: String },
    to: { type: String }
  },
  setup(props) {
    const CSS = computed(() => {
      let root = {}
      let button = {}

      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (props.center) root[CSSCenter.text] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
      if (!!props.bg) button[CSSColor['bgColor_' + props.bg]] = true
      if (!!props.brColor) button[CSSColor['brColor_' + props.brColor]] = true
      if (!props.disabled && !!props.bsHover) button[CSSColor['bsHoverColor_' + props.bsHover]] = true
      if (!!props.color) button[CSSColor['color_' + props.color]] = true
      if (!!props.margin) button[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) button[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) button[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) button[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) button[CSSMargin['top_' + props.marginTop]] = true
      if (!!props.padding) button[CSSPadding['all_' + props.padding]] = true
      if (!props.padding && !!props.paddingBottom) button[CSSPadding['bottom_' + props.paddingBottom]] = true
      if (!props.padding && !!props.paddingLeft) button[CSSPadding['left_' + props.paddingLeft]] = true
      if (!props.padding && !!props.paddingRight) button[CSSPadding['right_' + props.paddingRight]] = true
      if (!props.padding && !!props.paddingTop) button[CSSPadding['top_' + props.paddingTop]] = true
      if (props.isRound) button[CSSRound.total] = true
      if (props.isCompact) button[CSSTransform.compact] = true
      if (props.isFill) button[CSSTransform.fill] = true
      if (props.disabled) button[CSSDisabled.disabled] = true

      return {
        root,
        button
      }
    })

    return {
      CSS
    }
  }
}
</script>

<template>
  <div :class="[CSS.root]">
    <Component :class="[$style.a, {[$style['a--is-fill']]: $props.isFill}]" :is="$props.href ? 'a' : $props.to ? 'nuxt-link' : 'div'" :href="$props.href" :rel="$props.href ? 'noreferrer noopener' : false" :target="$props.href ? ($props.target || '_blank') : false" :to="$props.to">
      <button @click="$props.disabled ? ()=>{} : $emit('click')" :class="[$style.button, [$style['button--style-' + $props.brStyle]], CSS.button]">
        <slot/>
      </button>
    </Component>
  </div>
</template>


<style module>
.a {
  display: inline-block
}.a--is-fill {
  display: block;
}

.button {
  border-radius: 3px;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  height: 40px;
  outline: none;
  padding: 0 16px;
  transition: box-shadow .3s ease-in, opacity .3s;
} .button--style-solid {
  border-style: solid;
} .button--style-dashed {
  border-style: dashed;
} .button--style-dotted {
  border-style: dotted;
}
</style>
