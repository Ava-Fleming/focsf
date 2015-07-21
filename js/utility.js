var PHPServices = Object.create(null);
PHPServices.selectEvents = "selectevents";
PHPServices.insertEvents = "php/insertevents.php";

/*Referred return value for json data from PHP*/
/*Column # NAME*/
var JSON2Text = Object.create(null);
/*Column 1 personName*/
JSON2Text.personName = 0;
/*Column 2 eventName*/
JSON2Text.eventName = 1;
/*Column 3 eventDescription*/
JSON2Text.eventDescription = 2;
/*Column 4 location*/
JSON2Text.location = 3;
/*Column 5 latitude*/
JSON2Text.latitude = 4;
/*Column 6 longitude*/
JSON2Text.longitude = 5;
/*Column 7 startTime*/
JSON2Text.startTime = 6;
/*Column 8 endTime*/
JSON2Text.endTime = 7;
/*Column 9 hoursGiven*/
JSON2Text.hoursGiven = 8;
/*Column 10 ExtraNotes*/
JSON2Text.extraNotes = 9;

var errorCodes = Object.create(null);
errorCodes.badSelectQueryCode = 001;
errorCodes.badSelectQuery = "Events not can be displayed at this current time, please try again later.";

function dateTimeParse(dateTimeToParse){
  /*TODO parse date and time. */
  throw "Unimplmented";
}
