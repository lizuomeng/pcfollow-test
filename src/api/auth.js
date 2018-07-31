import { processResponse } from './utils'
import Vue from 'vue'

export default {
  login(params) {
    console.log('params', params)
    return processResponse(Vue.axios.post('/users/sign_in', { ...params }))
  },
  signUp(params) {
    console.log('params', params)
    return processResponse(Vue.axios.post('/users/sign_up', { ...params }))
  },
}