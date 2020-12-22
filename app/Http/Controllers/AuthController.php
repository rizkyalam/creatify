<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

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
        // if($request->email === 'admin@example.com' && $request->password === 'admin') 
        //     return redirect('admin')->with('flash', 'login');
        
        $credentials = $request->only('email', 'password');

        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if($user->level == 1) return redirect()->intended('admin');

            return redirect()->intended();
        }

        return redirect('/auth');
    }

    // logout
    public function logout()
    {
        Auth::logout();
        return redirect('auth');
    }
}
