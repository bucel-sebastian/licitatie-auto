<?php

function generateToken(){
    $prefix = bin2hex(random_bytes(5));
    $suffix = uniqid('',false);
    return $prefix . $suffix;
}

    global $db;

    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($_POST['remember'])){
        $remember = true;
    }
    else{
        $remember = false;
    }
    

$account_exists = $db->count("client_users",["*"],"`email`='".$username."'");
    if( intval($account_exists) !== 1 ){
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>0,
                "error"=>"Account doesn't exists"
            )
        );
        echo json_encode($output);
        die();
    }

    $account_data = $db->get_results("SELECT * FROM `".$db->prefix."client_users` WHERE `email`='".$username."'");

    $account_data = $account_data[0];

    if( password_verify($password,$account_data['password']) ){
        if($account_data['verify_token'] !== null){

            $sessionToken = "session" . generateToken();
            $createDate = date("Y-m-d H:i:s");
            $db->insert("client_sessions",array(
                "client_id" => $account_data['id'],
                "session_token" => $sessionToken,
                "created_date" => $createDate
            ));

            $output = array(
                "status"=>200,
                "body"=>array(
                    "status"=>1,
                    "userData"=>array(
                        "firstName"=>$account_data['first_name'],
                        "lastName"=>$account_data['last_name'],
                        "email"=>$account_data['email'],
                        "id"=>$account_data['id'],
                        "phone"=>$account_data['phone_number'],
                        "createDate"=>$createDate
                    ),
                    "sessionToken"=>$sessionToken,
                    "remember"=>$remember
                )
                );
            echo json_encode($output);
        }
        else{
            $output = array(
                "status"=>200,
                "body"=>array(
                    "status"=>0,
                    "error"=>"Account isn't activated"
                )
            );
            echo json_encode($output);
            die();
        }
        
    }
    else{
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>0,
                "error"=>"Wrong password"
            )
        );
        echo json_encode($output);
        die();
    }


//  GENEREAZA UN TOKEN DE SESIUNE SI BAGA-L IN DB SI TRIMITE-L LA FRONTEND

   
?>