<script module lang="ts">
	import { defineProps } from '@animotion/core';
	import { confetti } from '@neoconfetti/svelte';

	let visible = $state(false);

	export const props = defineProps({
		in() {
			setTimeout(() => {
				visible = true;
			}, 500);
		},
		out() {
			visible = false;
		}
	});
</script>

{#if visible}
	<div
		use:confetti={{
			particleCount: 500,
			force: 1,
			stageHeight: 1000
		}}
	></div>
{/if}
