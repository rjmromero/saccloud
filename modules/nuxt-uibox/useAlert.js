import { reactive } from "@nuxtjs/composition-api"
let idSTO = 0

export const Alert = reactive({
  buttons: {
    primary: { text: null, visible: true },
    secondary: { text: null, visible: false }
  },
  events: {
    onAny: () => {},
    onClose: () => {},
    onCancel: () => {},
    onAccept: () => {},
  },
  isToast: null,
  message: null,
  title: null,
  visible: false,
  show($) {
    if (idSTO.value) clearTimeout(idSTO.value)
    setTimeout(() => {
      if ($.title || $.message) {
        Alert.title = $.title
        Alert.message = $.message
        Alert.isToast = $.isToast || null
        if ($.buttonPrimaryText) Alert.buttons.primary.text = $.buttonPrimaryText
        if (typeof $.buttonPrimaryVisible === 'boolean') Alert.buttons.primary.visible = $.buttonPrimaryVisible
        if ($.buttonSecondaryText) Alert.buttons.secondary.text = $.buttonSecondaryText
        if ($.buttonSecondaryVisible) Alert.buttons.secondary.visible = $.buttonSecondaryVisible
        if (typeof $.buttonPrimaryVisible === 'boolena') Alert.buttons.primary.visible = $.buttonPrimaryVisible
        if (typeof $.buttonSecondaryVisible === 'boolean') Alert.buttons.secondary.visible = $.buttonSecondaryVisible
        if (typeof $.onAny === 'function') Alert.events.onAny = $.onAny
        if (typeof $.onClose === 'function') Alert.events.onClose = $.onClose
        if (typeof $.onCancel === 'function') Alert.events.onCancel = $.onCancel
        if (typeof $.onAccept === 'function') Alert.events.onAccept = $.onAccept
        Alert.visible = true
        if (Alert.isToast) {
          idSTO = setTimeout(() => {
            Alert.close()
          }, 6e3)
        }
      }
    }, $.delay || 300)
  },
  close() {
    if (idSTO) clearTimeout(idSTO)
    Alert.visible = false
    Alert._clear()
    Alert.events.onClose('cancel')
    Alert.events.onCancel()
    Alert.events.onAny()
  },
  accept() {
    Alert.visible = false
    Alert._clear()
    Alert.events.onClose('accept')
    Alert.events.onAccept()
    Alert.events.onAny()
  },
  //
  _clear() {
    setTimeout(() => {
      Alert.buttons = {
        primary: {
          text: 'Accept',
          visible: true
        },
        secondary: {
          text: 'Cancel',
          visible: false
        }
      }
      Alert.isToast = false
      Alert.message = null
      Alert.title = null
      Alert.type = 'normal'
    }, 1e3)
  }
})

const useAlert = () => {
  return { Alert }
}

export default useAlert
