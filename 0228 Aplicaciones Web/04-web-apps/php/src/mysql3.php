
<?php
// Conectar MySQL

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Get datos del formulario

    $id = (int)$_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];



    // Preparar stored procedure
    $stmt = $mysqli->prepare("CALL upsertUser(?, ?, ?)");

    // Enlazar parametros
    $stmt->bind_param("iss", $id, $name, $email);

    // Ejecutar
    if ($stmt->execute()) {
        echo "User inserted/updated successfully!";
    } else {
        echo "Error executing procedure: " . $stmt->error;
    }

    // Cerrar stmt
    $stmt->close();


}


// Close MySQL
?>









<?php
// Conectar a MySQL

// Handle POST delete request
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if (isset($_POST['delete_id'])) {
        $delete_id = (int)$_POST['delete_id'];

        // Llamar el procedimiento almacenado

        ...
    }
else { // Handle GET request
    // Conseguir datos para mostrar
    $result = $mysqli->query("SELECT id, name, email FROM users ORDER BY id ASC");

}

// Cerrar conexion
?>

<table border="1" cellpadding="8" cellspacing="0">
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>

    <?php while ($row = $result->fetch_assoc()) : ?>

        ...
        <!-- Encrustamos un formulario con un botón hidden -->
            <form method="post" style="display:inline;" onsubmit="return confirm('Delete this user?');">
                <input type="hidden" name="delete_id" value="<?= $row['id'] ?>">
                <input type="submit" value="Delete">
            </form>

        ...
    <?php endwhile; ?>

</table>


