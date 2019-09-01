<?php
	// Файлы phpmailer
	header("Access-Control-Allow-Origin: *");
	// header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Max-Age: 1000');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

	require 'PHPMailer/class.phpmailer.php';
	require 'PHPMailer/class.smtp.php';
	require 'PHPMailer/vendor/PHPMailerAutoload.php';
	// Переменные
	$name = $_POST['name'];
	$number = $_POST['number'];
	$email = $_POST['email'];
	// Настройки
	$mail = new PHPMailer;
	$mail->isSMTP(); 
	$mail->Host = 'ssl://smtp.gmail.com'; 
	$mail->SMTPAuth = true; 
	$mail->Username = 'sapsayartyom@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
	$mail->Password = 'NuttertoolS1991'; // Ваш пароль
	$mail->SMTPSecure = 'ssl'; 
	$mail->Port = 465;
	$mail->setFrom('sapsayartyom@gmail.com'); // Ваш Email
	$mail->addAddress('sapsayartyom@gmail.com'); // Email получателя
	//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.
	// Прикрепление файлов
	// for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
	// 	$uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
	// 	$filename = $_FILES['userfile']['name'][$ct];
	// 	if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
	// 		$mail->addAttachment($uploadfile, $filename);
	// 	} else {
	// 		$msg .= 'Failed to move file to ' . $uploadfile;
	// 	}
	// }
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = 'Заголовок'; // Заголовок письма
	$mail->Body = 'Имя $name . Телефон $number . Почта $email'; // Текст письма
	// Результат
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'ok';
	}
?>