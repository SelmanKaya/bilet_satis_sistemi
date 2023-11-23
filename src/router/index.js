import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        name : "homePage",
        path : "/",
        component : () => import("../views/homePage.vue")

    },
    {
        name : "spiderman",
        path : "/spiderman",
        component : () => import("../views/spiderman.vue")

},
{ 
        name : "titanic",
        path : "/titanic",
        component : ()=> import("../views/titanic.vue")

},
 {
        name : "faf",
        path : "/faf",
        component : () => import("../views/faf.vue")
 }       

]
const router = createRouter({
    routes,
    history : createWebHashHistory()
})
 export default router