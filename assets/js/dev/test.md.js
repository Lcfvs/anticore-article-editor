import {one} from 'anticore-tools/dom/queries/one';
import {on} from './editor/dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';
import test from './test.js';
import {element} from 'anticore-tools/dom/shapers/element';

function onOpen() {
  test(print);
  main.appendChild(section);
}

function onClose() {
  fragment.appendChild(section);
}

function print(node) {
  let
  div = element('div'),
  formatted = '',
  pad = 0;

  div.appendChild(node);

  div.innerHTML
    .replace(/^<div>(.*)<\/div>/, '$1')
    .replace(/(>)(<)(\/*)/g, '$1\r\n$2$3')
    .split('\r\n')
      .forEach(function(node) {
        let
        indent = 0,
        padding = '',
        i = 0;

        if (node.match( /.+<\/\w[^>]*>$/ )) {
          indent = 0;
        } else if (node.match( /^<\/\w/ )) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
          indent = 1;
        } else {
          indent = 0;
        }

        for (; i < pad; i++) {
          padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
      });

  pre.innerHTML = formatted
    .replace(/<br>/g, '<br />\n')
    .replace(/</g, '&lt;');
}

const
main = one('main'),
fragment = one().createRange()
  .createContextualFragment(`<section class="dev">
    <h1>Test result</h1>
    <button class="closer" type="button">X</button>
    <pre></pre>
</section>`),
section = fragment.firstChild,
pre = one('pre', section);

listenClick(one('.closer', section), onClose);

on('button.test', function (element, next) {
  listenClick(element, onOpen);

  next();
});