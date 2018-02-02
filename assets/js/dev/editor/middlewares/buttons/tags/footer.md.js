import {on} from '../../../dom/on';

on('.tags button.footer', function () {
  return function (element, next) {

    next();
  };
}());