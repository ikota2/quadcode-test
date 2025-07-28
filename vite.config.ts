import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default {
	plugins: [
		enhancedImages(),
		sveltekit()
	]
};
