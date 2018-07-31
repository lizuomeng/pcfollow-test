import { processResponse } from './utils'
import Vue from 'vue'

export default {
  creatProject(params) {
    console.log('params', params)
    return processResponse(Vue.axios.post('/projects', { ...params }))
  }
}