import { createApp } from 'vue';
import App from './app/index.vue';
import { router } from './router';
import './index.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
