import {on} from '../../../dom/on';

on('button.add.img', function () {
  return function (element, next) {

    next();
  };
}());