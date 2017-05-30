import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SubView from '@/components/SubView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/s/:sub_name',
      name: 'SubView',
      component: SubView
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
