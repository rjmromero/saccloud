<script>
import { computed, onMounted, ref } from "@nuxtjs/composition-api"
import { CSSAlign, CSSColor, CSSDisabled, CSSJustify, CSSMargin } from "../useCSS"
import useCleave from "../useCleave"

export default {
  props: {
    alignSelf: { type: String },
    bg: { type: String, default: 'white' },
    brColor: { type: String, default: 'graylight' },
    brColorFocus: { type: String, default: 'primary' },
    bsColorFocus: { type: String, default: 'primary' },
    color: { type: String, default: 'black' },
    disabled: { type: Boolean },
    holder: { type: String },
    icon: { type: String },
    isCard: { type: Boolean },
    isDate: { type: [Boolean, Array] },
    isEmail: { type: Boolean },
    isNumber: { type: [Boolean, Array] },
    isPass: { type: Boolean },
    isPhone: { type: [Boolean, String] },
    justifySelf: { type: String },
    label: { type: String },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    readonly: { type: Boolean },
    required: { type: [Boolean, String] },
    requiresMin: { type: [String, Number] },
    seePass: { type: Boolean },
    value: { type: [String, Number] }
  },

  setup(props, { emit }) {
    const el = ref(null)
    const typePass = ref({ id: 0, label: 'password' })
    const isValid = ref(true)

    const usingCleave = computed(() => {
      return props.isCard || props.isDate || props.isNumber || props.isPhone
    })
    
    const notValid = computed(() => {
      if (props.isEmail) {
        if (props.value?.length > 4) {
          isValid.value = props.value.indexOf('@') > 0 && props.value.indexOf('.') > 2 && (/.+\@.+\..+/.test(props.value))
        } else {
          isValid.value = false
        }
      }
      else if (props.isPhone) {
        isValid.value = props.value?.length >= 7
      } else if (props.requiresMin) {
        isValid.value = props.value?.length >= Number(props.requiresMin)
      }
    
      emit('isvalid', isValid.value)
      return !isValid.value
    })
    
    const allowSeePass = computed(() => {
      return props.isPass &&
        props.seePass &&
        props.value
    })
    
    const type = computed(() => {
      return props.isPass ? typePass.value.label : 'text'
    })
    
    function exposePass() {
      if (typePass.value.label === 'text') {
        typePass.value.label = 'password'
      } else{
        typePass.value.label = 'text'
      }
    
      clearTimeout(typePass.value.id)
      typePass.value.id = setTimeout(() => {
        typePass.value.label = 'password'
      }, 3e3)
    }
    
    function load() {
      onMounted(() => {
        if (usingCleave.value) {
          setTimeout(() => {
            useCleave(props, el.value, emit)
          }, 300)
        }
      })
    }
    
    function clear() {
      emit('input', '')
      emit('clear')
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
      allowSeePass,
      clear,
      CSS,
      el,
      exposePass,
      load,
      notValid,
      type,
      usingCleave
    }
  }
}

</script>

<template>
  <div :class="CSS.margin">
    <Grid columns="max_auto" align-items="center" space-between>
      <Label v-if="$props.label" :color="$props.color">{{ $props.label }}</Label>
      <Label v-if="notValid && $props.requiresMin && typeof $props.value === 'string'" color="red" is-small>{{ $props.value.length }}/{{ $props.requiresMin }}</Label>
    </Grid>
    <div :class="[$style.root, CSS.root]">
      <div v-if="$props.icon || $props.isEmail || allowSeePass" :class="$style.icon">
        <Icon v-if="$props.isEmail" :color="notValid ? 'red' : 'gray'" :name="notValid ? 'envelope-times' : 'envelope-alt'" size="16"/>
        <Icon v-else-if="allowSeePass" @click.native="exposePass()" hover="black" :name="type === 'text' ? 'eye-slash' : 'eye'" size="16"/>
        <Icon v-else-if="$props.icon" :color="$props.color" :name="$props.icon" size="16"/>
      </div>
      <input
        @input="usingCleave ? ()=>{} : $emit('input', $event.target.value)"
        @keyup.enter="$emit('enter', $event.target.value)"
        :class="[$style.input, CSS.input]"
        :load="load()"
        :placeholder="$props.holder || ($props.isDate ? 'DD-MM-YYYY' : null)"
        :readonly="$props.readonly || $props.disabled"
        ref="el"
        :type="type"
        :value="$props.value"
      />
      <div @click="clear()" v-show="!$props.disabled && $props.value" :class="$style.iconClear">
        <Icon :bg-hover="$props.brColorFocus" br-radius="4" :color="$props.color" name="times" size="16"/>
      </div>
    </div>
    <Label v-if="!$props.disabled && $props.required && !$props.value" color="red" is-small is-upper>{{ typeof $props.required === 'boolean' ? 'REQUIRED': $props.required }}</Label>
  </div>
</template>


<style module>
.root {
  position: relative;
}

.icon {
  bottom: 4px;
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
} .input[type="password"] {
  font-size: 16px;
  letter-spacing: 4px;
} .input:focus {
  cursor: text;
} .input:focus + .iconClear {
  visibility: visible;
}

.iconClear {
  font-size: 0;
  height: 32px;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: visibility 0s .7s;
  visibility: hidden;
  z-index: 1;
}
</style>
