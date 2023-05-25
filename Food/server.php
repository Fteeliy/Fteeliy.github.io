<?php
$_POST = json_decode(file_get_contents("php://input"), true); // - получить JSON данные на PHP коде
echo var_dump($_POST);