<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.GridRowProps = $props();
</script>

<CalendarPrimitive.GridRow
  bind:ref
  class={cn('flex', className)}
  {...restProps}
/>
