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
	console.log(jsonString);
	var films = JSON.parse(jsonString);
	var film = films[0];
}

window.addEventListener('load', app);
