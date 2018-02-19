import {nodeName} from 'anticore/dom/info/nodeName';
import {isEmpty} from 'anticore/dom/info/isEmpty';
import {indexOf} from 'anticore/primitive/array/indexOf';

export function isTrailingStyle(node) {
  return node
  && indexOf(['b', 'i', 's', 'u'], nodeName(node)) > - 1
  && isEmpty(node);
}