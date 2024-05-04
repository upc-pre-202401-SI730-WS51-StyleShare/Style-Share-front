import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
import 'primeflex/primeflex.css'

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card',Card)
    .mount('#app')
