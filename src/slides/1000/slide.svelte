<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<main
	class="grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full *:grid *:place-items-center [&_pre]:border [&_pre]:border-stone-200"
>
	<Code
		lang="svelte"
		theme="github-dark"
		code={`<` +
			`script>
	import { $state, $effect } from 'svelte/runes';

	let count = $state(0);
	$effect(() => {
		console.log('count changed', count);
	});
</script>

<button onclick={() => count++}>
	{count}
</button>`}
	/>

	<Transition class="transition">
		<Code
			class="-rotate-6"
			lang="svelte"
			theme="github-dark"
			code={`<button on:click={()=>console.log("FFS just use onclick")}>
	log my frustration
</button>`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="rotate-2"
			lang="svelte"
			theme="github-dark"
			code={`<` +
				`script>
	let count = $state(0);
	let double = $derived(() => count * 2);
</script>

<button onclick={() => count++}>
	{count} * 2 = {double}
</button>`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="-rotate-4"
			lang="svelte"
			theme="github-dark"
			code={`<` +
				`script>
	let count = $state(0);
</script>

<button onclick={() => count.update((c)=>c+1)}>
	{$count}
</button>`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="rotate-3"
			lang="svelte"
			theme="github-dark"
			code={`<` +
				`script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	{count.$}
</button>`}
		/>
	</Transition>

	<Transition class="transition">
		<Code
			class="-rotate-3"
			lang="svelte"
			theme="github-dark"
			code={`<` +
				`script>
	let count = $state(0);
	let double = $state(0);

	$effect(() => {
		double = count * 2;
	});
</script>

<button onclick={() => count++}>
	{count} * 2 = {double}
</button>`}
		/>
	</Transition>
</main>

<style>
	main {
		:global {
			pre {
				filter: blur(2px) brightness(0.7);
			}
			& > :first-child:not(:has(~ .current-fragment)),
			.current-fragment pre {
				filter: unset;
			}
		}
	}
</style>
