import {
  createApp,
} from 'vue';

import App from './root.vue';

import './css/base.scss';

import router from './router/index';

const app = createApp(App);

app.use(router);

app.mount('#app');
