import {createRouter, createWebHistory} from "vue-router";
import homeComponent from "@/public/pages/home.component.vue";
import ShippingListComponent from "@/shippinglist/components/shipping-list.component.vue";
import LoginComponent from "@/public/pages/login.component.vue";
import RegisterComponent from "@/public/pages/register.component.vue";
import productPostComponent from "@/productpost/components/product-post-component.vue";
import subscriptionComponent from "@/public/pages/subscription.component.vue";
import itemCardComponent from "@/transactions/components/item-card.component.vue";
import categoryListComponent from "@/categorylist/pages/category-list.component.vue";
import productDetailsComponent from "@/details/components/product-details.component.vue";
import productListComponent from "@/products/components/product-list.component.vue";
import createCategoryComponent from "@/categorylist/pages/CreateCategory.component.vue";
import updateCategoryComponent from "@/categorylist/pages/UpdateCategory.component.vue";
import deleteCategoryComponent from "@/categorylist/pages/DeleteCategory.component.vue";
import getFavoriteCategoriesComponent from "@/categorylist/pages/GetFavoriteCategories.component.vue";
import getCategoryByIdComponent from "@/categorylist/pages/GetCategoryById.component.vue";


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
        { path: '/product-list', component: productListComponent, meta:{title:'ProductList'},},
        { path: '/category', component: categoryListComponent, meta:{title:'Category'},},
        { path: '/product-detail', component: productDetailsComponent, meta:{title:'ProductDetails'},},

        { path: '/category/create', component: createCategoryComponent, meta: { title: 'Create Category' } },
        { path: '/category/update', component: updateCategoryComponent, meta: { title: 'Update Category' } },
        { path: '/category/delete', component: deleteCategoryComponent, meta: { title: 'Delete Category' } },
        { path: '/category/favorites', component: getFavoriteCategoriesComponent, meta: { title: 'Favorite Categories' } },
        { path: '/category/getById', component: getCategoryByIdComponent, meta: { title: 'Get Category by ID' } },
        { path: '/',  redirect: '/home' }
    ]

});

router.beforeEach((to, from, next) => {

    let baseTitle = 'StyleShare';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();

});

export default router;

