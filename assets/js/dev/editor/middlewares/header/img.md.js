import {anticore} from 'anticore';
import {listenImg} from '../../core/listenImg';

anticore.on('article header img', function (element, next) {
  listenImg(element);

  next();
});