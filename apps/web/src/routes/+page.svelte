<script lang="ts">
  import * as m from '$lib/paraglide/messages.js';
  import HeroBadge from './_components/HeroBadge.svelte';
  import HeroCTA from './_components/HeroCTA.svelte';
  import HeroDescription from './_components/HeroDescription.svelte';
  import HeroShapes from './_components/HeroShapes.svelte';
  import HeroTitle from './_components/HeroTitle.svelte';
</script>

<svelte:head>
  <title>{m['home.page.title']()}</title>
  <meta name="description" content={m['home.page.meta_description']()} />
</svelte:head>

<div
  class="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
>
  <HeroShapes />

  <div
    class="relative z-10 container mx-auto px-4 md:px-6 motion-preset-slide-up motion-delay-300"
  >
    <div class="max-w-3xl mx-auto text-center">
      <HeroBadge badge={m['home.hero.badge']()} />
      <HeroTitle
        title1={m['home.hero.title1']()}
        title2={m['home.hero.title2']()}
      />
      <HeroDescription />
      <HeroCTA />
    </div>
  </div>
</div>
