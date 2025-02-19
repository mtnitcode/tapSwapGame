import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
(window as any).scoreValue = 0;
createApp(App).use(router).mount('#app')
