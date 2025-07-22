<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', [App\Http\Controllers\RegisterController::class, 'index'])->name('register');
Route::get('/component', [App\Http\Controllers\ComponentController::class, 'index'])->name('component');
