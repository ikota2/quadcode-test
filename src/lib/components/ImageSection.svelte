<script>
  import EnhancedImage from './EnhancedImage.svelte';
  import mainImg from '../assets/mainImg.png?enhanced';
</script>

<section class="image-section">
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
