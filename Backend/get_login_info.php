<?php
    include("connection.php");
    
    if(isset($_GET['username']) && isset($_GET['password'])) {
        $username = $_GET['username'];
        $password = $_GET['password'];
        $query = $mysqli -> prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        $query -> bind_param("ss", $username, $password);
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