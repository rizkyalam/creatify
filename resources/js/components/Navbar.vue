<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar__logo">
                Creatify
            </div>

            <div class="navbar__menu">
                <a href="#" class="navbar__menu--active" @click.prevent="activeNav()"><i class="fas fa-align-right"></i></a>
            </div>
            
            <div class="navbar__list">
                <a href="#" class="navbar__list--close" @click.prevent="closeNav()"><i class="fas fa-times"></i></a>

                <ul class="nav">
                    <li v-if="$route.path === '/'">
                        <router-link :to="'/'" class="navbar__list__link">Home</router-link>
                    </li>
                    <li v-else>
                        <router-link :to="{name: 'Home'}" class="navbar__list__link">Home</router-link>
                    </li>
                    <li><router-link :to="{name: 'Data'}" class="navbar__list__link">Data</router-link></li>
                    <li><router-link :to="{name: 'Berita'}" class="navbar__list__link">Berita</router-link></li>
                    <li><router-link :to="{name: 'FAQ'}" class="navbar__list__link">FAQ</router-link></li>
                </ul>            
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        activeNav() {
            $('.navbar__list').css({width: '70%'});
        },
        closeNav() {
            $('.navbar__list').css({width: 0});
        }
    },
}
</script>
