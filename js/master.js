$(document).ready(function(){
  /*TODO: On load, pull top 10 items close to school*/
  var TESTBTN = $('#TESTBTN');

  function initialize(mapLatLong) {
    var mapOptions = {
      center: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    var marker = new google.maps.Marker({
      position: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
      map: map
    });
  }
  /*Button to throw test code in.*/
  TESTBTN.on('click',function(){
    /*Ajax for latest events*/
/*Object containing Latitude and Longitude points*/
var mapLatLongCordinates = Object.create(null);
mapLatLongCordinates.LAT = 28.1338075;
mapLatLongCordinates.LNG = -81.95501380000002;
initialize(mapLatLongCordinates);
  });

});
