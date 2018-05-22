import { onClick } from 'anticore/dom/emitter/on/onClick'
import { figure } from '../../dom/node/modal/figure'

export function listenFigure (element) {
  onClick(element, figure(element))
}
