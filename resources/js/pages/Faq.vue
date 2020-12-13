<style lang="scss" scoped>

.containerFaq {
  margin-top: 70px;
  overflow: auto;
  float: center;
  width: 100%;

  .imgFaq {
    float: left;
    width: 45%;

    img {
      width: 100%;
    }
  }

  .searchFaq {
    background: white;
    float: right;
    width: 55%;
    padding-top: 100px;
    padding-bottom: 100px;
    
    h5 {
      text-align: center;
      font-weight: bold;
      font-size: 1.5em;
      margin-bottom: 17px;
    }
    
    form {
      padding-top: 20px;
      padding-left: 78px;
      padding-right: 58px;
      padding-bottom: 83px;
      float: center;
      width: 100%;

      input {
        padding-left: 187px;
        padding-right: 187px;
        float: left;
        width: 90%;
      }

      button {
        border-radius: 3px;
        float: right;
        width: 10%;
      }
    }
  }
}

.containerCollapse {
  margin-top: 0px;
  
  .card-header {
    background: rgb(240, 255, 246);

    a {
      color: #09b34a;
      font-size: 0.7em;
      font-weight: bold;
    }
  }

  .card-body {
    background: rgb(196, 248, 222);
  }
}

</style>

<template>
  <div>
    <Navbar/>
  <div class="container">
    <!-- Container Atas -->
    <div class="containerFaq">

      <div class="imgFaq">
        <img src="img/apa.png">
      </div>

      <div class="searchFaq">
        <h5> Pertanyaan yang sering ditanyakan </h5>

        <form class="form">
          <input class="form-control pl-4 pr-3" type="search" placeholder="Cari Pertanyaan" aria-label="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

    </div>

    <!-- Container Bawah -->
    <div class="containerCollapse">
      
      <div class="accordion" id="accordionExample">

        <div class="card">

          <div class="card-header" id="headingOne">
            <h2 class="ml-0">
              <a class="btn btn-link btn-block text-left collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Seberapa Bahaya nya Virus Corona ini ?
              </a>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              Seperti penyakit pernafasan lainnya, 2019-nCoV dapat menyebabkan gejala ringan seperti Flu, Demam,
              Sakit Tenggorokan, dan Batuk. Beberapa orang juga mungkin akan menderita sakit yang parah seperti disertai 
              Pneumonia atau Asma. Walaupun fatalitas penyakit ini masih terbilang umum, namun bagi para lansia hal ini dapat
              memicu komplikasi gangguan kesehatan yang serius dan cenderung lebih rentan terpapar Corona Virus.
            </div>
          </div>

        </div>

        <div class="card">

          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <a class="btn btn-link btn-block text-left collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Apakah vaksin Covid-19 sudah ditemukan ?
              </a>
            </h2>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              Vaksin Covid-19 sudah ditemukan dan diproduksi secara massal, namun perlu di uji terlebih dahulu keamanan dan khasiatnya
              oleh BPOM-RI. Sehingga Vaksinasi di Indonesia harus tertunda terlebih dahulu, Kebijakan ini diambil pemerintah guna untuk 
              menghalau kekhawatiran masyarakat akan Vaksin Covid-19 ini.
            </div>
          </div>

        </div>


        <div class="card">

          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <a class="btn btn-link btn-block text-left collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Kapan diberlakukannya kehidupan normal seperti dulu lagi ?
              </a>
            </h2>
          </div>

          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              Rencananya, pada tahun 2021 segala aspek kehidupan mencakup bidang pendidikan, ekonomi, sosial, budaya, rohani sudah mulai diberlakukan normal seperti dulu lagi. 
              Namun mengingat bahwa statistik penularan Covid-19 di Indonesia akhir-akhir ini semakin meningkat, dampaknya kemungkinan besar
              pemerintah akan mengambil kebijakan memperpanjang masa Karantina serentak se-Indonesia dan mengundur masa Normal sampai situasi dan kondisi
              di Indonesia membaik.
            </div>
          </div>

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
