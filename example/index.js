'use strict';

var DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];
var DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

document.getElementById('randomizeData').addEventListener('click', function() {
	myChart3.config.data.datasets[0].data = [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()];
	myChart3.update();
});

var getTotal = function(myChart) {
	var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return `Total: ${sum}`;
}

// Doughnut with multiple lines of text in the center
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
	type: 'pie',
	data: {
		datasets: [{
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
			backgroundColor: DEFAULT_COLORS1,
			label: 'Dataset 1'
		}],
		labels: ['Item one', 'Item two', 'Item three', 'Item four']
	},
	options: {
		responsive: true,
		cutoutPercentage: 85,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: true,
			fontSize: 20,
			text: 'Default - Pie Element Center'
		},
		elements: {
			center: {
				text: '6',
				color: "#252220",
				fontStyle: 'Arial',
				sidePadding: 20,
				minFontSize: 25,
				lineHeight: 25
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
});

// Doughnut with one line of text in the center
ctx = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx, {
	type: 'pie',
	data: {
		datasets: [{
			data: [4000, 3000, 2000, 1000],
			backgroundColor: DEFAULT_COLORS2,
			label: 'Dataset 1'
		}],
		labels: ['Item one', 'Item two', 'Item three', 'Item four']
	},
	options: {
		otherLegend: true,
		cutoutPercentage: 85,
		responsive: true,
		legend: {
			display: false,
			position: 'right',
		},
		title: {
			display: true,
			fontSize: 20,
			text: 'Legend Right'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
});

var myLegendContainer = document.getElementById("legend");
myLegendContainer.innerHTML = chart2.generateLegend();

var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
  legendItems[i].addEventListener("click", legend.legendClickCallback, false);
}

