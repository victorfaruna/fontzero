<script>
	import Header from '../components/common/Header.svelte';
	let scriptUrl = 'https://fontzero.vercel.app/script/embedicons.js';
	let script = `<script src='${scriptUrl}' />`;
	let scriptCopied = false;
	let tagCopied = false;
	const copyScript = () => {
		navigator.clipboard
			.writeText(script)
			.then(() => {
				console.log('Text copied to clipboard!');
			})
			.then(() => (scriptCopied = true));
	};
	const copyTag = () => {
		navigator.clipboard
			.writeText(`<i class='fa-thin fa-star'></i>`)
			.then(() => {
				console.log('Text copied to clipboard!');
			})
			.then(() => (tagCopied = true));
	};
</script>

<Header />
<main class="">
	<div
		class="flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-9 px-[15%] text-center sm:mt-10 sm:h-auto sm:px-[6%]"
	>
		<div>
			<p class="text-[50px] font-semibold sm:text-[30px]">
				Get premium <br /><span class="text-color-3">fontawesome</span> icons for free.
			</p>
			<p class="text-[14px] text-color-2/70 sm:px-5 sm:text-[11px]">
				Font-Zer0 provides free access to all of FontAwesome's premium fonts, allowing you to
				utilize their extensive collection of high-quality icons and symbols at no cost. Perfect for
				enhancing your design projects without any licensing fees.
			</p>
		</div>

		<div
			class="flex w-auto items-center justify-center gap-6 rounded-lg bg-color-2/5 px-5 py-3 shadow-xl sm:min-w-full sm:flex-col sm:text-[10px]"
		>
			<span class="text-color-1/50">embed in &lt;head&gt;&lt;/head&gt tag</span>
			<code>
				&lt;<span class="text-[#d4203e]">script</span>
				<span class="text-[#e8a11e]">src</span>=<span class="text-[#6ba86b]">'{scriptUrl}'</span
				>/<span class="text-[#d4203e]">&gt</span>;</code
			>
			<button
				on:click={copyScript}
				class="w-auto rounded-lg bg-color-1/10 px-3 py-2 active:bg-color-2/20"
			>
				Copy <i
					class:fa-solid={scriptCopied}
					class:fa-light={!scriptCopied}
					class={`fa-copy cursor-pointer`}
				></i>
			</button>
		</div>
		<div
			class="flex w-auto items-center justify-center gap-6 rounded-lg bg-color-2/5 px-5 py-3 shadow-xl sm:min-w-full sm:flex-col sm:text-[10px]"
		>
			<span class="text-color-1/50">Use fontawesome icons normally</span>
			<code>
				&lt;<span class="text-[#d4203e]">i</span> <span class="text-[#e8a11e]">class</span>=<span
					class="text-[#6ba86b]">'fa-thin fa-star'</span
				>&gt;&lt;/<span class="text-[#d4203e]">i</span>&gt;</code
			>
			<button
				on:click={copyTag}
				class="w-auto rounded-lg bg-color-1/10 px-3 py-2 active:bg-color-2/20"
			>
				Copy <i
					class:fa-solid={tagCopied}
					class:fa-light={!tagCopied}
					class={`fa-copy cursor-pointer`}
				></i>
			</button>
		</div>
		<button class="rounded-xl bg-color-1/80 px-[30px] py-[10px] text-color-5">Support !</button>

		<p class="mb-10">
			Created by <a
				href="https://victorfaruna.vercel.app"
				class="underline underline-offset-[4px]"
				target="_blank">Victor Faruna</a
			>
		</p>
	</div>
</main>
