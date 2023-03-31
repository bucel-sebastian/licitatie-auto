<?php


function view(string $file,array $params=[]){
    include(ABSPATH . "/resources/view/" . $file);
}