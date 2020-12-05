<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    // method untuk menampilkan view public
    public function index()
    {
        return view('app');
    }
}
