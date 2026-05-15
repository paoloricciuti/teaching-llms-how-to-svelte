<script lang="ts">
	import { Action } from '@animotion/core';
	import meme from './meme.png';
	let aspect = $state(470 / 500);
</script>

<Action
	do={() => {
		aspect = 575 / 500;
	}}
	undo={() => {
		aspect = 470 / 500;
	}}
/>

<Action
	do={() => {
		aspect = 750 / 500;
	}}
	undo={() => {
		aspect = 575 / 500;
	}}
/>

<div
	style:view-transition-name="meme"
	style:--aspect={aspect}
	class="relative aspect-[var(--aspect)] h-[50vh] overflow-hidden rounded-2xl transition-[aspect-ratio_500ms]"
>
	<img
		class="absolute right-0 h-full"
		src={meme}
		alt="distracted boyfriend meme with the boyfriend labeled 'devs', the girlfriend labeled 'mcp' and three girls labeles 'cli', 'skills' and 'the next big thing'"
	/>
</div>
