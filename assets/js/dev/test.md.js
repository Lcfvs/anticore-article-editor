import {one} from './editor/dom/queries';
import {on} from './editor/dom';
import {listenClick} from './editor/dom/listeners';
import test from './test.js';

function onOpen() {
  test(print);
  main.appendChild(section);
}

function onClose() {
  fragment.appendChild(section);
}

function print(node) {
  var div = one().createElement('div');
  div.appendChild(node);
  var code = div.innerHTML.replace(/^<div>(.*)<\/div>/, '$1');
  var formatted = '';
  var reg = /(>)(<)(\/*)/g;
  code = code.replace(reg, '$1\r\n$2$3');
  var pad = 0;

  code.split('\r\n').forEach(function(node) {
    var indent = 0;
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

    var padding = '';
    for (var i = 0; i < pad; i++) {
      padding += '  ';
    }

    formatted += padding + node + '\r\n';
    pad += indent;
  });

  pre.innerHTML = formatted.replace(/</g, '&lt;');
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