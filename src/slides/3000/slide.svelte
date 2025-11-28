<script module lang="ts">
	import { defineProps, Transition } from '@animotion/core';
	import resources_and_prompts from './resources_and_prompts.mp4';
	import copy_prompt from './copy-prompt.png';

	let visible = $state(false);

	export const props = defineProps({
		in() {
			visible = true;
		},
		out() {
			visible = false;
		}
	});
</script>

{#if visible}
	<video
		src={resources_and_prompts}
		autoplay
		muted
		loop
		class="h-[90vh] w-[90vw] rounded-2xl object-contain"
	></video>
{/if}

<Transition class="absolute h-[80vh] rotate-2">
	<img
		src={copy_prompt}
		class="h-full w-full object-contain"
		alt="svelte website to copy a prompt"
	/>
</Transition>
