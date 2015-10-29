window.onload = function() {
    $("#locations").hide();
    $("#locationsHeader").hide();
    navigator.geolocation.getCurrentPosition(sortResults);
}

function sortResults(position) {
    // Grab current position
    var latlon = new LatLon(position.coords.latitude, position.coords.longitude);
    //Hotwire it for home
    //var latlon = new LatLon(45.0004375, -93.2535929);
    
    //Get locations from the page and insert into an array
    var locations = document.getElementById('locations');
    var locationList = locations.querySelectorAll('li[id^="brew"]');
    var locationArray = Array.prototype.slice.call(locationList, 0);
    var distanceArray = [];
    
    //Get latitude/longitude from the data-latlon attribute and measure against the geolocation position
    locationArray.sort(function(a, b) {
        var locA = a.getAttribute('data-latlon').split(',');
        var locB = b.getAttribute('data-latlon').split(',');
        distA = latlon.distanceTo(new LatLon(Number(locA[0]), Number(locA[1])));
        distB = latlon.distanceTo(new LatLon(Number(locB[0]), Number(locB[1])));
        var distance = distA - distB;
        return distance;
    });
    
    //Rebuild the list, paginate and show it to the nice people
    locations.innerHTML = "";
    locationArray.forEach(function(el) {
        locations.appendChild(el);
    });
    $("#locations").quickPagination({
        pageSize: "6"
    });;
    $("#facebookG").hide();
    $("#locations").show();
    $("#locationsHeader").show();
};