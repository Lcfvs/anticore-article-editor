import {on} from '../../../dom';
import {listenClick} from '../../../dom/listeners';
import {one} from '../../../dom/queries';

function onClick(event) {
  one.execCommand('undo');
}

on('form article .options button.undo', function (element, next) {
  listenClick(element, onClick);

  next();
});