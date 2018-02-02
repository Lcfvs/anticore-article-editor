import {all} from 'anticore-tools/dom/queries/all';

export function styles(node) {
  return all('b, i, s, u', node);
}