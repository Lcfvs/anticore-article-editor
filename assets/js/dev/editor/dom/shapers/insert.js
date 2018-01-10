export function insert(node, refNode, parent) {
  if (refNode) {
    refNode.parentNode.insertBefore(node, refNode);
  } else {
    parent.appendChild(node);
  }

  return node;
}