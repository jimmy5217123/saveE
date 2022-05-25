// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import(`@/layouts/default/Index`),
      children:[
        {
          path: '',
          name: 'RealTime',
          component: () => import(`../views/RealTime`),
        },
        {
          path: 'realTimeRouter',
          name: 'realTimeRouter',
          component: () => import(`../views/realTimeRouter/RealTimeRouter`),
          children: [
            {
              path: '',
              name: 'info',
              component: () => import(`../views/realTimeRouter/Info`)
            },
            {
              path: 'history',
              name: 'history',
              component: () => import(`../views/realTimeRouter/History`)
            }
          ]
        }
      ]
    }
  ]
})


export default router
