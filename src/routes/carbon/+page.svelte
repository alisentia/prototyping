<script lang="ts">
	import {onMount} from "svelte"
	import {LineChart} from "@carbon/charts-svelte";
	import type {ScaleTypes, LineChartOptions} from "@carbon/charts-svelte";
	import type {ZoomBarTypes, TimeScaleOptions, TimeIntervalFormats} from "@carbon/charts";
	import '@carbon/charts-svelte/styles.css'
	import * as d3 from 'd3';
	import * as Luxon from "luxon";
	import rawData from "$lib/data/filtered.json?raw"
	let items = rawData.split("\n").filter(i => i !== "").map(i => JSON.parse(i))
	let data = items.map(i => ({group : "group1", x : Luxon.DateTime.fromISO(i.data.time).toJSDate(), y : +i.data.value})).slice(0, 30);

	// console.log(data.slice(0, 30).map(d => d.x.getMilliseconds()));
	const grouped = d3.group(data.slice(0, 30), (d) => d.x);
	console.log(grouped);
	// console.log(data);
	const rollup = d3.rollup(data.slice(0, 30), rd => d3.mean(rd, id => id.y), d => d.x)
	// console.log(rollup);
	// rollup.entries

	const options : LineChartOptions = {
		axes : {
			bottom : {
				mapsTo : "x",
				scaleType : "time" as any,
				title : "time"
			},
			left : {
				mapsTo : "y",
				scaleType : "linear" as any,
				title : "duration"
			}
		},

		curve : "curveMonotoneX",
		tooltip : {
			customHTML : (data) => {
				const date = Luxon.DateTime.fromJSDate(data[0].x)
				const time = date.toFormat("HH:mm:ss:SSS")
				const timeHtml = `
					<li>
						<div class="datapoint-tooltip">
							<div class="label">time</div>
							<p class="value">${time}</div>
						</div>
					</li>
				`
				const valueArray = data.map((d => `
					<li>
						<div class="datapoint-tooltip">
							<div class="label">${d.group}</div>
							<p class="value">${d.y}</div>
						</div>
					</li>
				`));
				const valueHtml = valueArray.join("");
				const mean = d3.mean(data, (d => d.y));
				const meanHtml = `
					<div class="datapoint-tooltip bold">
						<div class="label">Mean</div>
						<p class="value">${mean}</div>
					</div>
				`
				console.log(data);
				return `
					<ul class="multi-tooltip">
						${timeHtml}
						${valueHtml}
						${meanHtml}
					</ul>
				`
			}
		},
		title : "Test",
		zoomBar : {
			top : {
				enabled : true,
				type : "graph_view"
			},
			updateRangeAxis : true,
		},
	}
	console.log(rollup.entries)
	const convertedRollup = Array.from(rollup.entries()).map(a => ({group : "group1", x : a[0], y : a[1]}))

	const testData = [
		{
			group: 'Dataset 1',
			date: new Date(2019, 0, 1),
			value: 50000,
			surplus: 1096766117.5371199
		},
		{
			group: 'Dataset 1',
			date: new Date(2019, 0, 5),
			value: 65000,
			surplus: 364111245.3899733
		},
		{
			group: 'Dataset 1',
			date: new Date(2019, 0, 8),
			value: null,
			surplus: 22643.832095386755
		},
		{
			group: 'Dataset 1',
			date: new Date(2019, 0, 13),
			value: 49213,
			surplus: 335326031.51451236
		},
		{
			group: 'Dataset 1',
			date: new Date(2019, 0, 17),
			value: 51213,
			surplus: 1181557910.0573256
		},
		{
			group: 'Dataset 2',
			date: new Date(2019, 0, 2),
			value: 0,
			surplus: 24435.75360507636
		},
		{
			group: 'Dataset 2',
			date: new Date(2019, 0, 6),
			value: 57312,
			surplus: 1410587558.7622747
		},
		{
			group: 'Dataset 2',
			date: new Date(2019, 0, 8),
			value: 27432,
			surplus: 94915030.56438917
		},
		{
			group: 'Dataset 2',
			date: new Date(2019, 0, 15),
			value: 70323,
			surplus: 698021866.4357998
		},
		{
			group: 'Dataset 2',
			date: new Date(2019, 0, 19),
			value: 21300,
			surplus: 383315270.48192453
		},
		{
			group: 'Dataset 3',
			date: new Date(2019, 0, 1),
			value: 40000,
			surplus: 727857161.1814939
		},
		{
			group: 'Dataset 3',
			date: new Date(2019, 0, 5),
			value: null,
			surplus: 17300.262153195945
		},
		{
			group: 'Dataset 3',
			date: new Date(2019, 0, 8),
			value: 18000,
			surplus: 413913767.79449004
		},
		{
			group: 'Dataset 3',
			date: new Date(2019, 0, 13),
			value: 39213,
			surplus: 365979239.417811
		},
		{
			group: 'Dataset 3',
			date: new Date(2019, 0, 17),
			value: 61213,
			surplus: 583096364.7919639
		},
		{
			group: 'Dataset 4',
			date: new Date(2019, 0, 2),
			value: 20000,
			surplus: 294592300.61722463
		},
		{
			group: 'Dataset 4',
			date: new Date(2019, 0, 6),
			value: 37312,
			surplus: 289596140.54964346
		},
		{
			group: 'Dataset 4',
			date: new Date(2019, 0, 8),
			value: 51432,
			surplus: 194211929.0664789
		},
		{
			group: 'Dataset 4',
			date: new Date(2019, 0, 15),
			value: 25332,
			surplus: 390643412.7298606
		},
		{
			group: 'Dataset 4',
			date: new Date(2019, 0, 19),
			value: null,
			surplus: 12102.039911372853
		}
	]
	console.log(testData);
	const testOptions = {
		title: 'Line (time series)',
		axes: {
			bottom: {
			title: '2019 Annual Sales Figures',
			mapsTo: 'date',
			scaleType: 'time'
			},
			left: {
			mapsTo: 'value',
			title: 'Conversion rate',
			scaleType: 'linear'
			}
		},
		curve: 'curveMonotoneX',
	}
	// onMount(() => {
	// })
</script>


<LineChart 
	data={data}
	options={options}
	style="margin : 1em; width: 95%; height : 550px;"
/>
<!-- <LineChart data={testData} options={testOptions} style="height: 400px; padding:2rem;" /> -->
