import {lastOrSelf} from '../queries';
import {select} from './select';
import {text} from '../infos';

export function end(node) {
  let
  last = lastOrSelf(node);

  select(last, text(last).length);

  return last;
}