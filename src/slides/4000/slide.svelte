<script lang="ts" module>
	import { Transition } from '@animotion/core';
	import claude from './claude.png';
	import opencode from './opencode.png';
	import cursor from './cursor.png';
	import copilot from './copilot.png';
	import more_to_come from './more-to-come.gif';
</script>

<img src={claude} alt="claude svelte plugin" class="h-[80vh] rounded-2xl" />
<Transition class="absolute -rotate-3">
	<img src={opencode} alt="opencode svelte plugin" class="h-[80vh] rounded-2xl" />
</Transition>

<Transition class="absolute rotate-2">
	<img src={cursor} alt="cursor svelte plugin" class="h-[80vh] rounded-2xl" />
</Transition>

<Transition class="absolute -rotate-1">
	<img src={copilot} alt="copilot svelte plugin" class="h-[80vh] rounded-2xl" />
</Transition>

<Transition class="absolute">
	<img src={more_to_come} alt="more to come" class="h-[80vh] rounded-2xl" />
</Transition>
