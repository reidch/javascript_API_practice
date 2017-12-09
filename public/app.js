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
	console.log("Ta dah!");
}
