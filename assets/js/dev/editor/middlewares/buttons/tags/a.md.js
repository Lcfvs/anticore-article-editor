import {anticore} from 'anticore';
import {anchor} from 'anticore/dom/selection/anchor';
import {isCollapsed} from 'anticore/dom/selection/isCollapsed';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {prevent} from 'anticore/dom/emitter/prevent';
import {closest} from 'anticore/dom/query/closest';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';

function onClickEvent(event) {
  let
  node = anchor.node();

  return (
    !isCollapsed()
    || !closestOrSelf('[contenteditable=true]', node)
    || closestOrSelf('h1, a, b, i, s, o', node)
    || !closest('article > section, article footer .sources', node)
  ) && prevent(event);
}

anticore.on('form.editor .options button.anchor', function (element, next) {
  onClick(element, onClickEvent);

  next();
});