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
		class="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-9 px-[15%] text-center sm:mt-10 sm:h-auto sm:px-[3%]"
	>
		<div>
			<p class="text-[50px] font-semibold sm:text-[30px]">
				Get premium <br /><span class="text-color-3">fontawesome</span> icons for free.
			</p>
			<p class="text-[14px] text-color-2/70 sm:px-5 sm:text-[11px]">
				Font Zero provides free access to all of FontAwesome's premium fonts, allowing you to
				utilize their extensive collection of high-quality icons and symbols at no cost. Perfect for
				enhancing your design projects without any licensing fees.
			</p>
		</div>

		<div
			class="flex w-auto gap-6 rounded-2xl bg-color-2/5 px-5 py-3 shadow-xl sm:px-2 sm:py-1 sm:text-[10px]"
		>
			<code> &lt;script src='{scriptUrl}' /&gt;</code>
			<button on:click={copyScript}>
				<i class:fa-solid={copied} class:fa-light={!copied} class={`fa-copy cursor-pointer`}></i>
			</button>
		</div>
		<button class="rounded-xl bg-color-1/80 px-[30px] py-[10px] text-color-5">Get Started</button>
	</div>
</main>
