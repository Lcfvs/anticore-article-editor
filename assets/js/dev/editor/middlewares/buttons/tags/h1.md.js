import {on} from '../../../dom/on';

on('button.add.h1', function () {
  return function (element, next) {

    next();
  };
}());