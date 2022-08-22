<script lang="ts">
import { gradients } from "$lib/gradients";

	import { twMerge } from "tailwind-merge";


	type SizeType = 'sm' | 'md' | 'lg' | 'xl';
	export let padding: SizeType = 'md';
	export let shadow: SizeType = 'md';
	export let radius: SizeType = 'md';
	export let color: typeof gradients[number] = gradients[0];

	export let imageSrc = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80';

	export const getShadow = (size: SizeType) => `shadow-${size}`;
	export const getRadius = (size: SizeType) => `rounded-${size}`;
</script>

<div class={twMerge(
		padding === 'sm' && 'p-2', padding === 'md' && 'p-4', padding === 'lg' && 'p-8', padding === 'xl' && 'p-16',
		getShadow(shadow), getRadius(radius),
		'bg-blue-200',
		color.direction,
		color.colors
	)}>
	<img class={twMerge(getRadius(radius), getShadow(shadow))} src={imageSrc} alt="" />
</div>
