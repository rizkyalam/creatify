<style lang="scss" scoped>
  // variable
$colorpage:  #5CC073;

  // style
  .container {
    padding-top: 50px;


    .pageTitle {
      margin-bottom: 23px;
      font-weight: bold;
      
      h3 {
        font-weight: bold;
        font-size: 1.7em;
        display: inline;
      }

      span {
        font-weight: bold;
        color:#0984e3;
        display: block;
      }
    }

  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(19, 58, 77, 0.171);
    background: rgb(196, 248, 222);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  }

  //Container Data Atas
  #containerData1 {
    overflow: auto;
    margin: 0px;
    padding: 0px;
    height: 277px;
    color: white;

    .flex-row {
      display: flex;
      flex-direction: row;

      .boxData1 {
        background-color: #5f27cd;
        margin-top: 27px;
        padding-top: 11px;
        padding-right: 23px;
        padding-left: 23px;
        box-shadow: -3px 5px 7px 1px rgb(146, 142, 153);
        border-radius: 7px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        cursor: pointer;

        article {
          font-weight: 400;
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 17px;
          padding-bottom: 17px;

        }
      }

      .boxData2 {
        background-color: #0984e3;
        margin-top: 27px;
        padding-top: 11px;
        padding-right: 34px;
        padding-left: 34px;
        box-shadow: -3px 5px 7px 1px rgb(146, 142, 153);
        border-radius: 7px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        cursor: pointer;

        article {
          font-weight: 400;
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 17px;
          padding-bottom: 17px;

        }
      }

      .boxData3 {
        background-color: rgb(12, 150, 54);
        margin-top: 27px;
        padding-top: 11px;
        padding-right: 61px;
        padding-left: 61px;
        box-shadow: -3px 5px 7px 1px rgb(146, 142, 153);
        border-radius: 7px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        cursor: pointer;

        article {
          font-weight: 400;
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 17px;
          padding-bottom: 17px;

        }
      }

      .boxData4 {
        background-color: #d63031;
        margin-top: 27px;
        padding-top: 11px;
        padding-right: 61px;
        padding-left: 61px;
        box-shadow: -3px 5px 7px 1px rgb(146, 142, 153);
        border-radius: 7px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        cursor: pointer;

        article {
          font-weight: 400;
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 17px;
          padding-bottom: 17px;

        }
      }
    }
  }

  #containerData2 {
    // overflow: auto;
    margin-bottom: 50px;
    padding: 0px;
    height: 520px;
    color: #09b34a;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 3px 11px 2px #09b34a;

    .lapisAtas {
      background: #09b34a;
      border-radius: 10px, 3px, 3px, 10px;
      padding-top: 7px;
      padding-bottom: 7px;
    }

    header {
      background: rgb(255, 255, 255);
      box-shadow: 0px 0px 1px 3px rgb(212, 219, 212);
      float: top;
      width: 100%;
      margin-left: 0px;
      border-radius: 8px;
      margin-bottom: 30px;
      overflow: auto;

      h4 {
        float: left;
        width: 70%;
        padding-left: 23px;
        margin-top: 23px;
      }

      form {
        float: right;
        width: 30%;
        input {
          background: rgb(230, 248, 236);
          padding-left: 13px;
          padding-right: 13px;
        }

        button {
          margin: 0;
        }
      }
    }

    article {
      margin-left: 0px;
      float: bottom;
      width: 100%;

      .imgMap {
        float: left;
        width: 50%;
        margin-top: 3px;

        img {

          width: 100%;
        }
      }

      .tabelData {
        float: right;
        width: 50%;
        margin-top: 3px;
        
        th {
          color: #09b34a;
          font-size: 1.2em;
          text-align: center;
        }

        td {
          font-size: 1.2em;
          text-align: center;
        }

        .button {
          background-color: rgb(12, 171, 219);
          font-size: 1em;
          color: whitesmoke;
          padding: 3px;
          padding-left: 37px;
          padding-right: 37px;
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

    <div class="pageTitle">
      <h3 class="$textcolor">Data Statistik Kasus Covid 19</h3>
      <span> Tanggal 9 Desember 2020</span>
    </div>

    <!-- Container dataCard Atas -->
    <div id="containerData1">
      <div class="flex-row">

        <div class="boxData1">

          <article>
            <p> TOTAL TERKONFIRMASI </p>
            <h5> INDONESIA </h5>
            <h4> 10 </h4>
            <h6> +7 </h6>
          </article>

        </div>

        <div class="boxData2">
          
          <article>
            <p>  DALAM PERAWATAN </p> 
            <h5> INDONESIA </h5>
            <h4> 10 </h4>
            <h6> +7 </h6>
          </article>

        </div>

        <div class="boxData3">

          <article>
            <p>  SEMBUH </p> 
            <h5> INDONESIA </h5>
            <h4> 89 </h4>
            <h6> +23 </h6>
          </article>

        </div>

        <div class="boxData4">
          
          <article>
            <p>  MENINGGAL </p> 
            <h5> INDONESIA </h5>
            <h4> 7435 </h4>
            <h6> +210 </h6>
          </article>

        </div>

      </div>
    </div>


    <!-- Container Data Bawah -->
    <div id="containerData2">
        <div class="lapisAtas">
          
        </div>
        <header class="form-inline">
          
          <h4 class="$textcolor pageTitle">Data Wilayah</h4>

          <form>
            <input class="form-control" type="search" placeholder="Data Wilayah" aria-label="Search" v-model="cari">
            <button class="btn btn-success pl-3 pr-3" type="button" @click="searchWilayah()">
              <i class="fas fa-search"></i>
            </button>
          </form>

        </header>

        <article>
          <div class="imgMap">
            <img src="img/wilayah.png">
          </div>

          <div class="tabelData">

            <table class="table md-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Wilayah</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody v-for="(data, i) in paginate.dataWilayah" :key="i">
                <tr>
                  <td> {{ ++i }} </td>
                  <td> {{ data.wilayah.nama_wilayah }} </td>
                  <td> <router-link :to="`/detail-data/${data.id_data}`" class="button btn"> Detail </router-link> </td>
                </tr>
              </tbody>
            </table>

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
        </article>


    </div>
  </div>

</div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    data: () => ({
      paginate: {
        dataWilayah: [],
        links: [],
        cari: '',
        // statistik: {total = null , odp = null, sembuh = null, meninggal = null}
      }
    }),
    components: {
      Navbar
    },
    methods: {
      // insialisasi awal data
      paginasiLink() {
        axios.get('/api/data')
      .then( response => {
        this.paginate.links = response.data.links;
        this.paginate.dataWilayah = response.data.data;
      });
      },
      // link yang di click selanjutnya pada paginate
      nextLink(url) {
        axios.get(url)
        .then( response => {
          this.paginate.links = response.data.links;
          this.paginate.dataWilayah = response.data.data;
        });
      },
      searchWilayah() {
        // backup
        this.dataSearch = this.dataWilayah;

        this.dataWilayah = this.dataWilayah.filter((data) => data.wilayah.nama_wilayah == this.cari);
      }
    },
    created() {
      this.paginasiLink();
      axios.get('https://api.kawalcorona.com/indonesia')
      .then(response => {
        console.log(response)
      })
    }
}
</script>
