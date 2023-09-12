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
	let accordions = [
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
	<!-- <div class="header">
		<div class="menu" on:click={() => showMenu = !showMenu} tabindex="1" role="button">
			<div style="display: flex; height: 3em; justify-content: center; align-items: center;">
				<Burger size="lg" opened={showMenu} />
			</div>
			<div class="text">Menu</div>
		</div>
		<div>
			Some page name change (store???)
		</div>
	</div> -->
	<aside class="vertical-sidebar">
		<div class="menu" on:click={() => showMenu = !showMenu} tabindex="1" role="button">
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
	<main>
		<slot />
	</main>
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
							<a class="accordion" href={l.href}>{l.label}</a>
						{/each}
					</Accordion.Item>
				{/each}
			</Accordion>
		</div>
	</aside>
</div>

<style>
	/* :global(body) {
		margin: 0;		
	} */
	.app {
		display: flex;
		height: 100%;
	}
	.vertical-sidebar {
		border-right: 3px solid lightgrey;
		align-content: center;
		display: flex;
		flex-direction: column;
		& .menu {
			cursor: pointer;
			text-align: center;
			margin: 1em;
			transition-property: transform;
			transition-duration: 0.2s;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
	a.accordion {
		display: block;
		text-align: center;
		padding: 0.25em;
	}
	/* .menu {
		align-content: center;
		display: grid;
		flex-direction: column;
		margin-right: 3em;
		cursor: pointer;
		text-align: center;
		justify-content: center;
		transition-property: transform;
		transition-duration: 0.2s;
		&:hover {
			transform: scale(1.2);
		}
	} */
	.text {
		font-size: 0.9em;
		font-weight: bold;
		text-transform: uppercase;
	}
	.header {
		align-items: center;
		border-bottom: 3px solid black;
		box-sizing: border-box;
		display: flex;
		padding-left: 1em;
		padding-right: 1em;
		padding-bottom: 1em;
		width: 100%;
		& > * {
		}
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
		&.show {
			transform: translateX(0);
		}
	}
</style>
