<script lang="ts">
	import { base } from '$app/paths';
	import { Burger } from '@svelteuidev/core';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte'
	import MdClose from 'svelte-icons/md/MdClose.svelte'
	import { Accordion } from '@svelteuidev/core';
	import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte'

	type AccordionMap = {
		links : {
			href : string,
			label : string
		}[],
		title : string,
		value : string
	}

	let showMenu = false;
	let accordions : AccordionMap[] = [
		{
			links : [
				{
					href : "clipTagManager",
					label : "Home",
				},
			],
			title : "Clip Tag Manager",
			value : "clip_tag_manager",
		},
		{
			links : [
				{
					href : "create_ads",
					label : "Create Ads",
				},
				{
					href : "manage_ads",
					label : "Manage Ads",
				},
			],
			title : "Manual Ads",
			value : "manual_ads",
		},
		{
			links : [
				{
					href : "mediaplayer",
					label : "home",
				},
			],
			title : "Media Player",
			value : "media_player",
		},
		{
			links : [
				{
					href : "audio_annotations",
					label : "Audio Annotations",
				},
				{
					href : "content_type_annotation",
					label : "Content Type Annotation",
				},
				{
					href : "video_labels",
					label : "Video Labels",
				},
			],
			title : "ML Tool",
			value : "ml_tool",
		},
		{
			links : [
				{
					href : "noun_corrections",
					label : "Home",
				},
			],
			title : "Noun Corrections",
			value : "noun_corrections",
		},
		{
			links : [
				{
					href : "audio_annotations",
					label : "Home",
				},
			],
			title : "Relevance Info",
			value : "relevance",
		},
		{
			links : [
				{
					href : "schedule_ui",
					label : "home",
				},
			],
			title : "Schedule UI",
			value : "schedule_ui",
		},
	]
</script>

<div class="app">
	<!-- Vertical sidebar -->
	<aside class="vertical-sidebar">
		<div class="menu" on:click={() => showMenu = !showMenu} tabindex="1">
			<div style="display: flex; height: 3em; justify-content: center; align-items: center;">
				<Burger size="lg" opened={showMenu} />
			</div>
			<div class="text">Menu</div>
		</div>
		<div class="menu">
			<div style="display: flex; height: 2em; padding-bottom: 0.5em; justify-content: center; align-items: center;">
				<FaRegUser size="lg" />
			</div>
			<div class="text">Profile</div>
		</div>
	</aside>
	<!-- Main -->
	<main style="overflow-x: hidden; flex-grow: 1; height: 100%;">
		<slot />
	</main>
	<!-- Routing menu -->
	<aside class="navigator" class:show={showMenu}>
		<div style="border-bottom: 2px solid black; display: flex; justify-content: center; align-items: center; padding: 1em;">
			<div style="cursor: pointer; text-align: center;" on:click={() => showMenu = false}>
				<div style="display: flex; height: 2em; justify-content: center; align-items: center;">
					<MdClose size="md"/>
				</div>
				<div class="text" style="font-size: 0.8em;">
					Close
				</div>
			</div>
			<span style="flex: 1; text-align: center; font-size: 2em; font-weight: bold;">Navigation</span>
		</div>
		<div>
			<Accordion>
				{#each accordions as a}
					<Accordion.Item value={a.value}>
						<div slot="control" style="padding: 0.5em 2em;">{a.title}</div>
						{#each a.links as l}
							<a class="accordion" href={"/broadway/" + l.href}>{l.label}</a>
						{/each}
					</Accordion.Item>
				{/each}
			</Accordion>
		</div>
	</aside>
</div>

<style>
	.app {
		display: flex;
		height: 100%;
	}
	.vertical-sidebar {
		border-right: 3px solid lightgrey;
		align-content: center;
		display: flex;
		flex-direction: column;
	}
	.vertical-sidebar .menu {
		cursor: pointer;
		height: 3em;
		margin: 1em;
		text-align: center;
		transition-property: transform;
		transition-duration: 0.2s;
	}
	.vertical-sidebar .menu:hover {
		transform: scale(1.2);
	}
	.vertical-sidebar .menu .text {
		font-size: 0.9em;
		font-weight: bold;
		text-transform: uppercase;
	}
	a.accordion {
		display: block;
		/* text-align: center; */
		padding: 0.25em;
		padding-left: 2.25em;
	}
	.navigator {
		background-color: white;
		border-right: 2px solid lightgrey;
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		transform: translateX(-100%);
		transition: transform;
		transition-duration: 0.3s;
	}
	.navigator.show {
		transform: translateX(0);
	}
</style>
