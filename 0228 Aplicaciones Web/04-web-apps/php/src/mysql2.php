<?php
// Connect to MySQL
$mysqli = new mysqli("mysql", "user", "userpass", "myapp");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Query the database
$result = $mysqli->query("SELECT id, value FROM test1");

if (!$result) {
    die("Query error: " . $mysqli->error);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Test Table Data</title>
    <style>
        table { border-collapse: collapse; width: 50%; margin: 20px auto; }
        th, td { border: 1px solid #aaa; padding: 8px; text-align: left; }
    </style>
</head>
<body>
    <h2 style="text-align:center;">Test Table Data</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Value</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= htmlspecialchars($row['id']) ?></td>
            <td><?= htmlspecialchars($row['value']) ?></td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>

<?php
$mysqli->close();
?>