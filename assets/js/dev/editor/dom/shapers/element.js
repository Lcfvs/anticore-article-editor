import {one} from '../queries';
import {update} from './update';

export function element(tag, config) {
  return update(one().createElement(tag), config);
}