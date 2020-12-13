<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WilayahSeeder extends Seeder
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
                'nama_wilayah' => 'Cisaranten kulon',
                'jumlah_penduduk' => 2000,
                'letak_wilayah' => 'Jl. Cisaranten Kulon No.127, Cisaranten Kulon, Kec. Arcamanik, Kota Bandung, Jawa Barat 40293',
                'luas_wilayah' => "400, 543 ha",
                'data_wilayah' => "nama wilayah : cisaranten kulon jumlah penduduk : 2000 letak : Jl. Cisaranten Kulon No.127, Cisar",
                'keterangan' => "zona kuning"
            ],
        ];

        foreach($datas as $data) :
            DB::table('wilayah')->insert([
                'nama_wilayah' => $data['nama_wilayah'],
                'jumlah_penduduk' => $data['jumlah_penduduk'],
                'letak_wilayah' => $data['letak_wilayah'],
                'luas_wilayah' => $data['luas_wilayah'],
                'data_wilayah' => $data['data_wilayah'],
                'keterangan' => $data['keterangan'],
            ]);
        endforeach;
    }
}
