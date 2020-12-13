<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayah extends Model
{
    use HasFactory;

    protected $table = 'wilayah';
    protected $fillable = [
        'nama_wilayah',
        'jumlah_penduduk',
        'letak_wilayah',
        'luas_wilayah',
        'data_wilayah',
        'keterangan'
    ];
    protected $primaryKey = 'id_wilayah';
}
