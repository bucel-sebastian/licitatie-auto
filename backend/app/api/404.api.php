<?php
    // JSON output when API Route is not found (404 error)
    $output = array(
        "status"=>404,
        "data"=>"API Route not found"
    );
    echo json_encode($output);
?>