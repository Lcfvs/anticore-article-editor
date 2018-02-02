import {on} from '../../../dom/on';

on('button.add.ol', function () {
  return function (element, next) {

    next();
  };
}());