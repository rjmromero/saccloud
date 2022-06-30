<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSCenter, CSSColor, CSSFont, CSSMargin, CSSPadding, CSSRound, CSSTransform } from "../useCSS"

export default {
  props: {
    bg: { type: String },
    bgHover: { type: String },
    brRadius: { type: String },
    center: { type: Boolean },
    color: { type: String, default: 'black' },
    isSmall: { type: Boolean },
    isUpper: { type: Boolean },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    padding: { type: String },
    paddingBottom: { type: String },
    paddingLeft: { type: String },
    paddingRight: { type: String },
    paddingTop: { type: String }
  },

  setup(props) {
    
    const CSS = computed(() => {
      const root = {}
    
      if (props.center) root[CSSCenter.text] = true
      if (!!props.bg) root[CSSColor['bgColor_' + props.bg]] = true
      if (!!props.bgHover) root[CSSColor['bgHoverColor_' + props.bgHover]] = true
      if (!!props.brRadius) root[CSSRound['all_' + props.brRadius]] = true
      if (!!props.color) root[CSSColor['color_' + props.color]] = true
      root[CSSFont[props.isSmall ? 'size_9' : 'size_12']] = true
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
      if (props.isUpper) root[CSSTransform.upper] = true
    
      return { root }
    })
    return {
      CSS
    }
  }
}
</script>

<template>
  <label :class="[$style.root, CSS.root]"><slot/></label>
</template>


<style module>
.root {
  cursor: inherit;
  display: block;
  letter-spacing: .3px;
  line-height: 1.5;
  transition: background .3s;
  word-break: break-word;
  white-space: break-spaces;
} .root * {
  display: inline;
  font-size: inherit;
}
</style>
