<script module lang="ts">
	import { defineProps, Transition } from '@animotion/core';
	import qwen from './cli.mp4';

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
	<video src={qwen} autoplay muted class="h-[90vh] w-[90vw] rounded-2xl object-contain"></video>
{/if}
