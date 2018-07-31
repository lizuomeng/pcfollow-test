import { message } from 'vue-antd-ui'

export const processResponse = response => {
  return response
    .then(res => {
      return {
        ...res.data
      }
    })
    .catch(err => {
      console.log('err', err)
      message.error(err)
      return {
        ...err.response.data
      }
    })
}