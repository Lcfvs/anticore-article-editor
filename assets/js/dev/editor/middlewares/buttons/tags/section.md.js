import {on} from '../../../dom/on';

on('.tags button.section', function () {
  return function (element, next) {

    next();
  };
}());