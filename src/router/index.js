

import {createRouter, createWebHistory} from "vue-router";
import homeComponent from "@/public/pages/home.component.vue";
import categorylistComponent from "@/categorylist/pages/category-list.component.vue";
const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/home', component: homeComponent, meta: { title: 'Home' }, },
        { path: '/category', component: categorylistComponent, meta:{title:'Category'},},
        { path: '/',  redirect: '/home' }
    ]

});

router.beforeEach((to, from, next) => {

    let baseTitle = 'StyleShare';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();

});

export default router;

