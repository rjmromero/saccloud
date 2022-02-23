<template>
  <div :class="$style.root">
    <img v-if="getDoc.logo" :class="$style.root__logo" height="144" width="144" :src="getDoc.logo"/>
    <Icon v-else color="gray" name="building" size="56"/>
    <Heading color="white">{{getDoc.business.name}}</Heading>
    <P color="white">{{getDoc.business.slogan}}</P>
    <section :class="$style.root__moviles">
      <nuxt-link :class="$style.root__moviles__movil" v-for="($, i) in getDoc.business.moviles" :to="$.to" :key="i">
        <Label color="white">{{ $.text }}</Label>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import { inject } from '@nuxtjs/composition-api'

export default {
  name: 'ComponentFacturaHeader',
  setup() {
    // inject
    const getDoc = inject('getDoc')

    return {
      getDoc
    }
  }
}
</script>

<style module>
.root {
  text-align: center;
}

.root__logo {
  border-radius: 8px;
  max-width: 144px;
}
.root__iconBuilding {
  max-height: 144px;
  /* padding: 44px; */
}
.root__moviles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 4px;
}
.root__moviles__movil:nth-child(2) {
  border-left: 1px solid rgb(var(--graylight));
  padding-left: 8px;
}

@media screen and (min-width: 416px) {
  .root__moviles__movil:nth-child(3) {
    border-left: 1px solid rgb(var(--graylight));
    padding-left: 8px;
  }
}
</style>
