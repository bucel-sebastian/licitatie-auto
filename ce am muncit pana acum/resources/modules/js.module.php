<?php

    $file_list = scandir(ABSPATH . 'resources/js/');
    echo "<!--JavaScript Files-->";
    foreach ($file_list as $key => $value) {
        if($value === '.' || $value === '..'){
            continue;
        }
        $tmp = explode('.',$value);
        if(end($tmp) != 'js'){
            continue;
        }
        echo '<script type="text/javascript" src="/resources/js/' . $value . '?cached='.date("ymdhis").'"></script>';
    }

?>