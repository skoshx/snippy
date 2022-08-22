<script lang="ts">
	import { gradients } from "$lib/gradients";
	import { createEventDispatcher } from "svelte";
	import { twMerge } from "tailwind-merge";
	const dispatch = createEventDispatcher();

	export let color = gradients[2];

	const isSelected = (gradient: typeof gradients[number], currentColor: typeof gradients[number]) => gradient.name === currentColor.name;

	function selectColor(newColor: typeof gradients[number]) {
		color = newColor;
		dispatch('pick', newColor);
	}
</script>

<div class="flex flex-wrap">
	{#each gradients as gradient}
	<div on:click={() => selectColor(gradient)} class={twMerge('m-1 px-1 py-1 bg-white dark:bg-gray-800 dark:border-gray-600 rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', isSelected(gradient, color) && 'border-brand-400 hover:border-brand-400 dark:border-brand-400 dark:hover:border-brand-400')}>
		<div class={twMerge('w-4 h-4 rounded-full', gradient.colors, gradient.direction)}></div>
	</div>
	{/each}
</div>
