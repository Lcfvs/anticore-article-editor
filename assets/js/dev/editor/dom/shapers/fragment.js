import {one} from '../queries';

export function fragment() {
  return one().createDocumentFragment();
}