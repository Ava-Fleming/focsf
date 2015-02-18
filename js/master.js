$(document).ready(function(){
  var eventDetails = $('#eventDetails');
  $.ajax({
    url: globalServices.selectEvents,
    type: "POST",
    data: {
      "maxEvents": 3
    }
  }).done(function(returnedJSON){
    var latestEvents = JSON.parse(returnedJSON);
    initializeMap(latestEvents);
  });
});
