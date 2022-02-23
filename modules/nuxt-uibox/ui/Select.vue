<script>
import { computed, ref } from "@nuxtjs/composition-api"
import { CSSAlign, CSSColor, CSSDisabled, CSSJustify, CSSMargin } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String, default: 'white' },
    brColor: { type: String, default: 'graylight' },
    brColorFocus: { type: String, default: 'primary' },
    bsColorFocus: { type: String, default: 'primary' },
    clear: { type: Boolean },
    color: { type: String },
    disabled: { type: Boolean },
    holder: { type: String },
    justifySelf: { type: String },
    label: { type: String },
    list: { type: Array, default: () => [] },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    prefix: { type: String, default: String() },
    required: { type: [Boolean, String] },
    value: { type: [String, Number] }
  },

  setup(props, { emit }) {
    const elUL = ref(null)
    const visibleList = ref(false)
    const filterFocus = ref(false)
    const filter = ref('')

    function selectItem($) {
      if (!props.disabled) {
        emit('input', $.text)
        emit('change', $)
        showList(false)
      }
    }
    
    function showList(b) {
      if (!props.disabled) {
        if (b && !visibleList.value) {
          visibleList.value = true
          setTimeout(() => {
            elUL.value.$el.focus()
          }, 100)
        } else if (!b && visibleList.value) {
          setTimeout(() => {
            if (!filterFocus.value) {
              visibleList.value = false
              elUL.value.$el.blur()
              setTimeout(() => {
                filter.value = ''
              }, 300)
            }
          }, 300)
        }
      }
    }
    
    const CSS = computed(() => {
      let margin = {}
      let root = {}
      let input = {}

      if (!!props.alignSelf) root[CSSAlign['self_' + props.alignSelf]] = true
      if (!!props.justifySelf) root[CSSJustify['self_' + props.justifySelf]] = true
      if (props.disabled) margin[CSSDisabled.disabled] = true
      if (!!props.margin) margin[CSSMargin['all_' + props.margin]] = true
      if (!props.margin && !!props.marginBottom) margin[CSSMargin['bottom_' + props.marginBottom]] = true
      if (!props.margin && !!props.marginLeft) margin[CSSMargin['left_' + props.marginLeft]] = true
      if (!props.margin && !!props.marginRight) margin[CSSMargin['right_' + props.marginRight]] = true
      if (!props.margin && !!props.marginTop) margin[CSSMargin['top_' + props.marginTop]] = true
    
      if (!props.disabled && !!props.bg) input[CSSColor['bgColor_' + props.bg]] = true
      if (!props.disabled && !!props.brColor) input[CSSColor['brColor_' + props.brColor]] = true
      if (!props.disabled && !!props.brColorFocus) input[CSSColor['brFocusColor_' + props.brColorFocus]] = true
      if (!props.disabled && !!props.bsColorFocus) input[CSSColor['bsFocusColor_' + props.bsColorFocus]] = true
      if (!!props.color) input[CSSColor['color_' + props.color]] = true
      return { margin, root, input }
    })

    return {
      CSS,
      elUL,
      filterFocus,
      filter,
      selectItem,
      showList,
      visibleList
    }
  }
}

</script>

<template>
  <div :class="CSS.margin">
    <!-- <div @click="visibleList ? () => {} : showList(true)" :class="[$style.root, {[$style['root--enabled']]: !$props.disabled}, CSS.root]"> -->
    <div  @click="showList(!visibleList)" :class="[$style.root, {[$style['root--enabled']]: !$props.disabled}, CSS.root]">
      <Label v-if="$props.label" :color="$props.color">{{ $props.label }}</Label>
      <input
        @input="usingCleave ? ()=>{} : $emit('input', $event.target.value)"
        :class="[$style.input, CSS.input]"
        :placeholder="$props.holder"
        readonly
        type="text"
        :value="$props.value"
      />
      <div @click.stop="$emit('input', '')" v-if="!$props.disabled && $props.value && $props.clear" :class="$style.iconClear">
        <Icon :bg-hover="$props.brColorFocus" br-radius="4" :color="$props.color" name="times" size="16"/>
      </div>
      <div v-else-if="!$props.disabled" :class="$style.iconAngleDown">
        <Icon :color="$props.color" name="angle-down" size="16"/>
      </div>
      <Ul v-if="!$props.disabled" @blur.native="showList(false)" @focus.native="!visibleList ? showList(true) : () => {}" :bg="$props.bg" :br-color="$props.brColor" :bs-focus="$props.bsColorFocus" br-radius="4" :is-hiden="!visibleList" ref="elUL" floating>
        <Padding v-if="$props.list && $props.list.length > 16"  bottom="16" left="16" right="16" top="8">
          <input v-model="filter" @focus="filterFocus = true" @blur="showList(false); filterFocus = false" :class="[$style.inputFilter, CSS.input]" placeholder="Filter"/>
        </Padding>
        <div v-for="($, i) in $props.list" :key="i">
          <Li v-show="!filter || $.text.toLowerCase().indexOf(filter.toLowerCase()) >= 0" @click="$.disabled ? ()=>{} : selectItem($)" :bg-hover="$props.color" :color="$props.color" :disabled="$.disabled" :label="$.label">{{ $.prefix || $props.prefix }}{{ $.text }}</Li>
        </div>
      </Ul>
    </div>
    <Label v-if="!$props.disabled && $props.required && !$props.value" color="red" is-small is-upper>{{ typeof $props.required === 'boolean' ? 'REQUIRED': $props.required }}</Label>
  </div>
</template>


<style module>
.root {
  position: relative;
} .root--enabled {
  cursor: pointer;
}

.icon {
  bottom: 3px;
  left: 4px;
  position: absolute;
  z-index: 1;
} .icon ~ .input {
  padding-left: 40px;
}

.input {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  height: 40px;
  outline: none;
  padding: 0 16px;
  transition: border .3s, box-shadow .3s ease-in;
  width: 100%;
}

.iconClear, .iconAngleDown {
  bottom: 4px;
  font-size: 0;
  height: 32px;
  position: absolute;
  right: 4px;
  z-index: 1;
}

.inputFilter {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px 16px;
  transition: box-shadow .3s, border .3s;
  width: 100%;
}
</style>
