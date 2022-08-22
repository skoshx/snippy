<script lang="ts">
	import { gradients } from "$lib/gradients";
	import { createEventDispatcher } from "svelte";
	import { twMerge } from "tailwind-merge";
	const dispatch = createEventDispatcher();

	export let color = gradients[2];

	const isSelected = (gradient: typeof gradients[number], currentColor: typeof gradients[number]) => gradient.name === currentColor.name;

	function selectColor<T = unknown>(newColor: T) {
		color = newColor;
		dispatch('pick', newColor);
	}
</script>

<div class="flex flex-wrap">
	{#each gradients as gradient}
	<div on:click={() => selectColor(gradient)} class={twMerge('m-1 px-1 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', isSelected(gradient, color) && 'border-brand-400 hover:border-brand-400')}>
		<div class={twMerge('w-4 h-4 rounded-full', gradient.colors, gradient.direction)}></div>
	</div>
	{/each}
	<!--<div on:click={() => selectSize('sm')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'sm' && 'border-brand-400 hover:border-brand-400')}>sm</div>
	<div on:click={() => selectSize('md')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'md' && 'border-brand-400 hover:border-brand-400')}>md</div>
	<div on:click={() => selectSize('lg')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'lg' && 'border-brand-400 hover:border-brand-400')}>lg</div>
	<div on:click={() => selectSize('xl')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'xl' && 'border-brand-400 hover:border-brand-400')}>xl</div>-->
</div>
