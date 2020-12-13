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

    // login
    public function login(Request $request)
    {
        if($request->email === 'admin@example.com' && $request->password === 'admin') 
            return redirect('admin')->with('flash', 'login');
    }
}
