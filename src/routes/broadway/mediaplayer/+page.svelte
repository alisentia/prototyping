<script lang="ts">
	import {Button} from "@svelteuidev/core";
	import video from '$lib/videos/video.mp4';

	import Search from "./Search.svelte";
	import Video from "./Video.svelte";

	let offset = false;
	let hasVideo = false

	function PROCESS_DATA (event : CustomEvent<string>) {
		console.log(event);
		hasVideo = true;
		offset = true;
	}
</script>

<div class="parent" class:offset={offset} style="position: relative; width: 100%; height: 100%;">
	<div class="search">
		<div class="title">
			Search
			<Button disabled={!hasVideo} style="display: inline-block;" on:click={() => offset = true}>Return to video</Button>
		</div>
		<Search on:found={PROCESS_DATA} />
	</div>
	<div style="position: absolute; left: 100%; top: 0; height: 100%; width: 100%;">
		<Video on:back={() => offset = false} />
	</div>
</div>

<style>
	div.parent {
		transition-property: transform;
		transition-duration: 0.5s;
		& > {
			height: 100%; 
			width: 100%;
		}
		& .offset {
			transform: translateX(-100%);
		}
	}
	
	div.search {
		& .title {
			font-size: 2.5em;
			padding: 0.5em;
		}
	}
</style>
