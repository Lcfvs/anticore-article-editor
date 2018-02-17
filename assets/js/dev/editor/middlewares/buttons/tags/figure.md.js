import {anticore} from 'anticore';
import {current} from 'anticore/dom/selection/current';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';
import {onClick} from 'anticore/dom/emitter/on/onClick';

const
fetchFromEvent = anticore.fetchFromEvent;

function onClickEvent(event) {
  let
  selection = current(),
  anchor = selection.anchorNode;

  if (!selection.isCollapsed || !isValid(anchor)) {
    return;
  }

  fetchFromEvent(event);
}

function isValid(element) {
  return !!closestOrSelf('article section p', element);
}

anticore.on('.options button.figure', function (element, next) {
  onClick(element, onClickEvent);

  next();
});