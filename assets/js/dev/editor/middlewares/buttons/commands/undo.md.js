import {anticore} from 'anticore';
import {onClick} from 'anticore/dom/emitter/on/onClick';

function onClickEvent(event) {
  event.target.ownerDocument.execCommand('undo');
}

anticore.on('form article .options button.undo', function (element, next) {
  onClick(element, onClickEvent);

  next();
});