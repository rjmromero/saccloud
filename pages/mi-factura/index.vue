<script>
const title = 'Mi Factura | SAC Cloud'
const description = 'Solicita tu factura con SAC Cloud'
const ogImage = 'https://www.saccloud.co/ogImage/index.png'
const keywords = 'Plataforma, utilidades, SAC, Cloud'
const canonical = `https://www.saccloud.co/mi-factura`

export default {
  head: {
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:image', name: 'twitter:image', content: ogImage },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:site_name', name: 'og:site_name', content: title },
      { hid: 'og:image', property: 'og:image', content: ogImage },
      { hid: 'og:url', property: 'og:url', content: canonical },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height ', property: 'og:image:height ', content: '630' }
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: canonical }
    ]
  }
}
</script>

<script setup>
import { reactive } from '@nuxtjs/composition-api'

const dataSend = reactive({
  numeroRecibo: null,
  tipoPersona: {},
  tipoIdentificacion: {},
  NI: null,
  nombre: null,
  segundoNombre: null,
  apellido: null,
  segundoApellido: null,
  razonSocial: null,
  departamento: {},
  ciudad: {}
})

const lists = {
  tiposPersonas: [
    { text: 'Natural' },
    { text: 'Juridica' }
  ],
  tiposIdentificacion: [
    { text: 'CC' },
    { text: 'NIT' }
  ],
  departamentos: [],
  ciudades: [],
}
</script>

<template>
  <Content max-width="624" padding="24">
    <Heading center color="white">Solicitar factura electrónica</Heading>
    <P center color="white" margin-bottom="24">Por favor ingrese los datos de su recibo o factura de venta para poder hacer la solicitud</P>
    <Grid align-items="end" auto-fill="272" gap="24">
      <Input bg="black" color="white" label="Número del recibo" v-model="dataSend.numeroRecibo"/>
      <Select @change="dataSend.tipoPersona = $event" bg="black" color="white" holder="Seleccionar" label="Tipo de persona" :list="lists.tiposPersonas" :value="dataSend.tipoPersona.text"/>
      <Select @change="dataSend.tipoIdentificacion = $event" bg="black" color="white" holder="Seleccionar" label="Tipo de identificación" :list="lists.tiposIdentificacion" :value="dataSend.tipoIdentificacion.text"/>
      <Input bg="black" color="white" label="Identificación/NIT/CC" v-model="dataSend.NI"/>
      <Input bg="black" color="white" label="Primer nombre" v-model="dataSend.nombre"/>
      <Input bg="black" color="white" label="Segundo nombre" v-model="dataSend.segundoNombre"/>
      <Input bg="black" color="white" label="Primer apellido" v-model="dataSend.apellido"/>
      <Input bg="black" color="white" label="Segundo apellido" v-model="dataSend.segundoApellido"/>
      <Input bg="black" color="white" label="Razón social" v-model="dataSend.razonSocial"/>
      <Select @change="dataSend.departamento = $event" bg="black" color="white" holder="Seleccionar" label="Departamento" :list="lists.departamentos" :value="dataSend.departamento.text"/>
      <Select @change="dataSend.ciudad = $event" bg="black" color="white" holder="Seleccionar" label="Ciudad" :list="lists.ciudades" :value="dataSend.ciudad.text"/>
      <Button is-fill>Solicitar</Button>
    </Grid>
  </Content>
</template>


<style>

</style>
