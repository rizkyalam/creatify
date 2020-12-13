<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataCovidTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_covid', function (Blueprint $table) {
            $table->bigIncrements('id_data');            
            $table->date('tgl');
            $table->time('jam');
            $table->bigInteger('id_wilayah'); // foreign key from table wilayah
            $table->bigInteger('jumlah_meninggal');
            $table->bigInteger('jumlah_odp');
            $table->bigInteger('jumlah');
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
        Schema::dropIfExists('data_covid');
    }
}
