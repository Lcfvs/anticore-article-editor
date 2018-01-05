import anticore from 'anticore';

const
listenClickOrTap = anticore.utils.listenClickOrTap;

export function listen(event, node, listener, useCapture) {
  if (event === 'click') {
    listenClickOrTap(node, listener, useCapture);
  } else {
    node.addEventListener(event, listener, useCapture);
  }

  return node;
}