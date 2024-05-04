import {createRouter, createWebHistory} from "vue-router";
import homeComponent from "@/public/pages/home.component.vue";
import ShippingListComponent from "@/shippinglist/components/shipping-list.component.vue";
import LoginComponent from "@/public/pages/login.component.vue";
import RegisterComponent from "@/public/pages/register.component.vue";
import productPostComponent from "@/productpost/components/product-post-component.vue";
import subscriptionComponent from "@/public/pages/subscription.component.vue";
import itemCardComponent from "@/transactions/components/item-card.component.vue";
import categoryListComponent from "@/categorylist/pages/category-list.component.vue";
const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/home', component: homeComponent, meta: { title: 'Home' }, },
        { path: '/envios', component: ShippingListComponent, meta:{title:'Envios'},},
        { path: '/login', component: LoginComponent, meta:{title:'Login'},},
        { path: '/register', component: RegisterComponent, meta:{title:'Register'},},
        { path: '/post', component: productPostComponent, meta:{title:'Post'},},
        { path: '/subscription', component: subscriptionComponent, meta:{title:'Subscription'},},
        { path: '/buy', component: itemCardComponent, meta:{title:'Buy'},},
        { path: '/category', component: categoryListComponent, meta:{title:'Category'},},
        { path: '/',  redirect: '/home' }
    ]

});

router.beforeEach((to, from, next) => {

    let baseTitle = 'StyleShare';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();

});

export default router;
