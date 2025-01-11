import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Assuming appData is available globally
const appData = JSON.parse(document.getElementById('app').getAttribute('data-appdata'));

app.provide('appData', appData);

app.mount('#app');
