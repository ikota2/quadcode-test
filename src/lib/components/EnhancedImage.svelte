<script lang="ts">
  type EnhancedImage = {
    img: { src: string; w: number; h: number };
    sources: Record<string, string>;
  };
  export let src: EnhancedImage;
  export let alt: string;
  export let sizes: string;
</script>

<enhanced:img {src} {alt} {sizes} />
