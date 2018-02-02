import {on} from '../../../dom/on';

on('button.add.header', function () {
  return function (element, next) {

    next();
  };
}());