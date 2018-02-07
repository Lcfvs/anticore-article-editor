import {anticore} from 'anticore';
import {onClick} from 'anticore/dom/emitter/on/onClick';

function onClickEvent(event) {
}

anticore.on('.options button.anchor', function (element, next) {
  onClick(element, onClickEvent);

  next();
});