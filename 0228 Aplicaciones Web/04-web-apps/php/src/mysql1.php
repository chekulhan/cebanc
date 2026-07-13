<?php
$mysqli = new mysqli("mysql", "user", "userpass", "myapp");
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
echo "Connected successfully!";