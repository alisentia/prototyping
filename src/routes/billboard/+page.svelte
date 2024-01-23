<script>
	import {onMount} from "svelte"
	import * as d3 from 'd3';
	import * as Luxon from "luxon";
	import rawData from "$lib/data/filtered.json?raw"

	let items = rawData.split("\n").filter(i => i !== "").map(i => JSON.parse(i))
	let data = items.map(i => ({x : Luxon.DateTime.fromISO(i.data.time).toJSDate(), y : +i.data.value})).slice(0, 100)
</script>

