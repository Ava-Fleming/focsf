<?php
function SelectApprovedEvents(){
  return "CALL SP_SelectApprovedEvents(:maxEvents, :selectedCategory, :minStartDate)";
}
//$errorCodes = new stdClass();
/*Events not can be displayed at this current time, please try again later.*/
//$errorCodes->badSelectQueryCode = 001;
