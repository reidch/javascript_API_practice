var MapWrapper = function(){
	var container = document.getElementById('main-map');
	this.googleMap = new google.maps.Map(container,{
		center: {lat: 35.696233, lng: 139.570431},
		zoom: 15
	});
}
