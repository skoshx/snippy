<script lang="ts">
	import type { PageData } from './$types';
	import Screenshot from '$lib/components/Screenshot.svelte';
	import SizePicker from '$lib/components/SizePicker.svelte';
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import { gradients } from '$lib/gradients';

	type SizeType = 'sm' | 'md' | 'lg' | 'xl';

	export let padding: SizeType = 'md';
	export let radius: SizeType = 'md';
	export let shadow: SizeType = 'md';
	export let color: typeof gradients[number] = gradients[2];
</script>

<svelte:head>
	<title>Snipsnap | Create beautiful gradient screenshots in seconds</title>
</svelte:head>

<div class="flex">
	<!-- Sidebar -->
	<div class="w-1/3 p-4 space-y-8">
		<div>
			<h1 class="font-semibold text-3xl">Snipsnap</h1>
			<p class="text-lg text-gray-400">Create beautiful gradient screenshots in seconds. Inspired by <a class="text-brand-400 hover:text-brand-600 transition" href="https://twitter.com/farazpatankar13" target="_blank">@FarazPatankar’s</a> <a class="text-brand-400 hover:text-brand-600 transition" href="https://github.com/FarazPatankar/snip-snap" target="_blank">Snipsnap tool.</a></p>
		</div>
		<div class="space-y-2">
			<p class="font-semibold uppercase text-xs tracking-wide">padding</p>
			<SizePicker size={padding} on:pick={(event) => {
				padding = event.detail;
			}} />
		</div>
		<div class="space-y-2">
			<p class="font-semibold uppercase text-xs tracking-wide">radius</p>
			<SizePicker size={radius} on:pick={(event) => {
				radius = event.detail;
			}} />
		</div>
		<div class="space-y-2">
			<p class="font-semibold uppercase text-xs tracking-wide">shadow</p>
			<SizePicker size={shadow} on:pick={(event) => {
				shadow = event.detail;
			}} />
		</div>
		<div class="space-y-2">
			<p class="font-semibold uppercase text-xs tracking-wide">background</p>
			<ColorPicker on:pick={(event) => {
				color = event.detail;
			}} />
		</div>

	</div>

	<div class="w-2/3 h-screen flex items-center justify-center p-4">
		<Screenshot {padding} {shadow} {radius} {color} />
	</div>
</div>

<!-- Designed by skoshx in Helsinki, Finland -->
<p class="text-gray-300 absolute bottom-4 left-1/2 select-none text-center">Designed by <a href="https://skoshx.com" class="hover:text-brand-400 transition">skoshx</a> in Helsinki, Finland</p>
