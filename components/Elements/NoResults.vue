<template>
  <Content max-width="368" padding="24">
    <Icon center name="confused" color="gray"/>
    <P center color="gray">{{ text || 'Sin resultados'}}</P>
    <slot/>
  </Content>
</template>

<script>
  export default {
    name: 'ComponentNoResults',
    props: {
      text: { type: String }
    }
  }
</script>
