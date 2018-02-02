import {all} from 'anticore-tools/dom/queries/all';
import {closest} from 'anticore-tools/dom/queries/closest';

export function editables(element) {
  return all('[contenteditable="true"]', closest('article', element));
}