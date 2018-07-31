const prefix = 'PCFOLLOW_TEST'

export default {
  getItem: (key) => {
    return localStorage.getItem(`${prefix}_${key}`)
  },
  setItem: (key, value) => {
    return localStorage.setItem(`${prefix}_${key}`, value)
  },
  removeItem: (key) => {
    return localStorage.removeItem(`${prefix}_${key}`)
  },
  clear: () => {
    return localStorage.clear()
  }
}
