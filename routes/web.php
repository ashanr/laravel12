<?php

use App\Enums\Role;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage', [
        'authLinks' => [
            'login' => route('login'),
            'register' => route('register'),
        ],
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    

        Route::resource('users', UserController::class);
  
});

Route::get('/about', function () {
    return 'About Page';
});

Route::get('/contact', function () {
    return 'Contact Page';
});

Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
