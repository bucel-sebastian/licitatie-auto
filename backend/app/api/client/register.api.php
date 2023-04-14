<?php
    

    $output = array();

    $email = $_POST['email'];
    $password = $_POST['password'];
    $re_password = $_POST['re-password'];
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $phone_number = $_POST['phone'];

    global $db;

    if($db->count("client_users",["*"],"`email`=".$email) > 0){
        echo json_encode(array(
            "status"=>0,
            "error"=>"Email already exists"
        ));
        die();
    }
    

    if( $db->insert("client_users", array(
        "email"=>$email,
        "password"=>$password,
        "first_name"=>$first_name,
        "last_name"=>$last_name,
        "phone_number"=>$phone_number
    )) ){
        echo json_encode(array(
            "status"=>1,
        ));
        die();
    } else {
        echo json_encode(array(
            "status"=>0,
            "error"=>"DB error"
        ));
        die();
    }
?>