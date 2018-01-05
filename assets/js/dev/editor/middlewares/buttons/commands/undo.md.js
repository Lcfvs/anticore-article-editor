import {listen, on} from '../../../dom';

function onClick(event) {
  event.target.ownerDocument.execCommand('undo');
}

on('form article .options button.undo', function (element, next) {
  listen('click', element, onClick);

  next();
});