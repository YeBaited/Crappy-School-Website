<?php
$server = "localhost";
$username = "root";
$password = "";

function joshieTryLogin($passedUserername, $passedPassword){
        global $server;
        global $username;
        global $password;

        $conn = new mysqli($server, $username, $password);
    
        if ($conn->error){
            die("SQL failure to connect!");
        }
    
        $sql = $conn->query("SELECT * FROM logindb.logincredentials WHERE BINARY username = '$passedUserername' AND BINARY password = '$passedPassword'");
        
        if ($sql->num_rows > 0){
            return array(
                "isSuccess" => true,
                "reason" => "Account can login"
            );
            die();
        } else {
            return array(
                "isSuccess" => false,
                "reason" => "Account can not login"
            );
            die();
        }
    }

?>