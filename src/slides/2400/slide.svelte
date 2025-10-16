<script lang="ts" module>
	import { defineProps } from '@animotion/core';
	import it_could_work from './it-could-work.gif';

	export const props = defineProps({
		image: it_could_work,
		class: 'fixed inset-0'
	});
</script>
