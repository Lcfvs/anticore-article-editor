import {onClick} from 'anticore/dom/emitter/on/onClick';
import {anchor} from '../../dom/node/modal/anchor';

export function listenA(element) {
  onClick(element, anchor(element));
}