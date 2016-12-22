<?php
// the message
$resultado = $_POST['valorCaja1'];
$msg = "First line of text\nSecond line of text" .$resultado;

// send email
mail("facundomm3@gmail.com","My subject",$msg);
?>