<script>
// OK
import { computed } from "@nuxtjs/composition-api"
import { CSSColor, CSSMargin } from "../useCSS"

export default {
  props: {
    all: { type: [String, Number] },
    bg: { type: String },
    bottom: { type: [String, Number, Boolean], default: '24' },
    left: { type: [String, Number, Boolean], default: '24' },
    right: { type: [String, Number, Boolean], default: '24' },
    tag: { type: String, default: 'div' },
    top: { type: [String, Number, Boolean], default: '24' }
  },

  setup(props) {
    const CSS = computed(() => {
      const root = {}
      if (!!props.all) root[CSSMargin['all_' + props.all]] = props.all
      if (!!props.bg) root[CSSColor['bgColor_' + props.bg]] = props.bg
      if (!props.all && !!props.bottom) root[CSSMargin['bottom_' + props.bottom]] = props.bottom
      if (!props.all && !!props.left) root[CSSMargin['left_' + props.left]] = props.left
      if (!props.all && !!props.right) root[CSSMargin['right_' + props.right]] = props.right
      if (!props.all && !!props.top) root[CSSMargin['top_' + props.top]] = props.top
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
