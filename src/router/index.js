import Vue from 'vue';
import VueRouter from 'vue-router';
import About from "@/components/About";
import Home from "@/components/Home";
import Team from "@/components/Team";
Vue.use(VueRouter);

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/team', component: Team }
];

const router = new VueRouter({
    routes,
});

export default router;