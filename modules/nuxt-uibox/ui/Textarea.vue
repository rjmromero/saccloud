<script>
import { computed, ref } from "@nuxtjs/composition-api"
import { CSSAlign, CSSColor, CSSDisabled, CSSJustify, CSSMargin } from "../useCSS"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String, default: 'white' },
    borderColor: { type: String, default: 'graylight' },
    borderColorFocus: { type: String, default: 'primary' },
    bsColorFocus: { type: String, default: 'primary' },
    color: { type: String, default: 'black' },
    disabled: { type: Boolean },
    holder: { type: String },
    justifySelf: { type: String },
    label: { type: String },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    maxHeight: { type: [String, Number], default: '576' },
    readonly: { type: Boolean },
    required: { type: [Boolean, String] },
    requiresMin: { type: [String, Number] },
    requiresMax: { type: [String, Number] },
    value: { type: [String, Number] }
  },
  setup(props, { emit }) {
    const isValid = ref(true)
    const notValid = computed(() => {
      if (props.requiresMin) {
        isValid.value = props.value?.length >= Number(props.requiresMin)
      }
      else if (props.requiresMax) {
        isValid.value = props.value?.length <= Number(props.requiresMax)
      }
    
      emit('isvalid', isValid.value)
      return !isValid.value
    })
    
    const CSS = computed(() => {
      return {
        root: {
          [CSSAlign['self_' + props.alignSelf]]: !!props.alignSelf,
          [CSSJustify['self_' + props.justifySelf]]: !!props.justifySelf,
          [CSSMargin['all_' + (props.margin || '8')]]: !!props.margin,
          [CSSMargin['bottom_' + props.marginBottom]]: !props.margin,
          [CSSMargin['left_' + props.marginLeft]]: !props.margin,
          [CSSMargin['right_' + props.marginRight]]: !props.margin,
          [CSSMargin['top_' + props.marginTop]]: !props.margin
        },
        textarea: {
          [CSSColor['bgColor_' + props.bg]]: !props.disabled && !!props.bg,
          [CSSColor['brColor_' + props.borderColor]]: !props.disabled && !!props.borderColor,
          [CSSColor['brFocusColor_' + props.borderColorFocus]]: !props.disabled && !!props.borderColorFocus,
          [CSSColor['bsFocusColor_' + props.bsColorFocus]]: !props.disabled && !!props.bsColorFocus,
          [CSSColor['color_' + props.color]]: !!props.color,
          [CSSDisabled.disabled]: props.disabled
        }
      }
    })

    return {
      CSS,
      notValid
    }
  }
}

</script>

<template>
  <div>
    <div :class="[$style.root, CSS.root]">
      <Grid columns="max_auto" align-items="center" space-between>
        <Label v-if="$props.label">{{ $props.label }}</Label>
        <Label v-if="notValid && $props.requiresMin && typeof $props.value === 'string'" color="red" is-small>{{ $props.value.length }}/{{ $props.requiresMin }}</Label>
        <Label v-if="$props.requiresMax && typeof $props.value === 'string'" :color="$props.value.length > $props.requiresMax ? 'red' : 'green'" is-small>{{ $props.value.length }}/{{ $props.requiresMax }}</Label>
      </Grid>
      <div :class="$style.wrap">
        <textarea-autosize
          @input="$emit('input', $event)"
          :class="[$style.textarea, CSS.textarea]"
          :min-height="80"
          :max-height="Number($props.maxHeight)"
          :placeholder="$props.holder"
          :readonly="$props.readonly || $props.disabled"
          ref="el"
          spellcheck
          type="text"
          :value="$props.value"
        />
        <div @click="$emit('input', '')" v-show="!$props.disabled && $props.value" :class="$style.iconClear">
          <Icon :bg-hover="$props.borderColorFocus" br-radius="4" :color="$props.color" name="times" size="16"/>
        </div>
      </div>
    </div>
    <Label v-if="!$props.disabled && $props.required && !$props.value" color="red" is-small is-upper>{{ typeof $props.required === 'boolean' ? 'REQUIRED': $props.required }}</Label>
  </div>
</template>


<style module>
.root {
  position: relative;
}
/* 
.icon {
  bottom: 3px;
  left: 4px;
  position: absolute;
  z-index: 1;
} .icon ~ .input {
  padding-left: 40px;
} */

.wrap {
  position: relative;
}

.textarea {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  padding: 12px 16px;
  transition: border .3s, box-shadow .3s ease-in;
  width: 100%;
} .textarea:focus {
  cursor: text;
} .textarea:focus + .iconClear {
  visibility: visible;
}

.iconClear {
  font-size: 0;
  height: 34px;
  position: absolute;
  right: 3px;
  top: 3px;
  transition: visibility 0s .7s;
  visibility: hidden;
  z-index: 1;
}
</style>
