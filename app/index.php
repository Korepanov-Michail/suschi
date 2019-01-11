
<?php

$email = ($_POST['email']);
$phone = ($_POST['phone']);
$text = ($_POST['text']);

//strip_tags заменяет знаки < >  на безопасные спецсимволы
$email = strip_tags($email);
$phone = strip_tags($phone);
$text = strip_tags($text);

require_once('PHPMailer/class.phpmailer.php');

$mail = new PHPMailer();
         
//задаём как  работать с SMTP сервером
$mail->isSMTP();
//адрес smtp сервера
//$mail->Host = "smtp.gmail.com";
$mail->Host = "smtp.yandex.ru";
//если сервер требует авторизации
$mail->SMTPAuth   = true;
//логин от почты
//$mail->Username = 'hihkoregp';
$mail->Username = 'hihkore2';
//пароль
//$mail->Password = '123gp123gp123';
$mail->Password = '123ola123ola123';
//тип шифрования
$mail->SMTPSecure = "ssl";
//сообщения дебагера
 $mail->SMTPDebug  = 1;
//порт сервера
$mail->Port = 465;
//$mail->From 'hihkoregp@gmail.com';
//$mail->FromName ='Михаил Корепанов';
$mail->FromName ='Корепанов Михаил';
//$mail->SetFrom('hihkoregp@gmail.com', 'Михаил Корепанов');
$mail->SetFrom("hihkore2@yandex.ru", "Корепанов Михаил");
//$mail->AddAddress("hihkore2@yandex.ru", "Корепанов Михаил");
$mail->AddAddress('hihkoregp@gmail.com', 'Михаил Корепанов');
$mail->Subject = "PHPMailer Тестовое письмо используя mail()";
//устанавливаем кодировку письма
$mail->CharSet = 'UTF-8';
$mail->Body = "новое письмо: ". 'телефон:' . $phone . ' | ' . " от: " . $email . ' | ' . "текст сообщения:" . $text;


if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
         if(!$mail->send()){
           echo "Ошибка отправки письма: " . $mail->ErrorInfo;
         }else{
           echo "Письмо отправленно!";
         }
}else{
   echo "email  указан неверно.";
};
   ?>

