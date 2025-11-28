<script module>
	import { defineProps } from '@animotion/core';

	let mcp_session;

	export const props = defineProps({
		async in() {
			const res = await fetch('https://mcp.svelte.dev/mcp', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					jsonrpc: '2.0',
					id: 1,
					method: 'initialize',
					params: {
						protocolVersion: '2025-06-18',
						capabilities: {},
						clientInfo: {
							name: 'v0-client',
							version: '1.0.0'
						}
					}
				})
			});

			const mcp_session = res.headers.get('mcp-session');
		}
	});
</script>

<script lang="ts">
	import { Editor } from '@paoloricciuti/animotion-utils';
	import debounce from 'lodash-es/debounce';

	let code = $state(
		`<` +
			`script lang="ts">
	let count = $state(0);
<` +
			`/script>

<button onclick={() => count++}>
	{count}
</button>`
	);

	let suggestions = $state<{ issues: string[]; suggestions: string[] }>({
		issues: [],
		suggestions: []
	});

	let loading = $state(false);

	async function get_suggestions(code: string) {
		loading = true;
		try {
			const suggestions_text = await fetch('https://mcp.svelte.dev/mcp', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'mcp-session': mcp_session || '' },
				body: JSON.stringify({
					jsonrpc: '2.0',
					id: 2,
					method: 'tools/call',
					params: {
						name: 'svelte-autofixer',
						arguments: {
							desired_svelte_version: 5,
							filename: 'App.svelte',
							code
						}
					}
				})
			}).then((res) => res.text());

			const suggestions = JSON.parse(
				suggestions_text.substring('event: message\ndata: '.length).trim()
			);

			return suggestions.result.structuredContent;
		} finally {
			loading = false;
		}
	}

	const handle_input = debounce(async () => {
		suggestions = await get_suggestions(code);
	}, 1500);
</script>

<main class="grid h-[80vh] w-[90vw] grid-cols-2 gap-4 **:text-xl!">
	<Editor
		language="svelte"
		theme="github-dark"
		bind:value={code}
		oninput={() => {
			handle_input();
		}}
	/>
	<div
		class="relative grid h-full w-full grid-rows-2 gap-4 overflow-hidden rounded-lg border border-[#333] bg-[#0C1116] p-8 text-left font-mono text-white *:overflow-auto *:pb-4"
	>
		{#if loading}
			<div class="absolute inset-0 z-10 grid place-items-center bg-black/50">
				<div
					class="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-transparent border-t-white"
				></div>
			</div>
		{/if}
		<div>
			<h2>Issues</h2>
			<ul>
				{#each suggestions.issues as issue}
					<li>{issue}</li>
				{:else}
					<li>No issues found 🥳</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2>Suggestions</h2>
			<ul>
				{#each suggestions.suggestions as suggestion}
					<li>{suggestion}</li>
				{:else}
					<li>No suggestions found 🥳</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style>
	h2 {
		position: sticky;
		top: 0;
		padding: 0.5rem;
		background-color: #0c1116;
	}
	ul {
		display: grid;
		list-style: none;
		gap: 1rem;
		margin-top: 0.5rem;
	}
	li {
		background-image: linear-gradient(45deg, #15212c, #021527);
		padding: 0.5rem;
		border-radius: 0.25rem;
	}
</style>
