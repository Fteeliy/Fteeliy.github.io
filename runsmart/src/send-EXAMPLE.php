<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
	$mail->isSMTP();
	$mail->CharSet = "UTF-8";
	$mail->SMTPAuth   = true;

	// Настройки вашей почты
	$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
	$mail->Username   = 'SECRET'; // Логин на почте
	$mail->Password   = 'SECRET'; // Пароль на почте
	$mail->SMTPSecure = 'ssl';
	$mail->Port       = 465;
	$mail->setFrom('SECRET', 'Pulse'); // Адрес самой почты и имя отправителя

	// Получатель письма
	$mail->addAddress('SECRET');

	// Отправка сообщения
	$mail->isHTML(true);
	$mail->Subject = 'Данные';
	$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

	// Проверяем отравленность сообщения
	if ($mail->send()) {
		$result = "success";
	} else {
		$result = "error";
	}
} catch (Exception $e) {
	$result = "error";
	$status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
