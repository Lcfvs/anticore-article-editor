export function lastOrSelf(node) {
  return node.lastChild
    ? lastOrSelf(node.lastChild)
    : node;
}