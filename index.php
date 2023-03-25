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




Route::run();




?>
