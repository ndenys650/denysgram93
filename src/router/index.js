import Vue from 'vue'
import Router from 'vue-router'
import BodySlide from '@/components/BodySlide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BodySlide',
      component: BodySlide
    }
  ]
})
