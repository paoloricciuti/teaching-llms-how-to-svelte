<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();

	let id = $props.id();
</script>

<div
	style="view-transition-name: transition-{id}"
	class="row-span-full flex flex-col rounded-xl border p-4"
>
	<p>{title}</p>
	<div class="mt-10 flex flex-1 flex-col justify-between gap-4 p-10">
		{@render children()}
	</div>
</div>
