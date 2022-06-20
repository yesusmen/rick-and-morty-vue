
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from './pages/About.vue'

import DetailsCharacter from './pages/DetailsCharacter.vue'
import Home from './pages/Home.vue'
import Support from './pages/Support.vue'

const routes : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home' ,
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/support',
        name: 'Support',
        component: Support
    },
    {
        path: '/character/:id',
        name: 'Details',
        component: DetailsCharacter
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

