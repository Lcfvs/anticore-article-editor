import {all} from 'anticore/dom/query/all';

export function styles(node) {
  return all('b, i, s, u', node);
}