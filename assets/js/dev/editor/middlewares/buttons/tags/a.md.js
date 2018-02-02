import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';

function onClick(event) {
}

on('.options button.anchor', function (element, next) {
  listenClick(element, onClick);

  next();
});