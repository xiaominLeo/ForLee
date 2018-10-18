import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoveYou from '@/components/LoveYou'
import Welcome from '@/components/Welcome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/LoveYou',
      name: 'LoveYou',
      component: LoveYou
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
