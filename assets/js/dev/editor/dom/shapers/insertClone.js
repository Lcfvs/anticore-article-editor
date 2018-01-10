import {insert} from './index';
import {start} from '../selection';

export function insertClone(node, deep) {
  let
  clone = node.cloneNode(deep);

  insert(clone, node.nextSibling, node.parentNode);
  start(clone);

  return clone;
}