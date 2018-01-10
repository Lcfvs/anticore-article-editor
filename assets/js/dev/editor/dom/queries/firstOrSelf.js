export function firstOrSelf(node) {
  return node.firstChild
    ? firstOrSelf(node.firstChild)
    : node;
}