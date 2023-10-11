<script>
	import '@carbon/charts-svelte/styles.css'
	import { ScatterChart } from '@carbon/charts-svelte'
	import * as d3 from "d3";
	import * as _data from "./data"


</script>

<div style="width: 100%; height: auto;">
	<ScatterChart
		data={_data.carbonData}
		options={_data.options}
	/>
</div>
