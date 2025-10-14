<script lang="ts">
	import { Code, Transition } from '@animotion/core';
	import not_what_i_meant from './not-what-i-meant.gif';
</script>

<main class="relative">
	<Code
		lang="svelte"
		theme="github-dark"
		code={`<` +
			`script lang="ts">
	import { setContext } from 'svelte';

	let input: HTMLInputElement = $state();

	setContext('llm', input);
</script>

<input 
	bind:this={input} 
	placeholder="Type your prompt here..." 
/>
`}
	/>

	<Transition class="absolute -bottom-40 -left-40 rotate-6">
		<img
			src={not_what_i_meant}
			alt="Jim from the office saying that's not what he meant"
			class="w-[30vw] rounded-2xl"
		/>
	</Transition>
</main>
