<script setup>
import { computed, reactive } from "@nuxtjs/composition-api"
const dataSend = reactive({
  id: null,
  codigo_validacion: null,
  accion: null,
  nit: null,
  correo: null
})
const isValid = computed(() => {
  return dataSend.codigo_validacion?.length > 3 && dataSend.nit?.length > 5
})
</script>

<template>
  <Content max-width="624" padding="24">
    <Heading center color="white">Reclamar puntos</Heading>
    <P center color="graylight" margin-bottom="24">Por favor ingrese el código de validación y su identificación para reclamar sus puntos</P>
    <Grid align-items="end" auto-fill="144" gap="16">
      <Input v-model="dataSend.codigo_validacion" bg="black" color="white" holder="Código de validación"/>
      <Input v-model="dataSend.nit" bg="black" color="white" holder="Identificación/NIT/CC"/>
      <Button :disabled="!isValid" is-fill>Reclamar</Button>
    </Grid>
  </Content>
</template>


<style>

</style>
