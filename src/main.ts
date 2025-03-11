import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


(window as any).scoreValue = 0;
const app = createApp(App);
app.use(router);
app.mount('#app');
