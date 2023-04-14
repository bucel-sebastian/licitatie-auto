<?php

    extract($params);

    $output = array(
        "status"=>200,
        "data"=>array()
    );

    // echo var_dump($params);
    echo json_encode($output);