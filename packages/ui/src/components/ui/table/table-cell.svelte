<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLTdAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLTdAttributes> = $props();
</script>

<td
  bind:this={ref}
  data-slot="table-cell"
  class={cn(
    'whitespace-nowrap bg-clip-padding p-2 align-middle [&:has([role=checkbox])]:pr-0',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</td>
