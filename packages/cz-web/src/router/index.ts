import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/recommend',
    children: [],
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Layout,
    children: [
      {
        path: '/recommend',
        component: () => import('@/views/recommend/index.vue'),
      },
      {
        path: '/recommend/xiaohongshu',
        component: () => import('@/views/recommend/xiaohongshu.vue'),
      },
    ],
  },
  {
    path: '/template',
    component: Layout,
    name: 'template',
    children: [
      {
        path: '/template',
        component: () => import('@/views/template/index.vue'),
      },
    ],
  },
  {
    path: '/material',
    component: Layout,
    name: 'material',
    children: [
      {
        path: '/material',
        component: () => import('@/views/material/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
      },
    ],
  },
]

// 导出路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
})
