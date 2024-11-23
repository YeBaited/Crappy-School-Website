<?php
    header("Access-Control-Allow-Origin: *");
    $body = file_get_contents("php://input");

    $decode = json_decode($body, true);
    $usr = $decode["username"];
    $pas = $decode["password"];

    $server = "localhost";
    $username = "root";
    $password = "";

    function returnData($table){
        echo json_encode($table);
    };

    $conn = new mysqli($server, $username, $password);

    if ($conn->error){
        die("SQL failure to connect!");
    }

    $sql = $conn->query("SELECT * FROM logindb.logincredentials WHERE BINARY username = '$usr' AND BINARY password = '$pas'");
    
    if ($sql->num_rows > 0){
        echo returnData(array(
            "isSuccess" => true,
            "reason" => "Account can login"
        ));
        die();
    } else {
        echo returnData(array(
            "isSuccess" => false,
            "reason" => "Account can not login"
        ));
        die();
    }
    
?>