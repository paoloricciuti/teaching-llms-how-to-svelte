<script module>
	import { defineProps, Transition } from '@animotion/core';
	import think from './thinking.gif';
	import task_force from './task-force.gif';

	export const props = defineProps({
		image: think,
		class: 'fixed inset-0 grid place-items-center'
	});
</script>

<Transition>
	<img src={task_force} alt="task force gif" class="w-[80vw] rotate-3 rounded-2xl" />
</Transition>
