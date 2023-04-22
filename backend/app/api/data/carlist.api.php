<?php

$file = './data/car-list.json';
$data = file_get_contents($file);

if($data === false){
    $output = array(
        "status"=>200,
        "body"=>array(
            "status"=>0,
            "error"=>"File reading error"
        )
    );
    echo json_encode($output);

    die();
}

$json = json_decode($data, true);
if($json === null){
    $output = array(
        "status"=>200,
        "body"=>array(
            "status"=>0,
            "error"=>"JSON parse error"
        )
    );
    echo json_encode($output);

    die();
}

$output = array(
    "status"=>200,
    "body"=>array(
        "status"=>1,
        "data"=>$json
    )
);
echo json_encode($output);
