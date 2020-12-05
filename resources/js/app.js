require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        msg: 'test'
    },
    router
});
