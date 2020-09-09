import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false;

new Vue({
  router,
 render: h => h(App)
//   render: h => h('h2',{'class':'box'},['Hello World!'])
}).$mount('#app');
