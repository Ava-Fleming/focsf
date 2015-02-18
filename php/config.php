<?php
$a = mysqli_connect('localhost', 'lghs', 'vQ5BKeWDEEXZGbHT', 'lghs_focfs') or die("Error " . mysqli_error($link));
if (!$a){
  echo "The connection fairies have decided that you do not deserve a connection.";
}
