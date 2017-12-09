var app = function(){
	var url = 'https://ghibliapi.herokuapp.com/films/';
	makeRequest(url, requestComplete);
}

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
	populateSelect(filmList.results);
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


window.addEventListener('load', app);
