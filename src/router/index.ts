import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layout/_Basic.vue';

export const routes = [{
  path: '/',
  name: 'Home',
  redirect: '/index',
  component: BasicLayout,
  meta: { title: '工作台', icon: 'line-chart' },
  children: [{
    path: '/index',
    name: 'index',
    meta: { title: '工作台', icon: 'line-chart' },
    component: () => import(/* webpackChunkName: "Main" */ '@/views/Main/Home.vue'),
  },{
    path: '/dengji',
    name: 'dengji',
    meta: { title: '修车登记', icon: 'line-chart' },
    component: () => import(/* webpackChunkName: "Main" */ '@/views/Main/Dengji.vue'),
  }]
},{
  path: '/404',
  name: '404',
  component: () => import(/* webpackChunkName: "404" */ '@/views/Exception.vue'),
  hidden: true
},
{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router