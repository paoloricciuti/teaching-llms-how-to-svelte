<script lang="ts">
	import qr from './qr.png';
	import mainmatter from './qr-mainmatter.png';
	import youtube from './qr-youtube.png';
</script>

<main class="grid grid-cols-3 grid-rows-[1fr_auto] place-items-center gap-10 font-mono text-2xl">
	<img src={qr} alt="QR code to the repository" class="h-[50vh] rounded-4xl" />
	<img src={mainmatter} alt="QR code to the Mainmatter website" class="h-[50vh] rounded-4xl" />
	<img src={youtube} alt="QR code to the YouTube playlist" class="h-[50vh] rounded-4xl" />
	<a class="rounded-2xl bg-stone-900 p-4 text-stone-300" href="https://svelte.dev/docs/ai"
		>https://svelte.dev/docs/ai</a
	>
	<a class="rounded-2xl bg-stone-900 p-4 text-stone-300" href="https://mainmatter.com"
		>https://mainmatter.com</a
	>
	<a
		class="rounded-2xl bg-stone-900 p-4 text-stone-300"
		href="https://www.youtube.com/playlist?list=PLdAi-nB9AYut1ixrraX3E96rNNVj3iq4F"
	>
		https://rcc.im/agentic-svelte
	</a>
</main>
