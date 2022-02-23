<template></template>

<script>
export default {
  middleware: ({ redirect }) => {
    redirect('301', '/')
  }
}
</script>

<style>

</style>
