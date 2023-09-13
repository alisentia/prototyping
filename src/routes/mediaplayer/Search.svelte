<script>
	import { Button, Tabs } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	let isSearching = false;
	let start = {
		date : null,
		time : null,
	};
	let end = {
		date : null,
		time : null
	};
	let summary_id;
	let active = 0;

	async function SEARCH () {
		isSearching = true;
		await new Promise(res => setTimeout(res, 1500));
		dispatch("found", "abc");
		isSearching = false;
	}

	function onActiveChange(event) {
		const { index, key } = event.detail;
		console.log('Tab active', index, key);
		active = index;
	}
</script>


{active}
<Tabs bind:active on:change={onActiveChange}>
    <Tabs.Tab label="Summary ID" tabKey="s">
		<div class="content">
			Summary ID
			<input bind:value={summary_id} type="text" />
			{summary_id}
		</div>
	</Tabs.Tab>
    <Tabs.Tab label="Time" tabKey="t">
		<div class="content">
			Start Time
			<input bind:value={start.date} type="date" />
			<input bind:value={start.time} type="time" />
			{start.date} {start.time}
			End Time
			<input bind:value={end.date} type="date" />
			<input bind:value={end.time} type="time" />
			{end.date} {end.time}
		</div>
	</Tabs.Tab>
</Tabs>
<Button on:click={SEARCH}>Search</Button>
{#if isSearching}
	<div style="position: absolute; height: 100%; width: 100%; background-color: rgba(255, 255, 255, 0.8); top: 0; left: 0">
		<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 3em;">Searching...</div>
	</div>
{/if}

<style>
	.content {
		padding: 1em;
	}
</style>
