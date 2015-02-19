<?php
require_once('database.php');
require_once('utility.php');
// Check connection
$maxEvents = $_POST["maxEvents"];
$returnedSelection = null;
if ($result=mysqli_query($mysqlConnection, selectTopEvents($maxEvents)))
{
  /*Pull All requested in the stored procedure. */
  $returnedSelection = json_encode(mysqli_fetch_all($result));
  echo $returnedSelection;
  // Free result set
  mysqli_free_result($result);
}
else{
  /*Nothing can be displayed at this current time, please try again later.*/
  echo json_encode(array("ErrorCode"=>$errorCodes.badSelectQueryCode));
}
unset($returnedSelection);
mysqli_close($con);
?>
