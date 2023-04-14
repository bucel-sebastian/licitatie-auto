<?php

include ABSPATH . 'app/includes.php';

// DB Settings

$db_host = 'localhost:3306';
$db_name = 'licitatii-auto';
$db_user = 'root';
$db_pass = '';

$db = new Database($db_host,$db_user,$db_pass,$db_name);

global $db;

$results = $db->count("client_users",["*"],"`id`='3'");
echo $results;
