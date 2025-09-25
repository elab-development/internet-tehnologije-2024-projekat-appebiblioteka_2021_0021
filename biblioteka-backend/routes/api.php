<?php

use App\Http\Controllers\GradController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ZanrController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/logovanje', [LoginController::class, 'login']);
Route::post('/registracija', [LoginController::class, 'register']);

Route::get('/gradovi', [GradController::class, 'index']);
Route::get('/zanrovi', [ZanrController::class, 'index']);
Route::get('/paginacija', [\App\Http\Controllers\KnjigaController::class, 'paginacija']);
Route::get('/donatori', [\App\Http\Controllers\UserController::class, 'donatoriBiblioteke']);

Route::resource('/knjige', \App\Http\Controllers\KnjigaController::class)->only(['index', 'show']);
