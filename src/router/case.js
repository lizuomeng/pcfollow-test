import { Placeholder } from './utils'

export default {
  path: '/case',
  component: Placeholder,
  children: [
    {
      name: 'caseCreate',
      path: 'create',
      component: resolve => require(['../pages/case/new'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
}