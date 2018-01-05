import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import product from '@/pages/product'
import productDetail from '@/pages/productDetail'
import solution from '@/pages/solution'
import service from '@/pages/service'
import about from '@/pages/about'
import news from '@/pages/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },

    {
      path: '/solution',
      name: 'solution',
      component: solution
    },

    {
      path: '/service',
      name: 'service',
      component: service
    },

    {
      path: '/about',
      name: 'about',
      component: about
    },

    {
      path: '/news',
      name: 'news',
      component: news 
    }

  ]
})
