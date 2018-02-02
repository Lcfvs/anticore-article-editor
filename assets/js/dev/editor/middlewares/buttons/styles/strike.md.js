import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';
import {isHeadingNode} from '../../../dom/infos/isHeadingNode';
import {one} from 'anticore-tools/dom/queries/one';
import {current} from 'anticore-tools/dom/selection/current';

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
  one().execCommand('strikeThrough');
}

on('form article .options button.strike', function (element, next) {
  listenClick(element, onClick);

  next();
});