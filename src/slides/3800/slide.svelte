<script lang="ts" module>
	import { defineProps, Transition } from '@animotion/core';
	import subagent from './subagent.gif';
	import subagent_docs from './subagent-docs.png';

	export const props = defineProps({
		image: subagent,
		class: 'fixed inset-0'
	});
</script>

<Transition class="absolute top-1/2 left-1/2 -translate-1/2 -rotate-1">
	<img src={subagent_docs} alt="documentation for the subagent" class="h-[80vh] rounded-2xl" />
</Transition>
