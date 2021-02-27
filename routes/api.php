<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
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

Route::post("/signin", [AuthController::class, "signin"]);
Route::get("/signout", [AuthController::class, "signout"])->middleware("auth:api");

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
