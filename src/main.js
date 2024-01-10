import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Assuming router is defined in a separate file

// const app = createApp(App);
// app.use(router);
// app.mount('#app');
createApp(App).use(router).mount('#app');