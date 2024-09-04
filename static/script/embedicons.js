const urls = [
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css',
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-duotone-solid.css',
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-thin.css',
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-solid.css',
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-regular.css',
	'https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-light.css'
];

urls.forEach((url) => {
	const linkElement = document.createElement('link');
	linkElement.setAttribute('rel', 'stylesheet');
	linkElement.setAttribute('href', url);

	document.head.appendChild(linkElement);
});
