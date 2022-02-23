factura/id
<template>
  <div :class="$style.root">
    <Loading v-if="bill === null"/>
    <div v-if="bill">
      <FacturaHeader/>
      <FacturaData/>
      <FacturaActions/>
    </div>

    <NoResults v-if="bill && !bill.factura">
      <Button margin-top="24" to="/">Volver al inicio</Button>
    </NoResults>
  </div>
</template>

<script>
import { computed, defineComponent, provide, useContext, useStatic } from '@nuxtjs/composition-api'
const title = 'Factura | SAC Cloud'
const description = 'Reclama tus puntos o convierte tu recibo en una factura electrónica con SAC Cloud'
const ogImage = 'https://www.saccloud.co/ogImage/any.png'
const keywords = 'Plataforma, utilidades, SAC, Cloud'

export default defineComponent({
  name: 'PageFacturaId',
  layout: 'empty',
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
      { hid: 'og:url', property: 'og:url', content: 'https://www.saccloud.co/factura' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height ', property: 'og:image:height ', content: '630' }
    ]
  },
  setup() {
    // $
    const { $api, params } = useContext()

    // computed
    const getId = computed(() => {
      return params.value.id
    })

    const getDoc = computed(() => {
      if (bill.value) {
        const { negocio, factura, receptor } = bill.value
        return {
          business: {
            logo: negocio.logo === '/img/logo.png' ? null : negocio.logo,
            name: negocio.n_comercial || 'Nombre del negocio',
            slogan: negocio.slogan || '...',
            moviles: [{ text: `Tel: ${negocio.celular}`, to: `tel:${negocio.celular}` }],
          },
          bill: {
            clientName: receptor.ident === '222222222222' ? '' : receptor.nombre.trim().toLowerCase(),
            billNumber: factura.numero_documento,
            date: factura.fecha,
            hour: factura.hora
          },
          actions: {
            id: factura.id,
            code: 1,
            email: receptor.email,
            askForNIT: receptor.ident === '222222222222'
          }
        }
      }
    })

    // fetch
    const bill = useStatic((id) => $api.showDocCode(id), getId, 'factura-id')

    // provide
    provide('getDoc', getDoc)

    return {
      bill
    }
  }
})
</script>

<style module>
.root {
  padding: 48px 24px;
}
</style>
