<script setup>
import { computed, onMounted, reactive, ref, ssrRef, useContext, useFetch, useRouter } from "@nuxtjs/composition-api"
import { Alert } from "~/modules/nuxt-uibox/useAlert"

const { $axios, params } = useContext()
const $router = useRouter()


const datos = ref(null)
const redirect = ssrRef(false)

const campos = reactive({
  usuario: String(),
  contrasena: String(),
  tecnico: { text: null, id: -1 },
  $disabledButton: computed({
    get: () => {
      return campos.usuario.length === 0
          || campos.contrasena.length < 4
          || campos.tecnico.id === -1
    },
    set: () => {}
  }),
  $loading: false
})

useFetch(async () => {
  const URL = '/sac-cloud/licencia/show/v1'
  const { id } = params.value
  try {
    datos.value = await $axios.$get(URL, {
      params: { id }
    })
  } catch (e) {
    redirect.value = true
    console.error(`Licencia no encontrada (id: ${id})`, URL)
  }
})

onMounted(() => {
  if (redirect.value) {
    Alert.show({
      message: 'Licencia no encontrada',
      isToast: 'error'
    })
    $router.replace('/')
  }
})

async function autorizar() {
  try {
    campos.$loading = true
    const { id } = params.value
    await $axios.$post('/iccloud/v1/login/login-sac', {
      user: campos.usuario,
      pass: campos.contrasena
    })
    const success = await $axios.$put('/sac-cloud/licencia/update/v1', {
      celular: campos.usuario,
      id,
      idTecnico: campos.tecnico.id,
      nit: datos.value.nit
    })
    campos.$loading = false
    Alert.show(success)
    $router.replace('/')
  } catch (e) {
    switch (e?.response?.status) {
      case 400:
        Alert.show(e.response.data)
        break
      case 401: // ICCloud
        Alert.show({
          title: 'Error',
          message: `Usuario o contraseña incorrecta, intente nuevamente (${e.response.status})`,
          isToast: 'error'
        })
        break
      case 404:
        Alert.show(e.response.data)
        break
    
      default:
        Alert.show({
          title: 'Error',
          message: 'Error inesperado. Estamos solucionando, intente más tarde (-1)',
          isToast: 'error'
        })
        break
    }
    campos.usuario = String()
    campos.contrasena = String()
    campos.tecnico = { text: null, id: -1 }
    campos.$loading = false
  }
}
</script>

<template>
  <Content max-width="624" padding="24">
    <Loading v-if="datos === null" margin="48"/>
    <div v-else>
      <Label color="white"><div v-html="datos.fechaCreacion"/></Label>
      <Heading color="white" level="4" margin-top="0">Solicitud de autorización de licencia</Heading>
      <Hr color="white"/>
      <Grid auto-fill="144" gap="16">
        <div>
          <Label color="accent">Tipo</Label>
          <P color="white" is-small>{{ datos.tipo }}</P>
        </div>
        <div>
          <Label color="accent">Sistema</Label>
          <P color="white" is-small>{{ datos.sistema }}</P>
        </div>
        <div>
          <Label color="accent">NIT</Label>
          <P color="white" is-small>{{ datos.nit }}</P>
        </div>
        <div>
          <Label color="accent">Versión</Label>
          <P color="white" is-small>{{ datos.version }}</P>
        </div>
        <div>
          <Label color="accent">Días</Label>
          <P color="white" is-small>{{ datos.dias }}</P>
        </div>
      </Grid>
      <Hr color="white"/>
      <P color="white" margin-bottom="24">Por favor seleccione a continuación el técnico a cargo e ingrese sus credenciales para autorizar esta solicitud de licencia</P>
      <Select @change="campos.tecnico = $event" bg="black" color="white" holder="Seleccionar" :list="datos.tecnicos" label="Técnico a cargo" margin-bottom="24" :value="campos.tecnico.text"/>
      <Grid align-items="end" auto-fill="144" gap="16">
        <Input bg="black" color="white" label="Usuario" v-model="campos.usuario"/>
        <Input bg="black" color="white" label="Contraseña" v-model="campos.contrasena" is-pass see-pass/>
        <Loading v-if="campos.$loading"/>
        <Button v-else @click="autorizar()" :disabled="campos.$disabledButton" is-fill>Autorizar</Button>
      </Grid>
    </div>
  </Content>
</template>
