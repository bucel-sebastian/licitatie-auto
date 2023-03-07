<?php
    $file_list = scandir(ABSPATH . 'resources/css/');

    echo "<!--Stylesheets-->";

    foreach ($file_list as $key => $value) {
        if($value === '.' || $value === '..'){
            continue;
        }
        $tmp = explode('.',$value);
        if(end($tmp) != 'css'){
            continue;
        }
        echo '<link rel="stylesheet" href="/resources/css/' . $value . '?cached='.date('ymdhis').'" type="text/css">';
    }
?>