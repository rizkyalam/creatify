<style lang="scss" scoped>

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
        margin-left: 743px;
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
    height: 570px;
    margin-bottom: 100px;

    .flex-row {
      display: flex;
      flex-direction: row;

      .boxBerita {
        background-color: rgb(247, 248, 196);
        margin-top: 27px;
        padding-top: 11px;
        padding-bottom: 20px;
        box-shadow: 0px 9px 13px 1px rgb(146, 142, 153);
        border-radius: 17px;
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
          margin-top: 17px;
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

</style>

<template>
  <div>
    <Navbar/>
    <div class="container">
      
      <form class="form-inline">

        <h3 class="$textcolor pageTitle">Berita</h3>

        <input class="form-control pl-3 pr-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success pl-3 pr-3" type="submit">
          <i class="fas fa-search">O</i>
        </button>

      </form>

      <!-- card 1 -->
      <div id="containerBerita" class="card">
        <div class="flex-row">

          <div class="boxBerita">

            <div class="headerCB">
              <p> . . . </p>
            </div>

            <section class="imgBerita">
              <img src="img/WFH.png" height="193px">
            </section>

            <article class="headLineBerita">
              <h5> Tetap Produktif Dirumah Walau Gerak Terbatas (WFH) </h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

          <div class="boxBerita">
            
            <div class="headerCB">
              <p> . . . </p>
            </div>

            <section class="imgBerita">
              <img src="img/artikel.png">
            </section>

            <article class="headLineBerita">
              <h5> Lomba Bikin Konten Mengenai Covid-19 Berhadiah Beasiswa! </h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

          <div class="boxBerita">
            
            <div class="headerCB">
              <p> . . . </p>
            </div>

            <section class="imgBerita">
              <img src="img/konsultasi.png" height="193px">
            </section>

            <article class="headLineBerita">
              <h5> Kenali Gejala-Gejala Awal Penularan Covid-19 </h5>
              <span> 9 Desember 2020 </span>
              <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> 
              <h6 class="button"> Detail </h6>
            </article>

          </div>

        </div>
      </div>

       <div id="containerBerita">
        <div class="flex-row">

          <div class="boxBerita">

            <div class="headerCB">
              <p> . . . </p>
            </div>

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
            
            <div class="headerCB">
              <p> . . . </p>
            </div>

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
            
            <div class="headerCB">
              <p> . . . </p>
            </div>

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
    </div>

  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>
