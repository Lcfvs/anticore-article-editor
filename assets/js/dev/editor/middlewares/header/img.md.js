import {on} from '../../dom';

on('article header img', function (element, next) {

  next();
});