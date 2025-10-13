<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import ai from './ai.gif';

	export const props = defineProps({
		image: ai,
		class: 'fixed inset-0 *:bg-top!'
	});
</script>
