<?php
include("connection.php");

if(isset($_POST['username']) && $_POST['username'] != '' && isset($_POST['email']) && $_POST['email'] != '' && isset($_POST['password']) && $_POST['password'] != ''){

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];


    $query = $mysqli -> prepare("SELECT * FROM users WHERE username = ?");
    $query -> bind_param("s", $username);
    $query -> execute();
    $result = $query -> get_result();
    $test = $result -> fetch_assoc();
    $response = [];
    $response[] = true;
    echo json_encode($response);

} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}
?>