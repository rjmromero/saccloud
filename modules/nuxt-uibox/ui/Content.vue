<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSColor, CSSMax, CSSMin, CSSPadding } from "../useCSS"

export default {
  props: {
    bg: { type: String },
    maxHeight: { type: String },
    maxWidth: { type: String },
    minHeight: { type: String },
    minWidth: { type: String },
    noCenter: { type: Boolean },
    padding: { type: String },
    paddingBottom: { type: String },
    paddingLeft: { type: String },
    paddingRight: { type: String },
    paddingTop: { type: String },
    tag: { type: String, default: 'div' },
    wh: { type: String }
  },
  setup(props) {
    const CSS = computed(() => {
      let root = {}
      if (!!props.bg) root[CSSColor['bgColor_' + props.bg]] = props.bg
      if (!!props.wh || !!props.maxHeight) root[CSSMax['height_' + (props.wh || props.maxHeight)]] = true
      root[CSSMax['width_' + (props.wh || props.maxWidth || '1152')]] = true
      root[CSSMin['height_' + (props.wh || props.minHeight || '32')]] = true
      root[CSSMin['width_' + (props.wh || props.minWidth || '192')]] = true
      if (!!props.padding) root[CSSPadding['all_' + (props.padding || '8')]] = true
      if (!props.padding && !!props.paddingBottom) root[CSSPadding['bottom_' + props.paddingBottom]] = true
      if (!props.padding && !!props.paddingLeft) root[CSSPadding['left_' + props.paddingLeft]] = true
      if (!props.padding && !!props.paddingRight) root[CSSPadding['right_' + props.paddingRight]] = true
      if (!props.padding && !!props.paddingTop) root[CSSPadding['top_' + props.paddingTop]] = true
      return { root }
    })

    return {
      CSS
    }
  }
}
</script>

<template>
  <Component :is="$props.tag" :class="[$style.root, {[$style['root--no-center']]: $props.noCenter }, CSS.root]" v-bind="$attrs"><slot/></Component>
</template>


<style module>
.root {
  margin: 0 auto;
  position: relative;
} .root--no-center {
  margin: 0;
}
</style>
