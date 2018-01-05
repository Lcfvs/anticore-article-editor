import {listen, on} from '../../../dom';

function onClick(event) {

}

on('form article .options button.delete', function (element, next) {
  listen('click', element, onClick);

  next();
});