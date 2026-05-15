<script lang="ts">
	import qr from './qr.png';
	import mainmatter from './qr-mainmatter.png';
</script>

<main class="grid grid-cols-2 grid-rows-[1fr_auto] place-items-center gap-10 font-mono text-2xl">
	<img src={qr} alt="QR code to the repository" class="h-[50vh] rounded-4xl" />
	<img src={mainmatter} alt="QR code to the Mainmatter website" class="h-[50vh] rounded-4xl" />
	<a class="rounded-2xl bg-stone-900 p-4 text-stone-300" href="https://svelte.dev/docs/ai"
		>https://svelte.dev/docs/ai</a
	>
	<a class="rounded-2xl bg-stone-900 p-4 text-stone-300" href="https://mainmatter.com"
		>https://mainmatter.com</a
	>
</main>
