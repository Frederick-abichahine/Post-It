<?php
    include("connection.php");
    
    if(isset($_GET['username'])) {

        $username = $_GET['username'];
        $query = $mysqli -> prepare("SELECT * FROM users WHERE username = ?");
        $query -> bind_param("s", $username);
        $query -> execute();
        $result = $query -> get_result();
        $response = [];
        $user = $result -> fetch_assoc();
        $response[] = $user;
        echo json_encode($response);

    } else {
        echo "Username was not provided.";
    }
?>