import {on} from '../../../dom';
import {listenClick} from '../../../dom/listeners';

function onClick(event) {

}

on('form article .options button.edit', function (element, next) {
  listenClick(element, onClick);

  next();
});