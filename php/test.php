<?php
require_once('database.php');
require_once('utility.php');
  $selectStatement = $mysqlConnection->prepare("SELECT * FROM `Addresses` "); //SelectApprovedEvents());
  //$selectStatement->bindValue(':maxEvents', $maxEvents, PDO::PARAM_INT);
  /*Pull All requested in the stored procedure. */
  $selectStatement->execute();
  echo json_encode($selectStatement->fetchAll(PDO::FETCH_ASSOC));;
