<?php
    require_once 'config.php';

    $conn = getDBConnection();

    $sql = "SELECT * FROM entries";
    $result = $conn->query($sql);

    $entries = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $entries[] = $row;
        }
    }

    $conn->close();

    header('Content-Type: application/json');

    echo json_encode($entries);
?>
