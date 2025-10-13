<script lang="ts">
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
</script>

<Code
	bind:this={code}
	lang="svelte"
	theme="github-dark"
	codes={[
		`<` +
			`script>
	let { initial, save } = $props();

	let count = $state(initial ?? 0);
	let double = $derived(count * 2);

	$effect(()=>{
		if(save){
			window.localStorage.setItem('count', count);
		}
	});

	$inspect(count);
</script>

<button onclick={()=> count++}>
	{count} * 2 = {double}
</button>`,
		`<` +
			`script>
	export let initial;
	export let save;

	let count = initial ?? 0;
	$: double = count * 2;

	$: if(save){
		window.localStorage.setItem('count', count);
	}

	$: console.log(count);
</script>

<button on:click={()=> count++}>
	{count} * 2 = {double}
</button>`
	]}
/>
