import {onClick} from 'anticore/dom/emitter/on/onClick';
import {image} from '../../dom/node/modal/image';

export function listenImg(element) {
  onClick(element, image(element));
}