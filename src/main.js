// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Nav from './components/Nav'
import Login from './components/Login'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
Vue.component('nav-view', Nav)
Vue.component('login-modal', Login)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
