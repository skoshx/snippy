// skoshx brand colors
const brand = {
	100: '#ddc6e6',
	200: '#ccabda',
	300: '#bc8fce',
	400: '#ab74c2',
	500: '#9b59b6',
	600: '#8747a1',
	700: '#703b86',
	800: '#592f6a',
	900: '#42234f'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			transitionTimingFunction: {
				'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)'
			},
			colors: { brand },
			backgroundImage: {
				conic: 'conic-gradient(var(--tw-gradient-stops))',
				'conic-to-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
				'conic-to-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
				'conic-to-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
				'conic-to-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
				'conic-to-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
				'conic-to-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
				'conic-to-bl':
				'conic-gradient(at bottom left, var(--tw-gradient-stops))',
				'conic-to-br':
				'conic-gradient(at bottom right, var(--tw-gradient-stops))',
				radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'radial-at-t':
				'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'radial-at-b':
				'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
				'radial-at-l':
				'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'radial-at-r':
				'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'radial-at-tl':
				'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'radial-at-tr':
				'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'radial-at-bl':
				'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'radial-at-br':
				'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
			},
		}
	},
	safelist: [
		// paddings
		'p-2', 'p-4', 'p-8', 'p-16', 'p-32',
		// shadow
		'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl',
		// radius
		'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl',
		// gradients
	],
	plugins: []
};
