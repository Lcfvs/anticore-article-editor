import { nodeName } from 'anticore/dom/info/nodeName'

export function hasSameNodeName (original, target) {
  return nodeName(original) === nodeName(target)
}
