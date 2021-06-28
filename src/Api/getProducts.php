<?php 
    header("Access-Control-Allow-Origin: *");
    require 'databaseShop.php';

    $dbConn = new Database();
    $conn = $dbConn->databaseConnection();

    if($_SERVER["REQUEST_METHOD"] != "GET"):
        echo "ERROR";
    else:
        $fetch_products = "SELECT * FROM products WHERE id_category = '".$_GET["category"]."'";
        $query_stmt = $conn->prepare($fetch_products);
        $query_stmt->execute();

        $results = $query_stmt->fetchAll(PDO::FETCH_ASSOC);
    endif;
    $conn = null;
    echo json_encode($results);
?>