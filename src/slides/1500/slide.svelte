<script lang="ts" module>
	import { Code, Transition } from '@animotion/core';
	import llms from './llms.png';
	import state_llms from './llms.md?raw';

	let visible = $state(false);
</script>

<img
	src={llms}
	alt="bsky post of when svelte team announced llms.txt from the docs"
	class="h-[80vh] rounded-2xl"
/>

<div
	class="absolute text-4xl"
	{@attach visible &&
		((node) => {
			const pre = node.querySelector('pre');
			pre?.scrollTo(0, 0);
			const to = setInterval(() => {
				if (pre && pre.scrollHeight - pre.scrollTop <= pre.clientHeight + 50) {
					clearInterval(to);
					console.log('cleared');
					return;
				}
				pre?.scrollBy({ top: 500, behavior: 'smooth' });
			}, 1000);
			return () => {
				clearInterval(to);
			};
		})}
>
	<Transition
		undo={() => {
			visible = false;
		}}
		do={() => {
			visible = true;
		}}
		class="transition"
	>
		<Code
			class="max-h-[70vh] max-w-[50vw] -rotate-2 overflow-auto scroll-smooth border border-stone-200"
			lang="markdown"
			theme="github-dark"
			code={state_llms}
		/>
	</Transition>
</div>
