<script lang="ts">
	import {onMount} from "svelte";
	import _Chart from "chart.js/auto"
	import "chartjs-adapter-luxon"
	import {DateTime} from "luxon";
	import file from "$lib/data/filtered.txt?raw"
	import errorsFile from "$lib/data/errors.json?raw"
	import vusFile from "$lib/data/vus.json?raw"

	// import {config} from "./example"
	import {config} from "./multiple"

	onMount(() => {
		new _Chart(
			document.getElementById("chart"),
			config
			// {
			// 	data: data,
			// 	options: {
			// 		showLine : true,
			// 		scales: {
			// 			x: {
							
			// 				type: 'time',
			// 				position: 'bottom',
			// 				ticks: {
			// 					// stepSize : 1,
			// 					maxTicksLimit : 10,

			// 					// callback: function(value, index, values){
			// 					// 	// do something with value
			// 					// 	function PAD (input : number) {
			// 					// 		return input.toString().padStart(2, "0")
			// 					// 	}
			// 					// 	const d = new Date(value);
			// 					// 	// return `${PAD(d.getHours())}:${PAD(d.getMinutes())}:${PAD(d.getSeconds())}`;
			// 					// 	return `${PAD(d.getMonth())} ${PAD(d.getFullYear())}`;
			// 					// },
			// 				},
			// 				time : {
			// 					unit : "minute",
			// 					round : "minute",
			// 				},
			// 			},
			// 		},
			// 	},
			// 	type : 'scatter',
			// }
		)
	})

</script>

<div>
	This is charts

	<div style="width: 80%;">
		<canvas id="chart" style=""></canvas>
	</div>
	<div id="apex"></div>

</div>
