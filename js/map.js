function initializeMap(dataForMap){
  console.log(dataForMap);
  var eventDetails = $('#eventDetails');
  /*Sets map options*/
  var mapOptions = {
    /*Center on Lake Gibson High School.*/
    center: {lat: 28.1338075, lng: -81.95501380000002},
    zoom: 11
  };
  /*Insert the inital map.*/
  var map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
  /*Places the google map in the map-canvas with the given options*/
  var markers = Array();
  var infoWindowContent = Array();
  console.log(dataForMap.length);
  for(var i = 0; i< dataForMap.length; i++){
    console.log(dataForMap[i].Address);
    markers.push([dataForMap[i].Location, parseFloat(dataForMap[i].Latitude),parseFloat(dataForMap[i].Longitude)]);
    infoWindowContent.push('<div class="info_content"><h3>' + dataForMap[i].CoordinatorName + '</h3><p>' + dataForMap[i].EventDescription +'</p></div>');
  }
  var infoWindow = new google.maps.InfoWindow(), marker, i;
  // Loop through our array of markers & place each one on the map
  for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
    });
    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i]);
        infoWindow.open(map, marker);
        /*Append text about point on map to event details list.*/
        eventDetails.empty().append('<li>Name: ' + dataForMap[i].CoordinatorName + '</li>');
        eventDetails.append('<li>Event: ' + dataForMap[i].EventTitle + '</li>');
        eventDetails.append('<li>Event Description: ' + dataForMap[i].EventDescription + '</li>');
        eventDetails.append('<li>Event Location: ' + dataForMap[i].Address + '</li>');
        /*TODO: convert to normal time.*/
        eventDetails.append('<li>Event Start Time: ' + dataForMap[i].StartDate + '</li>');
        eventDetails.append('<li>Event End Time: ' + dataForMap[i].EndDate + '</li>');
        //TODO:  Fix hours
        eventDetails.append('<li>Hours Given: ' + 'Tacos' /*dataForMap[i].HoursGiven*/ + '</li>');
        eventDetails.append('<li>Extra Notes: ' + dataForMap[i].ExtraNotes + '</li>');
      }
    })(marker, i));
  }
}
