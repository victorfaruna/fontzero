<script>
	import Header from '../components/common/Header.svelte';
	let scriptUrl = 'https://fontzero.vercel.app/script/embedicons.js';
	let script = `<script src='${scriptUrl}' />`;
	let copied = false;
	const copyScript = () => {
		navigator.clipboard
			.writeText(script)
			.then(() => {
				console.log('Text copied to clipboard!');
			})
			.then(() => (copied = true));
	};
</script>

<Header />
<main class="">
	<div
		class="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-9 px-[15%] text-center sm:px-[5%]"
	>
		<div>
			<p class="text-[50px] font-semibold sm:text-[30px]">
				Get all <span class="text-color-3">fontawesome</span> icons for free.
			</p>
			<p class="text-color-2/70 text-[14px] sm:text-[11px]">
				Font Zero provides free access to all of FontAwesome's premium fonts, allowing you to
				utilize their extensive collection of high-quality icons and symbols at no cost. Perfect for
				enhancing your design projects without any licensing fees.
			</p>
		</div>

		<div
			class="bg-color-2/5 flex w-auto gap-6 rounded-2xl px-5 py-3 shadow-xl sm:px-2 sm:py-1 sm:text-[10px]"
		>
			<code> &lt;script src='{scriptUrl}' /&gt;</code>
			<button on:click={copyScript}>
				{#if copied}
					<i class={`fa-solid fa-copy cursor-pointer`}></i>
				{:else}
					<i class={`fa-light fa-copy cursor-pointer`}></i>
				{/if}
			</button>
		</div>
		<button class="bg-color-1/80 text-color-5 rounded-xl px-[30px] py-[10px]">Get Started</button>
	</div>
</main>
