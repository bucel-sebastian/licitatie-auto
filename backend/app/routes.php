<?php

Route::set('/',function() {
    return view('home.view.php');
});

Route::set('/auction/(.+)/?/(.+)/?',function($auction_id,$auction_name) {
    return view('auction.view.php', array(
        'auction_id'=>$auction_id,
        'auction_name'=>$auction_name
    ));
});

Route::set('/sell',function() {
    return view('sell.view.php');
});

Route::set('/photos',function() {
    return view('photos.view.php');
});

Route::set('/about',function() {
    return view('about.view.php');
});

Route::set('/support',function() {
    return view('support.view.php');
});

Route::set('/shipping',function() {
    return view('shipping.view.php');
});

Route::set('/terms',function() {
    return view('terms.view.php');
});

Route::set('/search',function() {
    return view('search.view.php');
});

Route::set('/login',function() {
    global $user_data;
    
    if($user_data->status != 'loggedIn'){
        return view('login.view.php');    
    }
    header('Location: /');
});

Route::set('/setlogin',function() {
    // echo var_dump(json_decode('{"status":"loggedIn"}'));
    $_SESSION['user_data'] = json_decode('{"status":"loggedIn"}');
    header('Location: /');
});

Route::set('/unsetlogin',function() {
    session_destroy();
    header('Location: /');
});

Route::set('/pagina/(.+)/?/nume/(.+)/?',function($param1,$param2) {
    return view('pagina.view.php',array(
        'param1'=>$param1,
        'param2'=>$param2
    ));
});

