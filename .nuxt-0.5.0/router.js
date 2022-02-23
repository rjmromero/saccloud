import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b95e3170 = () => interopDefault(import('../pages/licencia/index.vue' /* webpackChunkName: "pages/licencia/index" */))
const _86124e3a = () => interopDefault(import('../pages/mi-factura/index.vue' /* webpackChunkName: "pages/mi-factura/index" */))
const _0fdd9cda = () => interopDefault(import('../pages/factura/_id.vue' /* webpackChunkName: "pages/factura/_id" */))
const _33001bb0 = () => interopDefault(import('../pages/licencia/_id.vue' /* webpackChunkName: "pages/licencia/_id" */))
const _2fc9026e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/licencia",
    component: _b95e3170,
    name: "licencia"
  }, {
    path: "/mi-factura",
    component: _86124e3a,
    name: "mi-factura"
  }, {
    path: "/factura/:id?",
    component: _0fdd9cda,
    name: "factura-id"
  }, {
    path: "/licencia/:id",
    component: _33001bb0,
    name: "licencia-id"
  }, {
    path: "/",
    component: _2fc9026e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
