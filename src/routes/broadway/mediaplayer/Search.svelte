<script lang="ts">
	import { Button, Tabs } from '@svelteuidev/core';
	import { createEventDispatcher } from "svelte";

	const FOUND_DISPATCH = createEventDispatcher<{found : string}>();

	const s = 'asd';

	let isSearching = false;
	let start = {
		date : null,
		time : null,
	};
	let end = {
		date : null,
		time : null
	};
	let summary_id : string;
	let active = 0;

	function COPY () {
		end = JSON.parse(JSON.stringify(start));
	}
	async function SEARCH () {
		isSearching = true;
		await new Promise(res => setTimeout(res, 1500));
		FOUND_DISPATCH("found", "abc");
		isSearching = false;
	}

	function onActiveChange(event : Event & { detail : {index : number, key : string}}) {
		const { index, key } = event.detail;
		console.log('Tab active', index, key);
		active = index;
	}
</script>


<div class="content">
	Summary ID
	<input bind:value={summary_id} type="text" />
</div>
<hr style="margin: 0 1em;">
<div class="content">
	<table>
		<thead>
			<th>Start Time</th>
			<th></th>
			<th>End Time</th>
		</thead>
		<tbody>
			<tr>
				<td>
					<input bind:value={start.date} type="date" />
					<input bind:value={start.time} type="time" />
				</td>
				<td><Button on:click={COPY}>Copy</Button></td>
				<td>
					<input bind:value={end.date} type="date" />
					<input bind:value={end.time} type="time" />
				</td>
			</tr>
		</tbody>
	</table>
</div>
<div style="padding: 0.5em;">
	<Button on:click={SEARCH}>Search</Button>
	<div class="programs" style="margin-top: 3em;">
		<div class="title">Programs</div>
	</div>
</div>

{#if isSearching}
	<div style="position: absolute; height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0.8); top: 0; left: 0">
		<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 3em;">Searching...</div>
	</div>
{/if}

<style>
	.content {
		padding: 1em;
	}
	.title {
		font-size: 2em;
	}
</style>
