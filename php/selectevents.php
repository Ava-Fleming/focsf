<?php
require_once('config.php');

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="SELECT * FROM events";

if ($result=mysqli_query($a,$sql))
  {
  // Fetch one and one row
  while ($row=mysqli_fetch_row($result))
    {
    printf ("%s (%s)\n",$row["personName"],$row["eventName"]);
    }
  // Free result set
  mysqli_free_result($result);
}

mysqli_close($con);
?>
