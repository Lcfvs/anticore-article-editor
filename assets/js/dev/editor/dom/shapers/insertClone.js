import {insert} from 'anticore-tools/dom/shapers/insert';
import {start} from 'anticore-tools/dom/selection/start';

export function insertClone(node, deep) {
  let
  clone = node.cloneNode(deep);

  insert(clone, node.nextSibling, node.parentNode);
  start(clone);

  return clone;
}