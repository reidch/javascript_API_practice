var app = function(){
	var url = 'https://ghibliapi.herokuapp.com/films/';
	makeRequest(url, requestComplete);
}

var initialize = function() {
	var mapDiv = document.getElementById('main-map');
	var center = {lat: 35.696233, lng: 139.570431};
	var mainMap = new MapWrapper(mapDiv, center, 15);
	mainMap.addMarker(center);
	mainMap.addClickEvent();

	var bounceButton = document.querySelector('#button-bounce-markers')
	bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))
}

window.addEventListener('load', initialize);

var makeRequest = function(url, callback){
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.addEventListener('load', callback);
	request.send();
}

var requestComplete = function(){
	if(this.status !== 200) return;
	var jsonString = this.responseText;
	var filmList = JSON.parse(jsonString);
	populateSelect(filmList);
}

var populateSelect = function(films){
	var select = document.getElementById('film-select');
	films.forEach(function(film){
		var option = document.createElement('option');
		option.innerText = film.title;
		select.appendChild(option);
	});
	selectChanged(select.selectedIndex, films);
	select.addEventListener('change', function(){
		selectChanged(select.selectedIndex, films);
	}.bind(this));
}

var selectChanged = function(index, films){
	var header = document.getElementById('film-title');
	var date = document.getElementById('release-date');
	var director = document.getElementById('director');
	var description = document.getElementById('description');
	var film = films[index];

	header.innerText = film.title;
	date.innerText = film.release_date;
	director.innerText = film.director;
	description.innerText = film.description;
}

window.addEventListener('load', app);

window.addEventListener('load', function(){
	new ColumnChart();
});
