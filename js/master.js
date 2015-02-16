$(document).ready(function(){
  /*TODO: On load, pull top 10 items close to school*/
  var TESTBTN = $('#TESTBTN');
  var eventDetails = $('#eventDetails');
  function initialize(mapLatLong) {
    /*Sets map options*/
    var mapOptions = {
      center: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
      zoom: 8
    };
    /*Places the google map in the map-canvas with the given options*/
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    /*Inserts a pin or marker in a specfic latitude and longitude.*/
    var marker = new google.maps.Marker({
      position: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
      map: map
    });
  }
  /*Button to throw test code in.*/
  TESTBTN.on('click',function(){
    /*Object containing Latitude and Longitude points*/
    var mapLatLongCordinates = Object.create(null);
    mapLatLongCordinates.LAT = 28.1338075;
    mapLatLongCordinates.LNG = -81.95501380000002;
    initialize(mapLatLongCordinates);
    $.ajax({
      url: 'templates/eventdetails.html'
    }).done(function(returnedHTMLTemplate){
      var holdEventHTMLTemplate = $(returnedHTMLTemplate);
      holdEventHTMLTemplate.find('.eventPersonName').append('rawrs');
      eventDetails.append(holdEventHTMLTemplate);
      alert('hi');
      console.log(returnedHTMLTemplate);
    });
  });

});
