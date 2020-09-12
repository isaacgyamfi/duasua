import Vue from 'vue';
import Chakra, { CThemeProvider } from '@chakra-ui/vue';
import App from './App.vue';
import router from './router';

Vue.use(Chakra);

new Vue({
  el: '#app',
  router,
  render: (h) => h(CThemeProvider, [h(App)]),
}).$mount();
