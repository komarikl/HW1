<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$mail = $_POST['picture'];
$mail = $_POST['URL'];
$mail = $_POST['description'];

//действия с данными

sleep(1);

$result = true;

echo json_encode(array(
	'status' => $result,
));