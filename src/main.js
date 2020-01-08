import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import animated from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
Vue.use(VueAwesomeSwiper).use(animated)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')