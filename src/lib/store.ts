import { writable } from 'svelte/store';

const currentTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark';

export const theme = writable(currentTheme);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	}
});
