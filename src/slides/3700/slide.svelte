<script lang="ts" module>
	import { Transition } from '@animotion/core';
	import skills from './skills.png';
	import docs from './docs.png';
	import skills_docs from './skills-docs.png';
</script>

<img src={skills} alt="skills.sh website with the svelte skills" class="w-[80vw] rounded-2xl" />

<Transition class="absolute rotate-2">
	<img src={docs} alt="documentation for the svelte best practices" class="w-[80vw] rounded-2xl" />
</Transition>

<Transition class="absolute -rotate-3">
	<img src={skills_docs} alt="documentation for the svelte skills" class="w-[80vw] rounded-2xl" />
</Transition>
