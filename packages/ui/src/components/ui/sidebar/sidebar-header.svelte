<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-header"
  data-sidebar="header"
  class={cn('flex flex-col gap-2 p-2', className)}
  {...restProps}
>
  {@render children?.()}
</div>
