import Vue from 'vue';
import MgVue from './index';
import App from './App.vue';

Vue.use(MgVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
