import Storage from './storage'
import api from '../api/auth'

const Auth = {
  isAuthenticated: () => {
    return !!Auth.getToken()
  },
  login: ({ Email, Password }) => {
    Auth.logout()
    return api.login({ Email, Password }).then(data=> {
      if (data && data.jwt) {
        Auth.setToken(data.jwt)
        console.log('我登录好了', data.jwt)
      }
    })
  },
  logout: () => {
    Storage.removeItem('ACCESS_TOKEN')
  },
  setToken: (accessToken) => {
    Storage.setItem('ACCESS_TOKEN', accessToken)
  },
  getToken: () => {
    return Storage.getItem('ACCESS_TOKEN')
  }
}

export default Auth
