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
			name: "Films",
			data: [95, 97, 93]
		}],
		xAxis: {
			categories: ['Castle in the Sky', 'Grave of the Fireflies', 'My Neighbor Totoro'],
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
				text: 'Rating out of 100'
			}
		},
	});
};
