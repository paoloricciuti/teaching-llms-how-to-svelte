<script lang="ts">
	import tool from './code.ts.txt?raw';
	import { Action, Code } from '@animotion/core';
	let code: ReturnType<typeof Code>;
	const SCROLL_OFFSET = 96;
</script>

<main
	{@attach (node) => {
		const observer = new MutationObserver(() => {
			const first_line = node.querySelector('.selected') as HTMLElement;
			if (first_line) {
				node.scrollTo({
					top: Math.max(first_line.offsetTop - SCROLL_OFFSET, 0),
					behavior: 'smooth'
				});
			}
		});
		observer.observe(node, {
			subtree: true,
			attributes: true,
			attributeFilter: ['class']
		});
		return () => {
			observer.disconnect();
		};
	}}
	class="overflow-auto rounded-2xl bg-[#24292F]"
>
	<Code bind:this={code} class="max-h-[80vh]" lang="ts" theme="github-dark" code={tool} />
</main>

<Action
	do={() => {
		code.selectLines`5-9`;
	}}
	undo={() => {
		code.selectLines`*`;
	}}
/>

<Action
	do={() => {
		code.selectLines`10-29`;
	}}
	undo={() => {
		code.selectLines`5-9`;
	}}
/>

<Action
	do={() => {
		code.selectLines`11`;
	}}
	undo={() => {
		code.selectLines`10-29`;
	}}
/>

<Action
	do={() => {
		code.selectLines`12-20`;
	}}
	undo={() => {
		code.selectLines`11`;
	}}
/>

<Action
	do={() => {
		code.selectLines`21-28`;
	}}
	undo={() => {
		code.selectLines`12-20`;
	}}
/>

<Action
	do={() => {
		code.selectLines`30-34`;
	}}
	undo={() => {
		code.selectLines`21-28`;
	}}
/>

<Action
	do={() => {
		code.selectLines`33`;
	}}
	undo={() => {
		code.selectLines`30-34`;
	}}
/>

<Action
	do={() => {
		code.selectLines`35-40`;
	}}
	undo={() => {
		code.selectLines`33`;
	}}
/>

<Action
	do={() => {
		code.selectLines`47-64`;
	}}
	undo={() => {
		code.selectLines`35-40`;
	}}
/>

<Action
	do={() => {
		code.selectLines`68-72`;
	}}
	undo={() => {
		code.selectLines`47-64`;
	}}
/>

<Action
	do={() => {
		code.selectLines`74-78`;
	}}
	undo={() => {
		code.selectLines`68-72`;
	}}
/>

<Action
	do={() => {
		code.selectLines`80-84`;
	}}
	undo={() => {
		code.selectLines`74-78`;
	}}
/>

<Action
	do={() => {
		code.selectLines`87-89`;
	}}
	undo={() => {
		code.selectLines`80-84`;
	}}
/>

<Action
	do={() => {
		code.selectLines`90-99`;
	}}
	undo={() => {
		code.selectLines`87-89`;
	}}
/>

<Action
	do={() => {
		code.selectLines`102-104`;
	}}
	undo={() => {
		code.selectLines`90-99`;
	}}
/>

<Action
	do={() => {
		code.selectLines`106-114`;
	}}
	undo={() => {
		code.selectLines`102-104`;
	}}
/>

<style>
	main {
		scroll-padding: 10rem;
		overscroll-behavior: contain;
	}
</style>
