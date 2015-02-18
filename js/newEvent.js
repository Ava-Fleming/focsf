function initialize(mapLatLong) {

  var mapOptions = {
    center: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
  var marker = new google.maps.Marker({
    //position: {lat: mapLatLong.LAT, lng: mapLatLong.LNG},
    map: map
  });
}

  function convertAddressToLatLng() {
    var address = '7007 N Socrum Loop Rd, Lakeland, FL 33809';//document.getElementById("address").value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': address}, function(results, status) {
      if(results[0]  != undefined){

      var location = results[0].geometry.location;

      console.log(results[0]);
      var mapLatLong = Object.create(null);
      mapLatLong.LAT = location.lat() ;
      mapLatLong.LNG = location.lng();
      initialize(mapLatLong);
      alert('LAT: ' + location.lat() + ' LANG: ' + location.lng());
    }
    else{
      alert('Invalid address\nplease check again and make sure its right this time.');
    }
    });
  }
