var MapWrapper = function(container, coords, zoom){
	this.googleMap = new google.maps.Map(container,{
		center: coords,
		zoom: zoom
	});
	this.markers = []
}

var icon = {
	url: "totoro.jpg",
	scaledSize: new google.maps.Size(65, 65),
	origin: new google.maps.Point(0, 0),
	anchor: new google.maps.Point(0, 0)
};

MapWrapper.prototype.addMarker = function(coords){
	var marker = new google.maps.Marker({
		position: coords,
		map: this.googleMap,
		icon: icon
	});
	this.markers.push(marker)
}

MapWrapper.prototype.addClickEvent = function(){
	this.googleMap.addListener('click', function(event){
		var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
		this.addMarker(position);
	}.bind(this));
}

MapWrapper.prototype.bounceMarkers = function(){
	this.markers.forEach(function(marker){
		marker.setAnimation(google.maps.Animation.BOUNCE);
	})
}
