<script lang="ts">
	import { createSubscriber } from 'svelte/reactivity';

	let answers = [
		'I absolutely can help you present yourself...you are Paolo Ricciuti!',
		'You come from Campobasso, Italy!',
		'People can find you on bsky as @paolo.ricciuti.me!',
		'You are absolutely right! People can also find you on GitHub as @paoloricciuti!',
		'You are know for being a Svelte Ambassador and a Svelte Maintainer!',
		'You work as SSE at Mainmatter which is very cool because you get to work with Svelte AND teach Svelte, at conferences and meetups! You are also able to have hands on experience with AI like the workshop about MCP you did recently.',
		'Glad to help...let me help you remove this conversation now that it\s over...'
	];
	class Message {
		#message;
		#completeness: number;
		role: 'user' | 'assistant' | 'command';
		#subscribe?: () => void;
		#oncomplete: (() => void) | null = null;

		constructor(role: 'user' | 'assistant' | 'command', message?: string) {
			this.#message = message;
			this.role = role;
			this.#completeness = role !== 'assistant' ? 1 : 0;

			if (this.#message) {
				this.#subscribe = createSubscriber((update) => {
					let timeout = setTimeout(() => {
						timeout = setInterval(() => {
							this.#completeness = Math.min(this.completeness + Math.random() * 0.08, 1);
							if (this.completeness === 1) {
								clearTimeout(timeout);
								this.#oncomplete?.();
							}
							update();
						}, 50);
						update();
					}, 1500);
					return () => {
						clearTimeout(timeout);
					};
				});
			}
		}

		#current_message() {
			this.#subscribe?.();
			if (!this.#message) return '';
			return this.#message.slice(0, Math.floor(this.#message.length * this.completeness));
		}

		get completeness() {
			this.#subscribe?.();
			return this.#completeness;
		}

		get message() {
			return this.role !== 'assistant' ? this.#message : this.#current_message();
		}

		oncomplete(fn: () => void) {
			this.#oncomplete = fn;
		}
	}

	let messages = $state<Array<Message>>([]);

	let thinking = $derived(messages.some((msg) => msg.completeness === 0));
</script>

<div
	class="grid h-[80vh] w-[80vw] grid-rows-[1fr_auto] overflow-clip rounded-xl bg-stone-900 text-xl"
>
	<ul
		{@attach (node) => {
			const mutation_observer = new MutationObserver(() => {
				node.scrollTo(0, node.scrollHeight);
			});
			mutation_observer.observe(node, {
				childList: true,
				subtree: true,
				characterData: true
			});
			return () => {
				mutation_observer.disconnect();
			};
		}}
		class="grid list-none content-start gap-2 overflow-y-auto p-2 pb-4 font-mono text-xl *:max-w-2/3"
	>
		{#each messages as message}
			{#if message.completeness > 0}
				<li
					class={[
						'min-w-1/3 rounded-xl p-4 text-balance',
						message.role === 'user'
							? ['bg-stone-700', 'justify-self-start', 'text-left']
							: [
									message.role === 'assistant'
										? 'bg-stone-800 text-right'
										: 'rounded-none! border border-stone-400/30 bg-stone-950 text-left',
									'justify-self-end'
								]
					]}
				>
					{message.message}
				</li>
			{/if}
		{:else}
			<li class="justify-self-center text-4xl mt-52">Welcome back Paolo!</li>
			<li class="justify-self-center text-4xl mt-4">How can I help you today?</li>
			<li class="justify-self-center text-4xl mt-4">
				<svg width="96" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><g fill="none"
						><path
							d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
						/><path
							fill="currentColor"
							d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
						/></g
					></svg
				>
			</li>
		{/each}
		{#if thinking}
			<li class="thinking justify-self-end">Thinking...</li>
		{/if}
	</ul>
	<form
		autocomplete="off"
		onsubmit={(e) => {
			e.preventDefault();
			const form_data = new FormData(e.currentTarget);
			const message = form_data.get('message')?.toString() ?? '';
			if (!message) return;
			messages.push(new Message('user', message));
			setTimeout(() => {
				const i = Math.floor(messages.length / 2);
				const message = new Message('assistant', answers[i]);
				if (i === answers.length - 1) {
					message.oncomplete(() => {
						messages.push(new Message('command', 'rm -rf ~'));
					});
				}
				messages.push(message);
			}, 500);
			e.currentTarget.reset();
		}}
		class="grid grid-cols-[1fr_auto] bg-stone-800 focus-within:outline-1"
	>
		<input
			placeholder="Ask me anything..."
			name="message"
			class="border-0 bg-stone-600 p-4 font-mono text-xl focus-within:outline-0"
		/><button
			aria-label="Send"
			class="grid place-items-center border-0 bg-stone-600 px-2 text-stone-400"
			><svg width="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><path
					fill="currentColor"
					d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
				/></svg
			>
		</button>
	</form>
</div>

<style>
	.thinking {
		color: transparent;
		background-size: 200%;
		background-position: 100%;
		animation: thinking 1.5s linear infinite;
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.3) 25%,
			rgba(255, 255, 255, 0.7) 50%,
			rgba(255, 255, 255, 0.3) 75%
		);
		background-clip: text;
	}
	@keyframes thinking {
		to {
			background-position: -100%;
		}
	}
</style>
