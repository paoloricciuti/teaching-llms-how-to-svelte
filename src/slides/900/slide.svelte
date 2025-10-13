<script lang="ts">
	import roughjs from 'roughjs';
	import { Tween } from 'svelte/motion';
	import { untrack } from 'svelte';
	import { Action } from '@animotion/core';

	let data = $state([0, 0]);

	const live_data = $derived.by(() => {
		const ret: Array<Tween<number>> = Array.from({ length: data.length });
		for (let i = 0; i < ret.length; i++) {
			ret[i] = untrack(() => Tween.of(() => data[i]));
		}
		return ret;
	});

	function rough(get_val: () => Array<Tween<number>>) {
		const rects: Array<SVGElement> = [];
		const gap = 5;
		const draw_options = {
			fill: '#ff3e00',
			roughness: 0.5,
			preserveVertices: true,
			hachureGap: 1.5
		};
		return (node: SVGSVGElement) => {
			const svg = roughjs.svg(node);
			const back = svg.rectangle(0, 0, 100, 100, {
				fill: 'white',
				fillStyle: 'solid',
				roughness: 0.5,
				preserveVertices: true
			});
			node.appendChild(back);
			let line = svg.line(0, 95, 100, 95);
			node.appendChild(line);
			$effect.pre(() => {
				const val = get_val();
				const width = 80 / val.length;
				for (let i = 0; i < val.length; i++) {
					const value = val[i].current;
					let rect = svg.rectangle(
						10 + i * width + gap / 2,
						90 - value,
						width - gap,
						value,
						draw_options
					);
					if (rects[i]) {
						node.replaceChild(rect, rects[i]);
						rects.splice(i, 1, rect);
					} else {
						node.append(rect);
						rects.push(rect);
					}
				}
			});
		};
	}
</script>

<div class="h-[90vh] p-4">
	<svg
		height="100%"
		class="-rotate-1 transform"
		{@attach rough(() => live_data)}
		viewBox="0 0 100 100"
	></svg>
</div>

<Action
	do={() => {
		data[0] = 20;
		data[1] = 0;
	}}
	undo={() => {
		data[0] = 0;
		data[1] = 0;
	}}
/>

<Action
	do={() => {
		data[1] = 30;
		data[0] = 20;
	}}
	undo={() => {
		data[1] = 0;
		data[0] = 20;
	}}
/>

<Action
	do={() => {
		data[1] = 60;
		data[0] = 20;
	}}
	undo={() => {
		data[1] = 30;
		data[0] = 20;
	}}
/>

<Action
	do={() => {
		data[1] = 110;
		data[0] = 20;
	}}
	undo={() => {
		data[1] = 60;
		data[0] = 20;
	}}
/>
