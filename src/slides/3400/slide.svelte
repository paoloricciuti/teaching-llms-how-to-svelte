<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import pls from './pls.gif';

	export const props = defineProps({
		image: pls,
		class: 'fixed inset-0'
	});
</script>
