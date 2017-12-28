import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import product from '@/pages/product'
import productDetail from '@/pages/productDetail'
import solution from '@/pages/solution'


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
    },{
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },{
      path: '/solution',
      name: 'solution',
      component: solution
    }
    
  ],
  mode:"history"
})
