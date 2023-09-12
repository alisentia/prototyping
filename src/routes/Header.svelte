<script lang="ts">
    import { base } from '$app/paths';
</script>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/test">Test</a>
</nav>

<style>
    nav {
        display: grid;
        grid-auto-rows: 50px;
        width: 100%;
    }
</style>
