<?php

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
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;

Route::post('/api/inspire', function (Request $request) {
    $quotes = [];
    for ($i=0; $i < $request->nbQuotes; $i++) { 
        $quotes[] = Inspiring::quote();
    }
    return $quotes;
});


/* Do not remove this routes -------------------------------*/
Route::get('/api/xsrf-cookie-token', function () {
    return 'Request only for the xsrf-token cookie';
});

Route::get('{any}', function () {
    return File::get(public_path() . '/app.html');
})->where('any', '^((?!api).)*');
/* Do not remove this routes -------------------------------*/