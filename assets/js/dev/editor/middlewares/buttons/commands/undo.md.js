import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';

function onClick(event) {
  event.target.ownerDocument.execCommand('undo');
}

on('form article .options button.undo', function (element, next) {
  listenClick(element, onClick);

  next();
});