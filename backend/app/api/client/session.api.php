<?php

session_start();
error_reporting(0);

if(isset($_SESSION['client_session'])){
    $client_session = json_decode($_SESSION['client_session']);
    if(isset($client_session['status'])){
        if($client_session['status'] === 1){
            $output = array(
                "status"=>200,
                "body"=>array(
                    "sessionStatus"=>1
                )
            );
            echo json_encode($output);
        }
        else{
            $output = array(
                "status"=>200,
                "body"=>array(
                    "sessionStatus"=>0
                )
            );
            echo json_encode($output);
        }
    }
    else{
        $output = array(
            "status"=>200,
            "body"=>array(
                "sessionStatus"=>0
            )
        );
        echo json_encode($output);
    }
}
else{
    $output = array(
        "status"=>200,
        "body"=>array(
            "sessionStatus"=>0
        )
    );
    echo json_encode($output);
}

die();