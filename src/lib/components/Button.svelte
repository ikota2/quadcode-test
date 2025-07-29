<script lang="ts">
	export let text: string = 'Get started for free';
</script>

<button class="button" type="button">{text}</button>

<style>
	.button {
		background: var(--color-bg-gradient-orange);
		border: 0;
		padding: 10px;
		width: 178px;
		height: 48px;
		border-radius: 14px;
		color: var(--color-white);
		cursor: pointer;
	}
</style>
