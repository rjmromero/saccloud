<script>
const title = 'SAC Cloud'
const description = 'Plataforma de utilidades SAC Cloud'
const ogImage = 'https://www.saccloud.co/ogImage/index.png'
const keywords = 'Plataforma, utilidades, SAC, Cloud'
const canonical = `https://www.saccloud.co`

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
import { ref, useContext, useFetch } from '@nuxtjs/composition-api'

const { $axios } = useContext()
const apps = ref()

// fetch
useFetch(async () => {
  try {
    apps.value = await $axios.$get('/@/apps/index/v1')
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <Content max-width="624" padding-left="24" padding-right="24">
    <Input bg="black" color="white" holder="Buscar" icon="search" margin-bottom="16" margin-top="24"/>
    <Flex gap="24" space-between>
      <a v-for="($, i) in apps" :key="i" :href="$.to" target="_self">
        <Grid>
          <Img center fit-css="cover" is-round margin-bottom="8" :src="$.icon" :title="$.name" height="64" width="64"/>
          <Label center color="white">{{ $.name }}</Label>
        </Grid>
      </a>
    </Flex>
  </Content>
</template>
