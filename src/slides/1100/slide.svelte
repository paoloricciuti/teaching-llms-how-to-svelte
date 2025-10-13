<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import judging from './judging.gif';

	export const props = defineProps({
		image: judging,
		class: 'fixed inset-0 *:bg-bottom!'
	});
</script>
