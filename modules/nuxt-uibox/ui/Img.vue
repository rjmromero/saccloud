<script>
// OK
import { computed } from "@nuxtjs/composition-api"
import { CSSAlign, CSSCenter, CSSColor, CSSJustify, CSSMargin, CSSMax, CSSMin, CSSPadding, CSSRound, CSSTransform } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    brColor: { type: String },
    bg: { type: String },
    brRadius: { type: [String, Number] },
    center: { type: Boolean },
    fit: { type: String },
    fitCss: { type: String },
    height: { type: [String, Number] },
    href: { type: String },
    inline: { type: Boolean },
    isFill: { type: Boolean },
    isRound: { type: Boolean },
    justifySelf: { type: String },
    margin: { type: [String, Number] },
    marginBottom: { type: [String, Number] },
    marginLeft: { type: [String, Number] },
    marginRight: { type: [String, Number] },
    marginTop: { type: [String, Number] },
    maxHeight: { type: [String, Number] },
    maxWidth: { type: [String, Number] },
    minHeight: { type: [String, Number] },
    minWidth: { type: [String, Number] },
    lazy: { type: Boolean },
    padding: { type: [String, Number] },
    paddingBottom: { type: [String, Number] },
    paddingLeft: { type: [String, Number] },
    paddingRight: { type: [String, Number] },
    paddingTop: { type: [String, Number] },
    preset: { type: String },
    sizes: { type: String },
    src: { type: String, default: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='96px' height='96px' viewBox='0 0 96 96' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L96 0L96 96L0 96L0 0Z' id='Rectangle' fill='%23F2F2F2' fill-opacity='0.8784314' fill-rule='evenodd' stroke='none' /%3E%3C/svg%3E" },
    target: { type: String },
    to: { type: String },
    width: { type: [String, Number] },
    wh: { type: [String, Number] },
    //
    src2: { type: Object, default: () => { return { isError: false, url: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='96px' height='96px' viewBox='0 0 96 96' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L96 0L96 96L0 96L0 0Z' id='Rectangle' fill='%23F2F2F2' fill-opacity='0.8784314' fill-rule='evenodd' stroke='none' /%3E%3C/svg%3E" } } },
  },

  setup(props) {
    const CSS = computed(() => {
      const root = {}
      const img = {}
    
      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (props.center) root[CSSCenter.text] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
    
      if (!!props.brColor) img[CSSColor['brColor_' + props.brColor]] = true
      if (!!props.bg) img[CSSColor['bgColor_' + props.bg]] = props.bg
      if (!!props.margin) img[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) img[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) img[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) img[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) img[CSSMargin['top_' + props.marginTop]] = true
      if (!!props.wh || !!props.maxHeight) img[CSSMax['height_' + (props.wh || props.maxHeight)]] = true
      if (!!props.wh || !!props.maxWidth) img[CSSMax['width_' + (props.wh || props.maxWidth)]] = true
      if (!!props.wh || !!props.minHeight) img[CSSMin['height_' + (props.wh || props.minHeight)]] = true
      if (!!props.wh || !!props.minWidth) img[CSSMin['width_' + (props.wh || props.minWidth)]] = true
      if (!!props.padding) img[CSSPadding['all_' + props.padding]] = true
      if (!props.padding && !!props.paddingBottom) img[CSSPadding['bottom_' + props.paddingBottom]] = true
      if (!props.padding && !!props.paddingLeft) img[CSSPadding['left_' + props.paddingLeft]] = true
      if (!props.padding && !!props.paddingRight) img[CSSPadding['right_' + props.paddingRight]] = true
      if (!props.padding && !!props.paddingTop) img[CSSPadding['top_' + props.paddingTop]] = true
      if (props.isRound) img[CSSRound.total] = true
      if (!!props.brRadius) img[CSSRound['all_' + props.brRadius]] = true
      if (props.isFill) img[CSSTransform.fill] = true
    
      return { root, img }
    })

    return {
      CSS
    }
  }
}
</script>

<template>
  <div :class="[{[$style['root--inline']]: $props.inline}, CSS.root]">
    <Component @click.stop="$props.to || $props.href ? ()=>{} : $emit('click')" :class="$style.a" :is="$props.href ? 'a' : $props.to ? 'nuxt-link' : 'div'" :href="$props.href" :rel="$props.href ? 'noreferrer noopener' : false" :target="$props.href ? ($props.target || '_blank') : false" :to="$props.to">
      <img v-if="$props.src ? $props.src.indexOf('blob:') >= 0 ? true : false : false" :class="[$style.img, { [$style.border]: !!$props.brColor }, CSS.img]" :src="$props.src">
      <NuxtImg
        v-else
        @error.native="$props.src2.isError = true"
        :class="[$style.img, {[$style['img--fit-' + $props.fitCss]]: $props.fitCss}, { [$style.border]: !!$props.brColor }, CSS.img]"
        :height="$props.wh || $props.height"
        :fit="$props.fit"
        :loading="$props.lazy ? 'lazy' : null"
        :preset="$props.preset"
        :sizes="$props.sizes"
        :src="$props.src2.isError ? $props.src2.url : ($props.src || $props.src2.url)"
        :width="$props.wh || $props.width"
      />
    </Component>
  </div>
</template>

<style module>
.root--inline {
  display: inline-block;
}
.a {
  font-size: 0;
}
.img {
  filter: brightness(.96);
} .img--fit-cover {
  object-fit: cover;
}

.border {
  border-style: solid;
  border-width: 1px;
}
</style>
