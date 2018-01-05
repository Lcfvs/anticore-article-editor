import {slice} from '.';

export function reverse(values) {
  values = slice(values);
  values.reverse();

  return values;
}