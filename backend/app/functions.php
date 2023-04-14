<?php

function api(string $file, array $params=[]){
    include(ABSPATH . "/app/api/" . $file);
}