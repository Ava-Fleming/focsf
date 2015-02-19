$(document).ready(function(){
  serviceCall('POST', PHPServices.selectEvents, {
    "maxEvents": 2
  })
  .done(function (selectedEvents) {
    /*Check if an error code is returned instead of the data.*/
    if(selectedEvents.ErrorCode != errorCodes.badSelectQueryCode){
      initializeMap(selectedEvents);
    }
    else{
      /*Notify the user that an error has occured.*/
      alert("Error:\n" + badSelectQuery);
    }
  });
});
