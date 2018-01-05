export function getLastDescendantOrSelf(node) {
  return node.lastChild
    ? getLastDescendantOrSelf(node.lastChild)
    : node;
}