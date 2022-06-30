<script>
const title = 'Factura | SAC Cloud'
const description = 'Reclama tus puntos o convierte tu recibo en una factura electrónica con SAC Cloud'
const ogImage = 'https://www.saccloud.co/ogImage/any.png'
const keywords = 'Plataforma, utilidades, SAC, Cloud'
const canonical = 'https://www.saccloud.co/factura'

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
  },
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
