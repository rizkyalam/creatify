<template>
  <section>
      <Navbar/>
      <div class="container mt-4">
        <h3>Detail Wilayah</h3>
        <div class="card mt-4">
          <div class="card-body">

            <h1 class="text-success">{{ dataWilayah.nama }}</h1>
            <div class="row">

              <div class="col-12 col-md-6">
                <img :src="'../img/wilayah.png'" class="img-fluid">
              </div>

              <div class="col-12 col-md-6">
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Jumlah Penduduk:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.penduduk }} orang
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Luas Wilayah:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.luas }}
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Letak Wilayah:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.letak }}
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Keterangan:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.ket }}
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Tanggal:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.tgl }}
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Jumlah Meninggal:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.die }} Orang
                  </div>
                </div>
                <div class="col row mb-2">
                  <h6 class="col-12 col-md-5">
                    Jumlah ODP:
                  </h6>
                  <div class="col-12 col-md text-secondary">
                   {{ dataWilayah.odp }} Orang
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    data: () => ({
      dataWilayah: {
        nama: null,
        penduduk: null,
        luas: null,
        letak: null,
        ket: null,
        tgl: null,
        die: null,
        odp: null
      }
      // dataWilayah: null
    }),
    components: {
        Navbar
    },
    created() {
      axios.get(`/api/data/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data);
        this.dataWilayah.nama = response.data.wilayah.nama_wilayah
        this.dataWilayah.penduduk = response.data.wilayah.jumlah_penduduk
        this.dataWilayah.luas = response.data.wilayah.luas_wilayah
        this.dataWilayah.letak = response.data.wilayah.letak_wilayah
        this.dataWilayah.ket = response.data.wilayah.keterangan
        this.dataWilayah.tgl = response.data.tgl
        this.dataWilayah.die = response.data.jumlah_meninggal
        this.dataWilayah.odp = response.data.jumlah_odp
      });
    }
}
</script>

<style>

</style>