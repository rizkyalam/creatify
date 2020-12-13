<template>
  <section>      
      <nav class="navbar bg-success text-white d-flex justify-content-center">Creatify</nav>
      <div class="container">
        <div class="card mt-5">
            <div class="card-header bg-success text-white d-flex justify-content-center">
                <h3 v-if="!$route.params.id">Test Yuk !!</h3>
                <h3 v-else>Cek Kesehatan</h3>
            </div>
            <div class="card-body d-flex justify-content-center flex-column align-items-center py-5">
                <div v-if="!$route.params.id">
                    <div>Periksa Kesehatanmu Secara Mandiri</div>
                    <div class="my-3">
                        <router-link :to="'/home'" class="btn btn-secondary">Kembali</router-link>
                        <router-link :to="'/check/1'" class="btn btn-success">Cek Kesehatan</router-link>
                    </div>
                </div>
                <div v-else>

                    <span class="text-success mb-3" v-if="$route.params.id <= 5">
                        soal ke {{ $route.params.id }} dari 5 soal
                    </span>
                    <div v-else>
                        <p>
                            Anda Kemungkinan terpapar virus Corona                            
                        </p>
                        <p>Penanganan Mandiri :</p>
                        <p>1. Isolasi Mandiri</p>
                        <p>2. Gunakan Masker</p>
                        <p>3. Makan makanan bergizi</p>

                        <div class="d-flex justify-content-center">
                            <router-link :to="'/home'" class="btn btn-secondary">Kembali</router-link>
                        </div>
                    </div>

                    <p v-if="$route.params.id == 1">
                        {{ soal.test1 }}
                    </p>
                    <p v-if="$route.params.id == 2">
                        {{ soal.test2 }}
                    </p>
                    <p v-if="$route.params.id == 3">
                        {{ soal.test3 }}
                    </p>
                    <p v-if="$route.params.id == 4">
                        {{ soal.test4 }}
                    </p>
                    <p v-if="$route.params.id == 5">
                        {{ soal.test5 }}
                    </p>
                    <div>
                    </div>
                    <span v-if="$route.params.id <= 5">
                        <button class="btn btn-primary" @click="trueAnswer($route.params.id)">Ya</button>
                        <button class="btn btn-danger" @click="falseAnswer($route.params.id)">Tidak</button>
                    </span>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    data: () => ({
        check: {
            test1: null,
            test2: null,
            test3: null,
            test4: null,
            test5: null,
        },
        soal: {
            test1: "Melakukan Kontak dengan orang yang positif Covid-19",
            test2: "Berpergian/Tingal dikota  yang menjadi transmisi lokal virus Corona",
            test3: "Apa anda sedang mengalami demam?",
            test4: "Apakah anda sedang Batuk Filek?",
            test5: "Apakah anda mengalami sesak nafas"
        }
    }),
    methods: {
        trueAnswer(id) {
            if(id == 1) this.check.test1 = true;
            if(id == 2) this.check.test2 = true;
            if(id == 3) this.check.test3 = true;
            if(id == 4) this.check.test4 = true;
            if(id == 5) this.check.test5 = true;

            if(id < 5) this.$router.push('../check/' + ++id);
            else this.$router.push('../check/done');
        },
        falseAnswer(id) {
            if(id == 1) this.check.test1 = false;
            if(id == 2) this.check.test2 = false;
            if(id == 3) this.check.test3 = false;
            if(id == 4) this.check.test4 = false;
            if(id == 5) this.check.test5 = false;
            if(id < 5) this.$router.push('../check/' + ++id);
            else this.$router.push('../check/done');
        }
    }
}
</script>

<style>

</style>