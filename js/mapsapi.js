//call
geocode();
function geocode() {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
        params: {
            address: location,
            key: 'AIzaSyB4jOH2aIzJ2hevgJsniX-OgYWRrHscslQ'
        }
    })
        .then(function (response) {
            //getting longitude and latitude from the data
            let lat = response.data.results[0].geometry.location.lat;
            let lng = response.data.results[0].geometry.location.lng;
            console.log(lat);
            var a = parseFloat(lat);
            var b = parseFloat(lng);
            window.latitude = a;
            window.longitude = b;
            console.log(typeof(latitude));
        })
};

//map
// Initialize and add the map
function initMap() {
    // The address location
    var addressLocation = { lat: latitude1, lng:longitude }; //need to convert the stuff into this lat and lng
    // The map, centered at addressLocation
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: addressLocation });
    // The marker, positioned at address location
    var marker = new google.maps.Marker({ position: addressLocation, map: map });
}


