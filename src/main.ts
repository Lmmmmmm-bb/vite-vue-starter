import { createApp } from 'vue';

import App from './app/index.ts';
import { router } from './router/index.ts';
import { pinia } from './stores/index.ts';

import 'uno.css';
import 'virtual:unocss-devtools';
import '@unocss/reset/tailwind.css';
import './styles/index.css';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
