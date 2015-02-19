<?php
function selectTopEvents($maxEvents){
  return "CALL Select_NewestEvents(". $maxEvents .")";
}
$errorCodes = new stdClass();
/*Events not can be displayed at this current time, please try again later.*/
$errorCodes->badSelectQueryCode = 001;
?>
