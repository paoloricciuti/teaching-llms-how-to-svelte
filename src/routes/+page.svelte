<script lang="ts">
	import { building } from '$app/environment';
	import { page } from '$app/state';
	import { getPresentation } from '@animotion/core';
	import { Slides } from '@paoloricciuti/animotion-utils';
	import { getAbortSignal } from 'svelte';

	const session_id = $derived(building ? null : page.url.searchParams.get('session'));

	$effect(() => {
		if (!session_id) return;
		const presentation = getPresentation();
		const event_source = new EventSource(`/events?session=${session_id}`);
		event_source.addEventListener(
			'next',
			() => {
				presentation.slides.next();
			},
			{ signal: getAbortSignal() }
		);
		event_source.addEventListener(
			'previous',
			() => {
				presentation.slides.prev();
			},
			{ signal: getAbortSignal() }
		);
	});
</script>

<Slides />
