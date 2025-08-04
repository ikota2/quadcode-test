<script>
  import Title from './Title.svelte';
  import Subtitle from './Subtitle.svelte';
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
</section>

<style>
  .header-section {
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
  }
  .title-wrapper {
    padding: 32px 0;
  }
</style>
