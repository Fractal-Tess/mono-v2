<script lang="ts">
  import { cn } from '@repo/ui/utils.js';
  import type { WithElementRef } from '@repo/ui/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> = $props();
</script>

<tbody
  bind:this={ref}
  data-slot="table-body"
  class={cn('[&_tr:last-child]:border-0', className)}
  {...restProps}
>
  {@render children?.()}
</tbody>
