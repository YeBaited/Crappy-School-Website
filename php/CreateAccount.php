<?php
    header("Access-Control-Allow-Origin: *");

    $body = file_get_contents("php://input");

    $convert = json_decode($body, true);
    $usernameReceived = $convert["username"];
    $passwordReceived = $convert["password"];

    $server = "localhost";
    $username = "root";
    $password = "";

    function returnData($table){
        echo json_encode($table);
    };

    $sql = new mysqli($server ,$username, $password);
    if ($sql->error){
        echo returnData(array(
            "isSuccess" => true,
            "reason" => "An error occured while connecting to the database",   
        ));
        die("ERRORED!");
    };

    $result1 = $sql->query("SELECT * FROM logindb.logincredentials WHERE username = '$usernameReceived'");
    
    if (mysqli_num_rows($result1) > 0){ // Check if username is already existing
        echo returnData(array(
            "isSuccess" => false,
            "reason" => "Username already exist in the database",
        ));
        die();
    } 

    $result2 = $sql->query("INSERT INTO logindb.logincredentials (username, password) VALUES ('$usernameReceived', '$passwordReceived')");

    echo returnData(array(
        "isSuccess" => true
    ));
?>