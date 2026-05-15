<script lang="ts" module>
	import { defineProps, Transition } from '@animotion/core';
	import pat from './pat.gif';
	import not_so_fast from './not-so-fast.gif';

	export const props = defineProps({
		image: pat,
		class: 'fixed inset-0'
	});
</script>

<Transition class="absolute top-1/2 left-1/2 -translate-1/2 -rotate-3">
	<img src={not_so_fast} alt="not so fast" class="w-[50vw] rounded-2xl" />
</Transition>
