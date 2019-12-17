import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store.js'

import MintUI from 'mint-ui'
import "@/assets/reset.css"
import "@/assets/glob.css"
import "@/assets/iconfont/iconfont.css"
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(MintUI)
Vue.use(ElementUI);
Vue.config.productionTip = false

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
