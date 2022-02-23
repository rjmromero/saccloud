<script>
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSColor, CSSDisabled, CSSJustify, CSSMargin, CSSRound } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String },
    bgHover: { type: String, default: 'accent' },
    brColor: { type: String },
    brRadius: { type: [String, Number, Boolean], default: '4' },
    color: { type: String, default: 'black' },
    disabled: { type: Boolean },
    href: { type: String },
    icon: { type: String },
    justifySelf: { type: String },
    label: { type: Object },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    target: { type: String },
    to: { type: String }
  },

  setup(props) {
    const CSS = computed(() => {
      const root = {}
      const li = {}
    
      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
    
      if (!!props.bg) li[CSSColor['bgColor_' + props.bg]] = true
      if (!props.disabled && !!props.bgHover) li[CSSColor['bgHoverColor_' + props.bgHover]] = true
      if (!!props.brColor) li[CSSColor['brColor_' + props.brColor]] = true
      if (!!props.color) li[CSSColor['color_' + props.color]] = true
      if (!!props.margin) li[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) li[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) li[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) li[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) li[CSSMargin['top_' + props.marginTop]] = true
      if (props.disabled) li[CSSDisabled.disabled] = true
      if (!!props.brRadius) li[CSSRound['all_' + props.brRadius]] = true
    
      return { root, li }
    })

    return {
      CSS
    }
  }
}

</script>

<template>
  <div :class="[CSS.root]">
    <Component :class="[$style.li, CSS.li]" @click="$props.disabled ? ()=>{} : $emit('click')" :is="$props.disabled ? 'li' : $props.href ? 'a' : $props.to ? 'nuxt-link' : 'li'" :href="$props.href" :rel="$props.href ? 'noreferrer noopener' : false" :target="$props.href ? ($props.target || '_blank') : false" :to="$props.to">
      <Component align-items="center" columns="max_1fr" gap="16" :is="$props.icon ? 'Grid' : 'div'">
        <Component v-if="$props.icon" :is="'icons-uil-' + $props.icon" size="16"/>
        <Grid align-items="center" columns="1fr_max">
          <P :color="$props.color" is-small padding-bottom="8" padding-top="8"><slot/></P>
          <Label v-if="$props.label" :bg="$props.label.bg" br-radius="4" :color="$props.label.color" is-small padding-left="8" padding-right="8" style="opacity: .72">{{ $props.label.text }}</Label>
        </Grid>
      </Component>
    </Component>
  </div>
</template>

<style module>
.li {
  max-height: 40px;
  padding: 2px 16px;
  transition: background .3s border .3s;
}
</style>
