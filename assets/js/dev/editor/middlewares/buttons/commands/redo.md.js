import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';

function onClick(event) {
  event.target.ownerDocument.execCommand('redo');
}

on('form article .options button.redo', function (element, next) {
  listenClick(element, onClick);

  next();
});