import {all} from 'anticore-tools/dom/queries/all';

export function returns(node) {
  return all('br', node);
}