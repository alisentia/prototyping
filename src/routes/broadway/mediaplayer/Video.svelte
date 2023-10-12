<script>
	import { Button } from '@svelteuidev/core';
	import video from '$lib/videos/video.mp4';
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function BACK () {
		dispatch("back");
	}
</script>

<div class="container">
	<div class="left">
		<video src={video} controls style="width: 100%;"></video>
	</div>
	<div class="right">
		<Button on:click={BACK}>Back</Button>
	</div>
	<div class="bottom"></div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 80% 20%;
		grid-template-rows: auto 1fr;
		align-items: stretch;
		height: 100%;
		width: 100%;
	}
	.container .bottom {
		padding: 0.5em;
		grid-column: span 2;
	}
	.container .right {
		padding: 1em;
	}
</style>
