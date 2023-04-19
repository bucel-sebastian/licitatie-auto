<?php

    extract($params);

    $output = array(
        "status"=>200,
        "body"=>array()
    );

    // echo var_dump($params);
    echo json_encode($output);