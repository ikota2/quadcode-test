<script lang="ts">
	export let text: string = '';
</script>

<p class="subtitle">{text}</p>

<style>
	.subtitle {
		color: var(--color-gray);
		font-size: 14px;
		font-weight: lighter;
	}

	@media (min-width: 720px) {
		.subtitle {
			font-size: 16px;
		}
	}
</style>
