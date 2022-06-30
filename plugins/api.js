import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx, inject) => {
  const { $axios } = ctx

  /**
   * @description
   * Peticones a server-api
   * 
   * @function indexApps
   * Busca la lista de apps
   */

  const indexApps = () => {
    // Verificar en el servidor si trae statusText. Si es así, eliminarlo
    return $axios.$get('/@/apps/index/v1')
  }

  const showDocCode = (codigo) => {
    // return $axios.$post('/iccloud/v1/login/ver-documento-codigo', { codigo })
    return $axios.$post('https://api.iccloud.co/login/ver-documento-codigo', { codigo })
  }

  const actionOnTheDoc = async (dataSend) => {
    // return await $axios.$post('/iccloud/v1/login/ver-documento-codigo-acciones', dataSend)
    return await $axios.$post('https://api.iccloud.co/login/ver-documento-codigo-acciones', dataSend)
  }

  inject('api', {
    actionOnTheDoc,
    indexApps,
    showDocCode
  })
})
