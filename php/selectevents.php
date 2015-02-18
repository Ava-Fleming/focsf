<?php
require_once('config.php');

// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql="CALL Select_NewestEvents(". $_POST["maxEvents"] .")";
$returnedData = null;
if ($result=mysqli_query($a,$sql))
{
  $datas = json_encode(mysqli_fetch_all($result));
  echo $datas;
  // Free result set
  mysqli_free_result($result);
}
else{
  echo "Nothing to do.";
}

mysqli_close($con);
?>
