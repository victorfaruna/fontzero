<script>
	import { theme } from '../../lib/store';
	let currentTheme = $theme;
	$: currentTheme = $theme;
	const handleThemeChange = () => {
		let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		theme.set(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};
</script>

<button on:click={handleThemeChange} class="h-[23px] w-[23px] rounded-md bg-color-1/10 text-color-1"
	><i class={`bi ${currentTheme === 'dark' ? 'bi-moon' : 'bi-sun'}`}></i></button
>
