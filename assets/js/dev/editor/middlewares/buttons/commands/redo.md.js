import {listen, on} from '../../../dom';

function onClick(event) {
  event.target.ownerDocument.execCommand('redo');
}

on('form article .options button.redo', function (element, next) {
  listen('click', element, onClick);

  next();
});