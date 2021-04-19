import { createApp } from 'vue';
import store from '~/store';
import Main from '~/screens/main.vue';

// import scss
import '~/scss/app.scss';

const app = createApp(Main)
  .use(store)
  .mount('#app');
