<script lang="ts">
	import { base } from '$app/paths';

	const routes = {
		"home": "/",
		"broadway": "/broadway",
		"charts" : "/charts",
	}
</script>

<div class="app">
	<header>
		{#each Object.entries(routes) as [title, link]}
			<a class="accordion" href={link}>{title}</a>
		{/each}
	</header>
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
		& .menu {
			cursor: pointer;
			height: 3em;
			margin: 1em;
			text-align: center;
			transition-property: transform;
			transition-duration: 0.2s;
			&:hover {
				transform: scale(1.2);
			}
			& .text {
				font-size: 0.9em;
				font-weight: bold;
				text-transform: uppercase;
			}
		}
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
		&.show {
			transform: translateX(0);
		}
	}
</style>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
