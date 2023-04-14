<?php

// Permite access la REQUESTURI doar de la domeniul - http://localhost:3000
header('Access-Control-Allow-Origin: http://localhost:3000');

// Setare PATH absolut
if(!defined("ABSPATH")){
    define("ABSPATH", __DIR__ . '/');
}

// Include fisierul de configurare
include ABSPATH . "config.php";

// Verifica URI accesat
Route::run();

?>