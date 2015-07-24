<?php
/*Initialize database environment variables. This may be used in other files.*/
/*isDev should only be on in a development environment.*/
$isDEV = true;
/*isQAS should only be on in a Quality Assurance environment.*/
$isQAS = false;
/*isPRD should only be on in a production environment.*/
$isPRD = false;
/*Decide which development environment as well as add any custom flags to the environment.*/
if($isDEV = true){
  /*Development MySQL Connection*/
$mysqlConnection = mysqli_connect('DATABASEHOST', 'USER', 'PASSWORD', 'DATABASE') or die("Error " . mysqli_error($mysqlConnection));
}
elseif($isQAS = true){
  /*Quality Assurance MySQL Connection*/
  $mysqlConnection = mysqli_connect('DATABASEHOST', 'USER', 'PASSWORD', 'DATABASE') or die("Error " . mysqli_error($mysqlConnection));
}
elseif($isPRD = true) {
  /*Production MySQL Connection*/
  $mysqlConnection = mysqli_connect('DATABASEHOST', 'USER', 'PASSWORD', 'DATABASE') or die("Error " . mysqli_error($mysqlConnection));
}
else{
  echo "An environment was not specified, please select one in the database configuration file."
}
dd
ds
