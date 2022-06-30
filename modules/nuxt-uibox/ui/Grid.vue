<script>
// OK
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSColor, CSSJustify, CSSGap, CSSGrid } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    alignItems: { type: String },
    autoFill: { type: String },
    bg: { type: String },
    columns: { type: String },
    gap: { type: [String, Number] },
    justify: { type: String },
    spaceBetween: { type: Boolean },
    tag: { type: String, default: 'div' }
  },
  setup(props) {
    const CSS = computed(() => {
      let root = {}
      root[CSSGrid['root']] = true
      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = props.alignSelf
      if (!!props.alignItems) root[CSSAlign['items_' + props.alignItems]] = props.alignItems
      if (!!props.bg) root[CSSColor['bgColor_' + props.bg]] = props.bg
      if (!props.columns ? !!props.autoFill : false) root[CSSGrid['autoFill_' + props.autoFill]] = props.autoFill
      if (!!props.justify) root[CSSJustify['content_' + props.justify]] = props.justify
      if (!props.autoFill ? !!props.columns : false) root[CSSGrid['columns_' + props.columns]] = props.columns
      if (!!props.gap) root[CSSGap['root_' + props.gap]] = props.gap
      if (props.spaceBetween) root[CSSGrid['spaceBetween']] = props.spaceBetween
      return { root }
    })

    return {
      CSS
    }
  }
}
</script>

<template>
  <Component v-bind="$attrs" :class="CSS.root" :is="$props.tag">
    <slot/>
  </Component>
</template>
