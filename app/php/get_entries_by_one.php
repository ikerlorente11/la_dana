<?php
    require_once 'config.php';

    $conn = getDBConnection();

    $index = isset($_GET['index']) ? intval($_GET['index']) : 0;

    $sql = "SELECT * FROM entries LIMIT 1 OFFSET $index";
    $result = $conn->query($sql);

    $entry = null;
    if ($result->num_rows > 0) {
        $entry = $result->fetch_assoc();
    }

    $conn->close();

    header('Content-Type: application/json');

    echo json_encode($entry);
?>
