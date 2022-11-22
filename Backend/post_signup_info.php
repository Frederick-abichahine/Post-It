<?php
include("connection.php");

if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])){

} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}









?>