var ColumnChart = function(){

	var container = document.getElementById("column-chart");

	var chart = new Highcharts.chart({
		chart: {
			type: 'column',
			renderTo: container
		},
		title: {
			text: "Rotten Tomatoes rating (out of 100)"
		},
		series: [
			{ name: "Films", data: [95, 97, 93] }
		],
		xAxis: {
			categories: ['Castle in the Sky', 'Grave of the Fireflies', 'My Neighbor Totoro']
		},
	});
};
