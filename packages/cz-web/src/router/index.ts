import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import AIHomeLayout from '@/views/ai/layout/AiHome.vue'
import AiDesignLayout from '@/views/ai/layout/AiDesign.vue'

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
    path: '/ai',
    name: 'ai',
    redirect: '/ai/plaza',
    component: AIHomeLayout,
    children: [
      {
        path: '/ai/plaza',
        component: () => import('@/views/ai/plaza/index.vue'),
      },
      {
        path: '/ai/tools',
        component: () => import('@/views/ai/tools/index'),
      },
    ],
  },
  {
    path: '/aidesign',
    name: 'aidesign',
    redirect: '/ai/aidesign',
    component: AiDesignLayout,
    children: [
      {
        path: '/aidesign/txtToImg',
        component: () => import('@/views/ai/design/textToImg.vue'),
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
