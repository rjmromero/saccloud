<script setup>
import { computed, reactive, ref, useContext, useFetch } from "@nuxtjs/composition-api"
import { Alert } from "~/modules/nuxt-uibox/useAlert"

const { $axios, params, redirect } = useContext()
const dataSend = reactive({
  id: null,
  codigo_validacion: null,
  accion: 'reclamar_puntos',
  nit: null,
  correo: null
})
const bussiness = ref('CARGANDO...')
const askForNIT = ref(false)
const isLoading = ref(false)

useFetch(async () => {
  try {
    const R = await $axios.$post('/iccloud/v1/login/ver-documento-codigo', { codigo: params.value.id })
    bussiness.value = R.negocio.n_comercial
    dataSend.id = R.factura.id
    dataSend.correo = R.receptor.email
    askForNIT.value = R.receptor.ident === '222222222222'
  } catch (e) {
    console.log(e)
  }
})

const isValid = computed(() => {
  return dataSend.codigo_validacion?.length > 3 && dataSend.nit?.length > 5
})

async function fetchPost() {
  try {
    isLoading.value = true
    console.log(dataSend)
    Alert.show({
      message: 'Puntos reclamados con éxito.',
      isToast: 'success'
    })
    isLoading.value = false
    setTimeout(() => redirect('301', '/'), 300)
  } catch (e) {
    let message = 'Lamentamos esta situación, estamos solucionando.'
    switch (e?.response?.status) {
      case 401:
        message = 'Código de validación incorrecto. Verifique e intente de nuevo'
        break

      case 402:
        message = 'Apreciado cliente, no puede volver a realizar esta acción porque sus puntos ya fueron acumulados'
        break

      case 403:
        message = `La identificación/NIT/CC (${dataSend.nit}) que introdujo no es válida para este documento. Verifique e intente de nuevo`
        break

      case 405:
        message = `No hemos encontrado la identificación/NIT/CC (${dataSend.nit}). Por favor verifique que los datos estén correctamente ingresados`
        break

      case 406:
        message = 'La acción que intenta realizar no es posible, debido que este documento no permite hacer modificaciones'
        break

      case 411:
        message = 'Lo sentimos, pero el negocio al que usted intenta reclamar sus puntos no está habilitado para esta acción'
        break

      case 410:
        message = 'Lo sentimos, pero el negocio al que usted intenta reclamar sus puntos no está habilitado para esta acción'
        break
    }
    Alert.show({
      title: 'Error',
      message: `${message} (${e?.response?.status || -1})`,
      delay: 300
    })
    isLoading.value = false
  }
}
</script>

<template>
  <Content max-width="624" padding="24">
    <Heading center color="white">Reclamar puntos</Heading>
    <Label center color="white" is-upper margin-bottom="24">{{ bussiness }}</Label>
    <P center color="graylight" margin-bottom="24">Por favor ingrese el código de validación{{ askForNIT ? ' y su identificación ' : ' ' }}para reclamar sus puntos</P>
    <Loading v-if="isLoading"/>
    <Grid v-else align-items="end" :auto-fill="askForNIT ? '168' : '272'" gap="16">
      <Input v-model="dataSend.codigo_validacion" bg="black" color="white" holder="Código de validación"/>
      <Input v-if="askForNIT" v-model="dataSend.nit" bg="black" color="white" holder="Identificación/NIT/CC"/>
      <Button @click="fetchPost()" :disabled="!isValid" is-fill>Reclamar</Button>
    </Grid>
  </Content>
</template>
