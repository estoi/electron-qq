// @unocss-include

import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/message',
    component: Layout,
    children: [
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/main/message/index.vue'),
        meta: {
          icon: 'xiaoxi',
          trigger: 'router',
        },
      },
      {
        path: 'friend',
        name: 'Friend',
        component: () => import('@/views/main/friend/index.vue'),
        meta: {
          icon: 'haoyou',
          trigger: 'router',
        },
      },
      {
        path: 'zone',
        name: 'Zone',
        component: () => import('@/views/main/zone/index.vue'),
        meta: {
          icon: 'qzone',
          trigger: 'click',
        },
      },
      {
        path: 'channel',
        name: 'Channel',
        component: () => {},
        meta: {
          icon: 'pindao',
          trigger: 'click',
        },
      },
      {
        path: 'document',
        name: 'Document',
        component: () => {},
        meta: {
          icon: 'tengxunwendang',
          trigger: 'click',
        },
      },
      {
        path: 'control',
        name: 'Control',
        component: () => {},
        meta: {
          icon: 'gengduo',
          trigger: 'click',
        },
      },
    ],
  },
]

export default routes
