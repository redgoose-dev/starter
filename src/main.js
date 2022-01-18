import App from './app.svelte'
// set stylesheet
import './assets/scss/main.scss';

/** @var {boolean} DEBUG */

// set debug
window.DEBUG = !!DEBUG;

const app = new App({
  target: document.getElementById('app')
})

export default app;
