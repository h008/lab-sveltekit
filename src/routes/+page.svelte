<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_ENV } from '$env/static/public';

	export let data;
	console.log(PUBLIC_ENV);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<p>$page</p>
	{JSON.stringify($page)}
</div>
<div>
	<p>data</p>
	{JSON.stringify(data)}
</div>
