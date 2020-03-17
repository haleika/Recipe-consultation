import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import detail from '@/pages/detail'
import classify from '@/pages/classify'
import myInfo from '@/pages/myInfo'
import search from '@/pages/search'
import collection from '@/pages/collection'

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
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
