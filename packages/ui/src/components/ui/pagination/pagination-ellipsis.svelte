<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef, WithoutChildren } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<
    WithElementRef<HTMLAttributes<HTMLSpanElement>>
  > = $props();
</script>

<span
  bind:this={ref}
  aria-hidden="true"
  data-slot="pagination-ellipsis"
  class={cn('flex size-9 items-center justify-center', className)}
  {...restProps}
>
  <EllipsisIcon class="size-4" />
  <span class="sr-only">More pages</span>
</span>
