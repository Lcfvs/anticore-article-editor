import {on} from '../../dom';
import {listenA} from '../../core';

on('a[data-href]', function (element, next) {console.log(element)
  listenA(element);
  next();
});