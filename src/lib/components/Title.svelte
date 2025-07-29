<script lang="ts">
	export let text: string = '';
</script>

<h1 class="title">{text}</h1>

<style>
	.title {
		font-size: 36px;
		font-weight: lighter;
	}

	@media (min-width: 480px) {
		.title {
			font-size: 44px;
		}
	}
	@media (min-width: 720px) {
		.title {
			font-size: 56px;
		}
	}
	@media (min-width: 1024px) {
		.title {
			font-size: 72px;
		}
	}
</style>
