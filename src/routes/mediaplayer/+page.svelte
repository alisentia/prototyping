<script lang="ts">
	import {Button} from "@svelteuidev/core";
	import video from "$lib/videos/video.mp4";

	import Search from "./Search.svelte";

	let offset = false;
	let hasVideo = false

	function PROCESS_DATA (event) {
		console.log(event.detail);
		hasVideo = true;
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
		<video src={video} controls={true} style="width: 80%;" />
		<Button on:click={() => {offset = false}}>go back</Button>
	</div>
</div>

<style>
	.parent {
		transition-property: transform;
		transition-duration: 0.5s;
		& > {
			height: 100%; 
			width: 100%;
		}
	}
	.offset {
		transform: translateX(-100%);
	}
	
	.search {
		& .title {
			font-size: 2.5em;
			padding: 0.5em;
		}
	}
</style>
