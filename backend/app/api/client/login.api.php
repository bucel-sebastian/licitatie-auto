<?php

    global $db;

    session_start();
    error_reporting(0);

    // $username = $_POST['username'];
    // $password = $_POST['password'];

    // $account_exists = $db->count("client_users",["*"],"`username`")



    $_SESSION['client_session'] = array(
        "status"=>1,
        "email"=>"test@tes.test"
    );
?>