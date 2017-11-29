import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import product from '@/pages/product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/product',
      name: 'product',
      component: product
    },
    
  ],
  mode:"history"
})
