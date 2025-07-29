<script lang="ts">
	import HeaderSection from '../lib/components/HeaderSection.svelte';
	import EnhancedImage from '../lib/components/EnhancedImage.svelte';
	import mainImg from '$lib/assets/mainImg.png?enhanced';
</script>

<HeaderSection />
<EnhancedImage
	src={mainImg}
	alt="Trading platform interface"
	sizes="
    (max-width: 393px) 393px,
    (max-width: 480px) 480px,
    (max-width: 720px) 720px,
    (max-width: 1024px) 1024px,
    (max-width: 1366px) 1366px,
    1440px
  "
/>
