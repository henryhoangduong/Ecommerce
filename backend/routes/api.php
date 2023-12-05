<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Cartcontroller;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;



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

/////////////////////////////User controller///////////////////////////////
Route::post('login', [App\Http\Controllers\UserController::class, 'login']);


Route::controller(UserController::class)->group(function () {
    Route::get('logout', 'logout');
})->middleware('auth:api');
Route::post('register',[App\Http\Controllers\UserController::class,'register']);

///////////////////////////////Product controller////////////////////////////
Route::get('read/products/pagination', [App\Http\Controllers\ProductController::class,'pagination']);
Route::get('read/products', [App\Http\Controllers\ProductController::class,'index']);
Route::get('read/products/{product}', [App\Http\Controllers\ProductController::class,'readbyid']);
Route::controller(ProductController::class)->group(function () {
    Route::post('create/products', 'create');
    Route::post('update/products/{product}', [App\Http\Controllers\ProductController::class,'update']);
    Route::delete('delete/products{product}', [App\Http\Controllers\ProductController::class,'destroy']);
})->middleware('auth:api');

///////////////////////////////Cart controller////////////////////////////
Route::get('read/carts',[App\Http\Controllers\Cartcontroller::class,'index'])->middleware('auth:api');
Route::controller(Cartcontroller::class)->group(function () {
    Route::post('create/carts', 'create');
    Route::post('update/carts/{carts}', 'updateQuantities');
})->middleware('auth:api');

/////////////////////////////////Order controller////////////////////////////
Route::get('create/orders', [App\Http\Controllers\OrderController::class, 'index'])->middleware('auth:api');
Route::get('read/orders', [App\Http\Controllers\OrderController::class, 'read'])->middleware('auth:api');