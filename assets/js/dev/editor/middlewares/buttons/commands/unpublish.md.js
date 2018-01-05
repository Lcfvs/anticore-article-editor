import {listen, on} from '../../../dom';

function onClick(event) {

}

on('form article .options button.unpublish', function (element, next) {
  listen('click', element, onClick);

  next();
});