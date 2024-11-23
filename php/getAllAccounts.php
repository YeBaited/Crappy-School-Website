<?php
    header("Access-Control-Allow-Origin: *");


    $server = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($server, $username, $password);

    if ($conn->error){
        die("an error has occured");
    }

    $query = $conn->query("SELECT * FROM logindb.logincredentials");

    echo(json_encode($query->fetch_all(MYSQLI_ASSOC)));
?>