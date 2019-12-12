import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';

import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/styles/main.scss';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

Vue.use(Buefy);
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  components: {
    App,
  },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
