<script lang="ts">
	import {onMount} from "svelte"
	import * as Plot from '@observablehq/plot';
	import * as d3 from 'd3';
	import * as Luxon from "luxon";

	import text from "$lib/data/filtered.json?raw"
    import Header from "../Header.svelte";

	let data;
	let myDiv : HTMLDivElement

	// const div = document.querySelector("#myplot");
	// div.append(plot);
	
	let items = text.split("\n").filter(i => i !== "").map(i => JSON.parse(i))
	let data2 = items.map(i => ({x : Luxon.DateTime.fromISO(i.data.time).toJSDate(), y : +i.data.value})).slice(0, 100)
	let data3 = [];
	for (let i = 1; i <= 5; i++) {
		for (let j = 1; j <=5; j++) {
			data3.push([i, j])
		}
	}
	data = items.map(i => [(Luxon.DateTime.fromISO(i.data.time)).toJSDate(), i.data.value]).slice(0, 100);
	// data = items.map(i => [i.data.time, i.data.value]).slice(0, 10)
	console.log(data2);
	onMount(() => {
		
		// const plot = Plot.lineY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();
		// myDiv?.append(Plot.dot(data, { tip : "x"}).plot({width : 1000, insetLeft : 15, x : {label : "time"}, y : {label : "amount"}}))
		// myDiv?.append(Plot.dot(data, Plot.groupY({y : "mean"}, { tip : "x"})).plot({width : 1000, insetLeft : 15, x : {label : "time"}, y : {label : "amount"}}))
		myDiv?.append(
			Plot.plot({
				x : {
					label : "time"
				},
				y : {
					label : "duration"
				},
				width : 1000,
				inset : 15,
				title : "test plot",
				marks : [
					// Plot.ruleY([0, 10]),
					Plot.dot(
						data2,
						// {
						// 	x : "x",
						// 	y : "y",
						// 	tip : "x"
						// }
						Plot.groupX(
							{
								// x : "count",
								y : "mode",
								// z : "count",
								tip : "x",
							}, 
							{x : "x"}
						)
					)
				]
			})
		)
	})
	
	$: {
		// myDiv?.append(Plot.rect(data, {x : "test", y :"testy"}).plot())
	}


	let div : HTMLDivElement;
	let testData = d3.ticks(-2, 2, 200).map(Math.sin);
	// console.log(testData);

	function onMousemove(event) {
		const [x, y] = d3.pointer(event);
		testData = testData.slice(-200).concat(Math.atan2(x, y));
	}

	$: {
		div?.firstChild?.remove(); // remove old chart, if any
		div?.append(Plot.lineY(testData).plot({grid: true})); // add the new chart
	}	
</script>

<div bind:this={myDiv}></div>
<div on:mousemove={onMousemove} bind:this={div} role="img"></div>
