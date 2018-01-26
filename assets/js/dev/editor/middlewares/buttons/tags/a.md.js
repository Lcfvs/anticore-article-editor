import {on} from '../../../dom';
import {listenClick} from '../../../dom/listeners';

function onClick(event) {
}

on('.options button.anchor', function (element, next) {
  listenClick(element, onClick);

  next();
});