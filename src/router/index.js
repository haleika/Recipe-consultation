import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import detail from '@/pages/detail'
import classify from '@/pages/classify'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    }
  ]
})
