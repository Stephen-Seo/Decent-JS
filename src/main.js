// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

/* Component imports */
import App from './App'
import Nav from './components/Nav'
import Side from './components/Side'
import Subs from './components/Subs'
import Login from './components/Login'
import CreateSub from './components/CreateSub'
import CreateThread from './components/CreateThread'

/* Config */
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLodash, lodash)

/* Components */
Vue.component('nav-view', Nav)
Vue.component('login-modal', Login)
Vue.component('sidebar', Side)
Vue.component('subsbar', Subs)
Vue.component('icon', Icon)
Vue.component('create-sub-modal', CreateSub)
Vue.component('create-thread-modal', CreateThread)

/* Main Vue Instance */
var decent = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, Icon },
  data: {

  }
})
console.dir(decent)
