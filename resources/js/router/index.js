export default [
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/data',
        name: 'Data',
        component: () => import('../pages/Data.vue')
    },
    {
        path: '/berita',
        name: 'Berita',
        component: () => import('../pages/Berita.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import('../pages/Faq.vue')
    }
];