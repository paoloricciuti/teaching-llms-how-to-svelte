<script lang="ts">
	import { Action } from '@animotion/core';
	import idea_1 from './idea_1.png';
	import idea_2 from './idea_2.png';
	import idea_3 from './idea_3.png';
	import idea_4 from './idea_4.png';
	import idea_5 from './idea_5.png';
	import idea_6 from './idea_6.png';
	import idea_7 from './idea_7.png';
	import idea_8 from './idea_8.png';
	import idea_9 from './idea_9.png';

	const { initial_not_mcp } = $props();

	let not_mcp = $state(initial_not_mcp);
</script>

<main
	class={[
		'grid grid-cols-3 grid-rows-3 place-items-center gap-5 *:w-[25vw] *:rounded-2xl',
		{ step: not_mcp }
	]}
>
	<img style:--time={Math.random() + 1.5} src={idea_1} alt="idea 1" class="-rotate-2" />
	<img
		class:not_mcp
		style:--time={Math.random() + 1.5}
		src={idea_6}
		alt="idea 6"
		class="-rotate-1"
	/>
	<img style:--time={Math.random() + 1.5} src={idea_2} alt="idea 2" class="rotate-1" />
	<img style:--time={Math.random() + 1.5} src={idea_3} alt="idea 3" class="rotate-3" />
	<img
		class:not_mcp
		style:--time={Math.random() + 1.5}
		src={idea_8}
		alt="idea 8"
		class="-rotate-1"
	/>
	<img style:--time={Math.random() + 1.5} src={idea_9} alt="idea 9" class="-rotate-1" />
	<img
		class:not_mcp
		style:--time={Math.random() + 1.5}
		src={idea_5}
		alt="idea 5"
		class="-rotate-1"
	/>
	<img style:--time={Math.random() + 1.5} src={idea_4} alt="idea 4" class="-rotate-1" />
	<img
		class:not_mcp
		style:--time={Math.random() + 1.5}
		src={idea_7}
		alt="idea 7"
		class="-rotate-1"
	/>
</main>

{#if !initial_not_mcp}
	<Action
		do={() => {
			not_mcp = true;
		}}
		undo={() => {
			not_mcp = false;
		}}
	/>
{/if}

<style>
	img {
		animation: float calc(var(--time) * 1s) linear infinite;
		transition:
			filter 0.5s,
			scale 0.5s;
	}

	.step {
		& > img:not(.not_mcp) {
			scale: 1.2;
			z-index: 100;
		}
	}

	.not_mcp {
		filter: brightness(0.7) grayscale(1) blur(2px);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
