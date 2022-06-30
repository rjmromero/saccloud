<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSFlex, CSSJustify } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    alignItems: { type: String },
    center: { type: Boolean },
    columns: { type: String },
    end: { type: Boolean },
    gap: { type: String },
    justifySelf: { type: String },
    spaceBetween: { type: Boolean },
    tag: { type: String, default: 'div' }
  },

  setup(props) {
    const CSS = computed(() => {
      return {
        root: {
          [CSSAlign['self_' + props.alignSelf]]: !!props.alignSelf,
          [CSSFlex['root']]: true,
          [CSSFlex['alignItems_' + props.alignItems]]: props.alignItems,
          [CSSFlex['center']]: !!props.center,
          [CSSFlex['columns_' + props.columns]]: !props.autoFill ? props.columns : false,
          [CSSFlex['end']]: props.end,
          [CSSFlex['gap_' + props.gap]]: props.gap,
          [CSSFlex['spaceBetween']]: props.spaceBetween,
          [CSSJustify['self_' + props.justifySelf]]: !!props.justifySelf
        }
      }
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
