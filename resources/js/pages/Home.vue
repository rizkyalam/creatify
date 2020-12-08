<template>
    <section>
    <Navbar/>

    <!-- jumbotron -->
    <div class="jumbotron">

        <div class="container row">
            <!-- deskripsi -->
            <div class="col-md-7 jumbotron__description">
                <div class="jumbotron__description__title">
                    <h1>Pantau Penyebaran Covid 19 Dengan Creatify</h1>
                </div>
                
                <div class="jumbotron__description__text">
                    <p>Mari terapkan pola hidup sehat dan jangan lupa atuhi protokol kesehatan</p>
                </div>

                <div class="jumbotron__description__btn">
                    <button class="btn jumbotron__description__btn--check">
                        <i class="fas fa-thermometer-half"></i> 
                        <span>Periksa Kesehatanmu</span>
                    </button>
                </div>
            </div>

            <!-- gambar -->
            <div class="col-md jumbotron__image">
                <img src="img/index.jpeg" alt="">
            </div>

        </div>

    </div>         

    <!-- content di home -->
    <div class="container">

        <!-- informasi 1 -->
        <div class="card informasi">
            <div class="card-body">
                
                <!-- gambar -->
                <div class="col informasi__img">
                    <img src="img/social_distance.svg" alt="">
                </div>

                <!-- deskripsi -->
                <div class="col informasi__description">
                    <h2>Tetap Waspada Dengan Menerapkan AKB</h2>
                    <p>Selama vaksin belum ditemukan, cara terbaik untuk kembali beraktivitas adalah dengan menerapkan ADAPTASI KEBIASAAN BARU (AKB) di tengah pandemi. </p>
                </div>

            </div>
        </div>

        <!-- informasi 2 -->
        <div class="informasi-2 row">
            <!-- carousel -->
            <div id="carouselExampleControls" class="carousel slide col-md" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="img/slide1.PNG" class="d-block carousel__img" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="img/slide2.PNG" class="d-block carousel__img" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="img/slide3.jpg" class="d-block carousel__img" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <!-- contact -->
            <div class="col-md contact">
                <!-- call center -->
                <div class="col card mb-md-5">
                    <h3>Call Center</h3>
                    <div class="contact__keterangan">
                        Nomor Darurat
                    </div>
                    <div class="contact__telepon">
                        <i class="fas fa-phone-alt"></i>
                        <span>119</span>
                    </div>
                </div>

                <!-- hotline -->
                <div class="col card">
                    <h3>Hotline</h3>
                    <div class="contact__keterangan">
                        Chat WA seputar Covid 19
                    </div>
                    <div class="contact__telepon">
                        <i class="fab fa-whatsapp"></i>
                        <span>+62 811 2093 306</span>
                    </div>
                </div>

            </div>
        </div>

        <!-- bagian 3 data covid -->
        <div class="data-covid">

            <!-- bagian title data covid -->
            <h3>Data Penyebaran Covid</h3>
            <div class="data-covid__tanggal">
                Tanggal: 
                    <span class="data-covid__tanggal--now">2 Desember 2020</span>
            </div>

            <!-- data statistik penyebaran covid -->
            <div class="data-covid__statistik mt-4">
                <!-- data odp -->
                <div class="col-12 col-md card data-covid__statistik__detail">
                    <img src="img/odp.svg" alt="ODP">        
                    <h4>ODP</h4>
                    <p>10 orang</p>
                </div>

                <!-- data sembuh -->
                <div class="col-12 col-md mx-md-5 card data-covid__statistik__detail">
                    <img src="img/sembuh.svg" alt="Sembuh">
                    <h4>Sembuh</h4>
                    <p>89 orang</p>
                </div>

                <!-- data meninggal -->
                <div class="col-12 col-md card data-covid__statistik__detail">
                    <img src="img/rip.svg" alt="rip">        
                    <h4>Meninggal</h4>
                    <p>1 orang</p>
                </div>
            </div>

            <!-- tombol untuk ke link data -->
            <a href="#" class="btn data-covid--check">Lihat Semua Data</a>
        </div>

    </div>

    <!-- berita -->
    <div class="news">
        <!-- tombol berita sebelumnya -->
        <div class="news__btn news__btn__left">
            <a href="#" class="col news__btn--prev"><i class="fas fa-arrow-circle-left"></i></a>
        </div>

        <div class="news__content row">

            <!-- gambar content berita -->
            <div class="col-12 col-lg-6 news__content__img">
                <img src="img/news.svg" alt="berita terbaru">
            </div>

            <!-- penjelasan content -->
            <div class="col-12 col-md-6 news__content__info">
                <h3>Berita Terkini</h3>
                <h4 class="news__content__info__title">Penyebaran Covid 19 kini mulai mereda</h4>
                <p class="news__content__info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae vitae corrupti aut dolore quos explicabo? Impedit nam corporis ipsa.
                </p>
                
                <button class="btn news__content__info--check">Lihat Berita Lainnya</button>
            </div>

        </div>

        <!-- link berita saat ini -->
        <div class="news__page">
            <a href="#" class="news__page__link active"></a>
            <a href="#" class="news__page__link"></a>
            <a href="#" class="news__page__link"></a>
        </div>

        <!-- tombol berita selanjutnya -->
        <div class="news__btn news__btn__right">
            <a href="#" class="col news__btn--next"><i class="fas fa-arrow-circle-right"></i></a>
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
}
</script>

<style lang="scss" scoped>

</style>