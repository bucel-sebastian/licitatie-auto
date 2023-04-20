<?php

global $db;

$session_token = $_POST['sessionToken'];


$session_exists = $db->count("client_sessions",["*"],"`session_token`='" . $session_token . "'");

$client_session_data = $db->get_results("SELECT * FROM `".$db->prefix."client_sessions` WHERE `session_token`='" . $session_token . "'");
$client_session_data = $client_session_data[0];

$client_id=$client_session_data['id'];

if( $session_exists !== 1 ){
    $output = array(
        "status"=>200,
        "body"=>array(
            "sessionStatus"=>0
        )
    );
    echo json_encode($output);
    die();
}

$client_data = $db->get_results("SELECT * FROM `".$db->prefix."client_users` WHERE `id`='".$client_id."'");

if(sizeof($client_data) === 1){
    $client_data = $client_data[0];

    $output = array(
        "status"=>200,
        "body"=>array(
            "sessionStatus"=>1,
            "userData"=>array(
                "first_name"=>$account_data['first_name'],
                "last_name"=>$account_data['last_name'],
                "email"=>$account_data['email'],
                "id"=>$account_data['id'],
                "phone"=>$account_data['phone_number']
            ),
            "sessionToken"=>$session_token
        )
    );
    echo json_encode($output);
    die();
}
else{
    $output = array(
        "status"=>200,
        "body"=>array(
            "sessionStatus"=>0
        )
    );
    echo json_encode($output);
    die();
}
