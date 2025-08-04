<script>
  import Button from './Button.svelte';
  import Subtitle from './Subtitle.svelte';
  import { countryStore } from '../stores/geo';

  $: isLoading = $countryStore === null;
  $: isBlocked = $countryStore === 'US';
  $: isAvailable = $countryStore && $countryStore !== 'US';
</script>

<section class="action-section">
  {#if isLoading}
    <div class="spinner"></div>
  {:else if isBlocked}
    <Subtitle text="Unfortunately, service is not available in your region" />
  {:else if isAvailable}
    <Button />
  {/if}
</section>

<style>
  .action-section {
    min-height: 50px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: center;
    position: relative;
  }
  .spinner::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 20%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid darkorange;
    border-top-color: var(--color-bg-black);
    animation: spinner 1000ms linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
</style>
