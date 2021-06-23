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

    elseif( !isset($data->firstName) 
        || !isset($data->lastName) 
        || !isset($data->email)
        || !isset($data->password)
        || !isset($data->terms) 
        || !isset($data->newsletter)
        || empty(trim($data->firstName))
        || empty(trim($data->lastName))
        || empty(trim($data->email))
        || empty(trim($data->password))
        || empty(trim($data->terms))
        || empty(trim($data->newsletter))):

        $response = msg(0,422,'Please Fill in all Required Fields!');

    else:  
        $firstName = trim($data->firstName);
        $lastName = trim($data->lastName);
        $email = trim($data->email);
        $password = trim($data->password);
        $terms = trim($data->terms);
        $newsletter = trim($data->newsletter);

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
            $response = msg(0,422,'Invalid Email Adress');
        elseif(strlen($password) < 7):
            $response = msg(0,422,'Password must be at least 8 characters long');
        
        else:
            try{
                $insert_query = "INSERT INTO users VALUES(null,:firstName,:lastName,:email,:password,null,:terms,:newsletter)";
                
                $insert_stmt = $conn->prepare($insert_query);
                $insert_stmt->bindValue(':firstName', $firstName,PDO::PARAM_STR);
                $insert_stmt->bindValue(':lastName', $lastName,PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email,PDO::PARAM_STR);
                $insert_stmt->bindValue(':password', password_hash($password, PASSWORD_BCRYPT),PDO::PARAM_STR);
                $insert_stmt->bindValue(':terms', $terms,PDO::PARAM_STR_CHAR);
                $insert_stmt->bindValue(':newsletter', $newsletter,PDO::PARAM_STR_CHAR);
            
                $insert_stmt->execute();

                $response = msg(1,201,'Registered successfully');
            }
            catch(PDOException $e){
                $response = msg(0,500,$e->getMessage());
            }
        endif;
    endif;
    
    echo json_encode($response);

    $response=null;
    $data=null;
    $conn=null;
?>