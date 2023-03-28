import { createApp } from 'vue';

import App from './app';
import { router } from './router';

import 'uno.css';
import 'virtual:unocss-devtools';
import '@unocss/reset/tailwind.css';
import './index.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
