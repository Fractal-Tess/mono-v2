<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getEmblaContext } from './context.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Content/>');
</script>

<div
  data-slot="carousel-content"
  class="overflow-hidden"
  use:emblaCarouselSvelte={{
    options: {
      container: '[data-embla-container]',
      slides: '[data-embla-slide]',
      ...emblaCtx.options,
      axis: emblaCtx.orientation === 'horizontal' ? 'x' : 'y'
    },
    plugins: emblaCtx.plugins
  }}
  onemblaInit={emblaCtx.onInit}
>
  <div
    bind:this={ref}
    class={cn(
      'flex',
      emblaCtx.orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
      className
    )}
    data-embla-container=""
    {...restProps}
  >
    {@render children?.()}
  </div>
</div>
