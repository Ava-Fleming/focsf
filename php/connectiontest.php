<?php
require_once('database.php');
if ($mysqlConnection){
  echo "The connection fairies have decided that you do indeed deserve a connection.";
}
else{
  echo "The connection fairies have decided that you do not deserve a connection.";
}
