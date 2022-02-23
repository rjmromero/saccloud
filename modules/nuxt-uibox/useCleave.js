import Cleave from "./js/cleave"
import "./js/cleave/addons/cleave-phone.co"
import "./js/cleave/addons/cleave-phone.us"

function optionsIsCard() {
  return { creditCard: true }
}

function optionsIsDate(isDate) {
  let o = { date: true, delimiter: '-' }
  if (typeof isDate === 'object') o.datePattern = isDate
  return o
}

function optionsIsNumber(isNumber) {
  let o = { numericOnly: true, blocks: [32] }
  if (typeof isNumber === 'object') o.blocks = isNumber
  return o
}

function optionsIsPhone(isPhone) {
  return { phone: true, phoneRegionCode: typeof isPhone === 'boolean' ? 'co' : isPhone }
}

export const useCleave = (props, el, emit) => {
  let options = {}
  if (props.isCard) options = optionsIsCard()
  else if (props.isDate) options = optionsIsDate(props.isDate)
  else if (props.isNumber) options = optionsIsNumber(props.isNumber)
  else if (props.isPhone) options = optionsIsPhone(props.isPhone)
  new Cleave(el, {...options, onValueChanged: ({ target }) => {
    emit('input', target.value)
  }})
  return false
}

export default useCleave
