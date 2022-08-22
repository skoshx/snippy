<script lang="ts">
	import { browser } from '$app/env';
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { dark } from '$lib/stores';

	import '../app.css';

	dark.subscribe((isDarkMode) => {
		if (browser) localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		if (browser && !isDarkMode) return document.documentElement.classList.remove('dark');
		if (browser) document.documentElement.classList.add('dark');
	});
</script>

<div class="relative overflow-hidden">
	<!--<Header />-->
	<slot />
	<!--<Background />-->
	<!--<Footer />-->
</div>
