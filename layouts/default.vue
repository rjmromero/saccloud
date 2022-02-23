<template>
  <div>
    <Alert/>
    <Header logo="/images/isologo-sac-bg-black.png" />
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style>
body {
  background-color: rgb(var(--black));
}
</style>
