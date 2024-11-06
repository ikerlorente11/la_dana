<?php
    header('Content-Type: application/json');

    require_once 'config.php';

    $conn = getDBConnection();

    if (isset($_POST['author']) && isset($_POST['mail']) && isset($_POST['title']) && isset($_POST['description'])) {
        $author = !empty($_POST['author']) ? "'" . $conn->real_escape_string($_POST['author']) . "'" : 'NULL';
        $mail = !empty($_POST['mail']) ? "'" . $conn->real_escape_string($_POST['mail']) . "'" : 'NULL';
        $title = $conn->real_escape_string($_POST['title']);
        $description = $conn->real_escape_string($_POST['description']);

        $sql = "INSERT INTO entries (author, mail, title, description) VALUES ($author, $mail, '$title', '$description')";
        
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
