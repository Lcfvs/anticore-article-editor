import {attr} from 'anticore/dom/tree/attr';
import {text} from 'anticore/dom/tree/text';

export function onHoverEvent(event) {
  let
  target = event.target,
  href = attr(target, 'href'),
  title = attr(target, 'title'),
  text = text(target);

  event.preventDefault();
}