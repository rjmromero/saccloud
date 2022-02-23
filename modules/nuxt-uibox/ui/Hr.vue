<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSColor, CSSMargin } from "../useCSS"

export default {
  props: {
    color: { type: String, default: 'graylight' }
  },

  setup(props) {
    const CSS = computed(() => {
      return {
        root: {
          [CSSColor['bgColor_' + props.color]]: true,
          [CSSMargin['bottom_16']]: true,
          [CSSMargin['top_16']]: true
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
  <div :class="[$style.root, CSS.root]"></div>
</template>


<style module>
.root {
  height: 1px;
  width: 100%;
}
</style>
