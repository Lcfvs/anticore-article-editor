import { anticore } from 'anticore'

anticore.debug.onMiddleware = function (selector, listener) {
  console.log({
    listener: listener,
    selector: selector
  })
}

anticore.debug.onMatch = function (selector, listener, element, loaded) {
  console.log({
    element: element,
    listener: listener,
    loaded: loaded,
    selector: selector
  })
}
