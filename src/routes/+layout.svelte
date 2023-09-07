<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />
	<aside></aside>
	<main>
		<slot />
	</main>
</div>
