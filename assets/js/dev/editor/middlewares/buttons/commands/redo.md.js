import {on} from '../../../dom';
import {listenClick} from '../../../dom/listeners';
import {one} from '../../../dom/selection';

function onClick(event) {
  one().execCommand('redo');
}

on('form article .options button.redo', function (element, next) {
  listenClick(element, onClick);

  next();
});