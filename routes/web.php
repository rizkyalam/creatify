<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WilayahController;
use App\Http\Controllers\DataCovidController;
use App\Http\Controllers\NewsController;

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
Route::get('/auth', [AuthController::class, 'index'])->name('auth');
Route::get('/logout', [AuthController::class, 'logout'])->name('auth.logout');

/* 
** Route admin
*/

Route::prefix('admin')->middleware(['auth', 'login:1'])->group(function() {
    // Dashboard admin
    Route::get('/', [DashboardController::class, 'index']);
    
    // Route User Admin
    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/create', [UserController::class, 'create']);
    Route::post('/user', [UserController::class, 'store']);
    Route::get('/user/{id}/edit', [UserController::class, 'edit']);
    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'destroy']);
    
    // Route Data Covid 
    Route::resource('/data', DataCovidController::class);
    
    // route wilayah
    Route::resource('/wilayah', WilayahController::class);
    
    // Route berita
    Route::resource('/news', NewsController::class);
});

// Route Auth
Route::post('auth/login', [AuthController::class, 'login']);

/*
** route public
*/
Route::get('/{any}', [PublicController::class, 'index'])->where('any', '.*');
