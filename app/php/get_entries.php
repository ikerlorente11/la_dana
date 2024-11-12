<?php
    require_once 'config.php';

    $conn = getDBConnection();

    $sql = "SELECT id FROM entries";

    if(!empty($_POST['ids'])){
        $sql = "SELECT * FROM entries WHERE id IN (" . implode (",", $_POST['ids'] ) . ")";
    }

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
