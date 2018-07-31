import { Placeholder } from './utils'

export default {
  path: '/project',
  component: Placeholder,
  children: [
    {
      name: 'projectCreate',
      path: 'create',
      component: resolve => require(['../pages/project/new'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
}