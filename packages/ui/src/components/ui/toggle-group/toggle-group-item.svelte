<script lang="ts">
  import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
  import { toggleVariants } from '@repo/ui/components/ui/toggle/index.js';
  import { cn } from '@repo/ui/utils.js';
  import type { ToggleVariants } from '@repo/ui/components/ui/toggle/index.js';
  import { getToggleGroupCtx } from './toggle-group.svelte';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    size,
    variant,
    ...restProps
  }: ToggleGroupPrimitive.ItemProps & ToggleVariants = $props();

  const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
  bind:ref
  data-slot="toggle-group-item"
  data-variant={ctx.variant || variant}
  data-size={ctx.size || size}
  class={cn(
    toggleVariants({
      variant: ctx.variant || variant,
      size: ctx.size || size
    }),
    'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
    className
  )}
  {value}
  {...restProps}
/>
