<script lang="ts">
	type EnhancedImage = {
		img: { src: string; w: number; h: number };
		sources: Record<string, string>;
	};
	export let src: EnhancedImage;
	export let alt: string;
	export let sizes: string;
</script>

<section class="image-section">
	<enhanced:img {src} {alt} {sizes} />
</section>

<style>
	.image-section {
		width: 100%;
		overflow: hidden;
	}

	.image-section :global(img) {
		width: 100%;
		height: auto;
		max-width: 100%;
		display: block;
	}
</style>
