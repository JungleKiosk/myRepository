import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProjectsView from "../views/ProjectsView.vue"

/* ------------------------------------------------- */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/About",
            name: "about",
            component: AboutView
        },
        {
            path: "/project/:id",
            name: "project",
            component: ProjectsView
        },
    ]
})

export default router