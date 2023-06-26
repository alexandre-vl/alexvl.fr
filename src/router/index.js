import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
            /* children: [
                {
                    path: '/',
                    name: "home",
                    component: () => import('../views/Home.vue')
                }
            ] */
        },
        {
            path: '/password',
            name: 'password',
            component: () => import('../views/tools/Password.vue'),
        },
        {
            path: '/typing',
            name: 'typing',
            component: () => import('../views/tools/Typing.vue'),
        }
    ]
})

export default router
