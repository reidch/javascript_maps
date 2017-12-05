var MapWrapper = function(container, coords, zoom){
	this.googleMap = new google.maps.Map(container, {
		center: coords,
		zoom: zoom
	});
	this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
	var marker = new google.maps.Marker({
		position: coords,
		map: this.googleMap
	});
	this.markers.push(marker);
	return marker;
}

// button task
MapWrapper.prototype.meetMeInStLouis = function(){
		var stLouis = {lat: 38.627003, lng: -90.199404};
	this.googleMap.setCenter(stLouis);
}

MapWrapper.prototype.addClickEvent = function(){
	google.maps.event.addListener(this.googleMap, 'click', function(event){
		this.addMarker({lat:event.latLng.lat(), lng:event.latLng.lng()})
	}.bind(this));
}

// MapWrapper.prototype.bounceMarkers = function(){
// 	this.markers.forEach(function(marker){
// 		marker.setAnimation(google.maps.Animation.BOUNCE)
	// })
// }
