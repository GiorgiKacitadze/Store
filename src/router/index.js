import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GetProductID from "../components/GetProductID.vue";
import ModalVueVue from "@/components/ModalVue.vue";

const routes = [
    {
        path: "/:category?",
        name: "home",
        component: HomeView,
    },
    {
        path: "/GetProductID/:productID",
        name: "FullProductId",
        component: GetProductID,
    },
    {
        path: "/cart",
        name: "ModalVue",
        component: ModalVueVue,
    },

    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    
});



export default router;
