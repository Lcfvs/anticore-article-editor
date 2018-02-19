import {anticore} from 'anticore';
import {listenP} from '../../../core/listenP';

anticore.on('section.quiz p[contenteditable=true]', function (element, next) {
  listenP(element);
  next();
});