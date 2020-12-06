<template>
    <section>
    <Navbar/>

    <div class="container">
        <div class="card">
            <div class="card-body">
                <p>test</p>
            </div>
        </div>
    </div>

    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar
    },
    created() {
        console.log(this.$route.name)
    }
}
</script>

<style lang="scss" scoped>
    .card-body {
        p {
            color: green;
        }
    }
</style>