<script>
	import ThemeToggle from './ThemeToggle.svelte';
	let isSideNavShown = false;
</script>

<div
	class:translate-x-[-100%]={!isSideNavShown}
	class:translate-x-[0]={isSideNavShown}
	class={`sidenav absolute z-[200] flex h-screen w-[70vw] items-center justify-center bg-black/80 transition-transform duration-[0.3s] ease-in-out`}
>
	<nav class="flex flex-col gap-10 text-color-5">
		<li><a href="/#">Home</a></li>
		<li><a href="/#">Support</a></li>
		<li><a href="/#">Github</a></li>
		<li><a href="/#">Twitter</a></li>
	</nav>
</div>
<header class="flex h-[100px] w-full items-center justify-center">
	<div
		class="inner flex h-auto w-[95%] items-center justify-between rounded-3xl border border-color-2/10 bg-color-2/10 px-3 py-2 shadow-lg backdrop-blur-[10px]"
	>
		<div class="logo flex items-center gap-5">
			<img class="w-[25px] shadow-lg" src="/favicon.png" alt="Logo" />
			<span>Font Zer0</span>
		</div>
		<nav class="flex gap-10 sm:hidden">
			<li><a href="/#">Home</a></li>
			<li><a href="/#">Support</a></li>
			<li><a href="/#">Github</a></li>
			<li><a href="/#">Twitter</a></li>
		</nav>
		<div class="flex items-center gap-3 sm:hidden">
			<ThemeToggle />
			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				target="_blank"
				class="btn flex h-[30px] w-[110px] items-center justify-center gap-2 rounded-2xl bg-color-3 text-color-5"
				>Login <i class="fa-light fa-arrow-right"></i></a
			>
		</div>

		<div class="hidden items-center gap-3 sm:flex">
			<ThemeToggle />
			<button on:click={() => (isSideNavShown = !isSideNavShown)} class="text-[20px]">
				<i class:fa-bars={!isSideNavShown} class:fa-xmark-large={isSideNavShown} class="fa-regular"
				></i>
			</button>
		</div>
	</div>
</header>
