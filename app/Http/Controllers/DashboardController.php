<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $datas = News::with('creator')->orderByDesc('id_berita')->limit(5)->get();

        return view('admin.dashboard', compact('datas'));
    }
}
