var ColumnChart = function(){

	var container = document.getElementById("column-chart");

	var chart = new Highcharts.chart({
		chart: {
			type: 'column',
			options3d: {
				enabled: true,
				alpha: 10,
				beta: 25,
				depth: 70
			},
			renderTo: container
		},
		title: {
			text: "Rotten Tomatoes rating"
		},
		plotOptions: {
			column: {
				depth: 25
			}
		},
		series: [{
			name: "Rating",
			data: [95, 97, 93, 96, 100, 94, 78, 91, 92, 75, 97, 89, 87, 41, 92, 95, 83, 89, 100, 92],
			color: "tomato"
		}],
		xAxis: {
			categories: ["Castle in the Sky", "Grave of the Fireflies", "My Neighbor Totoro", "Kiki's Delivery Service", "Only Yesterday", "Porco Rosso", "Pom Poko", "Whisper of the Heart", "Princess Mononoke", "My Neighbors the Yamadas", "Spirited Away", "The Cat Returns", "Howl's Moving Castle", "Tales from Earthsea", "Ponyo", "Arrietty", "From Up on Poppy Hill", "The Wind Rises", "The Tale of the Princess Kaguya", "When Marnie Was There" ],
			labels: {
		skew3d: true,
		style: {
				fontSize: '16px'
				}
			}
		},
		yAxis: {
			min: 0,
			max: 100,
			title: {
				text: " "
			}
		},
	});
};
