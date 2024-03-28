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
          badge: true,
        },
        children: [
          {
            path: 'chat',
            name: 'Chat',
            component: () => import('@/views/main/message/chat/index.vue'),
          },
        ],
      },
      {
        path: 'friend',
        name: 'Friend',
        component: () => import('@/views/main/friend/index.vue'),
        meta: {
          icon: 'haoyou',
          trigger: 'router',
          badge: false,
        },
      },
      {
        path: 'zone',
        name: 'Zone',
        component: () => import('@/views/main/zone/index.vue'),
        meta: {
          icon: 'qzone',
          trigger: 'click',
          badge: false,
        },
      },
      {
        path: 'channel',
        name: 'Channel',
        component: () => {},
        meta: {
          icon: 'pindao',
          trigger: 'click',
          badge: false,
        },
      },
      {
        path: 'document',
        name: 'Document',
        component: () => {},
        meta: {
          icon: 'tengxunwendang',
          trigger: 'click',
          badge: false,
        },
      },
      {
        path: 'control',
        name: 'Control',
        component: () => {},
        meta: {
          icon: 'gengduo',
          trigger: 'click',
          badge: false,
        },
      },
    ],
  },
]

export default routes
