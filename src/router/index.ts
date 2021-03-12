import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layout/_Basic.vue';

export const routes = [{
  path: '/',
  name: 'Home',
  redirect: '/index',
  component: BasicLayout,
  meta: { title: '工作台', icon: 'DashboardOutlined' },
  children: [{
    path: '/index',
    name: 'index',
    meta: { title: '工作台', icon: 'LineChartOutlined' },
    component: () => import('@/views/Main/Home.vue'),
  },{
    path: '/dengji',
    name: 'dengji',
    meta: { title: '修车登记', icon: 'FormOutlined' },
    component: () => import('@/views/Main/Dengji.vue'),
  }]
},{
  path: '/404',
  name: '404',
  component: () => import('@/views/Exception.vue'),
  hidden: true
},
{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router