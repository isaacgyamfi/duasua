import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/index.css';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount();
