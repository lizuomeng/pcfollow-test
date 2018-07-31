import { Placeholder } from './utils'

export default {
  path: '/item',
  component: Placeholder,
  children: [
    {
      name: 'itemCreate',
      path: 'create',
      component: resolve => require(['../pages/item/new'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
}