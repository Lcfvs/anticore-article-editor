import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';

function onClick(event) {

}

on('form article .options button.delete', function (element, next) {
  listenClick(element, onClick);

  next();
});