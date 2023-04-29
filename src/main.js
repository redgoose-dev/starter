import { sleep } from '~/libs/util.js'
import '~/assets/scss/main.scss'

const $main = document.querySelector('main')

function renderHeading(message)
{
  if (!message) return
  $main.innerHTML = `<h1>${message}</h1>`
}

let messages = new Proxy({
  h1: 'Hello world',
}, {
  get: function(target, name)
  {
    return target[name]
  },
  set: function(obj, prop, value)
  {
    obj[prop] = value
    renderHeading(value)
    return true
  },
})

renderHeading(messages.h1)

sleep(3000).then(() => {
  messages.h1 = `Hello world REDGOOSE`
})
