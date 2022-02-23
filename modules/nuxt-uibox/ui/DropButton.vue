<script>
export default {
  props: {
    bg: { type: String },
    color: { type: String },
    label: { type: String },
    value: { type: String }
  }
}
</script>

<template>
  <div @click="$emit('click')">
    <Label :color="$props.color">{{ $props.label }}</Label>
    <Grid align-items="center" :class="[$style.root, { [$style[`root--bg-${$props.bg}`]]: $props.bg, [$style['root--valid']]: $props.value }]" columns="1fr_max">
      <P v-if="$props.value" :color="$props.color" is-small snip="1">{{ $props.value }}</P>
      <P v-else :color="$props.color" is-small><i>Seleccione</i></P>
      <div v-if="$props.value" @click.stop="$emit('clear')">
        <Icon br-radius="4" :color="$props.color" :hover="$props.color" name="times" size="16"/>
      </div>
      <Icon v-else :color="$props.color" name="angle-right" size="16"/>
    </Grid>
  </div>
</template>

<style module>
/* Root */
.root {
  background-color: rgba(var(--black), 8%);
  border-radius: 3px;
  border-color: transparent;
  border-style: dashed;
  border-width: 1px;
  cursor: pointer;
  height: 40px;
  margin-top: 2px;
  padding: 0 0 0 16px;
} .root--bg-white {
  background-color: rgba(var(--white), 16%);
} .root--bg-white.root--valid {
  border-color: rgb(var(--accent-color));
}
</style>
