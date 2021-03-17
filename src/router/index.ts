import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layout/_Basic.vue';

export const routes = [{
  path: '/',
  name: 'Dashboard',
  redirect: '/index',
  component: BasicLayout,
  meta: { title: '工作台', icon: 'DashboardOutlined' },
  children: [{
    path: '/index',
    name: 'index',
    meta: { title: '工作台', icon: 'LineChartOutlined' },
    component: () => import('@/views/Dashboard/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '使用手册', icon: 'QuestionCircleOutlined' },
    component: () => import('@/views/Dashboard/About.vue'),
  }]
},
{
    path: '/main',
    name: 'Main',
    meta: { title: '业务', icon: 'AccountBookOutlined' },
    redirect: '/main/dengji',
    component: BasicLayout,
    children:[
      {
        path: '/main/dengji',
        name: 'dengji',
        meta: { title: '修车登记', icon: 'FormOutlined' },
        component: () => import('@/views/Main/Dengji.vue'),
      }
    ]
},
 {
  path: '/user/login',
  name: 'login',
  component: () => import('@/views/User/Login.vue'),
  meta: { title: '登录', },
  hidden: true
}, {
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