import {getClosestOrMatches, getSelection, listen, on, one} from '../../../dom';
import {HEADINGS as HEADINGS_SELECTOR} from '../../../selectors';

function onClick(event) {
  let
  selection = getSelection();

  if (getClosestOrMatches(HEADINGS_SELECTOR, selection.anchorNode)) {
    return;
  }

  if (getClosestOrMatches(HEADINGS_SELECTOR, selection.focusNode)) {
    return;
  }

  // @todo enable/disable button
  one().execCommand('bold');
}

on('form article .options button.bold', function (element, next) {
  listen('click', element, onClick);

  next();
});