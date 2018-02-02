import {current} from 'anticore-tools/dom/selection/current';
import {previous} from 'anticore-tools/dom/selection/previous';
import {starts} from 'anticore-tools/dom/selection/starts';
import {appendAll} from 'anticore-tools/dom/shapers/appendAll';
import {clean} from '../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';
import {isText} from 'anticore-tools/dom/infos/isText';
import {isFirstP} from '../../dom/infos/isFirstP';
import {isHeadingNode} from '../../dom/infos/isHeadingNode';
import {editables} from '../../dom/queries/editables';

export function onBack(event) {
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
        node = node.parentNode;
      }

      appendAll(target.childNodes, node);
      clean(node);
      remove(target);
    }
  }

  event.preventDefault();
}