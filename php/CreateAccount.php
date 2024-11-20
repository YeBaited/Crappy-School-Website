<?php
    header("Access-Control-Allow-Origin: *");

    $body = file_get_contents("php://input");

    $convert = json_decode($body, true);
    $usernameReceived = $convert["username"];
    $passwordReceived = $convert["password"];

    $server = "localhost";
    $username = "root";
    $password = "";

    $sql = new mysqli($server ,$username, $password);
    if ($sql->error){
        echo "An error occured!";
        die("ERRORED!");
    };

    $result1 = $sql->query("SELECT * FROM logindb.logincredentials WHERE username = '$usernameReceived'");
    
    if (mysqli_num_rows($result1) > 0){
        echo "It already exist";
    } else {
        echo "It does not exist!";
    }

?>