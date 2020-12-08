require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './router';
import admin from './admin';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'navbar__active'
});

const app = new Vue({
    el: '#app',
    data: {
        msg: 'test'
    },
    router
});

// mengaktifkan styling dynamic pada page admin js
admin();