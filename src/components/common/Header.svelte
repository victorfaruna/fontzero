<script>
	import { goto } from '$app/navigation';
</script>

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
			<li><a href="/#">Features</a></li>
			<li><a href="/#">Updates</a></li>
			<li><a href="/#">Pricing</a></li>
		</nav>
		<a
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			target="_blank"
			class="btn flex h-[30px] w-[110px] items-center justify-center gap-2 rounded-2xl bg-color-3 text-color-5 sm:hidden"
			>Login <i class="fa-light fa-arrow-right"></i></a
		>
		<div><i class="fa-regular fa-bars hidden text-[20px] sm:block"></i></div>
	</div>
</header>
