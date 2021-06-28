<?php
    header("Access-Control-Allow-Origin: *");
    
    require "databaseShop.php";

    $dbConn = new Database();
    $conn=$dbConn->databaseConnection();

    if($_SERVER["REQUEST_METHOD"] != "GET"):
        echo "ERROR";
    else:
        $fetch_subcategories = "SELECT * FROM navbar_main_subcategories";
        $query_stmt = $conn->prepare($fetch_subcategories);
        $query_stmt->execute();

        $results = $query_stmt->fetchAll(PDO::FETCH_ASSOC);
    endif;
    $conn=null;
    echo json_encode($results);
?>