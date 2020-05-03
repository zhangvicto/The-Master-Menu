
let zoomLevel =14;
geocode();
//call geocode and initalize map
function geocode() {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
        params: {
            address: location,
            key: 'AIzaSyB4jOH2aIzJ2hevgJsniX-OgYWRrHscslQ'
        }
    })
        .then(function (response) {
            //getting longitude and latitude from the data
            let lat = parseFloat(response.data.results[0].geometry.location.lat);
            let lng = parseFloat(response.data.results[0].geometry.location.lng);
            console.log(typeof(lat));
            window.lat = lat;
            window.lng = lng;
        })
        .then(
        //map
        // Initialize and add the map
        function initMap() {
            // The address location
            var addressLocation = { lat: this.lat, lng: this.lng }; //need to convert the stuff into this lat and lng


            // The map, centered at addressLocation
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: zoomLevel, center: addressLocation, zoomControl: false });
            // The marker, positioned at address location
            var marker = new google.maps.Marker({ position: addressLocation, map: map });
            var restaurant1 = new google.maps.Marker({
                position:{lat: 43.608210,lng:-79.650220} ,
                map:map,
                icon:{
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
                },
                label:"McDonalds's"
            });
            var restaurant2 = new google.maps.Marker({position:{lat:43.667990,lng:-79.369960},map:map,icon:{
                url: "../img/mcd.png"
            },
            label:"McDonalds's"});

        })
};




