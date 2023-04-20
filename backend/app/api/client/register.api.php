<?php
    
    function generateToken(){
        $prefix = bin2hex(random_bytes(5));
        $suffix = uniqid('',false);
        return $prefix . $suffix;
    }

    $output = array();

    $email = $_POST['username'];
    $password = $_POST['password'];
    $re_password = $_POST['re-password'];
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $phone_number = $_POST['phone'];

    global $db;

    if($db->count("client_users",["*"],"`email`='".$email."'") > 0){
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>0,
                "error"=>"Email already exists"
            )
        );
        echo json_encode($output);
        die();
    }
    
    $verify_token = generateToken();

    if($password !== $re_password){
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>0,
                "error"=>"Passwords doesn't match"
            )
        );
        echo json_encode($output);
        die();
    }

    $crypted_password = password_hash($password,PASSWORD_BCRYPT, ['cost'=>12]);

    $unicId = "user".generateToken();
    $unicIdExists = true;

    while($unicIdExists){
        if($db->count("client_users",["*"],"`id`='".$unicId."'") > 0){
            $unicId = "user".generateToken();
        }
        else{
            $unicIdExists = false;
        }
    }

    if( $db->insert("client_users", array(
        "id"=>$unicId,
        "email"=>$email,
        "password"=>$crypted_password,
        "first_name"=>$first_name,
        "last_name"=>$last_name,
        "phone_number"=>$phone_number,
        "creation_date"=>date("Y-m-d H:i:s"),
        "verify_token"=>$verify_token
    )) ){
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>1
            )
        );
        echo json_encode($output);
        die();
    } else {
        $output = array(
            "status"=>200,
            "body"=>array(
                "status"=>0,
                "error"=>"DB error"
            )
        );
        echo json_encode($output);
        die();
    }
?>