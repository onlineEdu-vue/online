// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/css/style.css'
import './assets/css/font.css'
Vue.config.productionTip = false
window.$bus= new Vue();
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
