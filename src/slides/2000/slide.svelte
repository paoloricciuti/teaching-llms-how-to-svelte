<script module>
	import { defineProps, Transition } from '@animotion/core';
	import think from './thinking.gif';
	import it_works from './it-couls-work.gif';

	export const props = defineProps({
		image: think,
		class: 'fixed inset-0 grid place-items-center'
	});
</script>

<Transition>
	<img
		src={it_works}
		alt="gif of frankenstein jr it could work scene"
		class="w-[80vw] rotate-3 rounded-2xl"
	/>
</Transition>
