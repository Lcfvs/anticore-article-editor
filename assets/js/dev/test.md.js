import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {firstNode} from 'anticore/dom/query/firstNode';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import test from './test.js';
import {element} from 'anticore/dom/node/element';
import {html} from 'anticore/dom/tree/html';
import {append} from 'anticore/dom/tree/append';
import {toDOM} from 'anticore/primitive/string/toDOM';

function onOpen() {
  test(print);
  append(main, section);
}

function onClose() {
  append(fragment, section);
}

function print(node) {
  let
  div = element('div'),
  formatted = '',
  pad = 0;

  div.appendChild(node);

  html(div)
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

  html(pre, formatted
    .replace(/<br>/g, '<br />\n')
    .replace(/</g, '&lt;'));
}

const
main = one('main'),
fragment = toDOM(`<section class="dev">
    <h1>Test result</h1>
    <button class="closer" type="button">X</button>
    <pre></pre>
</section>`),
section = firstNode(fragment),
pre = one('pre', section);

onClick(one('.closer', section), onClose);

anticore.on('button.test', function (element, next) {
  onClick(element, onOpen);

  next();
});