import Vue from 'vue'
import Router from 'vue-router'
import Master from '../layout/Master'
import HelloWorld from '../components/HelloWorld'
import Nodes from '../components/Nodes'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: `/`,
      component: Master,
      children: [
        {
          path: `/`,
          name: `home`,
          component: HelloWorld
        },
        {
          path: `/nodes`,
          name: `nodes`,
          component: Nodes
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
