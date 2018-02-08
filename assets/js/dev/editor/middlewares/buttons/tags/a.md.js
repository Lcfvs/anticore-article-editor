import {anticore} from 'anticore';
import {current} from 'anticore/dom/selection/current';
import {matches} from 'anticore/dom/info/matches';
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
  return matches('[contenteditable=true]', element)
  && !matches('h1, a, b, i, s, o', element);
}

anticore.on('.options button.anchor', function (element, next) {
  onClick(element, onClickEvent);

  next();
});