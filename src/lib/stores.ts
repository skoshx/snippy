import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const dark = writable(browser && localStorage.getItem('theme') === 'dark' ? true : false);
