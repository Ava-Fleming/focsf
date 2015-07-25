<?php
require_once('database.php');
require_once('utility.php');
// Check connection
$maxEvents =  1; //$_POST["maxEvents"];
$selectStatement = $mysqlConnection->prepare(SelectApprovedEvents()); //SelectApprovedEvents());
$selectStatement->bindValue(':maxEvents', $maxEvents, PDO::PARAM_INT);
/*Pull All requested in the stored procedure. */
$selectStatement->execute();
echo json_encode($selectStatement->fetchAll(PDO::FETCH_ASSOC));;
