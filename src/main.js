import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import 'sweet-alert/sweet-alert.css'
// import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(router).mount('#app')
