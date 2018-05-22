import { anticore } from 'anticore'
import platform from 'platform'
import { global } from 'anticore/global'
import { request } from 'anticore/request'
import { one } from 'anticore/dom/query/one'
import { create } from 'anticore/primitive/object/create'

const window = global()

function log (error) {
  const data = create()

  data.columnNumber = error.columnNumber
  data.fileName = error.fileName
  data.lineNumber = error.lineNumber
  data.message = error.message
  data.platform = platform
  data.stack = error.stack.match(/(\w+:\/{2,3}[^\n]+)/g)
  data.type = error.constructor.name

  request(one('[data-log]').dataset.log, 'post', JSON.stringify(data))
    .header('Content-Type', 'application/json')
    .fetch()

  console.error(error, platform)
}

anticore.onError = log

window.addEventListener('error', function (event) {
  log(event.error)

  event.preventDefault()
})
