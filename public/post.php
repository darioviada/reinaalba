<?php

require_once("class.phpmailer.php");
require_once("class.smtp.php");

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

if( $nombre === '' || $email === '' || $telefono === '' || $mensaje ===''){
    echo json_encode('error-datos');
}
else{

    //ARCHIVO DE DATOS
    $archivo="datos.txt";

    $file=fopen($archivo,"a");
    fwrite($file,$nombre.";".$email.";".$telefono.";".$mensaje."\n");
    fclose($file); 

    // datos para el correo

    $destinatario = "xxxxxx@gmail.com";
    $destinatarioCopia = "xxxxx@gmail.com";

    // Datos de la cuenta de correo utilizada para enviar vía SMTP
    $smtpHost = "mail.xxxxx.com.ar";  // Dominio alternativo brindado en el email de alta 
    $smtpUsuario = "noreply@xxxx.com.ar";  // Mi cuenta de correo
    $smtpClave = "xxxxx";  // Mi contraseña

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Port = 587; 
    $mail->IsHTML(true); 
    $mail->CharSet = "utf-8";

    // VALORES A MODIFICAR //
    $mail->Host = $smtpHost; 
    $mail->Username = $smtpUsuario; 
    $mail->Password = $smtpClave;

    $mail->From = $smtpUsuario; // Email desde donde envío el correo.
    $mail->FromName = "Web Reina Alba";
    $mail->AddAddress($destinatario); // Esta es la dirección a donde enviamos los datos del formulario
    $mail->addCC($destinatarioCopia);
    $mail->Subject = "NUEVA CONSULTA"; // Este es el titulo del email.
    $mensajeHtml = nl2br($mensaje);
    $mail->Body = "
    <html> 

    <body> 

    <h1>Nueva consulta via formulario web</h1>

    <p>Nombre: {$nombre}</p>

    <p>email: {$email}</p>

    <p>telefono: {$telefono}</p>

    <p>Mensaje: {$mensaje}</p>

    </body> 

    </html>

    <br />"; // Texto del email en formato HTML
    $mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
    // FIN - VALORES A MODIFICAR //

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

   $estadoEnvio = $mail->Send(); 
    if($estadoEnvio){
        echo json_encode('enviado');
    } else {
        echo json_encode('error-envio');
    }
    
}

?>
