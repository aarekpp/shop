<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require 'database.php';

    function msg($success,$status,$message){
        return array_merge([
            'success' => $success,
            'status' => $status,
            'message' => $message
        ]);
    }

    $dbConn = new Database();
    $conn = $dbConn->databaseConnection();

    $data = json_decode(file_get_contents("php://input"));
    $response = [];

    if($_SERVER["REQUEST_METHOD"] != "POST"):
        $response = msg(0,404,'Page Not Found!');

    elseif( !isset($data->email) || empty(trim($data->email)) ):
        $response = msg(0,422,'Please Fill in all Required Fields!');
    
    else:
        $email = trim($data->email);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
            $response = msg(0,422,'Invalid Email Address!');
        else:
            try{
                $fetch_email = "SELECT email from users WHERE email=:email";
                $query_stmt = $conn->prepare($fetch_email);
                $query_stmt->bindValue(':email',$email,PDO::PARAM_STR);
                $query_stmt->execute();

                if($query_stmt->rowCount()):
                    $response = false;
                else:
                    $response = true;
                endif;
            }
            catch(PDOException $e ){
                $response = msg(0,500,$e->getMessage());
            }
        endif;
    endif;
    
    echo json_encode($response);

    $response=null;
    $data=null;
    $conn=null;
?>