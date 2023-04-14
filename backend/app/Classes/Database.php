<?php

class Database {

    protected $connection;
    public $prefix = "db_2023_";

    public function __construct(string $db_host, string $db_user, string $db_pass, string $db_name) {
        $this->connection = new mysqli($db_host,$db_user,$db_pass,$db_name);
        if( $this->connection->connect_error ){
            $this->error('Conexiunea la baza de date a esuat - ' . $this->connection->connect_error);
        }
    }

    function insert( string $table_name, array $variables) {
        $table_columns = array();
        $table_values = array();

        foreach ($variables as $key => $value) {
            array_push($table_columns,"`" . $key . "`");
            array_push($table_values,"'" . $value ."'");
        }

        $sql_query = "INSERT INTO `" .$this->prefix. $table_name . "` (" . implode(", ",$table_columns) . ") VALUES (" . implode(", ",$table_values) . ")";

        if(mysqli_query($this->connection,$sql_query)){
            return 1;
        }
        return $this->connection->error;
    }

    function get_results(string $query) {

        $sql_query = $query;

        if($results = mysqli_query($this->connection,$sql_query)){
            $output = array();
            foreach ($results as $value) {
                array_push($output,$value);
            }
            return $output;
            
        }
        return $this->connection->error;
    }

    function count(string $table_name, array $columns=["*"], string $where="1"){
        $sql_query = "SELECT COUNT(".implode(",",$columns).") as count FROM `".$this->prefix.$table_name."` WHERE " . $where;
        if($results = mysqli_query($this->connection,$sql_query)){
            $result = mysqli_fetch_assoc($results);
            return $result['count'];
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