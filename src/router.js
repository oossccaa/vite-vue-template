import {createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/Home.vue') 
    },
    {
      path: '/admin',
      name: 'Admin',
      component: ()=>import('@/views/Admin.vue')
    }
  ]
})

export default router