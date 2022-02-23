import { computed, inject, onMounted, reactive, ref, ssrRef, useContext, useFetch, useRouter } from "@nuxtjs/composition-api";

const useLicencia = (name) => {
  const { $axios, params } = useContext()
  const $router = useRouter()

  const Alert = inject('Alert')

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

  return {
    autorizar,
    campos,
    datos
  }
}

export default useLicencia;
