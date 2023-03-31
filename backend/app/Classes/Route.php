<?php

class Route {

    static public $routes = [];

    static public function set(string $path, callable $callback){
        global $routes;
        
        $path = trim($path,'/');
        $routes [ $path ] = $callback;
    }
    

// DE SCOS PARAMETRII DIN URL



    static public function run(){
        global $routes;

        $uri = $_SERVER['REQUEST_URI'];
        $uri = explode('?',$uri);

        $uri_parameters = $uri[1];
        $uri = $uri[0];
        
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
        return view('404.view.php');
    }

}