
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
            var marker = new google.maps.Marker({ position: addressLocation, map: map ,label:"YOU ARE HERE"});
            var pizzaPizza = '<div id="content">'+ 
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pizza Pizza</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Harveys</b> is a franchised Canadian pizza quick-service restaurant with its headquarters in Toronto, Ontario.[1] Its restaurants are mainly in the province of Ontario while others are located in Quebec, Nova Scotia, and western Canada. Franchises in western Canada are mostly run through Alberta-based subsidiary Pizza 73. It has over 500 locations, including over 150 non-traditional locations.'+
            '<a href="menu2.html">'+
            ' =>Order Now!</a> '+
            '</div>';
            
            var mcd = '<div id="content">'+ 
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">McDonald&#39;s</h1>'+
            '<div id="bodyContent">'+
            '<p><b>McDonald&#39;s</b> is a fast food, limited service restaurant with more than 35,000 restaurants in over 100 countries. It employs more than four million people. McDonald&#39;s serves 70 million customers per day, which is greater than the population of France.'+
            '<a href="menu2.html">'+
            ' =>Order Now!</a> '+
            '</div>';

            var pizzainfo = new google.maps.InfoWindow({
                content: pizzaPizza
              });
            var mcdinfo = new google.maps.InfoWindow({
                content: mcd
              });

            var restaurant1 = new google.maps.Marker({
                position:{lat: 43.608210,lng:-79.650220} ,
                map:map,
                icon:{
                    url: "../img/mcd.png"
                }});
            var restaurant2 = new google.maps.Marker({position:{lat:43.667990,lng:-79.369960},map:map,icon:{
                url: "../img/harveys.png"
            }});
            restaurant2.addListener('click', function() {
                pizzainfo.open(map, restaurant2);
            });
            restaurant1.addListener('click', function() {
                mcdinfo.open(map, restaurant1);
              });
        })
};




