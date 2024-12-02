import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: {
                        requiresAuth: true
                      },
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/machine',
                    name: 'machine',
                    component: () => import('@/views/Machine.vue')
                }
            ]
        },
        {
            path: '/machine',
            component: AppLayout,
            children: [
                {
                    path: '/machine/input',
                    name: 'input',
                    meta: {
                        requiresAuth: true
                      },
                    component: () => import('@/views/MachineInput.vue')
                },
                {
                    path: '/machine/detail',
                    name: 'profile',
                    meta: {
                        requiresAuth: true
                      },
                    component: () => import('@/views/MachineProfile.vue')
                }
            ]
        },
        {
            path: '/dt',
            component: AppLayout,
            children: [
                {
                    path: '/dt',
                    name: 'dt',
                    meta: {
                        requiresAuth: true
                      },
                    component: () => import('@/views/DigitalTwin.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/auth/Login.vue')
        }

    ]
});

router.beforeEach((to, from, next) => {
    const local_token = localStorage.getItem('token');
    const session_token = sessionStorage.getItem('token');

    if (to.name === 'login' && (local_token || session_token)) {
        return next({ name: 'dashboard' }); 
    } else if (to.name !== 'login' && !(local_token || session_token)) {
        return next({ name: 'login' }); 
    }

    if (to.meta.requiresAuth) {
        const local_token = localStorage.getItem('token');
        const session_token = sessionStorage.getItem('token');
      if ((local_token || session_token)) {
        next();
      } else {
        next('/login');
      }
    } else {
      next();
    }
  });


export default router;
