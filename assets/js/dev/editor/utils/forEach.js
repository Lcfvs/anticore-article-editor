import {slice} from './slice';

export function forEach(input, callback, thisArg) {
  let
  array = Array.isArray(input) ? input : slice(input),
  key = 0,
  length = array.length;

  for (;key < length;key += 1) {
    callback.call(thisArg, array[key], key, input);
  }
}