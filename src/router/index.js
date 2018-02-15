import Vue from 'vue'
import Router from 'vue-router'
import Master from '../layout/Master'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Master',
      component: Master,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  console.log(authRequired)
  const authed = false
  if (authRequired && !authed) {
    next('/login')
  } else {
    next()
  }
})

export default router
