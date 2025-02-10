<?php
require 'config.php';

header("Content-Type: application/json");

// Connect to DB
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// User Login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = $conn->prepare("SELECT * FROM users WHERE email=?");
    $query->bind_param("s", $email);
    $query->execute();
    $result = $query->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode(["message" => "Login successful", "user" => $user]);
    } else {
        echo json_encode(["error" => "Invalid credentials"]);
    }
}

// Check-in
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['check_in'])) {
    $user_id = $_POST['user_id'];
    $location = $_POST['location'];

    $query = $conn->prepare("INSERT INTO attendance (user_id, location) VALUES (?, ?)");
    $query->bind_param("is", $user_id, $location);
    if ($query->execute()) {
        echo json_encode(["message" => "Check-in successful"]);
    } else {
        echo json_encode(["error" => "Check-in failed"]);
    }
}

// Check-out
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['check_out'])) {
    $user_id = $_POST['user_id'];

    $query = $conn->prepare("UPDATE attendance SET check_out=NOW() WHERE user_id=? AND check_out IS NULL");
    $query->bind_param("i", $user_id);
    if ($query->execute()) {
        echo json_encode(["message" => "Check-out successful"]);
    } else {
        echo json_encode(["error" => "Check-out failed"]);
    }
}

$conn->close();
?>
