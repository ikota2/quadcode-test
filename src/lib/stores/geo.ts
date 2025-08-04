import { writable } from 'svelte/store';

export const countryStore = writable<string | null>(null);
