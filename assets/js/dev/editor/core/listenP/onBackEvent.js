import {current} from 'anticore/dom/selection/current';
import {previous} from 'anticore/dom/selection/previous';
import {starts} from 'anticore/dom/selection/starts';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {isText} from 'anticore/dom/info/isText';
import {isFirstP} from '../../dom/info/isFirstP';
import {isHeadingNode} from '../../dom/info/isHeadingNode';
import {editables} from '../../dom/query/editables';
import {parent} from 'anticore/dom/query/parent';
import {nodes} from 'anticore/dom/query/nodes';

export function onBackEvent(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  node;

  if (!selection.isCollapsed) {
    return;
  }

  if (!starts(target)) {
    return;
  }

  if (!isFirstP(target)) {
    node = previous(target, editables(target));

    if (node && !isHeadingNode(node) && anchor) {
      if (isText(node)) {
        node = parent(node);
      }

      appendAll(nodes(target), node);
      clean(node);
      remove(target);
    }
  }

  event.preventDefault();
}