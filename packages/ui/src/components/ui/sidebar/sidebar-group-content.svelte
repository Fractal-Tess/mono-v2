<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-group-content"
  data-sidebar="group-content"
  class={cn('w-full text-sm', className)}
  {...restProps}
>
  {@render children?.()}
</div>
