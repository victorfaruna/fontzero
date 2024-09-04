<script>
	let isSideNavShown = false;
</script>

<div
	class:translate-x-[-100%]={!isSideNavShown}
	class:translate-x-[0]={isSideNavShown}
	class={`sidenav absolute z-[200] h-screen w-[70vw] bg-black/50 transition-transform duration-[0.3s] ease-in-out`}
></div>
<header class="flex h-[100px] w-full items-center justify-center">
	<div
		class="inner flex h-auto w-[95%] items-center justify-between rounded-3xl border border-color-2/10 bg-color-2/10 px-3 py-2 shadow-lg backdrop-blur-[10px]"
	>
		<div class="logo flex items-center gap-5">
			<img class="w-[25px]" src="/favicon.png" alt="Logo" />
			<span>Font Zer0</span>
		</div>
		<nav class="flex gap-10 sm:hidden">
			<li><a href="/#">Home</a></li>
			<li><a href="/#">Support</a></li>
			<li><a href="/#">Github</a></li>
			<li><a href="/#">Twitter</a></li>
		</nav>
		<a
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			target="_blank"
			class="btn flex h-[30px] w-[110px] items-center justify-center gap-2 rounded-2xl bg-color-3 text-color-5 sm:hidden"
			>Login <i class="fa-light fa-arrow-right"></i></a
		>
		<button on:click={() => (isSideNavShown = !isSideNavShown)} class="hidden text-[20px] sm:block">
			<i class:fa-bars={!isSideNavShown} class:fa-xmark-large={isSideNavShown} class="fa-regular"
			></i>
		</button>
	</div>
</header>
