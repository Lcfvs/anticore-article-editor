import {nodeName} from 'anticore-tools/dom/infos/nodeName';
import {isEmpty} from 'anticore-tools/dom/infos/isEmpty';

export function isTrailingStyle(node) {
  return ['b', 'i', 's', 'u'].indexOf(nodeName(node)) > - 1
  && isEmpty(node);
}