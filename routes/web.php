<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route autentikasi
Route::get('/auth', [AuthController::class, 'index']);

/* 
** Route admin
*/

// Dashboard admin
Route::get('/admin', [DashboardController::class, 'index']);



// route public
Route::get('/{any}', [PublicController::class, 'index'])->where('any', '.*');
