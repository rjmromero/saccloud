<script>
// OK
import { computed } from "@nuxtjs/composition-api"
import { CSSColor, CSSPadding, CSSRound } from "../useCSS"

export default {
  props: {
    all: { type: String },
    bg: { type: String },
    bottom: { type: [String, Boolean], default: '24' },
    brRadius: { type: String },
    left: { type: [String, Boolean], default: '24' },
    right: { type: [String, Boolean], default: '24' },
    tag: { type: [String, Boolean], default: 'div' },
    top: { type: [String, Boolean], default: '24' }
  },

  setup(props) {
    const CSS = computed(() => {
      const root = {}
      if (!!props.all) root[CSSPadding['all_' + props.all]] = true
      if (!!props.bg) root[CSSColor['bgColor_' + props.bg]] = props.bg
      if (!!props.brRadius) root[CSSRound['all_' + props.brRadius]] = true
      if (!props.all && !!props.bottom) root[CSSPadding['bottom_' + props.bottom]] = true
      if (!props.all && !!props.left) root[CSSPadding['left_' + props.left]] = true
      if (!props.all && !!props.right) root[CSSPadding['right_' + props.right]] = true
      if (!props.all && !!props.top) root[CSSPadding['top_' + props.top]] = true
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
