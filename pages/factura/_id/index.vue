<script setup>
import { ref, useContext, useFetch } from "@nuxtjs/composition-api"

const { $axios, params } = useContext()
const data = ref({
  factura: {},
  negocio: {},
  receptor: {}
})

const tos = ref([
  `/factura/${params.value.id}/reclamar-puntos`,
  `/factura/${params.value.id}/convertir-a-factura-electronica`
])

useFetch(async () => {
  try {
    data.value = await $axios.$post('/iccloud/v1/login/ver-documento-codigo', { codigo: params.value.id })
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <Content max-width="624" padding="24">
    <Img center height="64" is-round max-width="64" :src="data.negocio.logo" />
    <Heading center color="white" margin-top="16">{{ data.negocio.n_comercial}}</Heading>
    <P center color="white">{{ data.negocio.slogan || '...' }}</P>
    <Label center color="white">CEL: {{ data.negocio.celular || 'Sin celular' }}</Label>
    <Hr color="graylight"/>
    <Label center color="graylight"><b>FACTURA</b></Label>
    <Heading center color="primary" level="4">{{ data.factura.numero_documento}}</Heading>
    <Label center color="graylight" margin-top="24"><b>EMITIDA</b></Label>
    <P center color="white">{{ data.factura.fecha }} {{ data.factura.hora }}</P>
    <Hr color="graylight"/>
    <Grid auto-fill="200" gap="24">
      <Button bg="gray" is-fill :to="tos[0]">Reclamar tus puntos</Button>
      <Button is-fill :to="tos[1]">Convertir a factura electrónica</Button>
    </Grid>
  </Content>
</template>
