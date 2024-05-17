import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import i18n from './lang';
import router from './route';
import './assets/index.css';

const app = createApp(App);
// 使用pinia
app.use(createPinia());

// 国际化
app.use(i18n);

// 加载路由等
app.use(router);

app.mount('#app');
