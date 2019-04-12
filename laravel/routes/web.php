<?php

Route::get('/', function () {
    return view('home');
})->middleware('auth');

// Authentication Routes...
Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// Admin
Route::group(['middleware' => ['auth', 'can:admin']], function () {

    // USER
    Route::post('/api/admin/user', 'UserController@index')->name('admin/user');
});

// Other
Route::get('/{any}', function () {
    return view('home');
})->middleware('auth')->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
