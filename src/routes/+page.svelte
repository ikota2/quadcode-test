<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { countryStore } from '../lib/stores/geo';
  import HeaderSection from '../lib/components/HeaderSection.svelte';
  import ActionSection from '../lib/components/ActionSection.svelte';
  import ImageSection from '../lib/components/ImageSection.svelte';

  export let data: PageData;

  onMount(() => {
    if (data.countryCode) {
      countryStore.set(data.countryCode);
    }
  });
</script>

<header>
  <HeaderSection />
</header>
<main>
  <ActionSection />
  <ImageSection />
</main>
