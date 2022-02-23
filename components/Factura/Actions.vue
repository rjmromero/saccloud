<template>
  <div :class="$style.root">
    <Loading v-if="isLoading"/>
    <Grid v-else gap="24">
      <Button @click="action('reclamar_puntos')" bg="black" is-fill>Reclamar tus puntos</Button>
      <Button @click="action('convertir_factura')" is-fill>Convertir a factura electrónica</Button>
    </Grid>
  </div>
</template>

<script>
import { inject, ref, useContext, useRouter } from '@nuxtjs/composition-api'
import { Alert } from '~/modules/nuxt-uibox/useAlert'

export default {
  name: 'ComponentFacturaActions',
  setup() {
    // $
    const { $api } = useContext()
    const $router = useRouter()

    // inject
    // const Prompt = inject('Prompt')
    const getDoc = inject('getDoc')

    // ref
    const isLoading = ref(false)

    // actions
    const action = (name) => {
      const { askForNIT, email, id } = getDoc.value.actions
      let title = name === 'reclamar_puntos' ? 'Reclamar puntos' : 'Convertir factura'
      let message = 'Por favor ingrese el $r$ para ' + (name === 'reclamar_puntos' ? 'reclamar sus puntos' : 'convertir a factura electrónica')

      if (askForNIT) {
        message = message.replace('$r$', '<b>código de validación</b> y su <b>identificación</b>')
      } else {
        message = message.replace('$r$', '<b>código de validación</b>')
      }

      // Prompt.show({
      //   title,
      //   message,
      //   buttonPrimaryText: 'Continuar',
      //   fieldPrimaryLabel: 'Código de validación',
      //   fieldSecondaryLabel: askForNIT ? 'Identificación/NIT/CC' : false,
      //   fieldSecondaryVisible: true,
      //   async onAccept({ primary, secondary}) {
      //     try {
      //       if (primary && secondary) {
      //         await $api.actionOnTheDoc({
      //           id,
      //           codigo_validacion: primary,
      //           accion: name,
      //           nit: askForNIT ? secondary : null,
      //           correo: ''//email
      //         })
      //         Alert.show({
      //           title,
      //           message: name === 'reclamar_puntos' ? 'Puntos reclamados con éxito.' : 'Documento convertido a factura electrónica con éxito.',
      //           onClose() {
      //             setTimeout(() => $router.push('/'), 300)
      //           }
      //         })
      //       }
      //     } catch (e) {
      //       if (e.response) {
      //         setTimeout(() => {
      //           let message = 'Lamentamos esta situación, estamos solucionando.'
      //           switch (e.response.status) {
      //             case 401:
      //               message = 'Código de validación incorrecto. Verifique e intente de nuevo'
      //               break

      //             case 402:
      //               if (name === 'reclamar_puntos') {
      //                 message = 'Apreciado cliente, no puede volver a realizar esta acción porque sus puntos ya fueron acumulados'
      //               }
      //               break

      //             case 403:
      //               message = `La identificación/NIT/CC (${nit}) que introdujo no es válida para este documento. Verifique e intente de nuevo`
      //               break

      //             case 405:
      //               message = `No hemos encontrado la identificación/NIT/CC (${nit}). Por favor verifique que los datos estén correctamente ingresados`
      //               break

      //             case 406:
      //               message = 'La acción que intenta realizar no es posible, debido que este documento no permite hacer modificaciones'
      //               break

      //             case 411:
      //               if (name === 'reclamar_puntos') {
      //                 message = 'Lo sentimos, pero el negocio al que usted intenta reclamar sus puntos no está habilitado para esta acción'
      //               } else {
      //                 message = 'La acción de convertir a factura electrónica no es posible, debido que este documento ha superado las 72 horas desde su generación'
      //               }
      //               break

      //             case 408:
      //               if (name === 'convertir_factura') {
      //                 message = 'La acción de convertir a factura electrónica no es posible, debido que este documento no permite hacer modificaciones'
      //               }
      //               break

      //             case 409:
      //               if (name === 'convertir_factura') {
      //                 message = 'Error inesperado a la hora de convertir este documento a factura electrónica. Por favor intente más tarde'
      //               }
      //               break

      //             case 410:
      //               if (name === 'reclamar_puntos') {
      //                 message = 'Lo sentimos, pero el negocio al que usted intenta reclamar sus puntos no está habilitado para esta acción'
      //               }
      //               break
      //           }
      //           Alert.show({
      //             title: 'Error',
      //             message: `${message} (${e.response.status})`
      //           })
      //         }, 300)
      //       }
      //     }
      //   }
      // })
    }
    return {
      action,
      isLoading
    }
  }
}
</script>

<style module>
.root {
  margin: 24px auto;
  max-width: 264px;
}

@media screen and ( min-width: 432px) {
  .root__buttons {
    grid-auto-flow: column;
  }
}
</style>
