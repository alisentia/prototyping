<script lang="ts">
	import {onMount} from "svelte"
	import * as d3 from 'd3';
	import * as Luxon from "luxon";
	import rawData from "$lib/data/filtered.json?raw"

	let fruits = ['Apple', 'Orange', 'Mango']
	let items = rawData.split("\n").filter(i => i !== "").map(i => JSON.parse(i))
	let data = items.map(i => ({x : Luxon.DateTime.fromISO(i.data.time).toJSDate(), y : +i.data.value})).slice(0, 100)

	// console.log(data.slice(0, 30).map(d => d.x.getMilliseconds()));
	// const grouped = d3.group(data.slice(0, 30), (d) => d.x);
	// console.log(grouped);
	const rollup = d3.rollup(data.slice(0, 30), rd => d3.mean(rd, id => id.y), d => d.x)
	console.log(rollup);

	const width = 960, height = 500;
	const x_scale = d3.scaleTime().range([0, width])
	const y_scale = d3.scaleLinear().range([0, height])
	x_scale.domain(data.map(d => d.x));
	const n = d3.max(data, (d) => d.y);
	y_scale.domain([0, n as number]);

	onMount(() => {
		d3.select("#chart")
			.selectAll("p")
			.data(fruits)
			.join("p") // the join method
				.attr("class", "d3_fruit")
				.text((d) => d)
		const svg = d3.select("#demo")
			.attr("width", width)
			.attr("height", height);
		svg.append("g")
			.call(d3.axisBottom(x_scale));
		svg.append("g")
			.call(d3.axisLeft(y_scale));
		svg
			.selectAll("rect")
			.data(data)
			.join("rect")
			.attr("class", "bar")
			.attr("x", (d) => x_scale(d.x))
			.attr("y", (d) => y_scale(d.y))
			.attr("width", 10)
			.attr("height", (d) => height - y_scale(d.y));
	})
</script>

<div id="chart"></div>
<svg id="demo"></svg>
