<script>
import { computed, useRoute } from "@nuxtjs/composition-api"
import { CSSCenter } from "../useCSS"

export default {
  props: {
    bg: { type: String },
    bgActive: { type: String, default: 'secondary' },
    bgHover: { type: String, default: 'gray' },
    center: { type: Boolean },
    color: { type: String, default: 'black' },
    items: { type: Array },
    linkExact: { type: Boolean }
  },

  setup(props) {
    const $route = useRoute()

    const CSS = computed(() => {
      const root = {}

      if (props.center) root[CSSCenter.text] = true
      return { root }
    })

    const isExact = computed(() => {
      return ($) => {
       return props.linkExact ? ($route.value.fullPath === $.to) : ($route.value.path.indexOf($.to) >= 0)
      }
    })

    return {
      CSS,
      isExact
    }
  }
}
</script>

<template>
  <div :class="[$style.root, CSS.root]">
    <div v-for="($, i) in $props.items" :class="[$style.root__option, { [$style['root__option--disabled']]: $.disabled }]" :key="i">
      <NuxtLink :class="{ [$style['root__option__box--disabled']]: isExact($) ? $.disabled : (isExact($) || $.disabled) }" :to="$.to">
        <Grid align-items="center" :columns="$.icon ? 'max_auto' : null">
          <Icon v-if="isExact($) && $.icon" :bg="$props.bgActive" :color="$props.color" :name="$.icon.name" size="18"/>
          <Icon v-else-if="$.icon" :bg="$props.bg" :color="$props.color" :name="$.icon.name" size="18"/>
          <Label v-if="isExact($)" :bg="$props.bgActive" :color="$props.color" no-events padding-bottom="8" :padding-left="$.icon ? '8' : '16'" padding-right="16" padding-top="8">{{ $.text }}</Label>
          <Label v-else :bg="$props.bg" :bg-hover="$props.bgHover" :color="$props.color" padding-bottom="8" :padding-left="$.icon ? '8' : '16'" padding-right="16" padding-top="8">{{ $.text }}</Label>
        </Grid>
      </NuxtLink>
    </div>
  </div>
</template>

<style module>
.root {
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0;
  scroll-behavior: smooth;
  white-space: nowrap;
} .root::-webkit-scrollbar {
  display: none;
}

.root__option {
  border-radius: 8px;
  display: inline-block;
  height: 34px;
  margin-left: 8px;
  overflow: hidden;
} .root__option--disabled {
  cursor: not-allowed;
  opacity: .72;
} .root__option__box--disabled {
  pointer-events: none;
}

.root__option:first-child {
  margin-left: 24px;
}
</style>
