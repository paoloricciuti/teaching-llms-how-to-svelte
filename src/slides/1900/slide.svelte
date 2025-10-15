<script lang="ts" module>
	import { Transition } from '@animotion/core';
	import post_1 from './post_1.png';
	import post_2 from './post_2.png';
	import post_3 from './post_3.png';
	import post_4 from './post_4.png';
	import post_5 from './post_5.png';
	import post_6 from './post_6.png';
	import youtube_1 from './youtube_1.png';
	import youtube_2 from './youtube_2.png';
	import reddit_1 from './reddit_1.png';
</script>

<main class="relative grid h-full w-full place-items-center">
	<img src={post_1} alt="post 1" class="w-[80vw] rounded-2xl" />
	<Transition class="absolute -rotate-3">
		<img src={post_2} alt="post 2" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute rotate-2">
		<img src={post_3} alt="post 3" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute -rotate-1">
		<img src={post_4} alt="post 4" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute rotate-3">
		<img src={post_5} alt="post 5" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute -rotate-2">
		<img src={post_6} alt="post 6" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute rotate-1">
		<img src={youtube_1} alt="youtube 1" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute -rotate-3">
		<img src={youtube_2} alt="youtube 2" class="w-[80vw] rounded-2xl" />
	</Transition>
	<Transition class="absolute rotate-1">
		<img src={reddit_1} alt="reddit" class="h-[80vh] rounded-2xl" />
	</Transition>
</main>

<style>
	main {
		:global {
			img {
				filter: blur(2px) brightness(0.7);
				transition: filter 0.5s;
			}
			& > :first-child:not(:has(~ .current-fragment)),
			.current-fragment img {
				filter: unset;
			}
		}
	}
</style>
