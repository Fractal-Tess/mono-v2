<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLOlAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLOlAttributes> = $props();
</script>

<ol
  bind:this={ref}
  data-slot="breadcrumb-list"
  class={cn(
    'text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</ol>
