<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '@repo/ui/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.GridRowProps = $props();
</script>

<RangeCalendarPrimitive.GridRow
  bind:ref
  class={cn('flex', className)}
  {...restProps}
/>
