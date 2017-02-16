<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () {
    return view('index');
<<<<<<< HEAD
});

$app->get('notes', function () {
		return view('notes');
=======
>>>>>>> 4b8b1dd... React build
});

$app->get('notes', function () {
		return view('notes');
});