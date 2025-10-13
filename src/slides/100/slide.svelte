<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import bg from './bg.png';

	export const props = defineProps({
		image: bg,
		class: 'fixed inset-0 grid place-items-center'
	});
</script>

<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h1 class="rounded-2xl bg-stone-800 p-6 font-mono text-6xl">How I taught LLMs how to Svelte</h1>
</Transition>
