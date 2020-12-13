export default [
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue')
    },
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/data',
        name: 'Data',
        component: () => import('../pages/Data.vue')
    },
    {
        path: '/detail-data/:id',
        name: 'DetailData',
        component: () => import('../pages/DetailData.vue')
    },
    {
        path: '/berita',
        name: 'Berita',
        component: () => import('../pages/Berita.vue')
    },
    {
        path: '/detail-berita/:id',
        name: 'DetailBerita',
        component: () => import('../pages/DetailBerita.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import('../pages/Faq.vue')
    },
    {
        path: '/check',
        name: 'CekKesehatan',
        component: () => import('../pages/Check.vue'),
    },
    {
        path: '/check/:id',
        component: () => import('../pages/Check.vue'),
    },

];