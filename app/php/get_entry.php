<?php
    require_once 'config.php';

    $conn = getDBConnection();

    $id = $conn->real_escape_string($_POST['id']);

    $sql = "SELECT * FROM entries where id = $id LIMIT 1";
    $result = $conn->query($sql);

    $entries = [];
    if ($result->num_rows > 0) {
        $entry = $result->fetch_assoc();
    }

    $conn->close();

    header('Content-Type: application/json');

    echo json_encode($entry);
?>
