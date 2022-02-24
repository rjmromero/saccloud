<template>
  <header>
    <Img center margin-top="24" max-width="176" :src="logo" to="/"/>
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
