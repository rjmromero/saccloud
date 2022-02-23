<template>
  <header :class="$style.root">
    <nuxt-link :class="$style.root__logo" to="/">
      <img height="175" width="200" :src="logo"/>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'ComponentHeader',
  props: {
    logo: { type: String }
  }
}
</script>

<style module>
.root {
  padding: 48px 24px 24px;
  min-height: 247px;
}

.root__logo {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 200px;
}
</style>
