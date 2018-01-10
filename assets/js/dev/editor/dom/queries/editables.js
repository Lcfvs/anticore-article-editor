import {all} from '.';
import {closest} from './closest';

export function editables(element) {
  return all('[contenteditable="true"]', closest('article', element));
}