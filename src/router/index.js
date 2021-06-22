import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/main-frame/index.vue'),
    },
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: () => import('../pages/main-frame/index.vue'),
    },
  ],
});

export default router;
