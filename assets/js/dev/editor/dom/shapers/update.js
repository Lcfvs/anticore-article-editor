import {isObject} from '../../utils';
import {listen} from '../listeners';

export function update(element, config) {
  if (isObject(config)) {
    Object.keys(config).forEach(function(name) {
      let
      value = config[name];

      if (name.substr(0, 2) === 'on') {
        listen(name.substr(2).toLowerCase(), element, value);
      } else if (name === 'style' && isObject(value)) {
        Object.keys(value).forEach(function(name) {
          element.style[name] = value[name];
        });
      } else if (name === 'dataset' && isObject(value)) {
        Object.keys(value).forEach(function(name) {
          element.dataset[name] = value[name];
        });
      } else if (name === 'text') {
        element.innerHTML = '';
        element.appendChild(element.ownerDocument.createTextNode(value));
      } else if (name === 'parent') {
        value.parentNode.insertBefore(element, value);
      } else if (name === 'next') {
        value.appendChild(element);
      } else {
        element.setAttribute(name, value);
      }
    });
}
}