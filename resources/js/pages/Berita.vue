<style lang="scss" scoped>
  // variable
  $colorpage:  #5CC073;

  .container {
    padding-top: 50px;
      
    .pageTitle {
      font-weight: bold;
      font-size: 1.8em;
    }

    form {
      margin-bottom: 23px;
      padding-right: 30px;;

      input {
        margin-left: 740px;
        padding-right: 0px;

        h3 {
          font-weight: bold;
          font-size: 1.7em;
          display: inline;
        }
      }
    }

  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(19, 58, 77, 0.171);
    background: rgb(196, 248, 222);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 30px;
  }

  #containerBerita {
    overflow: auto;
    margin: 0px;
    padding: 0px;
    height: 500px;
    margin-bottom: 3rem;

    .flex-row {
      display: flex;
      flex-direction: row;

      .boxBerita {
        background-color:#fff;
        margin-top: 27px;
        padding-bottom: 20px;
        box-shadow: 0px 2px 3px rgb(146, 142, 153);
        border-radius: 5px;
        margin-left: 0px;
        margin-right: 59px;
        cursor: pointer;


        .headerCB {
          background: rgb(12, 150, 54);
          padding-left: 15px;
          color: whitesmoke;
          border-radius: 6px;
          
          p {
            padding-left: 10px;
            font-size: 17px;
            font-weight: bold;
            padding-bottom: 0px;
            margin-top: 0px;
          }
        }

        .imgBerita {
          background: rgb(211, 226, 216);
          padding-left: 0px;
          padding-right: 0px;
          margin-left: 0px;
          margin-right: 0px;
        }

        img {
          width: 300px;
          margin-top: 0;
          margin-left: 15px;
          margin-right: 15px;
          margin-bottom: 17px;
          object-fit: cover;
          object-position: center;
          border-radius: 4px;
        }

        .headLineBerita {
          font-weight: 400;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 17px;
          padding-bottom: 17px;

          h5 {
            font-weight: bold;
          }

          span {
            font-weight: lighter;
            color: #0984e3;
          }
        }

        .button {
          background-color: rgb(12, 171, 219);
          color: whitesmoke;
          padding: 7px;
          padding-left: 17px;
          padding-right: 17px;
          margin-left: 170px;
          border-radius: 30px;
          text-align: center;
          
        }
      }
    }
  }

  ul.pagination {
    .page-item {
      // page biasa
      .page-link {
        color: $colorpage;
      }
      
      &.disabled {
        color: #7F8C8D;        
      }

      // page aktif
      &.active {
        .page-link {
        background: $colorpage;
        border-color: $colorpage;
        color: white;
      }
    }
    }  
  }

</style>

<template>
  <div>
    <Navbar/>
    <div class="container">
      
      <form class="form-inline pr-0">

        <h3 class="$textcolor pageTitle">Berita</h3>

        <input class="form-control pl-3 pr-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success pr-3" type="submit">
          <i class="fas fa-search"></i>
        </button>

      </form>

      <!-- card 1 -->
       <div id="containerBerita">
        <div class="flex-row">

          <div class="boxBerita">            

            <section class="imgBerita">
              <img src="img/take1.jpg" height="193px">
            </section>

            <article class="headLineBerita">
              <h5> Razia Masker Akan Diberlakukan di Kota Bandung </h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

          <div class="boxBerita">
                      

            <section class="imgBerita">
              <img src="img/take2.jpg" height="193px">
            </section>

            <article class="headLineBerita">
              <h5> Sudah Genap 1 Tahun Pandemi Covid-19 Menghiasi Dunia </h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

          <div class="boxBerita">
                      

            <section class="imgBerita">
              <img src="img/2019.png" height="193px">
            </section>

            <article class="headLineBerita">
              <h5> Corona V.2 akan segera rilis tahun 2022</h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

        </div>
      </div>

      <nav class="d-flex justify-content-center">
        <ul class="pagination" v-for="(link, i) in paginate.links" :key="i">

          <!-- link active -->
          <li class="page-item active" v-if="link.active">
            <button class="page-link" @click="nextLink(link.url)" tabindex="-1" aria-disabled="true" v-html="link.label"></button>
          </li>

          <!-- link disabled -->
          <li class="page-item disabled" v-else-if="link.url === null">
            <button class="page-link" @click="nextLink(link.url)" tabindex="-1" aria-disabled="true" v-html="link.label"></button>
          </li>

          <!-- link yang bisa di akses -->
          <li class="page-item" v-else>
            <button class="page-link" @click="nextLink(link.url)" tabindex="-1" aria-disabled="true" v-html="link.label"></button>
          </li>

        </ul>
      </nav>
    </div>

  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  data: () => ({
    paginate: {
      data_berita: [],
      links: []
    }
  }),
  components: {
      Navbar
  },
  methods: {
    // insialisasi awal data
    paginasiLink() {
      axios.get('/api/news')
      .then( response => {
        this.paginate.links = response.data.links;
        this.paginate.data_berita = response.data.data;
        console.log(this.paginate.data_berita);
      });
    },
    // link yang di click selanjutnya pada paginate
    nextLink(url) {
      axios.get(url)
      .then( response => {
        this.paginate.links = response.data.links;
        this.paginate.data_berita = response.data.data;
        console.log(this.paginate.data_berita);
      });
    },    
  },
  created() {
    this.paginasiLink();
  }
}
</script>
