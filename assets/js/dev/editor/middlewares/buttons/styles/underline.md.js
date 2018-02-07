import {anticore} from 'anticore';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {isHeadingNode} from '../../../dom/info/isHeadingNode';
import {one} from 'anticore/dom/query/one';
import {current} from 'anticore/dom/selection/current';

function onClickEvent(event) {
  let
  selection = current();

  if (isHeadingNode(selection.anchorNode)) {
    return;
  }

  if (isHeadingNode(selection.focusNode)) {
    return;
  }

  // @todo enable/disable button
  one().execCommand('underline');
}

anticore.on('form article .options button.underline', function (element, next) {
  onClick(element, onClickEvent);

  next();
});