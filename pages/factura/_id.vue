<script>
export default {
  layout: 'empty',
  middleware({ params, redirect }) {
    if (!params.id) {
      redirect('301', '/')
    }
  }
}
</script>

<template>
  <NuxtChild/>
</template>
