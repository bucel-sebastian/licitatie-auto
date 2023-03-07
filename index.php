<?php

// (.+)/?    <--- Pentru parametrii in ruta

session_start();
error_reporting(0);

if(!defined("ABSPATH")){
    define("ABSPATH", __DIR__ . '/');
}

include ABSPATH . "config.php";

if(isset($_SESSION['user_data'])){
    $user_data = $_SESSION['user_data'];
}

Route::get('/',function() {
    return view('home.view.php');
});

Route::get('/search',function() {
    return view('search.view.php');
});

Route::get('/login',function() {
    global $user_data;
    
    if($user_data->status != 'loggedIn'){
        return view('login.view.php');    
    }
    header('Location: /');
});

Route::get('/setlogin',function() {
    // echo var_dump(json_decode('{"status":"loggedIn"}'));
    $_SESSION['user_data'] = json_decode('{"status":"loggedIn"}');
    header('Location: /');
});

Route::get('/unsetlogin',function() {
    session_destroy();
    header('Location: /');
});

Route::get('/pagina/(.+)/?/nume/(.+)/?',function($param1,$param2) {
    return view('pagina.view.php',array('param1'=>$param1,'param2'=>$param2));
});



Route::run();




?>
