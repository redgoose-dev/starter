import { createApp } from 'vue';
import App from './app.vue';

// set stylesheet
import './assets/scss/main.scss';

/** @var {boolean} DEBUG */

// set debug
window.DEBUG = !!DEBUG;

createApp(App).mount('#app');
