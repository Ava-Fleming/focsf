function initializeMap(dataForMap){
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
  for(var i = 0; i< dataForMap.length; i++){
    markers.push([dataForMap[i][JSON2Text.location], parseFloat(dataForMap[i][JSON2Text.latitude]),parseFloat(dataForMap[i][JSON2Text.longitude])]);
    infoWindowContent.push('<div class="info_content"><h3>' + dataForMap[i][JSON2Text.eventName] + '</h3><p>' + dataForMap[i][JSON2Text.eventDescription] +'</p><h1>Miku Hatsune was here.</h1></div>');
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
        $('#eventDetails').append('<li>{INPUT DETAILS HERE}</li>');
      }
    })(marker, i));
  }
}
