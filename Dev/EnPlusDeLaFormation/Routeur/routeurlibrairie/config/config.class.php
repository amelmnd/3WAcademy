<?php


class config {

private $config; 

    public function __construct(){

        $config['dsn']      = 'mysql:host=localhost;dbname=resto';
        $config['password'] = 'troiswa';
        $config['user']     = 'root';
    }

    public function get(){

        return $config;

    }


}

?>