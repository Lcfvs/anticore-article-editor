import {on} from '../../../dom/on';

on('button.add.li', function () {
  return function (element, next) {

    next();
  };
}());