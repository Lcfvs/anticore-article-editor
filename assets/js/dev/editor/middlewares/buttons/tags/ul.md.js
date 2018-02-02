import {on} from '../../../dom/on';

on('button.add.ul', function () {
  return function (element, next) {

    next();
  };
}());