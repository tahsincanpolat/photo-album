import Home from '../views/Home.vue'

import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : Home
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;