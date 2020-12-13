<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas = [
            [
                'id_user' => 1,
                'tgl_berita' => '2020-12-01 13:41:27',
                'tema_berita' => 'Covid-19',                
                'image' => 'default.png',
                'isi_berita' => 'Pandemi COVID-19 , juga dikenal sebagai pandemi coronavirus , adalah pandemi penyakit coronavirus 2019 (COVID-19) yang sedang berlangsung yang disebabkan oleh sindrom pernapasan akut parah coronavirus 2 (SARS-CoV-2), pertama kali diidentifikasi pada Desember 2019 di Wuhan , Cina. Organisasi Kesehatan Dunia menyatakan wabah sebagai Kesehatan Masyarakat Darurat Masalah Internasional pada Januari 2020 dan pandemi pada Maret 2020. Pada 1 Desember 2020, lebih dari 63,2   juta kasus telah dikonfirmasi, dengan lebih dari 1,46   juta kematian dikaitkan dengan COVID-19.'
            ],
            [
                'id_user' => 2,
                'tgl_berita' => '2020-12-01 13:45:04',
                'tema_berita' => 'Kesembuhan Covid',                
                'image' => 'default.png',
                'isi_berita' => 'JAKARTA - Kesembuhan pasien dari COVID-19 setiap hari terus bertambah. Dari data Kementerian Kesehatan per 30 November 2020, pasien sembuh hari ini, jumlahnya melampui penambahan pasien terkonfirmasi positif. Yakni bertambah lagi sebanyak 4.725 orang. Penambahan harian ini terus meningkatkan jumlah kesembuhan kumulatif menjadi 450.518 orang atau 83,6%. 

                Pada penambahan pasien terkonfirmasi positif harian bertambah sebanyak 4.617 kasus. Untuk jumlah kumulatifnya, atau pasien terkonfirmasi positif yang tercatat sejak kasus pertama hingga saat ini, berjumlah 538.883 kasus. Meskipun demikian, jumlah kasus aktif, yakni pasien COVID-19 yang masih menjalani masa perawatan, per hari ini berjumlah 71.420 kasus atau 13,3% dari pasien terkonfirmasi. 
                
                Untuk kasus pasien meninggal harian juga masih bertambah sebanyak 130 kasus dan kumulatifnya menjadi 16.945 kasus atau 3,1% dari pasien terkonfirmasi. Selain itu per hari ini jumlah suspek tercatat ada 72.786 kasus. Untuk sebaran wilayah masih berada di 34 provinsi dan 505 kabupaten/kota. '
            ],
            [
                'id_user' => 1,
                'tgl_berita' => '2020-12-02 13:51:17',
                'tema_berita' => 'vaksin covid 19',                
                'image' => 'default.png',
                'isi_berita' => 'Jakarta, Senin 30 November 2020. Masyarakat perlu untuk mengetahui, bahwa vaksin merupakan produk biologis yang memiliki kerentanan pada perubahan suhu. Oleh karena itu umumnya vaksin perlu tersimpan pada suhu 2-8 derajat celcius, dan suhu ini harus terjaga dari pabrik sampai ke puskesmas. Proses menjaga suhu vaksin di kondisi ideal dari awal sampai akhir inilah yang disebut cold chain (rantai dingin). Dengan begitu masyarakat menjadi tahu bahwa vaksin terjaga kualitasnya sejak awal sampai ke pemberian vaksinasi.

                dr. Elizabeth Jane Soepardi, MPH, Pakar Imunisasi menjelaskan, “Darimanapun asal vaksinnya itu nanti, akan melalui pabrik vaksin kita di PT Bio Farma. Mereka sudah mempunyai armada untuk menerima dan mendistribusikan vaksin. Jadi kita sudah punya depo-depo vaksin. Kemudian Provinsi sudah memiliki cold room, atau lemari penyimpanan khusus”, tuturnya di acara Keterangan Pers Juru Bicara Penanganan COVID-19 yang diselenggarakan Komite Penanganan COVID-19 dan Pemulihan Ekonomi Nasional (KPCPEN), Senin (30/11).
                
                Indonesia telah memiliki pengalaman bertahun-tahun dalam melaksanakan program vaksinasi. Proses distribusi vaksin di Indonesia bisa dilakukan dari Aceh sampai Papua dan sudah menggunakan sistem cold chain yang baik, hingga ke pelosok negeri. Lemari penyimpan berpendingin khusus yang ada di Provinsi, bisa menyimpan vaksin untuk jangka waktu 3-6 bulan dengan suhu terjaga di angka 2-8 derajat celcius. Pengiriman ini kemudian dilakukan secara bertahap ke level Kabupaten/Kota hingga ke rumah sakit dan puskesmas. Saat keluar dari cold room, vaksin pun harus cepat dimasukkan ke kotak sementara yang dirancang khusus untuk menjaga temperaturnya dalam perjalanan.'
            ],
            [
                'id_user' => 2,
                'tgl_berita' => '2020-11-30 13:51:59',
                'tema_berita' => 'Pemerintah  pastikan kesiapan vaksin covid 19',                
                'image' => 'default.png',
                'isi_berita' => 'Jakarta, 30 November 2020. Rencana Pemerintah untuk program vaksinasi memerlukan persiapan matang. Berbagai persiapan sudah dilakukan, mulai dari meninjau langsung fasilitas produksi vaksin di Tiongkok, melakukan uji klinik fase III di kota Bandung terhadap 1620 relawan, hingga menyiapkan sistem satu data terintegrasi, guna memastikan kelancaran dan ketepatan sasaran vaksinasi nantinya. Kementerian Kesehatan juga menyiapkan sumber daya manusia (SDM) seperti dokter umum, dokter spesialis, perawat, bidan, dan vaksinator untu mempersiapkan program vaksinasi. Selain dari sisi kesiapan pemerintah, masyarakat juga perlu mengetahui apa saja yang harus dipersiapkan saat vaksin datang.

                dr. Dirga Sakti Rambe M.Sc, Sp.PD, Vaksinolog menyampaikan “Yang pertama perlu diketahui adalah, vaksin itu produk biologis yang sangat rentan pada perubahan suhu. Oleh karena itu umumnya perlu disimpan pada suhu 2-8 derajat celcius, dan suhu ini harus dijaga dari pabrik sampai ke puskesmas. Ini yang disebut cold chain (rantai dingin). Kedua, Indonesia punya BUMN farmasi yang terpercaya, Bio Farma yang sudah memproduksi vaksin untuk diekspor ke 106 negara lebih, dan sudah diakui WHO. Ini tugas kita bersama untuk menjaga cold chain”, dalam Dialog Produktif bertema Setelah Vaksin Datang, Apa yang Perlu Disiapkan? yang diselenggarakan oleh Komite Penanganan COVID-19 dan Pemulihan Ekonomi Nasional (KPCPEN), Senin (30/11).
                
                Sembari menunggu proses kedatangan dan vaksinasi nanti, dr. Dirga menghimbau kepada masyarakat agar perlu mengetahui informasi yang benar terkait vaksin. Informasi yang benar dan terpercaya memberikan pemahaman yang lebih baik bagi masyarakat dan mengurangi keresahan dan keraguan yang timbul dari penyebaran informasi hoaks terkait vaksin. “Karena sekarang banyak sekali informasi yang tidak benar. Kedua, vaksin apa pun yang sudah mendapat izin edar dari Badan Pengawas Obat dan Makanan (BPOM) sudah dipastikan efektivitas dan keamanannya”, terang dr. Dirga.'
            ],
            [
                'id_user' => 1,
                'tgl_berita' => '2020-11-29 13:56:03',
                'tema_berita' => 'Kesembuhan COVID-19 Terus Bertambah Menjadi 445.793 Orang',                
                'image' => 'default.png',
                'isi_berita' => 'JAKARTA - Kesembuhan pasien dari COVID-19 setiap hari terus bertambah. Dari data Kementerian Kesehatan per 29 November 2020, pasien sembuh hari ini bertambah lagi sebanyak 3.810 orang. Penambahan harian ini terus meningkatkan jumlah kesembuhan kumulatif menjadi 445.793 orang atau 83,4%. 

                Pada penambahan pasien terkonfirmasi positif harian bertambah sebanyak 6.267 kasus. Untuk jumlah kumulatifnya, atau pasien terkonfirmasi positif yang tercatat sejak kasus pertama hingga saat ini, berjumlah 534.266 kasus. Meskipun demikian, jumlah kasus aktif, yakni pasien COVID-19 yang masih menjalani masa perawatan, per hari ini berjumlah 71.658 kasus atau 13,4% dari pasien terkonfirmasi. 
                
                Untuk kasus pasien meninggal harian juga masih bertambah sebanyak 169 kasus dan kumulatifnya menjadi 16.815 kasus atau 3,1% dari pasien terkonfirmasi. Selain itu per hari ini jumlah suspek tercatat ada 70.792 kasus dan spesimen selesai diperiksa sebanyak 42.903 spesimen. Untuk sebaran wilayah masih berada di 34 provinsi dan 505 kabupaten/kota. '
            ],
        ];

        foreach($datas as $data) :
            DB::table('berita')->insert([
                'id_user' => $data['id_user'],
                'tgl_berita' => $data['tgl_berita'],
                'tema_berita' => $data['tema_berita'],
                'isi_berita' => $data['isi_berita'],
                'image' => $data['image'],
            ]);
        endforeach;
    }
}
