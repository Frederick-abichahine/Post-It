<?php
include("connection.php");

if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])){

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $query = $mysqli -> prepare("INSERT INTO users(username, password, email) VALUES(?, ?, ?)");
    $query -> bind_param("sss", $username, $password, $email);
    $query -> execute();

    $response = [];
    $response["success"] = true;
    echo json_encode($response);

} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}









?>