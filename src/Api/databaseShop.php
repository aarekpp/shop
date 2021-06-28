<?php
    class Database{
        private $host = 'hs12.linux.pl';
        private $user = 'testshop_testshop';
        private $password = 'ArEk2312';
        private $dataBase = 'testshop_shopbase';
    
        public function databaseConnection(){
            try{
                $conn = new PDO('mysql:host='.$this->host.';dbname='.$this->dataBase,$this->user,$this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            }
            catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
                exit;
            }
        }
    }
?>