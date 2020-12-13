<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataCovid;
use App\Models\News;

class PublicController extends Controller
{
    // method untuk menampilkan view public
    public function index()
    {
        return view('app');
    }

    // data api covid
    public function covidData()
    {
        $data = DataCovid::with('wilayah')->orderByDesc('id_data')->paginate(5);
        return response()->json($data);
    }

    // get detail data dari covidData()
    public function getCovidData($id)
    {
        $data = DataCovid::with('wilayah')->find($id);
        return response()->json($data);
    }

    // pencarian api covid
    public function searchCovidData($keyword) {
        $data = DataCovid::with('wilayah')
                ->where("nama_wilayah", "like", $keyword)
                ->paginate(5);
        return response()->json($data);
    }

    // data api berita
    public function dataNews()
    {
        $data = News::with('creator')->orderByDesc('id_berita')->paginate(3);
        return response()->json($data);
    }
}
