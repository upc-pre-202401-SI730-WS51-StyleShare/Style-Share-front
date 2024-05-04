import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import router from "@/router/index.js";

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
import 'primeflex/primeflex.css'
import Row from "primevue/row";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Avatar from "primevue/avatar";


createApp(App)
    .use(PrimeVue,{ripple:true})
    .use(router) //importante para que funcionen las rutas
    .component('pv-card',Card)
    .component('pv-avatar', Avatar)
    .component('pv-button',Button)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
