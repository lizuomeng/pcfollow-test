// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Antd from 'vue-antd-ui'
import App from './App'
import 'vue-antd-ui/dist/antd.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Auth } from '@/utils'

Vue.use(Antd)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.axios = axios.create({
  baseURL: 'http://172.25.10.2:8088/v1/',
  withCredentials: true
})

Vue.axios.interceptors.request.use((request) => {
  request.headers.common['Accept'] = 'application/json'
  request.headers.common['Content-type'] = 'application/json'

  if (Auth.isAuthenticated()) {
    request.headers.common['Authorization'] = `Bearer ${Auth.getToken()}`
  } else {
    delete request.headers.common['Authorization']
  }

  return request
}, (error) => {
  return Promise.reject(error)
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
