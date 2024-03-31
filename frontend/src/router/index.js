import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        name : "Home",
        path : "/",
        component : () => import("../views/Home.vue")

    },

 {
        name : "Login",
        path : "/Login",
        component : () => import("../views/Login.vue")
 },
 {
        name : "Movie",
        path : "/movies",
        component : () => import("../views/Movie.vue")
 }       

]
const router = createRouter({
    routes,
    history : createWebHashHistory()
})
 export default router