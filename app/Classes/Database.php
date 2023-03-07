<?php

class Database {

    protected $connection;

    public function __construct(string $db_host, string $db_name, string $db_user, string $db_pass) {
        $this->connection = new mysqli($db_host,$db_user,$db_pass,$db_name);
        if( $this->connection->connect_error ){
            $this->error('Conexiunea la baza de date a esuat - ' . $this->connection->connect_error);
        }
    }

    function insert(array $variables, string $table_name) {
        $table_columns = array();
        $table_values = array();



        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }

    function get() {


        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }

    function update() {


        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }

    function delete() {

        
        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }

    function crate_table(string $table_name, array $table_columns, string $primary_key) {


        $sql_query = "CREATE TABLE `" . $table_name . "` (



        )";

        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }
}