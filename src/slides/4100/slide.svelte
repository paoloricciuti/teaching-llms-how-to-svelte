<script lang="ts" module>
	import { Transition } from '@animotion/core';
	import evals from './evals.png';
	import bench from './bench.png';
	import benchV2 from './bench-v2.png';
</script>

<img src={bench} alt="initial svelte bench from stanislav" class="h-[80vh] rounded-2xl" />

<Transition class="absolute">
	<img src={benchV2} alt="svelte bench v2" class="h-[80vh] -rotate-2 rounded-2xl" />
</Transition>

<Transition class="absolute">
	<img src={evals} alt="evals svelte" class="h-[80vh] rotate-2 rounded-2xl" />
</Transition>
