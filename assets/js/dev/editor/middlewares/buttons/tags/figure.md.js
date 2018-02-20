import {anticore} from 'anticore';
import {closest} from 'anticore/dom/query/closest/index';
import {anchor} from 'anticore/dom/selection/anchor';
import {isCollapsed} from 'anticore/dom/selection/isCollapsed';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {prevent} from 'anticore/dom/emitter/prevent';

function onClickEvent(event) {
  let
  node = anchor.node();

  return (
    !isCollapsed()
    || !closestOrSelf('[contenteditable=true]', node)
    || closestOrSelf('h1, a, b, i, s, o', node)
    || !closest('article > section', node)
  ) && prevent(event);
}

anticore.on('form.editor .options button.figure', function (element, next) {
  onClick(element, onClickEvent);

  next();
});