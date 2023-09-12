<script lang="ts">
	import { base } from '$app/paths';
	import { Burger } from '@svelteuidev/core';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte'

	let showMenu = false;
</script>

<div class="app">
	<div class="header">
		<div class="menu">
			<div style="display: flex; height: 3em; justify-content: center; align-items: center;">
				<Burger size="lg" opened={showMenu} on:click={() => showMenu = !showMenu} />
			</div>
			<div class="text">Menu</div>
		</div>
		<nav>
			<a href="{base}/">Home</a>
			<a href="{base}/test">Test</a>
		</nav>
	</div>
	<aside class="sidebar" class:show={showMenu}>
		<button on:click={() => showMenu = false}>Close</button>
	</aside>
	<main>
		<slot />
	</main>
</div>

<style>
	/* :global(body) {
		margin: 0;		
	} */
	.menu {
		display: grid;
		flex-direction: column;
		height: 100%;
		max-height: 100%;
		flex-shrink: 1;
		margin-right: 3em;
		cursor: pointer;
		height: 100%;
		text-align: center;
		/* transform: scale(1.2); */
		transition-property: transform;
		transition-duration: 0.2s;
		&:hover {
			transform: scale(1.2);
		}
	}
	.text {
		font-size: 0.9em;
		font-weight: bold;
		text-transform: uppercase;
	}
	.header {
		align-items: stretch;
		box-sizing: border-box;
		display: flex;
		padding-left: 1em;
		padding-right: 1em;
		width: 100%;
		& > * {
		}
	}
	nav  {
		display: flex;
		justify-content: center;
		align-items: center;
		& a {
			padding: 5px;
		}
	}

	.sidebar {
		background-color: rgba(255,255,255,0.7);
		border-right: 2px solid lightgrey;
		position: fixed;
		left: 0;
		top: 0;
		width: 200px;
		height: 100%;
		transform: translateX(-100%);
		transition: transform;
		transition-duration: 0.3s;
		&.show {
			transform: translateX(0);
		}
	}
</style>
