export function remove(node) {
  if (node) {
    node.parentNode.removeChild(node);
  }

  return node;
}