
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './router'

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
