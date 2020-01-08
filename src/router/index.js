import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  redirect: "/home",

}, {
  path: '/home',
  name: 'home',
  component: Home,
  meta: {
    footer_bar: true,
    title: "首页"
  }
}, {
  path: '/home/city',
  name: 'homeCity',
  component: () => import('@/views/home/homeCity/index.vue'),
  meta: {
    title: "城市列表"
  }
}, {
  path: '/home/search',
  name: 'homeSearch',
  component: () => import("../views/home/homeSearch"),
  meta: {
    title: "搜索"
  }
}, {
  path: '/movie',
  name: 'movie',
  component: () => import('@/views/movies/index.vue'),
  meta: {
    footer_bar: true,
    title: '电影'
  }
}, {
  path: '/more',
  name: 'more'
}]

const router = new VueRouter({
  routes
})

export default router