<?php
    header("Access-Control-Allow-Origin: *");

    $body = file_get_contents("php://input");

    $convert = json_decode($body, true);


    $server = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($server, $username, $password);

    if ($conn->error){
        die("Data died!");
    }

    $sql = $conn->query("SELECT * FROM activities.activities");

    echo json_encode($sql->fetch_all(MYSQLI_ASSOC))

?>