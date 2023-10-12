<script lang="ts">
	import {Button, Tabs} from "@svelteuidev/core";
	import video from '$lib/videos/video.mp4';

	import Search from "./Search.svelte";
	import Video from "./Video.svelte";

	let offset = false;
	let hasVideo = false
	let active = 0;

	function CHANGE_ACTIVE (event : Event & { detail : {index : number, key : string}}) {
		const { index, key } = event.detail;
		console.log('Tab active', index, key);
		active = index;
	}
	function PROCESS_DATA (event : CustomEvent<string>) {
		console.log(event);
		hasVideo = true;
		offset = true;
	}
</script>

<Tabs bind:active on:change={CHANGE_ACTIVE}>
    <Tabs.Tab label="Summary ID" tabKey="s">
		<Search />
	</Tabs.Tab>
    <Tabs.Tab label="Time" tabKey="t">
		<Video />
	</Tabs.Tab>
</Tabs>

<style>
	div.parent {
		transition-property: transform;
		transition-duration: 0.5s;
		height: 100%; 
		width: 100%;
	}
	div.parent .offset {
		transform: translateX(-100%);
	}

	div.search.title {
		font-size: 2.5em;
		padding: 0.5em;
	}
</style>
