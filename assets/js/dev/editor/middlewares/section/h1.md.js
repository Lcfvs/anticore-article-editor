import {anticore} from 'anticore';
import {listenH1} from '../../core/listenH1';

anticore.on('section h1[contenteditable=true]', function (element, next) {
  listenH1(element);
  next();
});