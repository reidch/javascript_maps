var initialise = function(){
	var center = {lat: 52.520007, lng: 13.404954};
	var container = document.getElementById('main-map');
	var mainMap = new MapWrapper(container, center, 15);
	var museum = {lat: 52.521209, lng: 13.396883};
	var tower = {lat: 52.5208182, lng: 13.4072304};
	// mainMap.addMarker(center);
	var museumMarker = mainMap.addMarker(museum);
	var towerMarker = mainMap.addMarker(tower);

	mainMap.addClickEvent()

// adds infoWindow1
var infoWindowString1 = "<h1>museum_placeholder</h1>"
var infoWindow1 = new google.maps.InfoWindow({
	content: infoWindowString1
})
museumMarker.addListener('click', function(){
		infoWindow1.open(museumMarker.map, museumMarker);
})

// adds infoWindowString2
var infoWindowString2 = "<h1>tower_placeholder</h1>"
var infoWindow2 = new google.maps.InfoWindow({
	content: infoWindowString2
})
towerMarker.addListener('click', function(){
		infoWindow2.open(towerMarker.map, towerMarker);
})

// takeMeButton
var meetMeButton = document.getElementById('meetMeButton');
meetMeButton.addEventListener('click', mainMap.meetMeInStLouis.bind(mainMap))

	// var bounceButton = document.getElementById('button-bounce-markers');
	// bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

}

window.addEventListener('load', initialise);
