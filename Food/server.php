<?php
$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST); // берет данные от клиента, преобразует в строку, аналог response json