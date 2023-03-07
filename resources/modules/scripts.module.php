<?php
    echo "<!--Other Scripts-->";

    $scriptsJson = file_get_contents(ABSPATH . "resources/modules/scripts.json");
    $scriptsJson = json_decode($scriptsJson);
    foreach($scriptsJson as $value) {
        echo $value;
    }

?>