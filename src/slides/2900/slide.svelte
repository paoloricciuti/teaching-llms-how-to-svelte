<script module lang="ts">
	import { defineProps, Transition } from '@animotion/core';
	import qwen from './qwen3.mp4';
	import gpt_oss from './gpt-oss.mp4';
	import mistral from './mistral.mp4';

	let visible = $state(false);
	let oss_visible = $state(false);
	let mistral_visible = $state(false);

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
	<video src={qwen} autoplay muted class="h-[90vh] w-[90vw] rounded-2xl object-contain"></video>
{/if}

<Transition
	class="absolute"
	do={() => {
		oss_visible = true;
	}}
	undo={() => {
		oss_visible = false;
	}}
>
	{#if oss_visible}
		<video
			src={gpt_oss}
			autoplay
			muted
			class="h-[90vh] w-[90vw] rotate-2 rounded-2xl object-contain"
		></video>
	{/if}
</Transition>

<Transition
	class="absolute"
	do={() => {
		mistral_visible = true;
	}}
	undo={() => {
		mistral_visible = false;
	}}
>
	{#if mistral_visible}
		<video
			src={mistral}
			autoplay
			muted
			class="h-[90vh] w-[90vw] -rotate-1 rounded-2xl object-contain"
		></video>
	{/if}
</Transition>
