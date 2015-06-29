<?php

header('Content-Type: application/json');

$name = $_POST['login'];
$mail = $_POST['pass'];
//действия с данными

sleep(1);

$result = true;

echo json_encode(array(
	'status' => $result,
));