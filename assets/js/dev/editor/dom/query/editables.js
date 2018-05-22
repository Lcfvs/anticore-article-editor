import { all } from 'anticore/dom/query/all'
import { closest } from 'anticore/dom/query/closest'

export function editables (element) {
  return all('[contenteditable="true"]', closest('article', element))
}
