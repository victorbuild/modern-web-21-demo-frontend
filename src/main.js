import Vue from 'vue';
import 'bootstrap';
import axios from 'axios';
import App from './App.vue';
import router from './router';

window.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
