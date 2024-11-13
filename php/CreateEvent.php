<?php
    $username = "root";
    $password = "";
    $server = "localhost";

    $conn = new mysqli($server, $username, $password);

    if ($conn->connect_error){
        echo "There was an error attempting to connect to the server!";
        die("oOF error");
    }

    $query = $conn->query("SELECT * FROM newsdb.news");

    echo $query->num_rows;

?>