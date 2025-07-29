<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef, WithoutChildren } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="skeleton"
  class={cn('bg-accent animate-pulse rounded-md', className)}
  {...restProps}
></div>
