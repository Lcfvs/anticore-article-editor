import {listen, on} from '../../../dom';

function onClick(event) {

}

on('form article .options button.edit', function (element, next) {
  listen('click', element, onClick);

  next();
});