import {one} from 'anticore-tools/dom/queries/one';
import {cut} from './editor/dom/shapers/cut';

export default function (print) {
  let
  b = one('article header p b');

  print(cut(b.firstChild, 3));
}