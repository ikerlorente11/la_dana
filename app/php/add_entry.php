<?php
    header('Content-Type: application/json');

    require_once 'config.php';

    $conn = getDBConnection();

    if (isset($_POST['author']) && isset($_POST['location']) && isset($_POST['title']) && isset($_POST['description']) && isset($_POST['font']) && isset($_POST['style'])) {
        $author = !empty($_POST['author']) ? "'" . $conn->real_escape_string($_POST['author']) . "'" : 'NULL';
        $location = !empty($_POST['location']) ? "'" . $conn->real_escape_string($_POST['location']) . "'" : 'NULL';
        $title = $conn->real_escape_string($_POST['title']);
        $description = $conn->real_escape_string($_POST['description']);
        $font = "'" . $_POST['font'] . "'";
        $style = "'" . $_POST['style'] . "'";

        $sql = "INSERT INTO entries (author, location, title, description, font, style) VALUES ($author, $location, '$title', '$description', $font, $style)";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(['success' => 'Entrada añadida exitosamente']);
        } else {
            echo json_encode(['error' => 'Error al añadir la entrada: ' . $conn->error]);
        }
    } else {
        echo json_encode(['error' => 'Datos incompletos']);
    }

    $conn->close();
?>
