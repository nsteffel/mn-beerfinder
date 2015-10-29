  window.onload = function() {
    $("#locations").hide();
  }
  
  function getCoords(){
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById("address").value;
  
  geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK)
  {
  var lat_input = results[0].geometry.location.lat();
  var lon_input = results[0].geometry.location.lng();  
  }
  var latlon = new LatLon(lat_input,lon_input);
	
    var locations = document.getElementById('locations');
    var locationList = locations.querySelectorAll('li');
    var locationArray = Array.prototype.slice.call(locationList, 0);
    var distanceArray = [];
 
    locationArray.sort(function(a,b){
      var locA  = a.getAttribute('data-latlon').split(',');
      var locB  = b.getAttribute('data-latlon').split(',');
 
      distA = latlon.distanceTo(new LatLon(Number(locA[0]),Number(locA[1])));
      distB = latlon.distanceTo(new LatLon(Number(locB[0]),Number(locB[1])));
      var distance = distA - distB;
      return distance;
      console.log(distance);
    });
    
    locations.innerHTML = "";
    locationArray.forEach(function(el) {
      locations.appendChild(el);
    });
     $("#locations").quickPagination({pageSize:"4"});;
     $("#locations").show();
     
  });
  }