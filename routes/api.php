<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// api untuk data covid
Route::get('/data', [PublicController::class, 'covidData']);
Route::get('/data/{id}', [PublicController::class, 'getCovidData']);
Route::get('/data/s/{keyword}', [PublicController::class, 'searchCovidData']);

// api untuk berita
Route::get('/news', [PublicController::class, 'dataNews']);