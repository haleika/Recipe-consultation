import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import detail from '@/pages/detail'
import classify from '@/pages/classify'
import myInfo from '@/pages/myInfo'
import search from '@/pages/search'
import collection from '@/pages/collection'
import avatar from '@/pages/avatar'
import user from '@/pages/user'
import login from '@/components/login'
import regist from '@/components/regist'
import pinglun from '@/pages/pinglun'
import creation from '@/pages/creation'
import change from '@/pages/change'
import classData from '@/pages/classData'


Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/home' },
    {
      path: '/home',
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
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: avatar
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect:'/user/login',
      children:[
        {
          path:"login",
          name:login,
          component: login
        },
        {
          path:"regist",
          name:regist,
          component: regist
        }
      ]
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
    },
    {
      path: '/creation',
      name: 'creation',
      component: creation
    },
    {
      path: '/change',
      name: 'change',
      component: change
    },
    {
      path: '/classData',
      name: 'classData',
      component: classData
    }
  ]
})
