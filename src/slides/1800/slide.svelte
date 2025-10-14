<script lang="ts" module>
	import { Transition } from '@animotion/core';
	import scott from './scott.png';
	import stanislav from './stanislav.png';
</script>

<img src={scott} alt="github repo of the svelte mcp from scott" class="w-[80vw] rounded-2xl" />
<Transition class="absolute -rotate-3">
	<img
		src={stanislav}
		alt="github repo of the svelte mcp from stanislav"
		class="w-[80vw] rounded-2xl"
	/>
</Transition>
