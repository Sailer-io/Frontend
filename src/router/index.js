import Vue from 'vue'
import Router from 'vue-router'
import Master from '../layout/Master'
import HelloWorld from '../components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Master,
      children: [
        {
          path: `/`,
          component: HelloWorld
        }
      ]
    },
    {
      path: `/login`,
      name: `login`,
      component: Login
    }
  ]
})

export default router
