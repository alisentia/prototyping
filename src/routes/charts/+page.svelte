<script lang="ts">
	import {onMount} from "svelte";
	import _Chart from "chart.js/auto"
	import "chartjs-adapter-luxon"
	import {DateTime} from "luxon";
	import file from "$lib/data/filtered.txt?raw"

	const exampleData = [
		{
			// x: DateTime.now(),
			x: DateTime.now().toJSDate(),
			y: 0
		}, 
		{
			// x: DateTime.now().plus({days : 1}),
			x: DateTime.now().plus({days : 1}).toJSDate(),
			y: 10
		}, 
		{
			// x: DateTime.now().plus({days : 2}),
			x: DateTime.now().plus({days : 2}).toJSDate(),
			y: 5
		}, 
	]
	let myData = file.trim().split("\n").map((v : any) => {
		// console.log(v);
		const j = JSON.parse(v);
		return {x : new Date(j.data.time), y : j.data.value}
	})

	onMount(() => {
		const data = {
			datasets: [{
				label: 'Scatter Dataset',
				data: myData,
				backgroundColor: 'rgb(255, 99, 132)'
			}],
			};
		new _Chart(
			document.getElementById("chart"),
			{
				data: data,
				options: {
					showLine : true,
					scales: {
						x: {
							
							type: 'time',
							position: 'bottom',
							ticks: {
								// stepSize : 1,
								maxTicksLimit : 10,

								// callback: function(value, index, values){
								// 	// do something with value
								// 	function PAD (input : number) {
								// 		return input.toString().padStart(2, "0")
								// 	}
								// 	const d = new Date(value);
								// 	// return `${PAD(d.getHours())}:${PAD(d.getMinutes())}:${PAD(d.getSeconds())}`;
								// 	return `${PAD(d.getMonth())} ${PAD(d.getFullYear())}`;
								// },
							},
							time : {
								unit : "minute",
								round : "minute",
							},
						},
					},
				},
				type : 'scatter',
			}
		)
	})

</script>

<div>
	This is charts

	<div style="">
		<canvas id="chart" style=""></canvas>
	</div>
	<!-- <div id="chart"></div> -->

</div>
