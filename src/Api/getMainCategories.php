<?php 
    header("Access-Control-Allow-Origin: *");
    
    require "databaseShop.php";

    $dbConn = new Database();
    $conn = $dbConn->databaseConnection();

    if($_SERVER["REQUEST_METHOD"] != "GET"):
        echo "ERROR";
    else:
        $fetch_main_cat = "SELECT * FROM navbar_main_categories";
        $query_stmt = $conn->prepare($fetch_main_cat);
        $query_stmt->execute();

        $results = $query_stmt->fetchAll(PDO::FETCH_ASSOC);
    endif;
    $conn=null;
    echo json_encode($results);
?>