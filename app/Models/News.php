<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $table = 'berita';
    protected $primaryKey = 'id_berita';
    protected $fillable = [
        'id_user',
        'judul_berita',
        'image',
        'tgl_berita',
        'tema_berita',
        'isi_berita'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
