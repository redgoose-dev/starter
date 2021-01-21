import { initCustomEvent } from '~/libs/util';
import App from './App.svelte';

// import common css
import './assets/scss/common.scss';

// init custom event
initCustomEvent();

// create app component
const app = new App({
  target: document.body,
});

export default app;
