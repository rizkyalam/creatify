<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataCovid extends Model
{
    use HasFactory;

    protected $table = 'data_covid';
    protected $primaryKey = 'id_data';
    protected $fillable = [
        'tgl',
        'jam',
        'id_wilayah',
        'jumlah_meninggal',
        'jumlah_odp',
        'jumlah'
    ];

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class, 'id_wilayah');
    }
}
