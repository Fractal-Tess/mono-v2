<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import { cn } from '@repo/ui/utils.js';
  import type { WithoutChild } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend
  bind:ref
  class={cn(
    'data-[fs-error]:text-destructive text-sm font-medium leading-none',
    className
  )}
  {...restProps}
/>
