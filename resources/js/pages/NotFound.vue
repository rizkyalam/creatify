<template>
  <div class="error">
    <img :src="'../img/notfound.png'" alt="" class="error__img">
    <h5 class="error__title">Maaf Halaman Tidak Ditemukan</h5>
    <router-link :to="{name: 'Home'}" class="error--back"><i class="fas fa-arrow-left"></i> Kembali</router-link>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $colorText: #438A5E;

  .error {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__img {
      object-fit: cover;
      object-position: center;
      height: 30rem;
      width: 30rem;
      margin: auto;

      @media screen and (max-width: 576px) {
        height: 15rem;
        width: 15rem;
      }
    }

    h5 {
      color: $colorText;
    }

    &--back {
      color: $colorText;
      text-decoration: none;

      &:hover {
        color: darken($colorText, 15%);
      }
    }
  }
</style>