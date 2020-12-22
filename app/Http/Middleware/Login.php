<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Login
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        if(!Auth::check()) return redirect('auth');

        $user = Auth::user();

        if($user->level == $role) return $next($request);

        return redirect('auth')->with('flash', 'wrong-pwd');
    }
}
