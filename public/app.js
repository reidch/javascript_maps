var initialise = function(){
	var center = {lat: 52.520007, lng: 13.404954};
	var container = document.getElementById('main-map');
	var mainMap = new MapWrapper(container, center, 15);
	var zoom = 10;
	var museum = {lat: 52.521209, lng: 13.396883};
	var tower = {lat: 52.5208182, lng: 13.4072304};
	var cathedral = {lat: 52.5191021, lng: 13.4007697};
	// mainMap.addMarker(center);
	var museumMarker = mainMap.addMarker(museum);
	var towerMarker = mainMap.addMarker(tower);
	var cathedralMarker = mainMap.addMarker(cathedral);

	mainMap.addClickEvent()

// adds infoWindow1
var infoWindowString1 = '<h3>Pergamon Museum</h3><a href="http://www.smb.museum/en/museums-institutions/pergamonmuseum/home.html">more info</a>'
var infoWindow1 = new google.maps.InfoWindow({
	content: infoWindowString1
})
museumMarker.addListener('click', function(){
		infoWindow1.open(museumMarker.map, museumMarker);
})

// adds infoWindowString2
var infoWindowString2 = '<h3>Berliner Fernsehturm</h3><a href="https://tv-turm.de/en/homepage/">more info</a>'
var infoWindow2 = new google.maps.InfoWindow({
	content: infoWindowString2
})
towerMarker.addListener('click', function(){
		infoWindow2.open(towerMarker.map, towerMarker);
})

// adds infoWindowString3
var infoWindowString3 = '<h3>Berlin Cathedral</h3><a href="http://www.berlinerdom.de/index.php?lang=en">more info</a>'
var infoWindow3 = new google.maps.InfoWindow({
	content: infoWindowString3
})
cathedralMarker.addListener('click', function(){
		infoWindow3.open(cathedralMarker.map, cathedralMarker);
})

// button task
var meetMeButton = document.getElementById('meetMeButton');
meetMeButton.addEventListener('click', mainMap.meetMeInStLouis.bind(mainMap))

// berlinButton
var berlinButton = document.getElementById('berlinButton');
berlinButton.addEventListener('click', mainMap.berlinAttractions.bind(mainMap))

	// var bounceButton = document.getElementById('button-bounce-markers');
	// bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))
}

window.addEventListener('load', initialise);
