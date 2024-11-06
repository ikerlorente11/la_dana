<?php
    // Datos de conexión a la base de datos
    define('DB_SERVER', 'db');
    define('DB_USERNAME', 'user');
    define('DB_PASSWORD', 'user_password');
    define('DB_NAME', 'my_database');

    function getDBConnection() {
        $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
        
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        $conn->set_charset("utf8");
        
        return $conn;
    }
?>