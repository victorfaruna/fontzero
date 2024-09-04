<script>
	import '../app.css';
	import '../google-font.css';
</script>

<slot></slot>

<style>
	:global(body) {
		background-image: url('https://i.pinimg.com/originals/e0/3e/65/e03e655472caaa59379d88a6c3999bd0.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
		margin: 0;
		backdrop-filter: blur(200px); /* Blur the background */
	}
</style>
