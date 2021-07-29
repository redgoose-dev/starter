import * as util from '~/libs/util';
import '~/assets/scss/common.scss';

const $main = document.querySelector('main');

function renderHeading(message)
{
  if (!message) return;
  $main.innerHTML = `<h1>${message}</h1>`;
}

let messages = new Proxy({
  h1: 'Hello world',
}, {
  get: function(target, name)
  {
    return target[name];
  },
  set: function(obj, prop, value)
  {
    obj[prop] = value;
    renderHeading(value);
    return true;
  },
});

renderHeading(messages.h1);

util.sleep(3000).then(() => {
  messages.h1 = `Hello world REDGOOSE`;
});
