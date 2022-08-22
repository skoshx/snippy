<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { twMerge } from "tailwind-merge";


	type SizeType = 'sm' | 'md' | 'lg' | 'xl';

	const dispatch = createEventDispatcher();
	export let size = 'md';

	function selectSize(size: SizeType) {
		size = size;
		dispatch('pick', size);
	}
</script>

<div class="space-x-4 flex">
	<div on:click={() => selectSize('sm')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'sm' && 'border-brand-400 hover:border-brand-400')}>sm</div>
	<div on:click={() => selectSize('md')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'md' && 'border-brand-400 hover:border-brand-400')}>md</div>
	<div on:click={() => selectSize('lg')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'lg' && 'border-brand-400 hover:border-brand-400')}>lg</div>
	<div on:click={() => selectSize('xl')} class={twMerge('px-4 py-1 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition text-lg font-semibold text-gray-600 select-none cursor-pointer', size === 'xl' && 'border-brand-400 hover:border-brand-400')}>xl</div>
</div>
