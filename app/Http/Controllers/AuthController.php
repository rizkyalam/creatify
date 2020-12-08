<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    // index
    public function index()
    {
        return view('admin.auth');
    }
}
