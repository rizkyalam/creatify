<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWilayahTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wilayah', function (Blueprint $table) {
            $table->bigIncrements('id_wilayah');
            $table->string('nama_wilayah', 100);
            $table->bigInteger('jumlah_penduduk');
            $table->string('letak_wilayah', 100);
            $table->string('luas_wilayah', 100);
            $table->string('data_wilayah', 100);
            $table->text('keterangan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wilayah');
    }
}
