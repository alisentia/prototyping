<script>
	import {onMount} from 'svelte';
	import uplot from "uplot";
	// import test from "$lib/data/ad_filtering.constant.detailed.json?raw";
	import text from "$lib/data/filtered.json?raw"
	
	let items;
	let uplotData;
	onMount(async function () {
		// const response = await fetch("liveread.test.100.json");
		// console.log(uplotData)
		// items = text.split('\n\n');
		
		items = text.split("\n").filter(i => i !== "").map(i => JSON.parse(i))
		uplotData = items.map(i => ({x : i.data.time, y : i.data.value}))
		const data = [
			// items.map(i => (new Date(i.x)).getTime()),
			// items.map(i => i.y),
			[1546300800, 1546387200],    // x-values (timestamps)
			[        35,         71],    // y-values (series 1)
			[        90,         15],    // y-values (series 2)
		]
		const opts = {
			title: "My Chart",
			id: "chart1",
			width: 800,
			height: 600,
			series: [
				{},
				{
					// initial toggled state (optional)
					// show: true,

					// spanGaps: false,

					// in-legend display
					// label: "RAM",
					// value: (self, rawValue) => "$" + rawValue.toFixed(2),

					// series style
					// stroke: "red",
					// width: 1,
					// fill: "rgba(255, 0, 0, 0.3)",
					// dash: [10, 5],
				}
			],
		}
		new uplot(opts, data, document.body);
	});
</script>

<div>
	This is a uplot page

	<div style="width: 80%;">
		<canvas id="chart" style=""></canvas>
	</div>
	<div id="apex"></div>

</div>
