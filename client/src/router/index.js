// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'

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
          name: 'Dashboard',
          component: () => import(`../views/Dashboard`),
        },
        {
          path: 'components/profile',
          name: 'UserProfile',
          component: () => import(`../views/UserProfile`),
        },
        {
          path: 'tables/regular',
          name: 'Regular Tables',
          component: () => import(`../views/RegularTables`),
        },
        {
          path: 'maps/google',
          name: 'Google Maps',
          component: () => import(`../views/GoogleMaps`),
        },
        {
          path: 'components/notifications',
          name: 'Notifications',
          component: () => import(`../views/Notifications`),
        },
        {
          path: 'components/icons',
          name: 'Icons',
          component: () => import(`../views/Icons`),
        },
        {
          path: 'components/typography',
          name: 'Typography',
          component: () => import(`../views/Typography`),
        },
        {
          path: 'components/realtime',
          name: 'RealTime',
          component: () => import(`../views/RealTime`)
        },
        {
          path: 'components/realTimeRouter',
          name: 'realTimeRouter',
          component: () => import(`../views/realTimeRouter/realTimeRouter`),
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
// })

export default router
