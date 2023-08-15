<script lang="ts">
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
		});
		console.log('onMount');
	});
	beforeUpdate(() => {
		console.log('beforeUpdate');
	});
	afterUpdate(() => {
		console.log('afterUpdate');
	});
	let scrollY = 0;
	$: scrollStr = scrollY > 10 ? '滚动了50px' : '<50px';
</script>

<div>
	<h1>Layout</h1>
	{scrollStr}
	<slot />
</div>
<head>
	<style>
		.svelte {
			background-color: #f0f0f0;
		}
	</style>
</head>
<svelte:body class="svelte" />
