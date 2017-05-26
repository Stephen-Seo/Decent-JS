// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Nav from './components/Nav'
import Login from './components/Login'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import Icon from 'vue-awesome/icons'

/* Config */
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLodash, lodash)

/* Components */
Vue.component('nav-view', Nav)
Vue.component('login-modal', Login)
Vue.component('icon', Icon)

/* Main Vue Instance */
var decent = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
console.dir(decent)
