<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [App\Http\Controllers\UserController::class,'login']);


Route::controller(UserController::class)->group(function () {
    Route::get('logout', 'logout');
    
})->middleware('auth:api');


Route::get('read/products/pagination', [App\Http\Controllers\ProductController::class,'pagination']);
Route::get('read/products', [App\Http\Controllers\ProductController::class,'index']);
Route::get('read/products/{product}', [App\Http\Controllers\ProductController::class,'readbyid']);

Route::post('register',[App\Http\Controllers\UserController::class,'register']);


Route::controller(ProductController::class)->group(function () {
    Route::post('create/products', 'create');
    Route::post('update/products/{product}', [App\Http\Controllers\ProductController::class,'update']);
    Route::delete('delete/products{product}', [App\Http\Controllers\ProductController::class,'destroy']);
})->middleware('auth:api');
