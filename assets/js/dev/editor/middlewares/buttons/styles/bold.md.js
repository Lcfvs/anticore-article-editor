import {on} from '../../../dom';
import {listenClick} from '../../../dom/listeners';
import {isHeadingNode} from '../../../dom/infos';
import {one} from '../../../dom/queries';
import {current} from '../../../dom/selection';

function onClick(event) {
  let
  selection = current();

  if (isHeadingNode(selection.anchorNode)) {
    return;
  }

  if (isHeadingNode(selection.focusNode)) {
    return;
  }

  // @todo enable/disable button
  one().execCommand('bold');
}

on('form article .options button.bold', function (element, next) {
  listenClick(element, onClick);

  next();
});