import {one} from 'anticore/dom/query/one';
import {firstNode} from 'anticore/dom/query/firstNode';
import {cut} from './editor/dom/tree/cut';

export default function (print) {
  let
  b = one('article header p b');

  print(cut(firstNode(b), 3));
}