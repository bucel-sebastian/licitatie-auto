<?php

class Route {

    static public $routes = [];

    static public function set(string $path, callable $callback){
        global $routes;
        
        $path = trim($path,'/');
        $routes [ $path ] = $callback;
    }
    
    static public function run(){
        global $routes;

        $uri = $_SERVER['REQUEST_URI'];
        $uri = explode('?',$uri);

        if(sizeof($uri)>1){
            $uri_parameters = $uri[1];
            $uri = $uri[0];
            echo $uri_parameters;
        }
        else{
            $uri=$uri[0];
        }

        
        
        $uri = trim($uri,'/');
        // $uri = parse_url($uri);

        $found = false;

        $callback = null;
        $params = [];

        foreach ($routes as $path => $handler) {
            if(preg_match("%^{$path}$%",$uri,$params) === 1){
                $callback = $handler;
                unset($params[0]);
                $found = true;
                call_user_func($callback, ...$params);
                break;
            }
        }
        if(!$found){
            self::notFound();
        }
    }

    static public function notFound(){
        return api('404.api.php');
    }

}