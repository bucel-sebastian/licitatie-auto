<?php

// API Routes
// (.+)/?    <--- Pentru parametrii in ruta

Route::set('/',function() {
    // return view('home.view.php');
});

Route::set('/auctions/data/(.+)/?',function($auction_id){
    return api('auction.api.php', array(
        'auction_id'=>$auction_id
    ));
});

Route::set('/auctions/data/',function(){
    return api('auctions-list.api.php', array(
        'order_by'=>'end_date',
        'order'=>'ASC'
    ));
});

Route::set('/sidebar/data',function(){
    return api('auctions-list.api.php', array(
        'limit'=>5,
        'order_by'=>'adding_date',
        'order'=>'DESC'
    ));
});


Route::set('/client/login',function(){
    return api('client/login.api.php');
});

Route::set('/client/register',function(){
    return api('client/register.api.php');
});

Route::set('client/session/validate',function(){
    return api('client/session.api.php');
});

