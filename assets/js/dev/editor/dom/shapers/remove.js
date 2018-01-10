export function remove(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return node;
}