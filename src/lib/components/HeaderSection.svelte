<script lang="ts">
	import { onMount } from 'svelte';
	import { countryCode } from '$lib/stores/geo';
	import Title from './Title.svelte';
	import Subtitle from './Subtitle.svelte';
	import Button from './Button.svelte';

	$: showButton = $countryCode !== 'US';

	onMount(async () => {
		try {
			const response = await fetch('https://ipapi.co/json/');
			const data = await response.json();
			document.cookie = `country_code=${data.country_code}; max-age=604800; path=/`;
			countryCode.set(data.country_code);
		} catch (error) {
			console.error('API failed:', error);
		}
	});
</script>

<section class="header-section">
	<div class="title-wrapper">
		<Title text="Instant access to investing, anytime and anywhere" />
	</div>
	<Subtitle
		text="Start trading top assets, from stocks to metals, in minutes, right from your phone or laptop."
	/>
	<Subtitle
		text="Enjoy a complete trading ecosystem with built-in analytics and educational tools."
	/>
	<div class="button-wrapper">
		{#if showButton}
			<Button />
		{:else if $countryCode === 'US'}
			<Subtitle text="Unfortunately, service is not available in your region" />
		{/if}
	</div>
</section>

<style>
	.header-section {
		max-width: 1000px;
		text-align: center;
		padding: 2rem 1rem;
		margin: 0 auto;
	}
	.button-wrapper {
		height: 50px;
		padding: 32px 0;
	}
	.title-wrapper {
		padding: 32px 0;
	}
</style>
