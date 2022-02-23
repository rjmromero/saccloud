<script>
export default {
  props: {
    alignSelf: { type: String },
    borderRadius: { type: String },
    isRound: { type: Boolean },
    justifySelf: { type: String },
    left: { type: Boolean },
    margin: { type: String },
    marginBottom: { type: String },
    marginLeft: { type: String },
    marginRight: { type: String },
    marginTop: { type: String },
    padding: { type: String },
    paddingBottom: { type: String },
    paddingLeft: { type: String },
    paddingRight: { type: String },
    paddingTop: { type: String }
  }
}

</script>

<template>
  <Img v-bind="$props" :center="!$props.left" :class="$style.root" max-width="40" no-lazy src="/images/loading.png"/>
</template>

<style module>
.root {
  animation: var(--nuib-loading-animation);
}
</style>
