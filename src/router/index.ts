import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const modules: any = import.meta.glob('./modules/**/*.ts', { eager: true })

// eslint-disable-next-line prefer-const
let routeModules: RouteRecordRaw[] = []

Object.keys(modules).forEach((key: any) => {
  const mod = modules[key].default || []
  const moduleList = Array.isArray(mod) ? [...mod] : [mod]
  routeModules.push(...moduleList)
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routeModules, ...routes],
})

export default router
