import { Placeholder } from './utils'

export default {
  path: '/module',
  component: Placeholder,
  children: [
    {
      name: 'moduleCreate',
      path: 'create',
      component: resolve => require(['../pages/module/new'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
}