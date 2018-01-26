import {one} from './editor/dom/queries';
import {cut} from './editor/dom/shapers';
import {current} from './editor/dom/selection';

export default function (print) {
  let
  b = one('article header p b');

  console.log(current());
  print(cut(b.firstChild, 3));
}