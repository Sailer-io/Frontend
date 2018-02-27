// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = `http://localhost:8000`

Vue.router = router
Vue.use(VueAuth, {
  auth: require(`@websanova/vue-auth/drivers/auth/bearer.js`),
  http: require(`@websanova/vue-auth/drivers/http/axios.1.x.js`),
  router: require(`@websanova/vue-auth/drivers/router/vue-router.2.x.js`)
})
/* eslint-disable no-new */
window.App = new Vue({
  el: `#app`,
  router,
  components: {App},
  template: `<App/>`
})
